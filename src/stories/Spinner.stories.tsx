import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Spinner />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8 text-primary" />
    </div>
  ),
};

/** Pair with a disabled button for a loading action. */
export const InButton: Story = {
  render: () => (
    <Button disabled>
      <Spinner />
      Loading...
    </Button>
  ),
};
