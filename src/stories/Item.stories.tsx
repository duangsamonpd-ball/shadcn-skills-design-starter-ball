import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Mail, Trash2 } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/Item",
  component: Item,
  tags: ["autodocs"],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Item variant="outline" className="w-80">
      <ItemMedia variant="icon">
        <Mail />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>New message</ItemTitle>
        <ItemDescription>You have a new message from Sarah.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon" aria-label="Delete">
          <Trash2 className="size-4" />
        </Button>
      </ItemActions>
    </Item>
  ),
};
