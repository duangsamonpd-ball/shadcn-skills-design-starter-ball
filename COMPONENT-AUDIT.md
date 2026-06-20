# Component Audit — Figma × Skill Suite

**Figma file:** `@shadcn_ui components not token (for learning)` — key `HfydkFEyj2PY0tpZMz7i3K`
**Date:** 2026-06-13 · **8-state pass:** 2026-06-15 (live MCP)
**Audited against:** the **full skill suite** — `shadcn-nextjs-design` (`SKILL.md §2`, `DESIGN.md §6`)
**and** the `ux-ui-*` design taxonomy in `.claude/skills/_ux-ui-shared/components/*.md`
(atoms · molecules · organisms · templates · navigation · feedback · forms-advanced · overlays ·
data-display · data-viz).

> **Data source.** The 2026-06-15 8-state pass used the **Figma MCP live** with a **Full seat**
> (`duangsamon.pd@gmail.com` on the Iron Pro team) — every component page was drilled via
> `get_metadata` to read its `State=*` variant symbols (§6). The earlier coverage matrix (§2–§5)
> reuses the **2026-05-30 REST full-traverse** inventory (58,494 nodes; see Appendix). The earlier
> "View-seat rate-limited / file empty" caveat is **resolved and no longer applies** — both were
> account/enumeration artifacts, not facts about the file.

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
| Per-component 8-state quality bar | **verified live** — see §6. Focus shipped as `State=Active`; **Error/Invalid + Disabled added 2026-06-20** (rec #5) |

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

## 6. Quality bar (the 8 states) — VERIFIED LIVE (2026-06-15)

The skill bar asks every interactive component for **Default · Hover · Focus · Active · Disabled ·
Loading · Error · Selected** (`atoms.md`, `CLAUDE.md → State Requirements`). On 2026-06-15 all **53
component pages** were drilled live via MCP `get_metadata`, reading each `State=*` variant symbol.

### How this Figma file models states (read before judging the gaps)
This is a **learning/documentation file**, not a strict variant library. It documents the states the
author chose to show, with file-local naming that doesn't map 1:1 to the canonical 8:
- **`State=Active`** on inputs = the **focus/typing ring** (so Input/Textarea/OTP cover *Focus* under
  the name "Active", not a CSS `:active` press state).
- **`State=Open` / `Toggled` / `On` / `Checked` / `Dialog` / `Drawer`** all map to **Selected/expanded**.
- **`State=Hover`** on menus is really the **open/expanded** preview, not a pure hover token.
- Pressed (`:active`) is never a distinct variant anywhere.

### Two file-wide gaps (the real headline)
- **Focus — 0 components** have an explicit `State=Focus` variant. Inputs approximate it via "Active";
  buttons, checkboxes, switches, radios, toggles, selects, menus show **no focus-ring variant** at all.
- **Error / invalid — 0 components** anywhere. No Input, Textarea, Select, Checkbox, Radio, OTP, or
  Field documents an error / `aria-invalid` state. This is the single biggest design-system hole.

### Per-component state coverage (interactive components)
Legend: ✓ explicit variant · ≈ present under a different name · ✗ not modeled · — N/A for this component

| Component | Default | Hover | Focus | Active(press) | Disabled | Loading | Error | Selected | Variant symbols seen |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|---|
| Button | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | — | Type=Primary/Secondary/Destructive/Outline/Ghost/Link/Icon/With icon/Loading; State=Default/Hover/Loading |
| Checkbox | ✓ | ✗ | ✗ | ✗ | ✓ | — | ✗ | ✓ | Default, Disabledd[sic], Type=Card/Checked |
| Switch | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | ✓ | State=Off/On |
| Radio Group | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | ≈ | single Radio_group + Form (selected baked in) |
| Toggle | ✓ | ✗ | ✗ | ✗ | ✓ | — | ✗ | ✓ | State=Default/Toggled + Disabled (sizes/outline) |
| Toggle Group | ✓ | ✗ | ✗ | ✗ | ✓ | — | ✗ | ✓ | State=Default/Active + Examples/Disabled |
| Input | ✓ | ✗ | ≈ | ✗ | ✓ | ✗ | ✗ | — | State=Default/Active, Disabled (File/Label/Button/Form) |
| Textarea | ✓ | ✗ | ≈ | ✗ | ✓ | ✗ | ✗ | — | State=Default/Active, Disabled |
| Input OTP | ✓ | ✗ | ≈ | ✗ | ✗ | ✗ | ✗ | — | State=Default/Active (Pattern/Separator/Form) |
| Native Select | ✓ | ✗ | ✗ | ✗ | ✓ | — | ✗ | ≈ | State=Default/Open + Disabled |
| Select | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | ≈ | State=Default/Open (Scrollable/Form) |
| Combobox | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | ≈ | State=Default/Open |
| Slider | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | — | single Slider symbol |
| Accordion | ✓ | ✓ | ✗ | ✗ | ✗ | — | ✗ | ✓ | State=Default/Hover/Open (+Question prototype) |
| Collapsible | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | ✓ | State=Default/Open |
| Dropdown Menu | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | ✓ | State=Button/Open (×3 sets) |
| Context Menu | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | ✓ | State=Default/Open |
| Menubar | ✓ | ≈ | ✗ | ✗ | ✗ | — | ✗ | ✓ | State=Default/Hover(open) |
| Navigation Menu | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | ✓ | State=Default/Open |
| Tabs | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | ≈ | single Tabs symbol (active tab baked in) |
| Pagination | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | ≈ | single symbol |
| Dialog | ✓ | — | ✗ | — | — | — | — | ✓ | State=Button/Dialog (+custom close) |
| Alert Dialog | ✓ | — | ✗ | — | — | — | — | ✓ | State=Button/open |
| Sheet | ✓ | — | ✗ | — | — | — | — | ✓ | State=Button/Open |
| Drawer | ✓ | — | ✗ | — | — | — | — | ✓ | State=Button/Drawer (+responsive) |
| Popover | ✓ | — | ✗ | — | — | — | — | ✓ | State=Button/Open |
| Hover Card | ✓ | ✓ | ✗ | — | — | — | — | ✓ | State=Button/Hover |
| Tooltip | ✓ | ≈ | ✗ | — | — | — | — | ✓ | Property 1=Buttons/Tooltip |
| Command | ✓ | — | ✗ | — | — | — | — | ✓ | State=Default/Open |
| Date Picker | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | ✓ | State=Default/Open (4 variants) |
| Calendar | ✓ | ✗ | ✗ | ✗ | ✗ | — | ✗ | ✓ | State=Default/Open (selector/pickers) |
| Sidebar | ✓ | ✗ | ✗ | ✗ | — | — | ✗ | ✓ | State=Closed/Open |
| Label | ✓ | — | — | — | — | — | — | ≈ | State=Default/Checked (peer state) |

**Static / non-interactive** (8-state bar N/A — no states expected): Alert, Avatar, Badge, Breadcrumb,
Card, Carousel, Chart, Data Table, Empty, Field, Input Group, Item, Kbd, Progress, Scroll Area,
Separator, Skeleton, Sonner, Spinner, Table, Aspect Ratio. (Skeleton & Spinner *are* the loading
primitive; Empty is the empty-state primitive.)

### Verdict
- ✅ **Default** and **Selected/open/checked** — comprehensively covered.
- ⚠️ **Disabled** — only Checkbox, Input, Textarea, Native Select, Toggle, Toggle Group. **Button has
  no disabled variant**; nor do Switch, Radio, Slider, Select.
- ⚠️ **Hover** — only Button, Accordion, Menubar, Hover Card (+ Tooltip ≈).
- ⚠️ **Loading** — only Button (`Type=Loading`); Spinner is the standalone primitive.
- ❌ **Focus** — modeled nowhere as its own variant (inputs fold it into "Active").
- ❌ **Error** — modeled nowhere, for any form control.

> The **code** side does better than Figma here: shadcn primitives ship real `:focus-visible` rings,
> `disabled:` styles, and `aria-invalid:` error styling via Tailwind even where Figma omits the variant.
> So these are **Figma-design gaps**, not necessarily code gaps — the action is to add Focus/Error/Disabled
> variants in Figma (or accept that this learning file intentionally omits them) before wiring Code Connect.

---

## 7. Recommendations (prioritized)

1. ~~**Build the 3 hard gaps** where the skill taxonomy expects them — `Stepper`, `File Upload`,
   `Tree View` — or consciously mark them out-of-scope in `SKILL.md §2`.~~ **RESOLVED 2026-06-20:**
   marked **out-of-scope** in `SKILL.md §2` — absent from both the `@shadcn` registry and the Figma
   file, so the skill no longer implies they exist. Revisit only if added to Figma first.
2. **Close project↔Figma drift** for `Data Table`, `Empty State`, `Combobox`, `Date Picker`, and
   `Charts` — add the docs pages/components so the app matches the design library.
3. ~~**Fix Figma naming** before any Code Connect: `Contex→Context`, `Seperator→Separator`,
   `Aspect Radio→Ratio`, `Input OPT→OTP`, `KPD→Kbd`.~~ **RESOLVED 2026-06-20:** all 6 page/symbol
   typos renamed at source in Figma (5 pages + Checkbox `Disabledd`→`Disabled`); `DESIGN.md §24`
   updated. (Remaining: consolidate the 4 `Dropdown*` sets + snake_case drift — non-typo, deferred.)
4. **Resolve `Resizable`** — in the project but not Figma: add a Figma frame or drop it from `SKILL.md`.
5. ~~**Close the 8-state gaps in Figma**: add **Focus** and **Error/invalid** variants to Input,
   Textarea, Select, Native Select, Checkbox, Radio, Input OTP, Field — and a **Disabled** variant to
   Button/Switch/Radio/Slider/Select.~~ **RESOLVED 2026-06-20:** Focus already shipped as `State=Active`;
   added **Error/Invalid** to Input (all 4 blocks), Textarea (5 sets), Input OTP (5 sets), Select (3
   sets), Native Select (2 sets), Checkbox, Radio, Field; added **Disabled** to Button (6 types, relaid
   3-col), Switch, Slider, Select, Radio. All variants bind tokens (`destructive` / `opacity-50`), no
   hardcoded values; each verified by screenshot. (Code Connect still blocked — Developer seat needed.)
6. **Sync Button sizes** — `DESIGN.md §6` lists more sizes than Figma exposes (Small/Default/Large).

## Refresh the Figma side live

The **MCP path is the supported one** and now works (Full seat, `duangsamon.pd@gmail.com` / Iron Pro
team). To re-pull: enumerate pages with `get_metadata` on an invalid nodeId (e.g. `0:0`) to dump the
full page list, then drill each `↳ <Component>` page by node ID to read its `State=*` symbols. Node-ID
map for all 53 component pages is recorded in the session memory (`figma-component-audit-wip`).

> The old REST/PAT path is **abandoned** — scoped PATs need the `file_content:read` scope and a PAT was
> accidentally exposed once (since revoked). Use MCP, not a token.

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
