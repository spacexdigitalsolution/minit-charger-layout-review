#!/usr/bin/env node
/**
 * edit-guard.mjs
 * PreToolUse hook for `run_command`.
 *
 * NOTE: Regex command inspection is a heuristic and acts as a safety guardrail;
 * the repository AGENTS.md conventions remain the primary binding policy.
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

  const data = JSON.parse(input);
  const commandLine =
    data?.toolCall?.args?.CommandLine ||
    data?.args?.CommandLine ||
    "";

  if (!commandLine) {
    respond("allow");
  }

  // 1. Deny run_command reads of .env* files (allowing .env.example)
  // Matches commands like cat, less, more, head, tail, grep, type, Get-Content, gc targeting .env*
  const envReadPattern = /\b(cat|less|more|head|tail|grep|rg|type|Get-Content|gc)\b[^\n|;&]*?(?:\s|[\\/])\.env(?!\.example\b)(?:\.[a-zA-Z0-9_\-]+)?(?:\s|$|[;&|])/i;
  if (envReadPattern.test(commandLine)) {
    respond(
      "deny",
      `Reading environment files (${commandLine}) via shell commands is strictly forbidden to prevent credential exposure. Only .env.example may be inspected.`
    );
  }

  // 2. Deny in-place or scripted file modifications
  const inPlacePatterns = [
    /\bsed\s+-[^\s]*i\b/i,
    /\bperl\s+-[^\s]*i\b/i,
    /\bawk\s+.*-i\s+inplace\b/i,
    /\bjscodeshift\b/i,
    /\bcodemod\b/i,
  ];

  for (const pattern of inPlacePatterns) {
    if (pattern.test(commandLine)) {
      respond(
        "deny",
        `In-place or scripted file edit commands are strictly forbidden by AGENTS.md (${commandLine}). Modify files using native editor tools (write_to_file, replace_file_content) only.`
      );
    }
  }

  // 3. Deny shell redirection and tee targeting repo files (allow 2>&1, > /dev/null, > $null, > nul)
  const redirectPattern = /(?:^|\s)(?:>>?|cat\s*<<)\s*(?!nul\b|\$null\b|\/dev\/null\b|&1\b|&2\b)[^\s&|;]+/i;
  if (redirectPattern.test(commandLine)) {
    respond(
      "deny",
      `Shell redirection into repository files is forbidden by AGENTS.md (${commandLine}). Use native editor tools instead.`
    );
  }

  const teePattern = /\btee\s+(?!-a\s+\/dev\/null\b|-a\s+nul\b|\/dev\/null\b|nul\b)[^\s&|;]+/i;
  if (teePattern.test(commandLine)) {
    respond(
      "deny",
      `Piping output to files via 'tee' is forbidden by AGENTS.md (${commandLine}). Use native editor tools instead.`
    );
  }

  // 4. Force ask for destructive commands (using 'force_ask')
  const destructivePatterns = [
    /\brm\s+-[^\s]*r[^\s]*f\b/i,
    /\brmdir\s+\/s\b/i,
    /\bdel\s+\/f\b/i,
    /\bgit\s+reset\s+--hard\b/i,
    /\bgit\s+clean\s+-[^\s]*f\b/i,
    /\bgit\s+push\s+.*--force\b/i,
    /\b(DROP|TRUNCATE)\s+(TABLE|DATABASE)\b/i,
    /\bprisma\s+migrate\s+(reset|deploy)\b/i,
    /\bvercel\s+(--prod|deploy)\b/i,
  ];

  for (const pattern of destructivePatterns) {
    if (pattern.test(commandLine)) {
      respond(
        "force_ask",
        `Destructive command detected (${commandLine}). Explicit user confirmation is required.`
      );
    }
  }

  // Safe command
  respond("allow");
} catch (err) {
  // Fail open to ask on malformed input or internal error
  respond("ask", `edit-guard error: ${err.message || String(err)}`);
}
