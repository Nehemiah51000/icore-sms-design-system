# Commit Message Convention

Format: `PREFIX: short explanation of the change`

Keep the explanation in **present tense, imperative mood** ("add", not
"added" or "adds") — this matches how Git itself describes commits ("this
commit will... add X") and reads cleanly in `git log`.

## Prefixes

| Prefix     | Use for                                                                                              |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| `FEAT`     | A new feature or capability being added                                                              |
| `FIX`      | Fixing a bug or incorrect behavior                                                                   |
| `CHANGE`   | Modifying existing behavior that isn't strictly a bug fix (e.g. adjusting a flow, refactoring a UI)  |
| `STYLE`    | Visual/CSS/design-only changes, no logic change                                                      |
| `DOCS`     | Documentation only (README, this file, code comments)                                                |
| `CHORE`    | Setup, config, dependency updates, tooling — nothing user-facing                                     |
| `REFACTOR` | Code restructuring with no behavior change at all                                                    |
| `WIP`      | Deliberately incomplete, still-in-progress commit (use sparingly, squash before merging if possible) |

## Examples

```
FEAT: add STK push confirmation modal to load-credit flow
FIX: correct phone number validation regex for Kenyan numbers
CHANGE: move transaction status badge from table cell to row header
STYLE: apply navy-900 background to admin sidebar
DOCS: add setup steps for design-system tokens to README
CHORE: install lucide-react and sonner
REFACTOR: extract StatusBadge into shared design-system component
```

## Scope prefix (optional, for the two-app phase)

Once `admin-dashboard` and `client-portal` are both active, prefix with the
app name in brackets when a commit is specific to one:

```
FEAT(admin): add provider CRUD table
FEAT(client): add load-credit form
CHANGE(design-system): update button hover state to muted-600
```

No bracket needed for commits affecting the whole repo (e.g. root `.gitignore`
updates, shared docs).

## One rule that matters more than the format

**One logical change per commit.** A commit that mixes a bug fix with an
unrelated style tweak makes `git blame` and `git revert` far less useful
later. If you catch yourself writing "and" in a commit message, it's
probably two commits.
