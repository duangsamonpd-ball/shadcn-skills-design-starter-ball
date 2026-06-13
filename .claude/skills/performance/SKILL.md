---
name: performance
description: Optimize UI performance against Core Web Vitals — LCP, INP, CLS — with loading/code-split strategy, layout-shift prevention, and animation performance rules. Use when the user wants to improve speed, fix jank or layout shift, hit Web Vitals budgets, or make a UI feel fast on low-end devices.
---

# Skill: Performance

Make the UI fast and stable. Treat performance as an accessibility concern — slow/janky UIs fail low-end devices first.

## Steps
1. Read `../_ux-ui-shared/workflows/performance.md` (Core Web Vitals targets, loading strategy, layout-shift, animation perf, design-system runtime cost).
2. Diagnose against budgets: **LCP ≤ 2.5s**, **INP ≤ 200ms**, **CLS ≤ 0.1**. Measure on a mid-tier mobile profile (throttle slow 4G + 4× CPU).
3. Loading: render above-fold first (this repo is Next.js App Router — use Server Components; keep `"use client"` to interactive leaves only), code-split by route + heavy widget, lazy-load below-fold/behind-interaction, preload one critical font weight (Geist), modern responsive images via `next/image`.
4. Kill layout shift: size skeletons to final dimensions, reserve media space via `aspect-ratio`, never inject content above existing.
5. Animation: only `transform`/`opacity`, `will-change` sparingly, 100–300ms, honor `prefers-reduced-motion`. Prefer CSS state styling over JS for low INP; tree-shake/per-component imports. *(Use the motion/sizing values from this repo's token source — `shadcn-nextjs-design/DESIGN.md` + `globals.css` — never hardcode.)*

## Verification (definition of done)
- Lighthouse / field data meets LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 on mid-tier mobile.
- First interaction stays responsive under slow-4G + 4× CPU throttle.
- Skeletons + media reserve space (zero CLS on load); no non-compositor animation in loops.
