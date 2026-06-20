// Color + radius tokens mirrored from src/app/globals.css (DESIGN.md §1).
// Keep in sync with globals.css — do not diverge values by hand.

export type ColorToken = {
  name: string
  cssVar: string
  light: string
  dark: string
}

export type ColorGroup = {
  name: string
  description: string
  tokens: ColorToken[]
}

export const colorGroups: ColorGroup[] = [
  {
    name: "Base & Surfaces",
    description: "Page background, foreground text, and elevated surfaces.",
    tokens: [
      { name: "Background", cssVar: "--background", light: "#ffffff", dark: "#0a0a0a" },
      { name: "Foreground", cssVar: "--foreground", light: "#0a0a0a", dark: "#fafafa" },
      { name: "Card", cssVar: "--card", light: "#ffffff", dark: "#171717" },
      { name: "Card Foreground", cssVar: "--card-foreground", light: "#0a0a0a", dark: "#fafafa" },
      { name: "Popover", cssVar: "--popover", light: "#ffffff", dark: "#262626" },
      { name: "Popover Foreground", cssVar: "--popover-foreground", light: "#0a0a0a", dark: "#fafafa" },
    ],
  },
  {
    name: "Semantic",
    description: "Brand, supporting, and status colors used across components.",
    tokens: [
      { name: "Primary", cssVar: "--primary", light: "#171717", dark: "#e5e5e5" },
      { name: "Primary Foreground", cssVar: "--primary-foreground", light: "#fafafa", dark: "#171717" },
      { name: "Secondary", cssVar: "--secondary", light: "#f5f5f5", dark: "#262626" },
      { name: "Secondary Foreground", cssVar: "--secondary-foreground", light: "#0a0a0a", dark: "#fafafa" },
      { name: "Muted", cssVar: "--muted", light: "#f5f5f5", dark: "#262626" },
      { name: "Muted Foreground", cssVar: "--muted-foreground", light: "#6b6b6b", dark: "#a3a3a3" },
      { name: "Accent", cssVar: "--accent", light: "#f5f5f5", dark: "#404040" },
      { name: "Accent Foreground", cssVar: "--accent-foreground", light: "#171717", dark: "#fafafa" },
      { name: "Destructive", cssVar: "--destructive", light: "#b91c1c", dark: "#f87171" },
    ],
  },
  {
    name: "Borders & Inputs",
    description: "Dividers, input outlines, and focus rings.",
    tokens: [
      { name: "Border", cssVar: "--border", light: "#e5e5e5", dark: "#404040" },
      { name: "Input", cssVar: "--input", light: "#e5e5e5", dark: "#171717" },
      { name: "Ring", cssVar: "--ring", light: "#737373", dark: "#737373" },
    ],
  },
  {
    name: "Sidebar",
    description: "Dedicated palette for the navigation sidebar surface.",
    tokens: [
      { name: "Sidebar", cssVar: "--sidebar", light: "#fafafa", dark: "#171717" },
      { name: "Sidebar Foreground", cssVar: "--sidebar-foreground", light: "#0a0a0a", dark: "#fafafa" },
      { name: "Sidebar Primary", cssVar: "--sidebar-primary", light: "#171717", dark: "#0588f0" },
      { name: "Sidebar Primary Foreground", cssVar: "--sidebar-primary-foreground", light: "#fafafa", dark: "#fafafa" },
      { name: "Sidebar Accent", cssVar: "--sidebar-accent", light: "#f5f5f5", dark: "#262626" },
      { name: "Sidebar Accent Foreground", cssVar: "--sidebar-accent-foreground", light: "#171717", dark: "#fafafa" },
      { name: "Sidebar Border", cssVar: "--sidebar-border", light: "#d4d4d4", dark: "rgba(255,255,255,0.80)" },
      { name: "Sidebar Ring", cssVar: "--sidebar-ring", light: "#737373", dark: "#737373" },
    ],
  },
  {
    name: "Charts",
    description: "Sequential palette for data visualization.",
    tokens: [
      { name: "Chart 1", cssVar: "--chart-1", light: "#5eb1ef", dark: "#5eb1ef" },
      { name: "Chart 2", cssVar: "--chart-2", light: "#0090ff", dark: "#0090ff" },
      { name: "Chart 3", cssVar: "--chart-3", light: "#0588f0", dark: "#0588f0" },
      { name: "Chart 4", cssVar: "--chart-4", light: "#0d74ce", dark: "#0d74ce" },
      { name: "Chart 5", cssVar: "--chart-5", light: "#113264", dark: "#113264" },
    ],
  },
]

