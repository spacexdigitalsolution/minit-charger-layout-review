Optimize this Next.js project so AI coding agents (Claude Code, Cursor, Copilot, etc.) can edit it accurately and safely.

1. AGENTS.md setup
   - Check if AGENTS.md exists at the project root. If on Next.js 16.3+, running `next dev` auto-generates it (and CLAUDE.md, which just @-references AGENTS.md) when an agent is detected.
   - If on 16.2, manually add AGENTS.md instructing agents to read node_modules/next/dist/docs/ before writing code.
   - If on 16.1 or earlier, run: npx @next/codemod@canary agents-md
   - Preserve any content outside the <!-- BEGIN:nextjs-agent-rules --> / <!-- END:nextjs-agent-rules --> markers — that's where I'll add project-specific conventions (route group naming, server vs. client component policy, data-fetching patterns, styling approach).

2. Runtime visibility
   - Confirm `next dev` is running so agents can work against a live server.
   - Enable logging.browserToTerminal in next.config.ts so client console errors surface in the terminal.
   - Set up the Next.js MCP server (/_next/mcp) so agents can query compilation issues and route state directly instead of guessing.

3. Error-driven fixes
   - If Cache Components is relevant to this project, note that blocking prerender errors now show labeled fix options (stream / cache / block) with a "Copy prompt" button in the dev overlay — point agents at /docs/messages/<error> pages for canonical fixes rather than improvising.

4. Skills for multi-step work
   - Install next-dev-loop (npx skills add vercel/next.js --skill next-dev-loop) so every edit is verified against the running dev server automatically.
   - If migrating to Cache Components or Partial Prefetching, use the next-cache-components-adoption / next-partial-prefetching-adoption skills instead of hand-rolling the migration.

5. Project-specific rules to add to AGENTS.md
   - App Router vs Pages Router (state which one, and forbid mixing patterns).
   - Server/client component boundary conventions ('use client' placement rules).
   - Data fetching approach (fetch caching, "use cache", server actions).
   - File/folder naming and route group conventions.
   - Design system / component library constraints, if any.

   6. CONTEXT FILE STRATEGY (in addition to root AGENTS.md)
   - Add a scoped AGENTS.md (or Rules-equivalent) inside major folders (app/, components/, lib/) — but ONLY with non-obvious, project-specific conventions the agent can't infer from reading the code itself. Do not restate generic Next.js/React knowledge.
   - Use H2 headers in every context file: ## Architecture, ## Conventions, ## Anti-patterns, ## Commands. No prose paragraphs — bullets only.
   - Do not let the root AGENTS.md grow unbounded — if it exceeds ~150 lines, split detail into scoped sub-files and keep root as a lean index pointing to them.
   - Flag any folder that forces an agent to read unrelated code to complete a single-feature edit — that's a colocation failure, fix it as part of the structure migration.

Audit my current repo structure against the above, tell me what's missing, and generate the exact AGENTS.md content (outside the managed block) for my project's conventions.


Audit this Next.js codebase for AI-edit efficiency and refactor its file/folder structure. My AI agent (Antigravity) is slow and error-prone here because files are too large and the folder structure is inconsistent. Do the following:

1. FILE SIZE AUDIT
   - List every file over 300 lines (components) or 500 lines (utils/config).
   - For each, identify why it's bloated: mixed concerns (UI + logic + types + data-fetching in one file), dead code, duplicated logic, or inline data/constants that should be extracted.
   - Propose a split plan per file: which pieces become separate components, hooks, utils, or type files. Keep each new file focused on ONE responsibility.

2. FOLDER STRUCTURE AUDIT
   - Check whether the project follows a consistent pattern (feature-based, e.g. app/(feature)/_components, _hooks, _lib vs. type-based, e.g. /components, /hooks, /lib at root). Flag any mixing of the two.
   - Flag deeply nested or inconsistent import paths, unclear naming, and components that are hard to locate by name/purpose.
   - Propose a single consistent structure going forward and a migration plan (which files move where).

3. REDUCE CONTEXT LOAD PER EDIT
   - Break large "god components" and "god routes" into smaller composable pieces so an agent editing one feature doesn't need to load unrelated code.
   - Extract shared types into dedicated *.types.ts files, and shared constants into *.constants.ts, so edits to logic don't require touching huge type blobs.
   - Colocate a feature's component, styles, hooks, and tests together so an agent editing that feature loads only what's relevant.
   - Identify any generated, vendor, or build files that are being read unnecessarily and should be excluded via .gitignore / AGENTS.md guidance.

4. AGENTS.md UPDATE
   - After the restructure, update AGENTS.md (outside the managed <!-- BEGIN:nextjs-agent-rules --> block) with:
     a) the new folder convention, explained in one short paragraph
     b) a rule capping new file size (e.g. "split any component file exceeding ~250 lines")
     c) a rule to colocate feature-specific code and avoid dumping logic into shared/ or utils/ unless truly shared across 3+ features
     d) pointers to where types, constants, and hooks now live

5. OUTPUT
   - Give me the audit findings first (files to split, structure issues found).
   - Then propose the target folder structure as a tree diagram.
   - Then execute the migration incrementally, one feature/folder at a time, verifying the app still builds and runs after each step — don't do a single giant rewrite.

Do not change business logic or behavior — this is a structural refactor only, optimized for making future AI-assisted edits faster, smaller in scope, and less error-prone.