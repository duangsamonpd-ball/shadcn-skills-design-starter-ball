import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable" className="gap-3">
      {[
        ["default", "Default"],
        ["comfortable", "Comfortable"],
        ["compact", "Compact"],
      ].map(([value, label]) => (
        <div key={value} className="flex items-center gap-2">
          <RadioGroupItem value={value} id={value} />
          <Label htmlFor={value}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable" className="gap-3" disabled>
      {[
        ["default", "Default"],
        ["comfortable", "Comfortable"],
        ["compact", "Compact"],
      ].map(([value, label]) => (
        <div key={value} className="flex items-center gap-2">
          <RadioGroupItem value={value} id={`d-${value}`} />
          <Label htmlFor={`d-${value}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};

/** `aria-invalid` on each item gives the destructive ring. */
export const Invalid: Story = {
  render: () => (
    <div className="grid gap-2">
      <RadioGroup className="gap-3">
        {[
          ["default", "Default"],
          ["comfortable", "Comfortable"],
          ["compact", "Compact"],
        ].map(([value, label]) => (
          <div key={value} className="flex items-center gap-2">
            <RadioGroupItem value={value} id={`i-${value}`} aria-invalid />
            <Label htmlFor={`i-${value}`}>{label}</Label>
          </div>
        ))}
      </RadioGroup>
      <p className="text-sm text-destructive">Please choose an option.</p>
    </div>
  ),
};
