"use client"

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Mail,
  Search,
  Trash2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { Spinner } from "@/components/ui/spinner"

// ── Button Group ──────────────────────────────────────────────────
export function ButtonGroupDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ButtonGroup>
        <Button variant="outline">
          <ArrowLeft className="size-4" />
          Previous
        </Button>
        <Button variant="outline">
          Next
          <ArrowRight className="size-4" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText>https://</ButtonGroupText>
        <Input placeholder="acme.com" aria-label="Domain" className="w-40" />
        <ButtonGroupSeparator />
        <Button variant="outline">Copy</Button>
      </ButtonGroup>
    </div>
  )
}

// ── Field ─────────────────────────────────────────────────────────
export function FieldDemo() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="field-email">Email</FieldLabel>
        <Input id="field-email" type="email" placeholder="you@example.com" />
        <FieldDescription>We&apos;ll never share your email.</FieldDescription>
      </Field>
      <Field data-invalid>
        <FieldLabel htmlFor="field-password">Password</FieldLabel>
        <Input id="field-password" type="password" aria-invalid />
        <FieldError>Password must be at least 8 characters.</FieldError>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="field-terms" />
        <FieldLabel htmlFor="field-terms">Accept terms and conditions</FieldLabel>
      </Field>
    </FieldGroup>
  )
}

// ── Item ──────────────────────────────────────────────────────────
export function ItemDemo() {
  return (
    <Item variant="outline" className="w-full max-w-sm">
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
  )
}

// ── Kbd ───────────────────────────────────────────────────────────
export function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>B</Kbd>
        </KbdGroup>{" "}
        to toggle the sidebar.
      </p>
    </div>
  )
}

// ── Spinner ───────────────────────────────────────────────────────
export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner />
      <Spinner className="size-6 text-primary" />
      <Button disabled>
        <Spinner />
        Loading...
      </Button>
    </div>
  )
}

// ── Native Select ─────────────────────────────────────────────────
export function NativeSelectDemo() {
  return (
    <NativeSelect className="w-[200px]" defaultValue="apple" aria-label="Fruit">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
      <NativeSelectOption value="grapes">Grapes</NativeSelectOption>
    </NativeSelect>
  )
}

// ── Input Group ───────────────────────────────────────────────────
export function InputGroupDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." aria-label="Search" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="npm install shadcn" aria-label="Install command" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton aria-label="Copy">
            <Copy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <Check className="text-primary" />
        </InputGroupAddon>
        <InputGroupInput
          defaultValue="username-is-available"
          readOnly
          aria-label="Username"
        />
      </InputGroup>
    </div>
  )
}
