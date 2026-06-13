---
name: design-review
description: Review or audit a design/UI across 6 weighted dimensions with Nielsen's 10 heuristics and a prioritized findings table. Use when the user wants a design critique, quality score, heuristic evaluation, or audit of an existing screen, page, or product before/after build.
---

# Skill: Design Review

Run a structured, scored review. (For code-level correctness use `/code-review`; this is the design/UX lens.)

## Steps
1. Read `../_shared/workflows/design-review.md` (rubric, scoring guide, Nielsen heuristics, process).
2. Gather context: the screen(s)/flow, target users, platform, constraints.
3. Score the 6 dimensions (Visual Hierarchy 20%, Consistency 20%, Accessibility 20%, Usability 20%, Responsiveness 10%, Performance 10%); compute the weighted overall.
4. Run the accessibility lens with `../_shared/accessibility/wcag-checklist.md`; use `python3 ../_shared/scripts/contrast.py "<fg>" "<bg>"` for any color-pair doubts. (Deeper audit → the `a11y-audit` skill.)
5. Check against the anti-slop tells in `../_shared/taste/design-taste.md` (Banned Defaults checklist).
6. Apply Nielsen's 10 heuristics; flag violations by number.

## Output
- The 6-dimension scored table + overall score.
- A prioritized findings table: # · Severity (Critical → Major → Minor → Enhancement) · Finding · Recommendation.
- Concrete, token-referenced fixes (semantic tokens from `shadcn-nextjs-design/DESIGN.md`).
