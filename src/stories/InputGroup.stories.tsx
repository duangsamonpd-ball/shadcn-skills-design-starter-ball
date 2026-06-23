import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { Search, Send } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const meta = {
  title: "Components/Input Group",
  component: InputGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupAddon>
        <Search className="size-4" aria-label="search" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." aria-label="Search" />
    </InputGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Clicking the addon (not a button) focuses the input.
    const addon = canvasElement.querySelector<HTMLElement>(
      "[data-slot=input-group-addon]"
    )!;
    await userEvent.click(addon);
    await expect(canvas.getByPlaceholderText("Search...")).toHaveFocus();
  },
};

export const WithText: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
};

/** A trailing `InputGroupButton` action. Clicking the addon focuses the input. */
export const WithButton: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupInput placeholder="Search..." aria-label="Search" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton aria-label="Submit search">
          <Search />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Clicking the button inside the addon does NOT redirect focus to the input.
    const button = canvas.getByRole("button", { name: "Submit search" });
    await userEvent.click(button);
    await expect(canvas.getByPlaceholderText("Search...")).not.toHaveFocus();
  },
};

/** `block-end` align stacks a textarea above a toolbar row. */
export const WithTextarea: Story = {
  render: () => (
    <InputGroup className="w-80">
      <InputGroupTextarea placeholder="Write a message..." aria-label="Message" />
      <InputGroupAddon align="block-end">
        <InputGroupText>Markdown supported</InputGroupText>
        <InputGroupButton className="ml-auto" aria-label="Send">
          <Send />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};
