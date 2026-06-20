import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    // Adds the "Visual tests" tab — run/review Chromatic visual diffs from
    // inside Storybook (links to the same project as the CI Chromatic build).
    // Sign in once via the tab to connect; CI publishing is unaffected.
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
};

export default config;
