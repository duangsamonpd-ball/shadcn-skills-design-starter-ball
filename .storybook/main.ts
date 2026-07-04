import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    // Docs-only MDX pages (Getting Started, Design Tokens, Guides).
    "../src/**/*.mdx",
    // Component CSF stories.
    "../src/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@storybook/addon-vitest",
    // Adds an "HTML" tab per story — the rendered DOM with Tailwind classes,
    // formatted via prettier. Mirrors the docs site's React | HTML toggle.
    "@whitespace/storybook-addon-html",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
};

export default config;
