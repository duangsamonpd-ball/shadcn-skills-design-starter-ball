import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
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

/** `FieldSet` + `FieldLegend` group related fields with a `FieldSeparator` between them. */
export const Fieldset: Story = {
  render: () => (
    <FieldSet className="w-80">
      <FieldLegend>Profile</FieldLegend>
      <FieldDescription>This appears on your public profile.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="f-name">Name</FieldLabel>
          <Input id="f-name" placeholder="Ada Lovelace" />
        </Field>
        <FieldSeparator>Then</FieldSeparator>
        <Field orientation="horizontal">
          <Checkbox id="f-public" aria-labelledby="f-public-title" />
          <FieldContent>
            <FieldTitle id="f-public-title">Make profile public</FieldTitle>
            <FieldDescription>Anyone can view your profile.</FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

/** `FieldError` accepts an `errors` array and de-duplicates messages into a list. */
export const ErrorList: Story = {
  render: () => (
    <Field className="w-72" data-invalid>
      <FieldLabel htmlFor="f-user">Username</FieldLabel>
      <Input id="f-user" aria-invalid />
      <FieldError
        errors={[
          { message: "Username is required." },
          { message: "Must be at least 3 characters." },
          { message: "Username is required." },
        ]}
      />
    </Field>
  ),
};
