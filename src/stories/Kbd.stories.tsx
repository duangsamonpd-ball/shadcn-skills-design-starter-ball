import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

const meta = {
  title: "Components/Kbd",
  component: Kbd,
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Kbd>⌘</Kbd>,
};

/** Group keys to show a shortcut chord. */
export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
};

export const InText: Story = {
  render: () => (
    <p className="text-sm text-muted-foreground">
      Press{" "}
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>B</Kbd>
      </KbdGroup>{" "}
      to toggle the sidebar.
    </p>
  ),
};
