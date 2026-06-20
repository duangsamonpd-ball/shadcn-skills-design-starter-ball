"use client"

import * as React from "react"
import {
  Accessibility,
  Activity,
  AlertCircle,
  ArrowRight,
  Bell,
  Bookmark,
  Calendar,
  Camera,
  Check,
  CheckCircle,
  Clock,
  Cloud,
  Copy,
  CreditCard,
  Download,
  ExternalLink,
  Eye,
  EyeOff,
  File,
  FileText,
  Filter,
  Flag,
  Folder,
  Gift,
  Globe,
  Grid3x3,
  Heart,
  Home,
  Image,
  Layers,
  List,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Moon,
  MoreHorizontal,
  Music,
  Package,
  Palette,
  Pencil,
  Phone,
  Power,
  RefreshCw,
  Send,
  Settings,
  Share2,
  ShoppingCart,
  SquareDashedMousePointer,
  Star,
  Sun,
  Tag,
  Terminal,
  Trash2,
  TrendingUp,
  Truck,
  Upload,
  User,
  Users,
  Video,
  Wifi,
  XCircle,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { toast } from "sonner"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { cn } from "@/lib/utils"
import { docs } from "./registry"
import {
  colorGroups,
  fontFamilies,
  fontWeights,
  maxWidthScale,
  radiusBase,
  radiusTokens,
  shadowTokens,
  spacingScale,
  typeScale,
  type ColorToken,
} from "./tokens"

function CommandRow({ command }: { command: string }) {
  const [copied, setCopied] = React.useState(false)

  async function copy() {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    toast.success("Command copied")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-4 py-2.5">
      <Terminal className="size-4 shrink-0 text-muted-foreground" />
      <code className="flex-1 overflow-x-auto whitespace-nowrap font-mono text-sm text-foreground">
        {command}
      </code>
      <Button
        variant="ghost"
        size="icon"
        className="size-7 shrink-0 text-muted-foreground"
        onClick={copy}
        aria-label="Copy command"
      >
        {copied ? (
          <Check className="size-3.5 text-success" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </Button>
    </div>
  )
}

const features = [
  {
    icon: Palette,
    title: "Design tokens",
    description:
      "Every color, radius, and spacing value flows from a Figma-synced token system.",
  },
  {
    icon: Moon,
    title: "Dark mode built in",
    description:
      "Semantic CSS variables switch automatically — no per-component theming.",
  },
  {
    icon: Accessibility,
    title: "Accessible by default",
    description:
      "Built on Radix primitives with labels, focus rings, and ARIA wired up.",
  },
  {
    icon: SquareDashedMousePointer,
    title: "Copy & paste",
    description:
      "Components live in your codebase. Own the code and customize freely.",
  },
  {
    icon: Zap,
    title: "Tailwind CSS v4",
    description:
      "Modern utility syntax with @theme, size-*, and the new radius scale.",
  },
  {
    icon: ArrowRight,
    title: "Next.js 16 App Router",
    description:
      "Server Components by default, client islands only where needed.",
  },
]

export function IntroductionPage({
  onNavigate,
}: {
  onNavigate: (slug: string) => void
}) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Introduction
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Skill UI is a set of beautifully designed, accessible components built
          on shadcn/ui, Tailwind CSS v4, and Next.js. Browse the library, copy
          the code, and ship faster.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="flex size-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <feature.icon className="size-4.5" />
              </div>
              <CardTitle className="mt-2">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={() => onNavigate("installation")}>
          Get started
          <ArrowRight className="size-4" />
        </Button>
        <Button variant="outline" onClick={() => onNavigate(docs[0].slug)}>
          Browse components
        </Button>
      </div>
    </>
  )
}

const steps = [
  {
    title: "Create a Next.js project",
    body: "Scaffold a new App Router project with TypeScript and Tailwind.",
    command: "npx create-next-app@latest my-app",
  },
  {
    title: "Initialize shadcn/ui",
    body: "Set up components.json, the cn() helper, and your design tokens.",
    command: "npx shadcn@latest init",
  },
  {
    title: "Add the components you need",
    body: "Each component is copied into src/components/ui and is yours to edit.",
    command: "npx shadcn@latest add button card accordion tabs",
  },
]

export function InstallationPage() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Installation
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Get up and running in three steps. Components are installed via the
          CLI directly into your project.
        </p>
      </div>

      <ol className="flex flex-col gap-6">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-foreground">
              {index + 1}
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h2 className="text-base font-semibold text-foreground">
                {step.title}
              </h2>
              <p className="text-sm text-muted-foreground">{step.body}</p>
              <CommandRow command={step.command} />
            </div>
          </li>
        ))}
      </ol>

      <div className="rounded-lg border border-border bg-muted/40 p-4">
        <p className="text-sm font-medium text-foreground">
          Tailwind CSS v4 note
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          This starter uses Tailwind v4 — tokens live in{" "}
          <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            @theme
          </code>{" "}
          inside{" "}
          <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            globals.css
          </code>
          , not a{" "}
          <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            tailwind.config.js
          </code>
          .
        </p>
      </div>
    </>
  )
}

