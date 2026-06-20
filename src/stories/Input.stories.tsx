import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: { type: "text", placeholder: "Email", disabled: false },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <Input {...args} className="w-72" />,
};

/** Pair with a `<Label htmlFor>` for an accessible field. */
export const WithLabel: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled" },
  render: (args) => <Input {...args} className="w-72" />,
};

/** Set `aria-invalid` to surface an error — destructive border + ring, plus a message. */
export const Invalid: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="email-invalid">Email</Label>
      <Input
        id="email-invalid"
        type="email"
        defaultValue="not-an-email"
        aria-invalid
        aria-describedby="email-error"
      />
      <p id="email-error" className="text-sm text-destructive">
        Enter a valid email address.
      </p>
    </div>
  ),
};
