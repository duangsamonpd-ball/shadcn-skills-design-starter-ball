import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/Native Select",
  component: NativeSelect,
  tags: ["autodocs"],
  argTypes: { disabled: { control: "boolean" } },
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = (
  <>
    <NativeSelectOption value="apple">Apple</NativeSelectOption>
    <NativeSelectOption value="banana">Banana</NativeSelectOption>
    <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
    <NativeSelectOption value="grapes">Grapes</NativeSelectOption>
  </>
);

export const Default: Story = {
  render: (args) => (
    <NativeSelect
      {...args}
      className="w-[200px]"
      defaultValue="apple"
      aria-label="Fruit"
    >
      {options}
    </NativeSelect>
  ),
};

export const Disabled: Story = {
  render: () => (
    <NativeSelect className="w-[200px]" defaultValue="apple" aria-label="Fruit" disabled>
      {options}
    </NativeSelect>
  ),
};

/** `aria-invalid` applies the destructive border + ring. */
export const Invalid: Story = {
  render: () => (
    <div className="grid w-[200px] gap-2">
      <Label htmlFor="fruit-invalid">Fruit</Label>
      <NativeSelect id="fruit-invalid" defaultValue="apple" aria-invalid aria-describedby="fruit-error">
        {options}
      </NativeSelect>
      <p id="fruit-error" className="text-sm text-destructive">
        Please pick a different fruit.
      </p>
    </div>
  ),
};
