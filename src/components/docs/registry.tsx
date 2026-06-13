import type { ComponentType } from "react"

import {
  AccordionDemo,
  BadgeDemo,
  ButtonDemo,
  CardDemo,
  CheckboxDemo,
  InputDemo,
  SwitchDemo,
  TabsDemo,
} from "./demos"
import {
  AlertDemo,
  AlertDialogDemo,
  AvatarDemo,
  BreadcrumbDemo,
  CollapsibleDemo,
  DialogDemo,
  DropdownMenuDemo,
  HoverCardDemo,
  PaginationDemo,
  PopoverDemo,
  ProgressDemo,
  RadioGroupDemo,
  SelectDemo,
  SeparatorDemo,
  SheetDemo,
  SkeletonDemo,
  SliderDemo,
  SonnerDemo,
  TableDemo,
  TextareaDemo,
  ToggleDemo,
  ToggleGroupDemo,
  TooltipDemo,
} from "./demos-extra"
import {
  AspectRatioDemo,
  CalendarDemo,
  CarouselDemo,
  ContextMenuDemo,
  DrawerDemo,
  InputOTPDemo,
  MenubarDemo,
  NavigationMenuDemo,
  ResizableDemo,
  ScrollAreaDemo,
} from "./demos-extra2"
import { FormDemo } from "./demos-form"

export type DocStatus = "new" | "updated"

export type DocEntry = {
  slug: string
  name: string
  description: string
  category: string
  cli: string
  demo: ComponentType
  code: string
  status?: DocStatus
}

