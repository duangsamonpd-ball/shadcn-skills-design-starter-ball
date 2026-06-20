import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
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

/** Interaction test — typing updates the input value. */
export const Typing: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Input aria-label="Email" placeholder="Email" className="w-72" />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { name: "Email" });
    await userEvent.type(input, "hello@example.com");
    await expect(input).toHaveValue("hello@example.com");
  },
};
