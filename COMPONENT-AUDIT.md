# Component Audit Report

**Figma file:** `@shadcn_ui components not token (for learning)` — key `HfydkFEyj2PY0tpZMz7i3K`
**Date:** 2026-05-30
**Method:** Figma REST API `/v1/files` full traverse (58,494 nodes) cross-matched against `SKILL.md` §2 (Component → CLI table) and `DESIGN.md` §6 (variant reference).

> Note: run via the official REST API with a Personal Access Token passed as a one-shot env var (never written to disk; only sent to `api.figma.com`).

## 1. Summary

| Metric | Value |
|---|---|
| Components listed in SKILL.md §2 | **43** |
| Found in Figma | **42 / 43** ✅ |
| Missing in Figma | **1** → `Resizable` |
| Figma component frames (Components page) | ~57 |
| In Figma but NOT documented in skill | **13** |
| Published components (`/components` API) | **0** ⚠️ |
| COMPONENT_SETS / COMPONENT nodes | 65 / 6,069 (mostly Tabler/Lucide icons) |

## 2. Documented → exists in Figma (42/43)

All 42 match a frame on the Figma **Components** page:
Button, Input, Label, Textarea, Card, Badge, Avatar, Separator, Skeleton, Progress, Dialog, Alert Dialog, Sheet, Drawer, Popover, Tooltip, Dropdown Menu, Context Menu, Select, Checkbox, Radio Group, Switch, Slider, Tabs, Accordion, Collapsible, Table, Pagination, Breadcrumb, Navigation Menu, Sidebar, Menubar, Alert, Sonner, Command, Calendar, Scroll Area, Toggle, Toggle Group, Form, Combobox, Date Picker.

## 3. Documented but NOT in Figma (1)

- **Resizable** — no frame/component with this name (`resiz*` only matches "Autoresize textarea"). No "Resizable" page exists on the Components page. SKILL.md lists it but the design has no equivalent.

## 4. In Figma but NOT documented in SKILL.md/DESIGN.md (13)

The Figma file includes these; the skill's §2 table does not list them (table is out of date):
**Aspect Ratio, Button Group, Carousel, Chart, Data Table, Empty, Field, Hover Card, Input Group, Input OTP, Kbd, Native Select, Spinner**

> Of these, Carousel, Hover Card, Input OTP, and Aspect Ratio were already built in the docs app even though SKILL.md never listed them.

## 5. Naming inconsistencies / typos in Figma (affect Code Connect & token sync)

- **Page-name typos:** `Contex Menu` (missing t), `Seperator` (→ Separator), `Aspect Radio` (→ Aspect Ratio), `Input OPT` (→ Input OTP), `KPD` (→ Kbd).
- **Frame ≠ page name:** page "Tooltip" → frame named `Tooltips` (plural).
- **Duplicate / mixed-case component sets:** `Dropdown` / `Dropdown Menu` / `Dropdown menu` / `Dropdown_menu` (four variants), plus snake_case mixed in: `Navigation_menu`, `Radio_group`, `Hover_card`, `Scroll_area`, `Input_OPT`, `With_label`, `With_button`.

Aligns with `DESIGN.md` §24 (known Figma-source typos) — that list should be expanded.

## 6. Variant spot-check (DESIGN.md §6 ↔ Figma)

- **Button** — documented variants default/outline/ghost/destructive/secondary/link all present in Figma (`Type=Primary/Secondary/Outline/Ghost/Link/Destructive`), plus extras (Icon, With icon, Loading, Muted, Link_component).
  - ⚠️ **Size mismatch:** DESIGN.md lists `xs/sm/default/lg/icon-xs/icon-sm/icon/icon-lg`, but Figma only exposes `Size=Small/Default/Large` (+ icon sizes 12/16/24/32). DESIGN.md is more granular than the design.
- **Badge** — default/secondary/outline/destructive present (+ `Color=Blue/Green/Red/Yellow`).
- **Alert** — default/destructive present.

## 7. Structural findings

1. **Published components = 0** — the file is NOT published as a team library ⇒ explains why Code Connect could not be wired (needs published library + Org/Enterprise).
2. **Variables API = 403** — `/variables/local` is Enterprise-only ⇒ cannot read variable definitions live; DESIGN.md must rely on a hand-exported `variables-export.json`. (The file is literally named "not token".)
3. The file contains more than a component library: Examples (Dashboard/Tasks/Playground/Auth), Blocks, Charts, Icons (Lucide + Tabler).

## 8. Recommendations / follow-ups

1. **Remove `Resizable`** from SKILL.md (or add a frame in Figma) — doc currently doesn't match the design.
2. **Add the 13 missing components** to SKILL.md §2 (Aspect Ratio, Hover Card, Carousel, Input OTP, Kbd, Spinner, Native Select, Button Group, Data Table, Chart, Field, Empty, Input Group).
3. **Fix Figma name typos** to match shadcn (Contex→Context, Seperator→Separator, Aspect Radio→Ratio, Input OPT→OTP, KPD→Kbd) and consolidate the 4 Dropdown sets — important before any Code Connect work.
4. **Sync Button sizes** in DESIGN.md §6 to match Figma (Small/Default/Large), or add the missing sizes in Figma.