export const docs: DocEntry[] = [
  {
    slug: "accordion",
    name: "Accordion",
    category: "Disclosure",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    cli: "npx shadcn@latest add accordion",
    demo: AccordionDemo,
    status: "new",
    code: `<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Product Information</AccordionTrigger>
    <AccordionContent>
      Our flagship product combines cutting-edge technology with sleek design.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Shipping Details</AccordionTrigger>
    <AccordionContent>
      We offer worldwide shipping through trusted courier partners.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
  },
  {
    slug: "button",
    name: "Button",
    category: "Actions",
    description:
      "Displays a button or a component that looks like a button, with multiple variants and sizes.",
    cli: "npx shadcn@latest add button",
    demo: ButtonDemo,
    code: `<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">
  <Trash2 className="size-4" />
  Delete
</Button>`,
  },
  {
    slug: "badge",
    name: "Badge",
    category: "Display",
    description:
      "A small label for statuses, categories, counts, and other short metadata.",
    cli: "npx shadcn@latest add badge",
    demo: BadgeDemo,
    code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`,
  },
  {
    slug: "card",
    name: "Card",
    category: "Display",
    description:
      "A flexible container for grouping related content, actions, and media.",
    cli: "npx shadcn@latest add card",
    demo: CardDemo,
    code: `<Card>
  <CardHeader>
    <CardTitle>Upgrade to Pro</CardTitle>
    <CardDescription>Unlock advanced components and themes.</CardDescription>
    <CardAction>
      <Badge variant="secondary">New</Badge>
    </CardAction>
  </CardHeader>
  <CardContent>Ship faster with production-ready patterns.</CardContent>
  <CardFooter className="flex justify-end gap-2">
    <Button variant="outline">Maybe later</Button>
    <Button>Upgrade</Button>
  </CardFooter>
</Card>`,
  },
  {
    slug: "tabs",
    name: "Tabs",
    category: "Navigation",
    description:
      "A set of layered sections of content, displayed one panel at a time.",
    cli: "npx shadcn@latest add tabs",
    demo: TabsDemo,
    code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>`,
  },
  {
    slug: "input",
    name: "Input",
    category: "Forms",
    description:
      "A form field for short text entry, paired with a label and helper text.",
    cli: "npx shadcn@latest add input",
    demo: InputDemo,
    code: `<div className="flex flex-col gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
  <p className="text-sm text-muted-foreground">
    We'll never share your email with anyone.
  </p>
</div>`,
  },
  {
    slug: "switch",
    name: "Switch",
    category: "Forms",
    description:
      "A control that toggles between an on and off state for a single setting.",
    cli: "npx shadcn@latest add switch",
    demo: SwitchDemo,
    code: `<div className="flex items-center gap-3">
  <Switch id="notifications" defaultChecked />
  <Label htmlFor="notifications">Push notifications</Label>
</div>`,
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    category: "Forms",
    description:
      "A control that allows the user to toggle one or more options on or off.",
    cli: "npx shadcn@latest add checkbox",
    demo: CheckboxDemo,
    code: `<div className="flex items-center gap-3">
  <Checkbox id="terms" defaultChecked />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`,
  },
  {
    slug: "textarea",
    name: "Textarea",
    category: "Forms",
    description: "A multi-line text field for longer free-form input.",
    cli: "npx shadcn@latest add textarea",
    demo: TextareaDemo,
    code: `<div className="flex flex-col gap-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message here." />
</div>`,
  },
  {
    slug: "select",
    name: "Select",
    category: "Forms",
    description:
      "A dropdown for picking a single value from a list of options.",
    cli: "npx shadcn@latest add select",
    demo: SelectDemo,
    code: `<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    category: "Forms",
    description:
      "A set of mutually exclusive options where only one can be selected.",
    cli: "npx shadcn@latest add radio-group",
    demo: RadioGroupDemo,
    code: `<RadioGroup defaultValue="comfortable">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
</RadioGroup>`,
  },
  {
    slug: "slider",
    name: "Slider",
    category: "Forms",
    description: "Select a value or range by dragging along a track.",
    cli: "npx shadcn@latest add slider",
    demo: SliderDemo,
    code: `<Slider defaultValue={[50]} max={100} step={1} />`,
  },
  {
    slug: "toggle",
    name: "Toggle",
    category: "Forms",
    description: "A two-state button that can be either on or off.",
    cli: "npx shadcn@latest add toggle",
    demo: ToggleDemo,
    code: `<Toggle aria-label="Toggle bold">
  <Bold className="size-4" />
</Toggle>`,
  },
  {
    slug: "toggle-group",
    name: "Toggle Group",
    category: "Forms",
    description: "A set of toggles where one or more can be pressed at once.",
    cli: "npx shadcn@latest add toggle-group",
    demo: ToggleGroupDemo,
    code: `<ToggleGroup type="multiple" variant="outline">
  <ToggleGroupItem value="bold"><Bold className="size-4" /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><Italic className="size-4" /></ToggleGroupItem>
</ToggleGroup>`,
  },
  {
    slug: "avatar",
    name: "Avatar",
    category: "Display",
    description: "An image element with a fallback for representing a user.",
    cli: "npx shadcn@latest add avatar",
    demo: AvatarDemo,
    code: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
  },
  {
    slug: "table",
    name: "Table",
    category: "Display",
    description: "A responsive table for displaying tabular data.",
    cli: "npx shadcn@latest add table",
    demo: TableDemo,
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  },
  {
    slug: "separator",
    name: "Separator",
    category: "Display",
    description: "A thin line that visually divides content, horizontal or vertical.",
    cli: "npx shadcn@latest add separator",
    demo: SeparatorDemo,
    code: `<Separator />
<div className="flex h-5 items-center gap-4">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
</div>`,
  },
  {
    slug: "alert",
    name: "Alert",
    category: "Feedback",
    description: "A callout for short, important messages and statuses.",
    cli: "npx shadcn@latest add alert",
    demo: AlertDemo,
    code: `<Alert>
  <Terminal />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>`,
  },
  {
    slug: "progress",
    name: "Progress",
    category: "Feedback",
    description: "A bar that indicates completion progress of a task.",
    cli: "npx shadcn@latest add progress",
    demo: ProgressDemo,
    code: `<Progress value={66} />`,
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    category: "Feedback",
    description: "A placeholder shown while content is loading.",
    cli: "npx shadcn@latest add skeleton",
    demo: SkeletonDemo,
    code: `<div className="flex items-center gap-4">
  <Skeleton className="size-12 rounded-full" />
  <div className="flex flex-col gap-2">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[160px]" />
  </div>
</div>`,
  },
  {
    slug: "sonner",
    name: "Sonner",
    category: "Feedback",
    description: "An opinionated toast notification, triggered imperatively.",
    cli: "npx shadcn@latest add sonner",
    demo: SonnerDemo,
    code: `import { toast } from "sonner"

<Button
  variant="outline"
  onClick={() => toast("Event created", { description: "Sunday at 9:00 AM" })}
>
  Show toast
</Button>`,
  },
  {
    slug: "dialog",
    name: "Dialog",
    category: "Overlay",
    description: "A modal window overlaid on the page for focused tasks.",
    cli: "npx shadcn@latest add dialog",
    demo: DialogDemo,
    code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    category: "Overlay",
    description: "A modal that interrupts the user to confirm a critical action.",
    cli: "npx shadcn@latest add alert-dialog",
    demo: AlertDialogDemo,
    code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
  },
  {
    slug: "sheet",
    name: "Sheet",
    category: "Overlay",
    description: "A panel that slides in from the edge of the screen.",
    cli: "npx shadcn@latest add sheet",
    demo: SheetDemo,
    code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Make changes to your profile here.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
  },
  {
    slug: "popover",
    name: "Popover",
    category: "Overlay",
    description: "Rich floating content anchored to a trigger element.",
    cli: "npx shadcn@latest add popover",
    demo: PopoverDemo,
    code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <h4 className="font-medium leading-none">Dimensions</h4>
    <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
  </PopoverContent>
</Popover>`,
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    category: "Overlay",
    description: "A menu of actions or options triggered by a button.",
    cli: "npx shadcn@latest add dropdown-menu",
    demo: DropdownMenuDemo,
    code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    category: "Overlay",
    description: "A small label that appears on hover or focus of an element.",
    cli: "npx shadcn@latest add tooltip",
    demo: TooltipDemo,
    code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>Add to library</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
  },
  {
    slug: "hover-card",
    name: "Hover Card",
    category: "Overlay",
    description: "A preview card revealed when hovering over a trigger.",
    cli: "npx shadcn@latest add hover-card",
    demo: HoverCardDemo,
    code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>`,
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    category: "Navigation",
    description: "Shows the user's location within the site hierarchy.",
    cli: "npx shadcn@latest add breadcrumb",
    demo: BreadcrumbDemo,
    code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  },
  {
    slug: "pagination",
    name: "Pagination",
    category: "Navigation",
    description: "Navigation between pages of a paginated collection.",
    cli: "npx shadcn@latest add pagination",
    demo: PaginationDemo,
    code: `<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`,
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    category: "Disclosure",
    description: "An interactive section that expands and collapses its content.",
    cli: "npx shadcn@latest add collapsible",
    demo: CollapsibleDemo,
    code: `<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost" size="icon"><ChevronsUpDown className="size-4" /></Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    @radix-ui/colors
  </CollapsibleContent>
</Collapsible>`,
  },
  {
    slug: "drawer",
    name: "Drawer",
    category: "Overlay",
    description: "A panel that slides up from the bottom, great for mobile.",
    cli: "npx shadcn@latest add drawer",
    demo: DrawerDemo,
    code: `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Move Goal</DrawerTitle>
      <DrawerDescription>Set your daily activity goal.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
  },
  {
    slug: "calendar",
    name: "Calendar",
    category: "Forms",
    description: "A date field for selecting single dates or ranges.",
    cli: "npx shadcn@latest add calendar",
    demo: CalendarDemo,
    code: `const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`,
  },
  {
    slug: "carousel",
    name: "Carousel",
    category: "Display",
    description: "A slideshow for cycling through images or cards.",
    cli: "npx shadcn@latest add carousel",
    demo: CarouselDemo,
    code: `<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{index + 1}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
  },
  {
    slug: "resizable",
    name: "Resizable",
    category: "Layout",
    description: "Draggable, resizable panel groups for split layouts.",
    cli: "npx shadcn@latest add resizable",
    demo: ResizableDemo,
    code: `<ResizablePanelGroup orientation="horizontal" className="rounded-lg border">
  <ResizablePanel defaultSize={50}>One</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>Two</ResizablePanel>
</ResizablePanelGroup>`,
  },
  {
    slug: "navigation-menu",
    name: "Navigation Menu",
    category: "Navigation",
    description: "A collection of links with rich dropdown panels.",
    cli: "npx shadcn@latest add navigation-menu",
    demo: NavigationMenuDemo,
    code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink asChild><a href="#">Introduction</a></NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
  },
  {
    slug: "menubar",
    name: "Menubar",
    category: "Navigation",
    description: "A desktop-style horizontal menu bar with dropdowns.",
    cli: "npx shadcn@latest add menubar",
    demo: MenubarDemo,
    code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
  },
  {
    slug: "context-menu",
    name: "Context Menu",
    category: "Overlay",
    description: "A menu surfaced on right-click of an element.",
    cli: "npx shadcn@latest add context-menu",
    demo: ContextMenuDemo,
    code: `<ContextMenu>
  <ContextMenuTrigger>Right-click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back <ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Reload</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
  },
  {
    slug: "scroll-area",
    name: "Scroll Area",
    category: "Layout",
    description: "A styled, cross-browser scrollable region.",
    cli: "npx shadcn@latest add scroll-area",
    demo: ScrollAreaDemo,
    code: `<ScrollArea className="h-56 w-full max-w-xs rounded-md border">
  <div className="p-4">
    {tags.map((tag) => (
      <div key={tag}>
        <div className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </div>
    ))}
  </div>
</ScrollArea>`,
  },
  {
    slug: "aspect-ratio",
    name: "Aspect Ratio",
    category: "Layout",
    description: "Constrains content to a fixed width-to-height ratio.",
    cli: "npx shadcn@latest add aspect-ratio",
    demo: AspectRatioDemo,
    code: `<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
  <span>16 / 9</span>
</AspectRatio>`,
  },
  {
    slug: "input-otp",
    name: "Input OTP",
    category: "Forms",
    description: "An accessible one-time-password / verification code input.",
    cli: "npx shadcn@latest add input-otp",
    demo: InputOTPDemo,
    code: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
  },
  {
    slug: "form",
    name: "Form",
    category: "Forms",
    description:
      "Accessible, type-safe forms built with React Hook Form and Zod validation.",
    cli: "npx shadcn@latest add form",
    demo: FormDemo,
    code: `const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
})

