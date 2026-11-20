# Image Approvals Documentation

This directory contains the authoritative per-page image approval artifacts for the Minit Charger web platform.

## Security & Workflow Policy
1. **Zero Agent Autonomy**: AI agents are strictly prohibited from picking, ranking, previewing, generating, guessing, or assigning image files to any component, page, or data model.
2. **Explicit Human Sign-off**: A real image path can ONLY be wired into code if Devansh has explicitly reviewed the exact slot, verified the physical file in `site/public/assets-src`, and typed `APPROVE <slot-id>` during an `/image-approval` session.
3. **Defense in Depth**:
   - PreToolUse Hook: Blocks reading image files, scanning asset folders, and forces user confirmation on any editor writes touching image paths.
   - Always-on Rule: Enforces policy across all agent prompts.
   - Per-page Disk Artifacts: Provide an immutable paper trail of approvals with verbatim evidence and timestamps.

## Artifact Statuses
- `pending`: Slots in this page require human review; no real image is wired.
- `partially-approved`: Some slots have been reviewed and approved; unapproved slots remain placeholders.
- `approved`: All slots on the page have been explicitly approved by Devansh with evidence recorded.
