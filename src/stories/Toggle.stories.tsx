import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bold } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "outline"] },
    size: { control: "select", options: ["sm", "default", "lg"] },
    disabled: { control: "boolean" },
  },
  args: { variant: "default", size: "default", disabled: false },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <Bold className="size-4" />
    </Toggle>
  ),
};

export const WithText: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold className="size-4" />
      Bold
    </Toggle>
  ),
};
