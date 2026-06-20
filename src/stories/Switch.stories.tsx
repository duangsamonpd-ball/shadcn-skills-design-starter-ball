import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: { disabled: { control: "boolean" } },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch id="airplane" {...args} />
      <Label htmlFor="airplane">Airplane mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="s2" defaultChecked />
      <Label htmlFor="s2">Enabled</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="s3" disabled />
      <Label htmlFor="s3">Airplane mode</Label>
    </div>
  ),
};

/** `aria-invalid` gives the track a destructive ring. */
export const Invalid: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="s4" aria-invalid />
      <Label htmlFor="s4">Airplane mode</Label>
    </div>
  ),
};

/** Interaction test — clicking toggles checked state and fires `onCheckedChange`. */
export const Toggle: Story = {
  args: { onCheckedChange: fn() },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch id="s-toggle" {...args} />
      <Label htmlFor="s-toggle">Airplane mode</Label>
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const sw = canvas.getByRole("switch");
    await expect(sw).not.toBeChecked();
    await userEvent.click(sw);
    await expect(sw).toBeChecked();
    await expect(args.onCheckedChange).toHaveBeenCalledWith(true);
  },
};
