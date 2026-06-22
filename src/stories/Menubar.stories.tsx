import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { expect, screen, userEvent, within } from "storybook/test";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const meta = {
  title: "Components/Menubar",
  component: Menubar,
  tags: ["autodocs"],
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByText("File"));
    const item = await screen.findByText("Print");
    await expect(item).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
  },
};

/** Submenu, checkbox + radio items, labels — the full feature set. */
function MenubarFull() {
  const [bookmarks, setBookmarks] = React.useState(true);
  const [position, setPosition] = React.useState("bottom");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={bookmarks}
            onCheckedChange={setBookmarks}
          >
            Always Show Bookmarks
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarLabel>Panel Position</MenubarLabel>
          <MenubarRadioGroup value={position} onValueChange={setPosition}>
            <MenubarRadioItem value="bottom">Bottom</MenubarRadioItem>
            <MenubarRadioItem value="right">Right</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export const FullFeatured: Story = {
  render: () => <MenubarFull />,
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByText("File"));
    const menu = await screen.findByRole("menu");
    await userEvent.hover(within(menu).getByText("Share"));
    await expect(await screen.findByText("Email link")).toBeInTheDocument();
    await userEvent.keyboard("{Escape}"); // close submenu
    await userEvent.keyboard("{Escape}"); // close menu
  },
};
