---
name: plan-first
description: Guides agents through reading existing context, evaluating risks, compiling proposed file lists, and securing user approval before executing modifications.
---

# Plan First Workflow

This skill outlines the strict discovery and planning protocol that must be followed before touching any project files.

## Procedure

### Step 1: Read-Only Discovery
1. Check current git status:
   ```bash
   git status --short
   git rev-parse --short HEAD
   ```
2. Read `AGENTS.md` and relevant `.agents/rules/*.md` files.
3. Inspect relevant source files in `app/` and `data/` to understand existing patterns, imports, and component boundaries.
4. Never assume libraries, APIs, or database models exist without reading concrete source files.

### Step 2: Risk & Scope Assessment
1. Identify whether any requested change touches shared components in `app/components/` or route-colocated components in `_components/`.
2. Check for dependencies on `SmartImage`, GSAP animations, or static data structures in `data/`.
3. Note any potential breaking changes or conflicts with existing conventions.

### Step 3: Compile Proposed Modification Plan
Prepare a concise plan containing:
- **Objective:** What is being built or changed.
- **Affected Files:** Table or bullet list of files to create, modify, or delete, with a one-line purpose for each.
- **Conventions Followed:** Explicit mention of RSC boundaries, component size limits (<250 lines), and Tailwind classes.
- **Verification Plan:** How the change will be tested using `pnpm lint` and browser inspection.

### Step 4: Await Explicit Approval
- Stop and present the plan to the user.
- Do not create or edit workspace files until the user explicitly approves the plan.
