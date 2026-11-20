---
trigger: always_on
---

# Image Approval & Asset Access Guardrails

## 1. Absolute Prohibitions for AI Agents
- **NO Image Selection**: Agents must NEVER pick, suggest, rank, preview, generate, search for, or assign any image file.
- **NO Browsing or Listing**: Agents must NEVER open, view, or describe image files; never list or browse image directories (`site/public/assets-src` or `site/public/assets`); never use image search or image generation; never guess a file from its filename; never copy, move, convert, optimize, or add images to `manifest.json`.
- **Default State**: All image slots throughout the application remain in placeholder mode (`mode="placeholder"` or `src=null`).
- **Permitted Operations Only**: The ONLY permitted image operation is after Devansh explicitly names an exact file path for a slot: confirm that the exact path exists and read its pixel dimensions using read-only tools. Nothing else.
- **Strict Approval Criteria**: Agents never mark a slot approved on their own, never batch-approve, and treat "approve all", "looks good", or silence as NOT approved.

## 2. On-Disk Approval Artifacts
- Location: `site/image-approvals/` (outside `public/`, never deployed).
- Format: One markdown file per page/slug with YAML frontmatter.
- Structure: Subdivided into sections (`_global/`, `products/hardware/`, `products/software/`, `industries/primary/`, `industries/aliases/`, `blogs/`).
- Approval Evidence: Requires copying Devansh's verbatim approval message, timestamp, verified source file path, and matching dimensions.

## 3. Workflow for Image Wiring
1. Invoke `/image-approval <page>`.
2. For each pending slot, ask Devansh one slot at a time for an exact source file path or to keep placeholder.
3. Verify existence and pixel dimensions of the named file.
4. Require Devansh to type `APPROVE <slot-id>` per slot.
5. After all slots are decided, present the full page summary and require Devansh to type `APPROVE PAGE <page>`.
6. Only then wire approved slots into code; all unapproved slots remain placeholders.
