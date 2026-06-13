# _shared — support files for the design skills

Bundled (vendored) dependencies for the `ux-writing`, `a11y-audit`, `performance`,
and `design-review` skills. Copied from the **`ux-ui-agent-skills`** npm package
(v2.3.1) so those skills work standalone — `node_modules/` is gitignored and wiped
on reinstall, so the skills must not reference it.

Only the files those four skills actually use were vendored. **Deliberately NOT
included** (they conflict with this repo's Figma-sourced token system in
`shadcn-nextjs-design/DESIGN.md` + `globals.css`, or duplicate its build workflow):
the package's `CLAUDE.md`, `tokens/`, `components/`, `design-systems/`,
`frameworks/`, and the token/component-generation skills (`design-tokens`,
`token-build`, `design-component`, `design-code`, `figma-integration`, etc.).

Source of truth for design tokens remains **Figma → `DESIGN.md`**. These skills are
additive review/audit/writing aids only.

To refresh after a package bump, re-copy the same file list from
`node_modules/ux-ui-agent-skills/`. The two `*.mjs` contrast gates require
Playwright (`npm i -D playwright`); `contrast.py` is standalone.