export type RadiusToken = {
  name: string
  className: string
  value: string
}

export const radiusTokens: RadiusToken[] = [
  { name: "Small", className: "rounded-sm", value: "4px" },
  { name: "Medium", className: "rounded-md", value: "6px" },
  { name: "Large", className: "rounded-lg", value: "8px" },
  { name: "Extra Large", className: "rounded-xl", value: "12px" },
  { name: "2XL", className: "rounded-2xl", value: "16px" },
]

/** The base value all radius steps derive from (--radius in globals.css). */
export const radiusBase = "0.5rem (8px)"

// ── Typography ──────────────────────────────────────────────────────

export type FontFamily = {
  name: string
  cssVar: string
  className: string
  stack: string
}

export const fontFamilies: FontFamily[] = [
  { name: "Sans", cssVar: "--font-sans", className: "font-sans", stack: "Geist Sans, ui-sans-serif, system-ui" },
  { name: "Mono", cssVar: "--font-mono", className: "font-mono", stack: "Geist Mono, ui-monospace, monospace" },
  { name: "Heading", cssVar: "--font-heading", className: "font-heading", stack: "Geist Sans, ui-sans-serif, system-ui" },
]

export type TypeScaleToken = {
  className: string
  px: number
}

export const typeScale: TypeScaleToken[] = [
  { className: "text-xs", px: 12 },
  { className: "text-sm", px: 14 },
  { className: "text-base", px: 16 },
  { className: "text-lg", px: 18 },
  { className: "text-xl", px: 20 },
  { className: "text-2xl", px: 24 },
  { className: "text-3xl", px: 30 },
  { className: "text-4xl", px: 36 },
  { className: "text-5xl", px: 48 },
]

export type FontWeightToken = {
  name: string
  className: string
  weight: number
}

export const fontWeights: FontWeightToken[] = [
  { name: "Light", className: "font-light", weight: 300 },
  { name: "Normal", className: "font-normal", weight: 400 },
  { name: "Medium", className: "font-medium", weight: 500 },
  { name: "Semibold", className: "font-semibold", weight: 600 },
  { name: "Bold", className: "font-bold", weight: 700 },
  { name: "Extrabold", className: "font-extrabold", weight: 800 },
]

// ── Spacing ─────────────────────────────────────────────────────────

export type SpacingToken = {
  scale: string
  px: number
  use: string
}

/** 1 unit = 4px. Use with gap-* · p-* · m-*. */
export const spacingScale: SpacingToken[] = [
  { scale: "0.5", px: 2, use: "Icon tight gap" },
  { scale: "1", px: 4, use: "Icon inner gap" },
  { scale: "1.5", px: 6, use: "Element close" },
  { scale: "2", px: 8, use: "List item gap" },
  { scale: "3", px: 12, use: "Field inner group" },
  { scale: "4", px: 16, use: "Form field standard" },
  { scale: "5", px: 20, use: "Sub-section" },
  { scale: "6", px: 24, use: "Form section" },
  { scale: "8", px: 32, use: "Layout gap" },
  { scale: "10", px: 40, use: "Section margin" },
  { scale: "12", px: 48, use: "Page section" },
  { scale: "16", px: 64, use: "Hero section" },
]

// ── Shadows ─────────────────────────────────────────────────────────

export type ShadowToken = {
  className: string
  label: string
}

/** Tailwind v4 elevation scale (shadcn uses shadow-xs for the old v3 -sm). */
export const shadowTokens: ShadowToken[] = [
  { className: "shadow-2xs", label: "2XS" },
  { className: "shadow-xs", label: "XS" },
  { className: "shadow-sm", label: "SM" },
  { className: "shadow-md", label: "MD" },
  { className: "shadow-lg", label: "LG" },
  { className: "shadow-xl", label: "XL" },
  { className: "shadow-2xl", label: "2XL" },
]

export type MaxWidthToken = {
  className: string
  px: number
}

export const maxWidthScale: MaxWidthToken[] = [
  { className: "max-w-xs", px: 320 },
  { className: "max-w-sm", px: 384 },
  { className: "max-w-md", px: 448 },
  { className: "max-w-lg", px: 512 },
  { className: "max-w-xl", px: 576 },
  { className: "max-w-2xl", px: 672 },
  { className: "max-w-3xl", px: 768 },
  { className: "max-w-4xl", px: 896 },
]