type Mode = "light" | "dark"

/** Surface colors for each preview mode, pulled from the base tokens so the
 *  panel reads correctly regardless of the site's active theme. */
const surfaces: Record<Mode, { bg: string; fg: string; border: string; muted: string }> = {
  light: { bg: "#ffffff", fg: "#0a0a0a", border: "#e5e5e5", muted: "#737373" },
  dark: { bg: "#0a0a0a", fg: "#fafafa", border: "#404040", muted: "#a3a3a3" },
}

function ColorSwatch({
  token,
  mode,
  surface,
}: {
  token: ColorToken
  mode: Mode
  surface: (typeof surfaces)[Mode]
}) {
  const [copied, setCopied] = React.useState(false)
  const value = token[mode]

  async function copy() {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    toast.success(`Copied ${value}`)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group flex flex-col gap-2 text-left"
      aria-label={`Copy ${token.name} ${mode} value ${value}`}
    >
      <div
        className="relative h-16 w-full overflow-hidden rounded-lg shadow-xs"
        style={{ background: value, border: `1px solid ${surface.border}` }}
      >
        <span
          className="absolute right-1.5 top-1.5 flex size-6 items-center justify-center rounded-md opacity-0 backdrop-blur-sm transition group-hover:opacity-100"
          style={{ backgroundColor: `${surface.bg}cc`, color: surface.fg }}
        >
          {copied ? (
            <Check className="size-3.5 text-success" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </span>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium" style={{ color: surface.fg }}>
          {token.name}
        </span>
        <code className="font-mono text-xs" style={{ color: surface.muted }}>
          {token.cssVar}
        </code>
        <code
          className="font-mono text-[11px] uppercase"
          style={{ color: surface.muted }}
        >
          {value}
        </code>
      </div>
    </button>
  )
}

function ColorSection({ group }: { group: (typeof colorGroups)[number] }) {
  const [mode, setMode] = React.useState<Mode>("light")
  const surface = surfaces[mode]

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-foreground">{group.name}</h2>
          <p className="text-sm text-muted-foreground">{group.description}</p>
        </div>
        <Tabs value={mode} onValueChange={(v) => setMode(v as Mode)}>
          <TabsList className="h-8">
            <TabsTrigger value="light" className="gap-1.5 text-xs">
              <Sun className="size-3.5" />
              Light
            </TabsTrigger>
            <TabsTrigger value="dark" className="gap-1.5 text-xs">
              <Moon className="size-3.5" />
              Dark
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div
        className="rounded-xl border p-5"
        style={{ backgroundColor: surface.bg, borderColor: surface.border }}
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {group.tokens.map((token) => (
            <ColorSwatch
              key={token.cssVar}
              token={token}
              mode={mode}
              surface={surface}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ColorsPage() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Colors
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Semantic color tokens sourced from the Figma design system. Toggle each
          section between{" "}
          <span className="font-medium text-foreground">Light</span> and{" "}
          <span className="font-medium text-foreground">Dark</span> to preview
          both modes side by side. Click any swatch to copy its hex value.
        </p>
      </div>

      {colorGroups.map((group) => (
        <ColorSection key={group.name} group={group} />
      ))}
    </>
  )
}

export function RadiusPage() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Radius
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          The border-radius scale derives from a single{" "}
          <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            --radius
          </code>{" "}
          base of{" "}
          <span className="font-medium text-foreground">{radiusBase}</span>.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {radiusTokens.map((radius) => (
          <div key={radius.className} className="flex flex-col items-center gap-3">
            <div
              className={cn(
                "size-20 border-2 border-primary bg-secondary",
                radius.className
              )}
            />
            <div className="flex flex-col items-center gap-0.5 text-center">
              <code className="font-mono text-sm font-medium text-foreground">
                {radius.className}
              </code>
              <span className="text-xs text-muted-foreground">
                {radius.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const SAMPLE = "The quick brown fox jumps over the lazy dog"

export function TypographyPage() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Typography
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Font families, the type scale, and weights — all driven by the{" "}
          <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            @theme
          </code>{" "}
          tokens in globals.css.
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-foreground">Font families</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {fontFamilies.map((family) => (
            <div
              key={family.cssVar}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-foreground">
                  {family.name}
                </span>
                <code className="font-mono text-xs text-muted-foreground">
                  {family.className}
                </code>
              </div>
              <p className={cn("text-3xl text-foreground", family.className)}>
                Ag
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {family.stack}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-foreground">Type scale</h2>
        <div className="flex flex-col divide-y divide-border rounded-xl border border-border">
          {typeScale.map((type) => (
            <div
              key={type.className}
              className="flex items-center gap-4 px-4 py-3"
            >
              <div className="flex w-28 shrink-0 flex-col">
                <code className="font-mono text-xs text-foreground">
                  {type.className}
                </code>
                <span className="text-xs text-muted-foreground">
                  {type.px}px
                </span>
              </div>
              <p
                className={cn(
                  "truncate font-semibold tracking-tight text-foreground",
                  type.className
                )}
              >
                {SAMPLE}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-foreground">Font weights</h2>
        <div className="flex flex-col divide-y divide-border rounded-xl border border-border">
          {fontWeights.map((weight) => (
            <div
              key={weight.className}
              className="flex items-center gap-4 px-4 py-3"
            >
              <div className="flex w-28 shrink-0 flex-col">
                <code className="font-mono text-xs text-foreground">
                  {weight.className}
                </code>
                <span className="text-xs text-muted-foreground">
                  {weight.weight}
                </span>
              </div>
              <p className={cn("truncate text-xl text-foreground", weight.className)}>
                {SAMPLE}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export function SpacingPage() {
  const maxPx = spacingScale[spacingScale.length - 1].px

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Spacing
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          A single base unit of{" "}
          <span className="font-medium text-foreground">4px</span> powers every
          gap, padding, and margin. Use with{" "}
          <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            gap-*
          </code>
          ,{" "}
          <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            p-*
          </code>
          , and{" "}
          <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            m-*
          </code>
          .
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-foreground">Scale</h2>
        <div className="flex flex-col divide-y divide-border rounded-xl border border-border">
          {spacingScale.map((space) => (
            <div key={space.scale} className="flex items-center gap-4 px-4 py-2.5">
              <code className="w-12 shrink-0 font-mono text-sm text-foreground">
                {space.scale}
              </code>
              <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">
                {space.px}px
              </span>
              <div className="flex flex-1 items-center gap-3">
                <div
                  className="h-4 rounded-xs bg-primary"
                  style={{ width: `${(space.px / maxPx) * 100}%` }}
                />
                <span className="hidden text-xs text-muted-foreground sm:inline">
                  {space.use}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-foreground">
          Container max-widths
        </h2>
        <div className="flex flex-col gap-2">
          {maxWidthScale.map((width) => (
            <div key={width.className} className="flex items-center gap-4">
              <div className="flex w-28 shrink-0 flex-col">
                <code className="font-mono text-xs text-foreground">
                  {width.className}
                </code>
                <span className="text-xs text-muted-foreground">
                  {width.px}px
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div
                  className="h-2 max-w-full rounded-xs bg-secondary"
                  style={{ width: `${(width.px / 896) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export function ShadowsPage() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Shadows
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Elevation utilities from the Tailwind v4 scale. Note shadcn uses{" "}
          <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            shadow-xs
          </code>{" "}
          where Tailwind v3 used{" "}
          <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            shadow-sm
          </code>
          .
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 rounded-xl border border-border bg-muted/30 p-8 sm:grid-cols-3 lg:grid-cols-4">
        {shadowTokens.map((shadow) => (
          <div key={shadow.className} className="flex flex-col items-center gap-3">
            <div
              className={cn(
                "flex size-20 items-center justify-center rounded-xl border border-border bg-card text-xs font-medium text-muted-foreground",
                shadow.className
              )}
            >
              {shadow.label}
            </div>
            <code className="font-mono text-xs text-foreground">
              {shadow.className}
            </code>
          </div>
        ))}
      </div>
    </>
  )
}

const iconList: { name: string; Icon: LucideIcon }[] = [
  { name: "Activity", Icon: Activity },
  { name: "AlertCircle", Icon: AlertCircle },
  { name: "Bell", Icon: Bell },
  { name: "Bookmark", Icon: Bookmark },
  { name: "Calendar", Icon: Calendar },
  { name: "Camera", Icon: Camera },
  { name: "CheckCircle", Icon: CheckCircle },
  { name: "Clock", Icon: Clock },
  { name: "Cloud", Icon: Cloud },
  { name: "CreditCard", Icon: CreditCard },
  { name: "Download", Icon: Download },
  { name: "ExternalLink", Icon: ExternalLink },
  { name: "Eye", Icon: Eye },
  { name: "EyeOff", Icon: EyeOff },
  { name: "File", Icon: File },
  { name: "FileText", Icon: FileText },
  { name: "Filter", Icon: Filter },
  { name: "Flag", Icon: Flag },
  { name: "Folder", Icon: Folder },
  { name: "Gift", Icon: Gift },
  { name: "Globe", Icon: Globe },
  { name: "Grid3x3", Icon: Grid3x3 },
  { name: "Heart", Icon: Heart },
  { name: "Home", Icon: Home },
  { name: "Image", Icon: Image },
  { name: "Layers", Icon: Layers },
  { name: "List", Icon: List },
  { name: "Lock", Icon: Lock },
  { name: "LogOut", Icon: LogOut },
  { name: "Mail", Icon: Mail },
  { name: "MapPin", Icon: MapPin },
  { name: "Menu", Icon: Menu },
  { name: "MessageSquare", Icon: MessageSquare },
  { name: "Moon", Icon: Moon },
  { name: "MoreHorizontal", Icon: MoreHorizontal },
  { name: "Music", Icon: Music },
  { name: "Package", Icon: Package },
  { name: "Pencil", Icon: Pencil },
  { name: "Phone", Icon: Phone },
  { name: "Power", Icon: Power },
  { name: "RefreshCw", Icon: RefreshCw },
  { name: "Send", Icon: Send },
  { name: "Settings", Icon: Settings },
  { name: "Share2", Icon: Share2 },
  { name: "ShoppingCart", Icon: ShoppingCart },
  { name: "Star", Icon: Star },
  { name: "Sun", Icon: Sun },
  { name: "Tag", Icon: Tag },
  { name: "Trash2", Icon: Trash2 },
  { name: "TrendingUp", Icon: TrendingUp },
  { name: "Truck", Icon: Truck },
  { name: "Upload", Icon: Upload },
  { name: "User", Icon: User },
  { name: "Users", Icon: Users },
  { name: "Video", Icon: Video },
  { name: "Wifi", Icon: Wifi },
  { name: "XCircle", Icon: XCircle },
  { name: "Zap", Icon: Zap },
]

export function IconsPage() {
  function copy(name: string) {
    navigator.clipboard.writeText(`<${name} />`)
    toast.success(`Copied <${name} />`)
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Icons
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Powered by{" "}
          <a
            href="https://lucide.dev"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-3"
          >
            lucide-react
          </a>
          . Search and click any icon to copy its JSX. Use{" "}
          <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            className=&quot;size-4&quot;
          </code>{" "}
          to size them.
        </p>
      </div>

      <Command className="rounded-xl border border-border bg-card">
        <CommandInput placeholder="Search icons..." />
        <CommandList className="max-h-[460px]">
          <CommandEmpty>No icons found.</CommandEmpty>
          <CommandGroup className="**:data-[slot=command-item]:cursor-pointer **:data-[slot=command-item]:flex-col **:data-[slot=command-item]:gap-2 **:data-[slot=command-item]:rounded-lg **:data-[slot=command-item]:border **:data-[slot=command-item]:border-border **:data-[slot=command-item]:p-4 [&_[cmdk-group-items]]:grid [&_[cmdk-group-items]]:grid-cols-3 [&_[cmdk-group-items]]:gap-2 sm:[&_[cmdk-group-items]]:grid-cols-4 md:[&_[cmdk-group-items]]:grid-cols-6">
            {iconList.map(({ name, Icon }) => (
              <CommandItem
                key={name}
                value={name}
                onSelect={() => copy(name)}
                className="text-muted-foreground data-[selected=true]:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
              >
                <Icon className="size-5" />
                <span className="w-full truncate text-center text-[11px]">
                  {name}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  )
}

const stateLegend = [
  {
    state: "Default",
    cls: "border-input",
    token: "--input",
    note: "Resting state.",
  },
  {
    state: "Focus",
    cls: "focus-visible:ring-ring/50",
    token: "--ring",
    note: "On keyboard focus — tab into any control below to see it.",
  },
  {
    state: "Error / Invalid",
    cls: "aria-invalid:border-destructive",
    token: "--destructive",
    note: "Set aria-invalid on the control.",
  },
  {
    state: "Disabled",
    cls: "disabled:opacity-50",
    token: "opacity-50",
    note: "Set the disabled prop.",
  },
]

function StateRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </div>
  )
}

function StateCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5">
      <span className="text-sm font-semibold text-foreground">{title}</span>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  )
}

export function InteractionStatesPage() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Interaction States
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Every form control documents its full state set — and the same states
          ship in the Figma library, so design and code stay in lock-step. All
          states are token-driven, so they flip correctly in light and dark.
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-foreground">The four states</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stateLegend.map((s) => (
            <div
              key={s.state}
              className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4"
            >
              <span className="text-sm font-semibold text-foreground">
                {s.state}
              </span>
              <code className="w-fit rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                {s.cls}
              </code>
              <p className="text-xs text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-foreground">
          Across the form family
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <StateCard title="Input">
            <StateRow label="Default">
              <Input placeholder="you@example.com" />
            </StateRow>
            <StateRow label="Error / Invalid">
              <Input defaultValue="not-an-email" aria-invalid />
            </StateRow>
            <StateRow label="Disabled">
              <Input placeholder="Disabled" disabled />
            </StateRow>
          </StateCard>

          <StateCard title="Textarea">
            <StateRow label="Default">
              <Textarea placeholder="Type your message here." />
            </StateRow>
            <StateRow label="Error / Invalid">
              <Textarea defaultValue="" aria-invalid />
            </StateRow>
            <StateRow label="Disabled">
              <Textarea placeholder="Disabled" disabled />
            </StateRow>
          </StateCard>

          <StateCard title="Select">
            <StateRow label="Default">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                </SelectContent>
              </Select>
            </StateRow>
            <StateRow label="Error / Invalid">
              <Select>
                <SelectTrigger className="w-full" aria-invalid>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectContent>
              </Select>
            </StateRow>
            <StateRow label="Disabled">
              <Select disabled>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Disabled" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectContent>
              </Select>
            </StateRow>
          </StateCard>

          <StateCard title="Native Select">
            <StateRow label="Default">
              <NativeSelect defaultValue="apple" aria-label="Fruit (default)">
                <NativeSelectOption value="apple">Apple</NativeSelectOption>
                <NativeSelectOption value="banana">Banana</NativeSelectOption>
              </NativeSelect>
            </StateRow>
            <StateRow label="Error / Invalid">
              <NativeSelect
                defaultValue="apple"
                aria-label="Fruit (invalid)"
                aria-invalid
              >
                <NativeSelectOption value="apple">Apple</NativeSelectOption>
                <NativeSelectOption value="banana">Banana</NativeSelectOption>
              </NativeSelect>
            </StateRow>
            <StateRow label="Disabled">
              <NativeSelect defaultValue="apple" aria-label="Fruit (disabled)" disabled>
                <NativeSelectOption value="apple">Apple</NativeSelectOption>
              </NativeSelect>
            </StateRow>
          </StateCard>

          <StateCard title="Checkbox">
            <StateRow label="Default">
              <div className="flex items-center gap-2">
                <Checkbox id="st-cb" />
                <Label htmlFor="st-cb">Accept terms</Label>
              </div>
            </StateRow>
            <StateRow label="Error / Invalid">
              <div className="flex items-center gap-2">
                <Checkbox id="st-cb-i" aria-invalid />
                <Label htmlFor="st-cb-i">Accept terms</Label>
              </div>
            </StateRow>
            <StateRow label="Disabled">
              <div className="flex items-center gap-2">
                <Checkbox id="st-cb-d" disabled />
                <Label htmlFor="st-cb-d">Accept terms</Label>
              </div>
            </StateRow>
          </StateCard>

          <StateCard title="Radio Group">
            <StateRow label="Default">
              <RadioGroup defaultValue="a" className="gap-2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="a" id="st-r-a" />
                  <Label htmlFor="st-r-a">Comfortable</Label>
                </div>
              </RadioGroup>
            </StateRow>
            <StateRow label="Error / Invalid">
              <RadioGroup className="gap-2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="a" id="st-r-i" aria-invalid />
                  <Label htmlFor="st-r-i">Comfortable</Label>
                </div>
              </RadioGroup>
            </StateRow>
            <StateRow label="Disabled">
              <RadioGroup defaultValue="a" className="gap-2" disabled>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="a" id="st-r-d" />
                  <Label htmlFor="st-r-d">Comfortable</Label>
                </div>
              </RadioGroup>
            </StateRow>
          </StateCard>

          <StateCard title="Switch">
            <StateRow label="Default">
              <div className="flex items-center gap-2">
                <Switch id="st-sw" />
                <Label htmlFor="st-sw">Airplane mode</Label>
              </div>
            </StateRow>
            <StateRow label="Error / Invalid">
              <div className="flex items-center gap-2">
                <Switch id="st-sw-i" aria-invalid />
                <Label htmlFor="st-sw-i">Airplane mode</Label>
              </div>
            </StateRow>
            <StateRow label="Disabled">
              <div className="flex items-center gap-2">
                <Switch id="st-sw-d" disabled />
                <Label htmlFor="st-sw-d">Airplane mode</Label>
              </div>
            </StateRow>
          </StateCard>

          <StateCard title="Slider">
            <StateRow label="Default">
              <Slider defaultValue={[50]} max={100} step={1} />
            </StateRow>
            <StateRow label="Disabled">
              <Slider defaultValue={[50]} max={100} step={1} disabled />
            </StateRow>
            <p className="text-xs text-muted-foreground">
              Slider has no error state — it carries no single value to validate.
            </p>
          </StateCard>

          <StateCard title="Input OTP">
            <StateRow label="Default">
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </StateRow>
            <StateRow label="Error / Invalid">
              <InputOTP maxLength={4} aria-invalid>
                <InputOTPGroup>
                  <InputOTPSlot index={0} aria-invalid />
                  <InputOTPSlot index={1} aria-invalid />
                  <InputOTPSlot index={2} aria-invalid />
                  <InputOTPSlot index={3} aria-invalid />
                </InputOTPGroup>
              </InputOTP>
            </StateRow>
            <StateRow label="Disabled">
              <InputOTP maxLength={4} disabled>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </StateRow>
          </StateCard>
        </div>
      </section>
    </>
  )
}
