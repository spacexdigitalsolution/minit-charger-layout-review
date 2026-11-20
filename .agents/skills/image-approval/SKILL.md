---
name: image-approval
description: Conducts interactive human-gated image approval interviews for a specific page or route. Use whenever the user asks to review, approve, or wire images for a page, or invokes /image-approval <page>.
---

# Image Approval Workflow (`/image-approval <page>`)

This skill facilitates an interactive, human-gated interview to review and approve image assets for exactly one page or route at a time.

## Absolute Prohibitions (Always Enforced)
- Agents must NEVER pick, suggest, rank, preview, generate, search for, or assign any image file on their own.
- Agents must NEVER open, view, or describe image files; never list or browse image directories (`site/public/assets-src` or `site/public/assets`); never use image search or image generation; never guess a file from a filename; never copy, move, convert, optimize, or add images to `manifest.json`.
- The ONLY permitted image operation: after Devansh explicitly names an exact file path for a slot, confirm that the exact path exists and read its pixel dimensions using read-only tools. Nothing else.
- Agents never mark a slot approved on their own, never batch-approve, and treat "approve all", "looks good", or silence as NOT approval.
- SmartImage stays in placeholder mode until an exact slot is explicitly approved.

---

## Step-by-Step Approval Procedure

### Step 1: Locate and Read the Target Page Artifact
1. Determine the artifact path for `<page>` under `site/image-approvals/`:
   - Global shell: `site/image-approvals/_global/<page>.md`
   - Top-level: `site/image-approvals/<page>.md`
   - Products: `site/image-approvals/products/hardware/<page>.md` or `software/<page>.md`
   - Industries: `site/image-approvals/industries/primary/<page>.md` or `aliases/<page>.md`
   - Blogs: `site/image-approvals/blogs/<page>.md`
2. Read ONLY that specific page's artifact. Never touch or read other pages' artifacts.

### Step 2: Interactive Slot Review with /grill-me
For each pending slot in the artifact, ask Devansh **one question at a time** and wait for his explicit response:
1. Ask:
   > "For slot `[slot-id]` (Location: `[location]`, Role: `[role]`, Required: `[dimensions / aspect ratio]`):  
   > Please provide an exact source file path under `site/public/assets-src/`, or reply **keep placeholder**."
2. If Devansh replies **keep placeholder**:
   - Set `Slot Status` to `placeholder-kept`.
   - Update the artifact immediately and proceed to the next slot.
3. If Devansh provides an exact file path:
   - Check if the file exists using read-only means (e.g. `node -e "console.log(fs.existsSync('<path>'))"`).
   - If missing: report the error and ask Devansh for a corrected path.
   - If present: read its pixel dimensions using a read-only script.
   - Compare dimensions to the slot's required aspect ratio. If there is a mismatch, report it clearly.
   - Read the proposal back:
     > **Proposed Slot Configuration:**  
     > - **Slot**: `[slot-id]`  
     > - **Source File**: `[exact path]`  
     > - **Dimensions**: `[width]x[height]` (Aspect ratio: `[ratio]`)  
     > - **Proposed Alt Text**: `[alt text from page copy]`  
     > To approve this slot, please reply: **APPROVE `[slot-id]`**
   - **Gating**: Wait for Devansh to type `APPROVE [slot-id]`. Any other response is NOT approval.
   - Once approved:
     - Set `Slot Status` to `approved`.
     - Set `Approved Source File` to the exact path.
     - Set `Pixel Dimensions Found` to the measured dimensions.
     - Record `Approval Evidence`: Devansh's verbatim approval message, date, and timestamp.
     - Update the artifact immediately.

### Step 3: Page-Level Readback & Sign-off
1. After all slots for the page have been processed, read back the complete summary of the page:
   - Listing of every slot ID, status, and assigned path (or placeholder).
2. Prompt Devansh:
   > "All slots for `[page]` have been processed. To finalize and authorize wiring, please reply:  
   > **APPROVE PAGE `[page]`**"
3. Wait for Devansh's verbatim `APPROVE PAGE [page]`.

### Step 4: Code Wiring
1. ONLY after page-level approval is recorded:
   - Wire approved slots into the corresponding component or data model using `SmartImage` with the exact approved path, explicit width/height, sizes, and alt text.
   - Keep all unapproved or rejected slots in `mode="placeholder"` (or `src=null`).
2. Update the frontmatter of the artifact to `status: approved` and record `last-reviewed: YYYY-MM-DD`.
