import type { Preview } from "@storybook/nextjs-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import { Geist, Geist_Mono } from "next/font/google";

// Design tokens + Tailwind v4 (processed by the project's postcss.config.mjs).
// globals.css §base also styles <body> with bg-background/text-foreground, so the
// Storybook canvas follows the active theme automatically.
import "../src/app/globals.css";

// Mirror the app's fonts so `font-sans` / `font-mono` resolve to Geist.
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    // Theme provides the surface; disable the separate backgrounds control.
    backgrounds: { disable: true },
    // Fail the test run on accessibility violations (axe runs on every story).
    a11y: { test: "error" },
    options: {
      storySort: {
        order: [
          "Getting Started",
          ["Introduction", "Installation"],
          "Design Tokens",
          ["Colors", "Typography", "Spacing", "Radius", "Shadows", "Icons"],
          "Guides",
          "Components",
        ],
      },
    },
  },

  decorators: [
    // Apply the Geist font variables around every story.
    (Story) => (
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Story />
      </div>
    ),
    // Light / dark toggle — flips the `.dark` class the design tokens key off.
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
