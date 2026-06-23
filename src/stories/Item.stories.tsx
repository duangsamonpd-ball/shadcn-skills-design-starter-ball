import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Mail, Trash2 } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
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

/** `ItemGroup` lists items with an `ItemSeparator`; `ItemHeader`/`ItemFooter` span the row. */
export const Group: Story = {
  render: () => (
    <ItemGroup className="w-80">
      <Item variant="outline" role="listitem">
        <ItemHeader>
          <ItemTitle>Notifications</ItemTitle>
          <Button variant="ghost" size="sm">
            Mark all read
          </Button>
        </ItemHeader>
        <ItemMedia variant="icon">
          <Mail />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>New message</ItemTitle>
          <ItemDescription>You have a new message from Sarah.</ItemDescription>
        </ItemContent>
        <ItemFooter>
          <ItemDescription>2 minutes ago</ItemDescription>
        </ItemFooter>
      </Item>
      <ItemSeparator />
      <Item variant="outline" role="listitem">
        <ItemMedia variant="icon">
          <Mail />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Weekly digest</ItemTitle>
          <ItemDescription>Your summary for this week is ready.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};
