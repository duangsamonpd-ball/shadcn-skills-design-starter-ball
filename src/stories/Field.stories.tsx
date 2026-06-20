import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const meta = {
  title: "Components/Field",
  component: Field,
  tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field className="w-72">
      <FieldLabel htmlFor="f-email">Email</FieldLabel>
      <Input id="f-email" type="email" placeholder="you@example.com" />
      <FieldDescription>We&apos;ll never share your email.</FieldDescription>
    </Field>
  ),
};

/** `data-invalid` on the field + `aria-invalid` on the control surfaces an error message. */
export const Invalid: Story = {
  render: () => (
    <Field className="w-72" data-invalid>
      <FieldLabel htmlFor="f-pass">Password</FieldLabel>
      <Input id="f-pass" type="password" aria-invalid />
      <FieldError>Password must be at least 8 characters.</FieldError>
    </Field>
  ),
};

/** Horizontal orientation pairs a control with its label inline. */
export const Horizontal: Story = {
  render: () => (
    <FieldGroup className="w-72">
      <Field orientation="horizontal">
        <Checkbox id="f-terms" />
        <FieldLabel htmlFor="f-terms">Accept terms and conditions</FieldLabel>
      </Field>
    </FieldGroup>
  ),
};
