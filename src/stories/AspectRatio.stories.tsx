import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const meta = {
  title: "Components/Aspect Ratio",
  component: AspectRatio,
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <AspectRatio
        ratio={16 / 9}
        className="flex items-center justify-center rounded-lg bg-muted"
      >
        <span className="text-sm font-medium text-muted-foreground">16 / 9</span>
      </AspectRatio>
    </div>
  ),
};
