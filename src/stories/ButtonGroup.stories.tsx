import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

const meta = {
  title: "Components/Button Group",
  component: ButtonGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">
        <ArrowLeft className="size-4" />
        Previous
      </Button>
      <Button variant="outline">
        Next
        <ArrowRight className="size-4" />
      </Button>
    </ButtonGroup>
  ),
};

/** Compose text, an input, and a separator into one group. */
export const WithInput: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>https://</ButtonGroupText>
      <Input placeholder="acme.com" aria-label="Domain" className="w-40" />
      <ButtonGroupSeparator />
      <Button variant="outline">Copy</Button>
    </ButtonGroup>
  ),
};
