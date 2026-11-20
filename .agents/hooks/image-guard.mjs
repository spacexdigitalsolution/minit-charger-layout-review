#!/usr/bin/env node
/**
 * image-guard.mjs
 * PreToolUse hook protecting image assets and enforcing human approval gating.
 *
 * NOTE: Regex command and content inspection is an automated heuristic and safety guardrail;
 * it cannot catch every possible bypass. The always-on rule, repository conventions,
 * and immutable on-disk artifacts in site/image-approvals/ remain the primary binding policies.
 */

import fs from "node:fs";

function readStdin() {
  try {
    return fs.readFileSync(0, "utf-8");
  } catch {
    return "";
  }
}

function respond(decision, reason) {
  const payload = { decision };
  if (reason) payload.reason = reason;
  console.log(JSON.stringify(payload));
  process.exit(0);
}

try {
  const input = readStdin().trim();
  if (!input) {
    respond("allow");
  }

  let data;
  try {
    data = JSON.parse(input);
  } catch (parseErr) {
    respond("ask", `image-guard error: malformed input - ${parseErr.message}`);
  }

  const toolName = data?.toolCall?.name || "";
  const toolArgs = data?.toolCall?.args || {};

  // 1. FILE TOOLS (read_file, view_file, write_file, edit_file, etc.)
  const targetPath = (
    toolArgs.Path ||
    toolArgs.TargetFile ||
    toolArgs.AbsolutePath ||
    ""
  ).replace(/\\/g, "/");

  // Deny file-view/read tools on image extensions anywhere under public/
  const isReadTool = /^(read_file|view_file)$/i.test(toolName);
  if (isReadTool) {
    const isImageFile = /\.(png|jpe?g|webp|avif|gif|svg|ico)$/i.test(targetPath);
    const isUnderPublic = /(?:^|\/)site\/public\/|(?:^|\/)public\//i.test(targetPath);
    if (isImageFile && isUnderPublic) {
      respond(
        "deny",
        `Directly opening, viewing, or reading image files (${targetPath}) is strictly forbidden by repository policy. Images may only be verified via read-only existence and dimension checks.`
      );
    }
  }

  // Guard file write / edit tools
  const isWriteTool = /^(write_file|edit_file|write_to_file|replace_file_content|multi_replace_file_content)$/i.test(toolName);
  if (isWriteTool) {
    const content = toolArgs.Content || toolArgs.Replacement || "";

    // A. Guard artifact status escalation in image-approvals
    if (targetPath.includes("image-approvals/")) {
      const statusApproved = /(?:slot-status|status|\*\*Slot Status\*\*)\s*:\s*[`"']*approved[`"']*/i;
      const fileApproved = /(?:approved-source-file|\*\*Approved Source File\*\*)\s*:\s*(?!null\b|undefined\b)[`"']*[^\s\n`"']+/i;
      if (statusApproved.test(content) || fileApproved.test(content)) {
        respond(
          "force_ask",
          `Elevation of image slot status to approved detected in artifact (${targetPath}). Explicit user confirmation is required.`
        );
      }
    }

    // B. Guard code writes adding/modifying image paths in app/, data/, or manifest.json
    const isCodeOrManifest = /(?:site\/app\/|site\/data\/|site\/public\/assets\/manifest\.json)/i.test(targetPath);
    if (isCodeOrManifest) {
      const imagePathPattern = /(?:heroImage|cardImage|thumbnailImage|bgImage|poster)\s*:\s*["'][^"']+\.(?:webp|png|jpe?g|svg|avif)["']|<SmartImage[^>]*src=["'][^"']+\.(?:webp|png|jpe?g|svg|avif)["']/i;
      if (imagePathPattern.test(content)) {
        respond(
          "force_ask",
          `Writing or wiring an image path in codebase detected (${targetPath}). Explicit user confirmation is required.`
        );
      }
    }
  }

  // 2. SHELL COMMANDS (run_command)
  if (toolName === "run_command") {
    const commandLine = toolArgs.CommandLine || "";

    const touchesAssets = /(?:site\/public\/|public\/)?assets(?:-src)?/i.test(commandLine);
    const sweepOrMutate = /\b(ls|dir|find|gci|Get-ChildItem|tree|cp|mv|copy|move|Copy-Item|Move-Item|sharp|magick|convert|ffmpeg|assets-optimize)\b/i.test(commandLine);

    if (touchesAssets && sweepOrMutate) {
      respond(
        "deny",
        `Shell commands that list, search, copy, move, convert, or optimize assets (${commandLine}) are strictly forbidden by repository policy.`
      );
    }

    // Allow narrow read-only existence check or dimension query on one exact named path
    // Any wider shell commands targeting asset directories must force ask
    if (touchesAssets && !sweepOrMutate) {
      const isNarrowCheck = /\b(existsSync|statSync|image-size|Get-Item)\b/i.test(commandLine) && !/[*?\[\]]/.test(commandLine);
      if (!isNarrowCheck) {
        respond(
          "force_ask",
          `Shell command accessing asset directories detected (${commandLine}). Explicit user confirmation is required.`
        );
      }
    }
  }

  respond("allow");
} catch (err) {
  respond("ask", `image-guard error: ${err.message || String(err)}`);
}
