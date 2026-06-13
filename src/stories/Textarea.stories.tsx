import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: { disabled: { control: "boolean" } },
  args: { placeholder: "Type your message here." },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Textarea {...args} className="w-72" />,
};

export const WithLabel: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="msg">Your message</Label>
      <Textarea id="msg" placeholder="Type your message here." />
    </div>
  ),
};
