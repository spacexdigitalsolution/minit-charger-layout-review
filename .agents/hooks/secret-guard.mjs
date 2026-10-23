#!/usr/bin/env node
/**
 * secret-guard.mjs
 * PreToolUse hook for file editing and viewing tools:
 * write_to_file, replace_file_content, multi_replace_file_content, view_file.
 *
 * NOTE: Regex path inspection is a heuristic and safety guardrail;
 * repository secret guidelines in AGENTS.md remain the primary policy.
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
  const targetPath = (
    data?.toolCall?.args?.TargetFile ||
    data?.toolCall?.args?.AbsolutePath ||
    data?.args?.TargetFile ||
    data?.args?.AbsolutePath ||
    ""
  ).replace(/\\/g, "/");

  if (!targetPath) {
    respond("allow");
  }

  // Allow .env.example
  if (targetPath.endsWith(".env.example")) {
    respond("allow");
  }

  // Deny .env, .env.local, .env.production, .env.*
  if (/(?:^|\/)\.env(?:\.[a-zA-Z0-9_\-]+)?$/i.test(targetPath)) {
    respond(
      "deny",
      `Access to environment configuration files (${targetPath}) is strictly forbidden by repository policy to prevent secret leakage.`
    );
  }

  // Deny keys, certs, pem files, and credentials
  const secretPattern = /\.(pem|key|cert|crt|p12|pfx|id_rsa|id_ed25519)$|credentials\.json$/i;
  if (secretPattern.test(targetPath)) {
    respond(
      "deny",
      `Access to private keys or credential files (${targetPath}) is strictly forbidden.`
    );
  }

  respond("allow");
} catch (err) {
  // Fail open to ask on malformed input or internal error
  respond("ask", `secret-guard error: ${err.message || String(err)}`);
}
