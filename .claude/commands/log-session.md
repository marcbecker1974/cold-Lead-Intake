---
description: Append a concise entry for the current session to docs/session-log.md
argument-hint: "[update]"
allowed-tools: Read, Edit, Bash(date:*), Bash(pwd:*), Bash(ls:*), Bash(head:*), Bash(tail:*), Bash(sed:*), Bash(grep:*), Bash(git branch:*), Bash(git status:*), Bash(git log:*), Bash(git diff:*)
---

Log the CURRENT Claude Code session in `docs/session-log.md`.

Context (gathered now):
- Today: !`date +%Y-%m-%d`
- Branch: !`git branch --show-current`
- Working tree: !`git status -sb`
- Recent commits: !`git log -15 --format='%h %ad %s' --date=short`
- Newest transcript (assumed to be this session): !`ls -t ~/.claude/projects/$(pwd | sed 's#/#-#g')/*.jsonl | head -1`

Steps:
1. Session ID = the transcript file name without `.jsonl`. Session name = the
   last `"aiTitle"` value in that file
   (`grep -o '"aiTitle":"[^"]*"' <file> | tail -1`). No custom name is stored,
   so call it "auto-generated". If either value cannot be found, write
   "unknown". If two sessions might be running at once, the newest transcript
   may be the wrong one: write "unknown" and ask instead of guessing.
2. Read `docs/session-log.md`. If the Session ID already appears, do NOT add a
   second entry: show the existing entry and stop. Only if the argument is
   `update`, revise that entry's Outcome, Files changed and Follow-ups in place.
3. Otherwise write ONE entry, based only on this conversation, the git context
   above and the transcript. Use the same fields as the existing entries:
   Session ID (and name), Span or date, Objective, Work done, Key decisions,
   Files changed (only if known from commits or tool calls, else "unknown"),
   Git (current branch, relevant commits and PRs), Outcome, Follow-ups.
   Mark verified statements [fact] and inferred ones [reconstructed]. Never
   invent anything; write "unknown" instead.
4. Append the entry at the end of the file (entries stay oldest to newest) and
   add a matching row to "Sessions at a glance". Edit ONLY
   `docs/session-log.md`.
5. Do not modify application code. Do not commit or push.
6. Show the entry that was added.

Keep the entry short enough to scan in under a minute.
