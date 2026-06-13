"use client"

import { ArrowRight, Bell, Check, Loader2, Trash2 } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">
          <Trash2 className="size-4" />
          Delete
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
        <Button disabled>
          <Loader2 className="size-4 animate-spin" />
          Loading
        </Button>
        <Button>
          Continue <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="secondary">
        <Check className="size-3" />
        Verified
      </Badge>
    </div>
  )
}

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Upgrade to Pro</CardTitle>
        <CardDescription>
          Unlock advanced components, themes, and priority support.
        </CardDescription>
        <CardAction>
          <Badge variant="secondary">New</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Get unlimited access to every block in the registry and ship faster
        with production-ready patterns.
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Maybe later</Button>
        <Button>Upgrade</Button>
      </CardFooter>
    </Card>
  )
}

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full max-w-md"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent>
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent>
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3–5 business days.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent>
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch id="notifications" defaultChecked />
        <Label htmlFor="notifications" className="flex items-center gap-2">
          <Bell className="size-4" />
          Push notifications
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="marketing" />
        <Label htmlFor="marketing">Marketing emails</Label>
      </div>
    </div>
  )
}

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" defaultChecked />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="updates" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="updates">Send me product updates</Label>
          <p className="text-sm text-muted-foreground">
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  )
}

export function InputDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="demo-email">Email</Label>
      <Input id="demo-email" type="email" placeholder="you@example.com" />
      <p className="text-sm text-muted-foreground">
        We&apos;ll never share your email with anyone.
      </p>
    </div>
  )
}

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent
        value="account"
        className="mt-4 text-sm text-muted-foreground"
      >
        Make changes to your account here. Click save when you&apos;re done.
      </TabsContent>
      <TabsContent
        value="password"
        className="mt-4 text-sm text-muted-foreground"
      >
        Change your password here. After saving, you&apos;ll be logged out.
      </TabsContent>
    </Tabs>
  )
}
