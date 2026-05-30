<div align="center">

# shadcn-skills-design-starter-ball

**A Next.js starter wired to a Figma-driven design-token system — with a Claude Code skill baked in.**

Build UI with [shadcn/ui](https://ui.shadcn.com) + Tailwind CSS v4, using semantic design tokens
mirrored from Figma — and let Claude Code follow the same rules automatically.

![Next.js](https://img.shields.io/badge/Next.js-16.2.6-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-radix-000000)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)

</div>

---

## ✨ What's inside

- **Next.js 16** (App Router, Turbopack) · React 19 · TypeScript · ESLint
- **Tailwind CSS v4** — CSS-first config (`@theme` in CSS, no `tailwind.config.js`)
- **shadcn/ui** pre-initialized (radix base) — `Button` + `Sonner` installed
- **Design-token system** — 1,812 tokens from Figma mirrored into `DESIGN.md` and wired into
  `globals.css` as semantic CSS variables (light + dark)
- **`next-themes`** dark mode + **Sonner** toaster, ready in the root layout
- **Bundled Claude Code skill** (`shadcn-nextjs-design`) so AI assistance follows the design system
- **Figma workflow ready** — token sync + Code Connect (add your file key when ready)

## 🚀 Quick start

```bash
npm install
npm run dev      # → http://localhost:3000
```

| Script | Description |
| ------ | ----------- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

Add more components anytime:

```bash
npx shadcn@latest add card dialog table input label
```

## 📁 Project structure

```
.
├── src/
│   ├── app/
│   │   ├── globals.css        # design tokens (from DESIGN.md §1) + Tailwind v4 @theme
│   │   ├── layout.tsx         # Providers + Sonner Toaster
│   │   ├── providers.tsx      # next-themes ThemeProvider ("use client")
│   │   └── page.tsx           # token-driven demo (Button variants)
│   ├── components/ui/         # shadcn components — do not edit directly; wrap/extend
│   └── lib/utils.ts           # cn() helper
├── .claude/
│   └── skills/shadcn-nextjs-design/
│       ├── SKILL.md           # build rules, patterns, shadcn CLI, a11y, v4 syntax
│       └── DESIGN.md          # full token registry (1,812 vars)
├── CLAUDE.md                  # repo guidance for Claude Code (read every session)
└── components.json            # shadcn config
```

## 🎨 Design system

The Figma file is the source of truth for design tokens. Those tokens live in
**[`DESIGN.md`](.claude/skills/shadcn-nextjs-design/DESIGN.md)** and are applied as semantic CSS
variables in `src/app/globals.css`:

```tsx
// ✅ Always use semantic tokens — they handle light/dark automatically
<div className="bg-background text-foreground border border-border">
<p className="text-muted-foreground">

// ❌ Never hardcode colors
<div className="bg-white text-gray-900">
```

| Layer | Token examples |
| ----- | -------------- |
| Surfaces | `bg-background` · `bg-card` · `bg-popover` |
| Actions | `bg-primary` · `bg-secondary` · `bg-destructive` |
| Text | `text-foreground` · `text-muted-foreground` |
| Lines | `border-border` · `border-input` · `ring-ring` |
| Radius | `rounded-sm` (4px) · `rounded-md` (6px) · `rounded-lg` (8px, base) |

Keep `DESIGN.md` and `globals.css` in sync with Figma — never hand-diverge token values.

## 🤖 Claude Code skill

This repo ships a skill at `.claude/skills/shadcn-nextjs-design/`. It **auto-loads** whenever you
ask Claude Code to build or edit UI, and enforces the project's rules: semantic tokens only, shadcn
via CLI, correct server/client boundaries, accessibility, and Tailwind v4 syntax.

```text
Invoke explicitly:  /shadcn-nextjs-design
Reuse elsewhere:    cp -R .claude/skills/shadcn-nextjs-design <other-app>/.claude/skills/
```

See **[`CLAUDE.md`](CLAUDE.md)** for the full workflow (Next.js + Figma + Code Connect).

## 🔗 Figma workflow

Once you add a Figma file URL/key to `CLAUDE.md`, the design-to-code loop is:

1. **Read** the design from Figma (`get_design_context` / `get_screenshot`)
2. **Pull tokens** (`get_variable_defs`) and reconcile against `DESIGN.md`
3. **Build** with the skill — semantic tokens + shadcn components
4. **Map back** with Code Connect so Figma shows the real code

> ⚠️ **Next.js 16 has breaking changes** vs older conventions. See `AGENTS.md` and
> `node_modules/next/dist/docs/` before using unfamiliar Next APIs.

---

<div align="center">
<sub>Built with Next.js · shadcn/ui · Tailwind CSS v4 · Claude Code</sub>
</div>
