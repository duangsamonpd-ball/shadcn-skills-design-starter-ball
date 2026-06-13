import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-72 grid gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">@ball starred 3 repos</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon">
            <ChevronsUpDown className="size-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-3 py-2 text-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="grid gap-2">
        <div className="rounded-md border px-3 py-2 text-sm">@stitches/react</div>
        <div className="rounded-md border px-3 py-2 text-sm">@shadcn/ui</div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
