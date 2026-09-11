---
name: optimize-assets
description: Optimize images, videos, and PDFs, and generate responsive variants and favicons. Use this skill whenever the user asks to compress assets, optimize images, generate favicons, create responsive image sizes, or reduce media file size in their project.
---

# Optimize Assets

This skill provides a way to run the local `assets-optimize` standalone tool on any directory with full configuration support. The tool is available globally as a CLI command `assets-optimize`.

## How to use

When the user asks to optimize assets, you must follow this step-wise thinking workflow before running `assets-optimize`:

### Step 0 — Check for existing config
- Search the project for a previously generated markdown config file (e.g. `asset-optimize.config.md` or similar naming already used in the repo, if any).
- If found, read it and use its settings as the starting defaults instead of the skill's hardcoded defaults.
- If not found, proceed to Step 1.

### Step 1 — Project exploration
- Inspect the project structure to identify:
  - Framework in use (Next.js / static / React.js — check `package.json`, config files, folder conventions).
  - Where source assets currently live.
  - Where optimized/public assets are expected to be served from (framework-specific conventions, e.g. `public/` for Next.js).
- Do not assume — verify by reading actual files.

### Step 2 — Search available base templates
- Look for the framework-specific base templates provided for `next.js`, `static`, and `react.js` project types.
- Identify which one matches the exploration results from Step 1.

### Step 3 — Choose and customize template
- Select the matching template.
- Customize its default flags (input/output paths, image/video format, responsive sizes, quality, concurrency, favicon logo path, etc.) to fit the specific project structure found in Step 1.
- State the chosen values and the reasoning behind each deviation from defaults before proceeding.

### Step 4 — Persist config for future runs
- Write the finalized configuration to a markdown file (consistent naming/location with what Step 0 searches for) so future invocations can skip Steps 1–3.
- Include all resolved flags and a short rationale comment for non-default choices.

### Step 5 — Execute
- Run `assets-optimize` using the flags resolved from the markdown config.
- Report the exact command executed and a summary of the result (files processed, output location, any warnings/size threshold hits) before considering the task complete.

### Step 6 — React Component Integration (Optional)
- If the project is a React or Next.js application, offer to install the bundled `ResponsiveImage.jsx` helper component.
- The component is located in the skill's bundled resources at: `<skill_dir>/assets/ResponsiveImage.jsx`.
- If the user accepts, copy this file into their project's components directory and ensure the `manifest.json` import path matches their project structure.

## Base Templates

Use these templates as a starting point depending on the project type:

### Next.js
```markdown
# assets-optimize.config.md
- `--input public/assets-src`
- `--output public/assets`
- `--image-format webp`
- `--video-format mp4`
- `--responsive`
```

### React.js (Vite/CRA)
```markdown
# assets-optimize.config.md
- `--input src/assets-src`
- `--output src/assets`
- `--image-format webp`
- `--responsive`
```

### Static HTML
```markdown
# assets-optimize.config.md
- `--input assets-src`
- `--output assets`
- `--image-format webp`
```

## Configuration Options

You can override any of the default configuration options below using CLI flags:

- `--input <path>`: Input directory (default: 'original-assets-backup')
- `--output <path>`: Output directory (default: 'assets')
- `--image-format <format>`: 'webp', 'avif', 'jpeg', 'png', or 'original' (default: 'webp')
- `--video-format <format>`: 'mp4', 'webm', or 'original' (default: 'mp4')
- `--no-recreate`: If set, prevents clearing the output directory before starting.
- `--responsive`: If set, generates responsive sizes.
- `--responsive-sizes <sizes>`: Comma-separated array of widths (default: '480,768,1200,1600')
- `--manifest-dir <path>`: Directory to output manifest.json.
- `--manifest-name <name>`: Custom name for the manifest file.
- `--logo <path>`: Enables favicon generation and sets the input logo path.
- `--quality <number>`: Compression quality (default: 90)
- `--max-size <bytes>`: Warning threshold size.
- `--strict-max-size <bytes>`: Strict limit size (try to compress below this).
- `--concurrency <number>`: Parallel processing limit (default: 4)
- `--overwrite`: If set, overwrites existing files.
- `--no-recursive`: If set, disables recursive folder scanning.
- `--dry-run`: If set, simulates the process without modifying files.

## Examples

**Example 1: Basic Optimization**
Input: "Optimize all images in my src/images folder and save them to public/images"
Action: Run `assets-optimize --input src/images --output public/images`

**Example 2: Responsive Images**
Input: "Optimize assets in the default input folder, create responsive sizes of 300,600,900, and don't recreate the output folder"
Action: Run `assets-optimize --responsive --responsive-sizes 300,600,900 --no-recreate`

**Example 3: Favicons and Specific Formats**
Input: "Generate favicons from logo.png and optimize other images to avif format."
Action: Run `assets-optimize --logo logo.png --image-format avif`

## Important Notes
- Always ensure you specify the correct `--input` and `--output` based on the user's project structure if they differ from the defaults.
- The `assets-optimize` command is available globally. You don't need to specify the path to `index.js`.

## Constraints
- Use your own editor tools for any file edits — do not use shell scripts (`sed`, `find`/`replace` scripts) for modifying files.
- Report your plan (which template, which flags, why) before executing Step 5.
- Do not skip Steps 0–4 even if the user's request seems simple — the config file is the source of truth for repeatable runs.
