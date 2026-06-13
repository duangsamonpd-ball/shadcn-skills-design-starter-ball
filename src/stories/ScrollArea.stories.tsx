import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "Components/Scroll Area",
  component: ScrollArea,
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 25 }).map((_, i) => `v1.2.0-beta.${25 - i}`);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-56 w-56 rounded-md border">
      <div className="p-3">
        <p className="mb-2 text-sm font-medium">Tags</p>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="py-1 text-sm">{tag}</div>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
