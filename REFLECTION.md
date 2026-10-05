# Reflection

## 1. What I chose to build and how I scoped it down

**Cold Lead Intake** is a simple browser-based application for capturing property-management target companies and moving them through a basic research workflow: capture, enrich and prepare for sales review. I deliberately avoided building a full CRM. I started by defining the data structure and workflow, then created the feature scope and iteratively reviewed Claude’s implementation proposals before allowing changes.

## 2. Persistence decision

I compared `localStorage`, `sessionStorage`, IndexedDB, cookies, the File System Access API and JSON files with Claude. I chose **localStorage** because the application is single-user, local-only and stores a relatively small amount of structured data. It survives reloads and browser restarts, requires no backend or additional dependency, and can later be replaced behind the existing storage module. JSON export/import was added as an optional backup mechanism.

## 3. Sprint 1 technique that changed the outcome

A useful example of **project memory preventing agent drift** happened in the Git workflow. Claude once created a new branch without me explicitly asking for one. I clarified the rule in `CLAUDE.md` that work should stay on `main` unless I specifically request a separate branch. Later, Claude referred back to that rule before branching. This showed me how a concise project-memory file can make the agent’s behaviour more predictable and reduce unnecessary workflow changes.

## 4. Design pass

I used **GitHub Primer** as a visual reference. The initial scaffold evolved into a cleaner and more consistent interface with restrained colours, clearer spacing, bordered forms, responsive layouts, navigation, a custom skyline header and a small dashboard.

## 5. What was harder than the static HTML app

For one thing, the more complex file structure that comes with the framework scaffold. For another, ensuring that the data remains consistent during creation, editing, deletion, reloading, dynamic routing, and import/export, while `localStorage` is only available in the browser.

## 6. What I would keep or change next time

I would keep the **inspect → propose → approve → implement** workflow and the frequent testing. Next time, I would define larger acceptance criteria earlier, implement each feature on a separate branch and ideally open a pull request before merging into `main`. I would also use `/clear` consistently between features to reduce context noise and token usage, and freeze the scope sooner to avoid spending time on useful but non-essential additions.