const form = useForm({
  resolver: zodResolver(formSchema),
  defaultValues: { username: "", email: "" },
})

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>`,
  },
]

export type PageEntry = {
  slug: string
  name: string
  group: string
}

/** Standalone doc pages (non-component), shown above the component list. */
export const pages: PageEntry[] = [
  { slug: "introduction", name: "Introduction", group: "Getting Started" },
  { slug: "installation", name: "Installation", group: "Getting Started" },
  { slug: "colors", name: "Colors", group: "Design Tokens" },
  { slug: "typography", name: "Typography", group: "Design Tokens" },
  { slug: "spacing", name: "Spacing", group: "Design Tokens" },
  { slug: "radius", name: "Radius", group: "Design Tokens" },
  { slug: "shadows", name: "Shadows", group: "Design Tokens" },
  { slug: "icons", name: "Icons", group: "Design Tokens" },
]

/** Page groups in display order. */
export const pageGroups: { name: string; items: PageEntry[] }[] = [
  "Getting Started",
  "Design Tokens",
].map((name) => ({ name, items: pages.filter((p) => p.group === name) }))

export function isPage(slug: string): boolean {
  return pages.some((p) => p.slug === slug)
}

export function getPage(slug: string): PageEntry | undefined {
  return pages.find((p) => p.slug === slug)
}

export function getDoc(slug: string): DocEntry {
  return docs.find((d) => d.slug === slug) ?? docs[0]
}

/** True when the slug maps to a real page or component (used to validate URL state). */
export function isValidSlug(slug: string): boolean {
  return isPage(slug) || docs.some((d) => d.slug === slug)
}

/** The slug to land on when a breadcrumb section is clicked: first item of that section. */
export function firstSlugOfSection(section: string): string {
  const group = pageGroups.find((g) => g.name === section)
  return group ? group.items[0].slug : docs[0].slug
}
