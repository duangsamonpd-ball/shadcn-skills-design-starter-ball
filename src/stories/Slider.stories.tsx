import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Slider } from "@/components/ui/slider";

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Slider defaultValue={[50]} max={100} step={1} aria-label="Volume" className="w-64" />
  ),
};

export const Range: Story = {
  render: () => (
    <Slider defaultValue={[25, 75]} max={100} step={1} aria-label="Price range" className="w-64" />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Slider defaultValue={[50]} max={100} step={1} disabled aria-label="Volume" className="w-64" />
  ),
};
