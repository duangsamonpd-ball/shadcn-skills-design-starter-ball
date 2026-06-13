# Component Audit — Figma × Skill Suite

**Figma file:** `@shadcn_ui components not token (for learning)` — key `HfydkFEyj2PY0tpZMz7i3K`
**Date:** 2026-06-13
**Audited against:** the **full skill suite** — `shadcn-nextjs-design` (`SKILL.md §2`, `DESIGN.md §6`)
**and** the `ux-ui-*` design taxonomy in `.claude/skills/_ux-ui-shared/components/*.md`
(atoms · molecules · organisms · templates · navigation · feedback · forms-advanced · overlays ·
data-display · data-viz).

> **Data-source caveat.** The Figma MCP is rate-limited on the current **View seat** (the file sits
> under the "Iron" Pro team where this account is View-only), so live node inspection was not possible
> this pass. The Figma column reuses the **2026-05-30 REST full-traverse** inventory (58,494 nodes;
> see Appendix). Component sets rarely change in two weeks, but for a live refresh see
> [Refresh](#refresh-the-figma-side-live).

---

## 1. Summary

| Metric | Value |
|---|---|
| Skill-taxonomy components evaluated | **49** |
| Covered by **both** Figma and the project | **27** |
| In Figma but **not** in the project app | **6** |
| Missing from **both** (skill expects, nowhere built) | **3** hard + 3 soft (composed) |
| Templates: Figma Examples only, **no** project routes | **4** |
| shadcn primitives **beyond** the abstract skill taxonomy | **17** |
| Per-component 8-state quality bar | **unverified** (needs live Figma) |

**Headline:** the atomic layer is in great shape (10/10 atoms covered both sides). The gaps cluster
in **higher-order** taxonomy items the abstract specs expect but shadcn doesn't ship as primitives —
**Stepper, File Upload, Tree View** (missing everywhere) — plus design-side items the **project**
hasn't built yet (**Data Table, Empty State, Combobox, dedicated Date Picker, Charts, Templates**).

---

## 2. Skill-taxonomy coverage matrix

Legend: ✓ present · ~ partial / composed / via-alias · ✗ absent

### Atoms (`atoms.md`) — 10/10 ✓
| Component | Figma | Project | Note |
|---|:--:|:--:|---|
| Button | ✓ | ✓ | variants align; size granularity differs (see §6 appendix) |
| Input | ✓ | ✓ | |
| Label | ✓ | ~ | installed (`label.tsx`), no doc page |
| Icon | ✓ | ✓ | Lucide (+ Tabler in Figma); project `Icons` page |
| Badge | ✓ | ✓ | |
| Avatar | ✓ | ✓ | |
| Checkbox | ✓ | ✓ | |
| Radio | ✓ | ✓ | `Radio Group` |
| Toggle / Switch | ✓ | ✓ | both `Toggle` and `Switch` |
| Tooltip | ✓ | ✓ | |

### Molecules (`molecules.md`)
| Component | Figma | Project | Note |
|---|:--:|:--:|---|
| Form Field | ✓ | ~ | Figma `Field`; project via `Form` only |
| Search Bar | ✗ | ~ | composed pattern (Input+Icon); app has ⌘K search |
| Card | ✓ | ✓ | |
| Navigation Item | ~ | ~ | composed inside Sidebar / Navigation Menu |
| Alert | ✓ | ✓ | |
| Dropdown | ✓ | ✓ | Figma has **4 duplicate** dropdown sets (see appendix §5) |

### Organisms (`organisms.md`)
| Component | Figma | Project | Note |
|---|:--:|:--:|---|
| Header / App Bar | ~ | ~ | Figma Examples + app `DocsShell` header; not a component |
| Sidebar | ✓ | ✓ | |
| Form | ✓ | ✓ | |
| Data Table | ✓ | ~ | Figma `Data Table`; project only has `Table` |
| Modal / Dialog | ✓ | ✓ | |
| Drawer | ✓ | ✓ | also `Sheet` |

### Navigation (`navigation.md`)
| Component | Figma | Project | Note |
|---|:--:|:--:|---|
| Tabs | ✓ | ✓ | |
| Breadcrumb | ✓ | ✓ | |
| Pagination | ✓ | ✓ | |
| Stepper / Progress Steps | ✗ | ✗ | **missing both** |
| Menu / Menubar | ✓ | ✓ | |

### Feedback (`feedback.md`)
| Component | Figma | Project | Note |
|---|:--:|:--:|---|
| Toast / Notification | ✓ | ✓ | `Sonner` |
| Banner / Inline Alert | ✓ | ✓ | `Alert` |
| Skeleton | ✓ | ✓ | |
| Progress | ✓ | ✓ | |
| Empty State | ✓ | ✗ | Figma `Empty`; **project gap** |

### Forms-advanced (`forms-advanced.md`)
| Component | Figma | Project | Note |
|---|:--:|:--:|---|
| Combobox / Autocomplete | ✓ | ✗ | **project gap** |
| Select (enhanced) | ✓ | ✓ | |
| Slider / Range | ✓ | ✓ | |
| Date / Time Picker | ✓ | ~ | project uses `Calendar`; no dedicated Date Picker |
| File Upload | ✗ | ✗ | **missing both** |

### Overlays (`overlays.md`) — 3/3 ✓
| Component | Figma | Project | Note |
|---|:--:|:--:|---|
| Popover | ✓ | ✓ | |
| Command Palette | ✓ | ✓ | `Command` / app ⌘K |
| Divider / Separator | ✓ | ✓ | Figma page typo `Seperator` |

### Data-display (`data-display.md`)
| Component | Figma | Project | Note |
|---|:--:|:--:|---|
| Calendar | ✓ | ✓ | |
| Carousel | ✓ | ✓ | |
| Tree View | ✗ | ✗ | **missing both** |

### Templates (`templates.md`) & Data-viz (`data-viz.md`)
| Component | Figma | Project | Note |
|---|:--:|:--:|---|
| Dashboard / Auth / Settings / List-Detail | ~ | ✗ | Figma **Examples** screens; no project routes |
| Charts (Bar/Line/Pie/Sparkline/Scatter) | ✓ | ✗ | Figma `Chart`; **project gap** |

---

## 3. Gaps — skill expects it, nobody built it

**Hard (named primitives, missing in both Figma and project):**
1. **Stepper / Progress Steps** (`navigation.md`)
2. **File Upload** (`forms-advanced.md`)
3. **Tree View** (`data-display.md`)

**Soft (composed patterns — acceptable as compositions, not atomic components):**
Search Bar, Navigation Item, Header/App Bar.

## 4. In Figma, not yet in the project app (skill-relevant)

`Data Table` (full), `Empty State`, `Combobox`, dedicated `Date Picker`, `Charts`/data-viz, and the
four **Templates** (Dashboard, Auth, Settings, List/Detail) — these exist design-side but the docs app
has no equivalent route/component.

## 5. shadcn primitives beyond the abstract skill taxonomy (not gaps)

The generic `ux-ui-*` taxonomy folds these into broader categories; they ship in shadcn/Figma/project
and need no action — just noting the taxonomy mismatch:

`Accordion`, `Collapsible`, `Scroll Area`, `Aspect Ratio`, `Button Group`, `Input Group`, `Input OTP`,
`Kbd`, `Native Select`, `Spinner`, `Hover Card`, `Context Menu`, `Sheet`, `Alert Dialog`,
`Navigation Menu`, `Toggle Group`, `Textarea`. (`Resizable` is project-only — absent from Figma.)

## 6. Quality bar (the 8 states) — UNVERIFIED this pass

Every interactive component in the skills must define **Default · Hover · Focus · Active · Disabled ·
Loading · Error · Selected** (`atoms.md`, `CLAUDE.md → State Requirements`). Confirming per-component
state coverage in Figma requires live node inspection, which the View-seat MCP limit blocked. The
2026-05-30 traverse only spot-checked Button/Badge/Alert **variants**, not full state sets. **Action:**
re-run with live access (below) to gate each component on the 8-state bar.

---

## 7. Recommendations (prioritized)

1. **Build the 3 hard gaps** where the skill taxonomy expects them — `Stepper`, `File Upload`,
   `Tree View` — or consciously mark them out-of-scope in `SKILL.md §2`.
2. **Close project↔Figma drift** for `Data Table`, `Empty State`, `Combobox`, `Date Picker`, and
   `Charts` — add the docs pages/components so the app matches the design library.
3. **Fix Figma naming** before any Code Connect: `Contex→Context`, `Seperator→Separator`,
   `Aspect Radio→Ratio`, `Input OPT→OTP`, `KPD→Kbd`; consolidate the 4 `Dropdown*` sets. Expand
   `DESIGN.md §24`.
4. **Resolve `Resizable`** — in the project but not Figma: add a Figma frame or drop it from `SKILL.md`.
5. **Verify the 8-state bar per component** once live Figma access is restored (see Refresh).
6. **Sync Button sizes** — `DESIGN.md §6` lists more sizes than Figma exposes (Small/Default/Large).

## Refresh the Figma side live

Two ways to re-pull current Figma data:
- **Upgrade the seat** for this file's team to lift the MCP limit, then re-run `get_metadata` /
  `search_design_system` per component.
- **REST API** (what the 2026-05-30 pass used, not MCP-limited): provide a Figma Personal Access Token
  as a **one-shot env var** (never written to disk) and I'll re-traverse `/v1/files/<key>` and diff
  against this matrix. Run it yourself in-session with `! FIGMA_TOKEN=figd_… <command>` so the token
  stays out of history/files.

---

# Appendix — prior audit (2026-05-30)

**Method:** Figma REST API `/v1/files` full traverse (58,494 nodes) cross-matched against `SKILL.md §2`
(Component → CLI table) and `DESIGN.md §6` (variant reference). Token passed as a one-shot env var,
never written to disk; only sent to `api.figma.com`.

### A. Summary
| Metric | Value |
|---|---|
| Components listed in SKILL.md §2 | 43 |
| Found in Figma | 42 / 43 |
| Missing in Figma | 1 → `Resizable` |
| Figma component frames (Components page) | ~57 |
| In Figma but NOT documented in skill | 13 |
| Published components (`/components` API) | 0 |
| COMPONENT_SETS / COMPONENT nodes | 65 / 6,069 (mostly Tabler/Lucide icons) |

### B. Documented → exists in Figma (42/43)
Button, Input, Label, Textarea, Card, Badge, Avatar, Separator, Skeleton, Progress, Dialog, Alert
Dialog, Sheet, Drawer, Popover, Tooltip, Dropdown Menu, Context Menu, Select, Checkbox, Radio Group,
Switch, Slider, Tabs, Accordion, Collapsible, Table, Pagination, Breadcrumb, Navigation Menu, Sidebar,
Menubar, Alert, Sonner, Command, Calendar, Scroll Area, Toggle, Toggle Group, Form, Combobox, Date
Picker.

### C. Documented but NOT in Figma (1)
- **Resizable** — no frame/component with this name (`resiz*` only matches "Autoresize textarea").

### D. In Figma but NOT documented in SKILL.md/DESIGN.md (13)
**Aspect Ratio, Button Group, Carousel, Chart, Data Table, Empty, Field, Hover Card, Input Group,
Input OTP, Kbd, Native Select, Spinner**. (Carousel, Hover Card, Input OTP, Aspect Ratio were already
built in the docs app even though SKILL.md never listed them.)

### E. Naming inconsistencies / typos in Figma
- **Page-name typos:** `Contex Menu`, `Seperator`, `Aspect Radio`, `Input OPT`, `KPD`.
- **Frame ≠ page name:** page "Tooltip" → frame `Tooltips`.
- **Duplicate / mixed-case sets:** `Dropdown` / `Dropdown Menu` / `Dropdown menu` / `Dropdown_menu`,
  plus snake_case `Navigation_menu`, `Radio_group`, `Hover_card`, `Scroll_area`, `Input_OPT`,
  `With_label`, `With_button`.

### F. Variant spot-check (DESIGN.md §6 ↔ Figma)
- **Button** — default/outline/ghost/destructive/secondary/link all present (+ Icon, With icon,
  Loading, Muted, Link_component). Size mismatch: DESIGN.md lists `xs/sm/default/lg/icon-*`, Figma
  exposes only `Size=Small/Default/Large` (+ icon 12/16/24/32).
- **Badge** — default/secondary/outline/destructive (+ `Color=Blue/Green/Red/Yellow`).
- **Alert** — default/destructive.

### G. Structural findings
1. **Published components = 0** — file is not a published team library ⇒ Code Connect can't be wired
   (needs published library + Org/Enterprise).
2. **Variables API = 403** — `/variables/local` is Enterprise-only ⇒ DESIGN.md relies on a hand-exported
   `variables-export.json` (the file is literally named "not token").
3. The file holds more than a library: Examples (Dashboard/Tasks/Playground/Auth), Blocks, Charts,
   Icons (Lucide + Tabler).
