# _ux-ui-shared — vendored support bundle for the ux-ui-* skills

Shared files for the 17 `ux-ui-agent-skills` skills installed flat in `.claude/skills/`
(`a11y-audit`, `apply-aesthetic`, `brandkit`, `design-code`, `design-component`, `design-qa`,
`design-review`, `design-tokens`, `figma-integration`, `governance`, `image-to-code`,
`migrate-design-system`, `performance`, `prototype`, `redesign`, `token-build`, `ux-writing`).

Vendored from the **`ux-ui-agent-skills`** npm package (v2.3.1) so the skills work standalone —
`node_modules/` is gitignored and wiped on reinstall, so skills must not reference it. Each
`<skill>/SKILL.md` points here via `../_ux-ui-shared/…`.

## Source of truth — do NOT override Figma
This bundle is **reference material only**. The project's design tokens live in
**Figma → `shadcn-nextjs-design/DESIGN.md` + `src/app/globals.css`** and that is authoritative.

- The `tokens/*.json` (DTCG/OKLCH) here are **format examples**, not values to ship. Never emit them
  into app code and never create a second `:root` / `@theme` layer.
- `CLAUDE.md` here is a **vendored persona**, not the project `CLAUDE.md`. Its top banner restates the
  override. It is intentionally not installed at the repo root.
- Token-generating skills (`design-tokens`, `token-build`, `brandkit`) and code/Figma skills
  (`design-code`, `design-component`, `figma-integration`) carry a `PROJECT NOTE` banner pointing back
  to `DESIGN.md`.

## Refreshing
Re-copy the support dirs + `CLAUDE.md` from `node_modules/ux-ui-agent-skills/` and re-apply the
body-only path rewrite (`tokens/`, `scripts/`, … → `../_ux-ui-shared/…`), preserving the
`PROJECT OVERRIDE` / `PROJECT NOTE` banners. The `.mjs` gates need Playwright; `*.py` need python3.
