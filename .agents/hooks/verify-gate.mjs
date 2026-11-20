#!/usr/bin/env node
/**
 * verify-gate.mjs
 * Stop hook script for automated verification gating.
 *
 * NOTE: Verification script execution is a safety guardrail.
 *
 * Registered in `.agents/hooks.json` under the `Stop` hook.
 * Verified baseline: 0 errors, 1 pre-existing warning (`SmartImage.js`).
 *
 * Stop Hook Semantics:
 * - When lint fails, returns `decision: "continue"` to keep the agent loop open.
 * - Caps loop re-entries at 2 iterations using `.agents/hooks/.gate-counter`.
 * - When lint passes, returns `decision: "allow"`.
 */

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COUNTER_FILE = path.join(__dirname, ".gate-counter");

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

function getCounter() {
  try {
    if (fs.existsSync(COUNTER_FILE)) {
      const content = fs.readFileSync(COUNTER_FILE, "utf-8").trim();
      return parseInt(content, 10) || 0;
    }
  } catch {
    // Ignore read errors
  }
  return 0;
}

function setCounter(val) {
  try {
    if (val <= 0) {
      if (fs.existsSync(COUNTER_FILE)) fs.unlinkSync(COUNTER_FILE);
    } else {
      fs.writeFileSync(COUNTER_FILE, String(val), "utf-8");
    }
  } catch {
    // Ignore write errors
  }
}

try {
  const input = readStdin().trim();
  const data = input ? JSON.parse(input) : {};

  // Only run when agent is fully idle
  if (!data?.fullyIdle) {
    respond("allow");
  }

  // Cap re-entries at 2 iterations to prevent infinite loops
  const count = getCounter();
  if (count >= 2) {
    setCounter(0);
    respond("allow");
  }

  // Check git status to see if source files were modified
  const statusRes = spawnSync("git", ["status", "--porcelain"], {
    encoding: "utf-8",
    shell: true,
  });

  const modified = (statusRes.stdout || "").trim();
  if (!modified) {
    setCounter(0);
    respond("allow");
  }

  // Increment execution counter
  setCounter(count + 1);

  // Run repository linting (pnpm lint)
  const lintRes = spawnSync("pnpm", ["lint"], {
    encoding: "utf-8",
    shell: true,
  });

  if (lintRes.status !== 0) {
    const errorOutput = (lintRes.stdout || "") + "\n" + (lintRes.stderr || "");
    respond(
      "continue",
      `verify-gate: pnpm lint detected issues. Please resolve the following errors before concluding:\n${errorOutput.slice(0, 1500)}`
    );
  }

  // If lint passed cleanly, reset counter and allow stop
  setCounter(0);
  respond("allow");
} catch (err) {
  // Fail open to ask on malformed input or internal error
  respond("ask", `verify-gate error: ${err.message || String(err)}`);
}
