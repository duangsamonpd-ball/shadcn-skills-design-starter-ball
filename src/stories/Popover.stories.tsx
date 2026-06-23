import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, screen, userEvent, waitForElementToBeRemoved, within } from "storybook/test";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="grid gap-3">
          <p className="text-sm font-medium">Dimensions</p>
          <div className="grid gap-2">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
  play: async ({ canvasElement }) => {
    await userEvent.click(
      within(canvasElement).getByRole("button", { name: "Open popover" })
    );
    const content = await screen.findByText("Dimensions");
    await expect(content).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await waitForElementToBeRemoved(content);
  },
};

/** `PopoverHeader` + `PopoverTitle`/`PopoverDescription` structure the content. */
export const WithHeader: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">About</Button>
      </PopoverTrigger>
      <PopoverContent aria-labelledby="pop-title">
        <PopoverHeader>
          <PopoverTitle id="pop-title">Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the width and height for the layer.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
  play: async ({ canvasElement }) => {
    await userEvent.click(
      within(canvasElement).getByRole("button", { name: "About" })
    );
    await expect(await screen.findByText("Dimensions")).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
  },
};

/** `PopoverAnchor` positions the content relative to an element other than the trigger. */
export const WithAnchor: Story = {
  render: () => (
    <Popover defaultOpen>
      <PopoverAnchor asChild>
        <div className="rounded-md border border-border px-3 py-2 text-sm">
          Anchored here
        </div>
      </PopoverAnchor>
      <PopoverContent aria-label="Anchored popover">
        <p className="text-sm">This popover is anchored to the box above.</p>
      </PopoverContent>
    </Popover>
  ),
};
