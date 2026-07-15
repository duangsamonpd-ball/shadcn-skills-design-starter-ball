import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Activity } from "lucide-react";
import { expect, within } from "storybook/test";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig;

// A config that binds icons and per-theme colors, exercising the icon
// branches and ChartStyle's light/dark theme output.
const iconThemeConfig = {
  desktop: {
    label: "Desktop",
    icon: Activity,
    theme: { light: "#2563eb", dark: "#3b82f6" },
  },
  mobile: {
    label: "Mobile",
    icon: Activity,
    theme: { light: "#16a34a", dark: "#22c55e" },
  },
} satisfies ChartConfig;

// A single tooltip payload item, shaped like what recharts passes.
const payloadItem = {
  dataKey: "desktop",
  name: "desktop",
  value: 186,
  color: "var(--color-desktop)",
  type: "rect" as const,
  payload: { month: "January", desktop: 186, fill: "var(--color-desktop)" },
};
const payloadItem2 = {
  dataKey: "mobile",
  name: "mobile",
  value: 80,
  color: "var(--color-mobile)",
  type: "rect" as const,
  payload: { month: "January", mobile: 80 },
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const twoItems = [payloadItem, payloadItem2] as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const oneItem = [payloadItem] as any;

const meta = {
  title: "Components/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-[480px]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};

/** Per-theme colors + icon config: exercises ChartStyle's light/dark output. */
export const ThemedWithIcons: Story = {
  render: () => (
    <ChartContainer config={iconThemeConfig} className="min-h-[200px] w-[480px]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};

/** Default dot indicator with two series. */
export const TooltipDot: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="w-[320px]">
      <ChartTooltipContent active payload={twoItems} label="January" />
    </ChartContainer>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Desktop")).toBeInTheDocument();
    await expect(canvas.getByText("Mobile")).toBeInTheDocument();
    await expect(canvas.getByText("186")).toBeInTheDocument();
  },
};

/** Single series with the line indicator nests the label. */
export const TooltipLineNested: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="w-[320px]">
      <ChartTooltipContent
        active
        payload={oneItem}
        label="January"
        indicator="line"
      />
    </ChartContainer>
  ),
};

/** Dashed indicator. */
export const TooltipDashed: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="w-[320px]">
      <ChartTooltipContent
        active
        payload={twoItems}
        label="January"
        indicator="dashed"
      />
    </ChartContainer>
  ),
};

/** Hidden label and indicator. */
export const TooltipHidden: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="w-[320px]">
      <ChartTooltipContent active payload={twoItems} hideLabel hideIndicator />
    </ChartContainer>
  ),
};

/** Icon config plus custom label/value formatters. */
export const TooltipFormatted: Story = {
  render: () => (
    <ChartContainer config={iconThemeConfig} className="w-[320px]">
      <ChartTooltipContent
        active
        payload={twoItems}
        label="January"
        labelFormatter={(value) => `Month: ${value}`}
        formatter={(value, name) => (
          <span className="tabular-nums">
            {name}: {String(value)}
          </span>
        )}
      />
    </ChartContainer>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Month: January")).toBeInTheDocument();
  },
};

/** Inactive tooltip renders nothing. */
export const TooltipInactive: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="w-[320px]">
      <ChartTooltipContent active={false} payload={twoItems} />
    </ChartContainer>
  ),
};

/** Legend with color swatches. */
export const Legend: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="w-[320px]">
      <ChartLegendContent
        payload={[
          { value: "desktop", dataKey: "desktop", color: "#2563eb", type: "square" },
          { value: "mobile", dataKey: "mobile", color: "#16a34a", type: "square" },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any}
      />
    </ChartContainer>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Desktop")).toBeInTheDocument();
  },
};

/** Legend using icons from config, aligned to the top. */
export const LegendWithIcons: Story = {
  render: () => (
    <ChartContainer config={iconThemeConfig} className="w-[320px]">
      <ChartLegendContent
        verticalAlign="top"
        payload={[
          { value: "desktop", dataKey: "desktop", color: "#2563eb", type: "square" },
          { value: "mobile", dataKey: "mobile", color: "#16a34a", type: "square" },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any}
      />
    </ChartContainer>
  ),
};

/** Legend with icons hidden falls back to color swatches. */
export const LegendHideIcon: Story = {
  render: () => (
    <ChartContainer config={iconThemeConfig} className="w-[320px]">
      <ChartLegendContent
        hideIcon
        nameKey="dataKey"
        payload={[
          { value: "desktop", dataKey: "desktop", color: "#2563eb", type: "square" },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any}
      />
    </ChartContainer>
  ),
};
