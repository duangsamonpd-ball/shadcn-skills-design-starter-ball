import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="c2" defaultChecked />
      <Label htmlFor="c2">Subscribe to newsletter</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="c3" disabled />
      <Label htmlFor="c3">Disabled</Label>
    </div>
  ),
};

/** `aria-invalid` gives the box a destructive border + ring. */
export const Invalid: Story = {
  render: () => (
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <Checkbox id="c4" aria-invalid aria-describedby="c4-error" />
        <Label htmlFor="c4">Accept terms and conditions</Label>
      </div>
      <p id="c4-error" className="text-sm text-destructive">
        You must accept before continuing.
      </p>
    </div>
  ),
};
