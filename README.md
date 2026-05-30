# shadcn-nextjs-design — Claude Code Skill

A Claude Code skill that teaches Claude how to build UI in a **Next.js (App Router) + shadcn/ui + Tailwind CSS v4** project using a fixed design-token system.

## Contents

```
.claude/skills/shadcn-nextjs-design/
├── SKILL.md   ← entry point: rules, shadcn CLI, server/client, component & page patterns
└── DESIGN.md  ← design-token registry (colors, spacing, radius, typography — 1,812 vars)
```

`SKILL.md` carries YAML frontmatter (`name` + `description`), so Claude Code auto-loads it
whenever you ask it to build or edit components, pages, forms, dialogs, tables, or styling.
`DESIGN.md` is read on demand for exact token values.

## Install into a Next.js project

Copy the skill folder into your project (or your personal skills dir):

```bash
# Project-scoped (committed, shared with the team)
mkdir -p <your-next-app>/.claude/skills
cp -R .claude/skills/shadcn-nextjs-design <your-next-app>/.claude/skills/

# Or user-scoped (available in every project)
cp -R .claude/skills/shadcn-nextjs-design ~/.claude/skills/
```

Then in that project just describe the UI you want — Claude picks up the skill automatically.
You can also invoke it explicitly with `/shadcn-nextjs-design`.

## Verify it loads

Run `/doctor` (or check the skills list) in Claude Code from the target project and confirm
`shadcn-nextjs-design` appears.
# shadcn-skills-design-starter-ball
