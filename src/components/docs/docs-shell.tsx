"use client"

import * as React from "react"
import { BookOpen, Check, Copy, Terminal } from "lucide-react"
import { toast } from "sonner"

import { AppSidebar } from "@/components/layout/app-sidebar"
import { CommandMenu } from "@/components/layout/command-menu"
import { ModeToggle } from "@/components/layout/mode-toggle"
import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ColorsPage,
  IconsPage,
  InstallationPage,
  InteractionStatesPage,
  IntroductionPage,
  RadiusPage,
  ShadowsPage,
  SpacingPage,
  TypographyPage,
} from "@/components/docs/pages"
import {
  firstSlugOfSection,
  getDoc,
  getPage,
  isValidSlug,
} from "@/components/docs/registry"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

function InstallCommand({ command }: { command: string }) {
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
        aria-label="Copy install command"
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

const DEFAULT_SLUG = "introduction"

function slugFromUrl(): string {
  const slug = new URLSearchParams(window.location.search).get("p")
  return slug && isValidSlug(slug) ? slug : DEFAULT_SLUG
}

function subscribeToUrl(onChange: () => void) {
  window.addEventListener("popstate", onChange)
  return () => window.removeEventListener("popstate", onChange)
}

export function DocsShell() {
  // #3 — the URL is the source of truth for the active page, so it's linkable,
  // bookmarkable, and Back/Forward-navigable. SSR falls back to the default slug.
  const activeSlug = React.useSyncExternalStore(
    subscribeToUrl,
    slugFromUrl,
    () => DEFAULT_SLUG,
  )
  const contentRef = React.useRef<HTMLDivElement>(null)
  const isFirstRender = React.useRef(true)

  // #5 — after a navigation, move focus to the content region so keyboard/SR users
  // land on the new page instead of being stranded on the sidebar (skip first paint).
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    contentRef.current?.focus()
  }, [activeSlug])

  // #3 — write the active page into the URL, then notify the store so the view updates.
  const navigate = React.useCallback((slug: string) => {
    const url = slug === DEFAULT_SLUG ? window.location.pathname : `?p=${slug}`
    window.history.pushState({ slug }, "", url)
    window.dispatchEvent(new PopStateEvent("popstate"))
  }, [])

  const page = getPage(activeSlug)
  const entry = getDoc(activeSlug)
  const section = page ? page.group : "Components"
  const pageName = page ? page.name : entry.name

  return (
    <SidebarProvider>
      <AppSidebar activeSlug={activeSlug} onSelect={navigate} />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/80 px-4 backdrop-blur-md">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-1 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink asChild>
                  <button
                    type="button"
                    onClick={() => navigate(firstSlugOfSection(section))}
                  >
                    {section}
                  </button>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{pageName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="ml-auto flex items-center gap-2">
            <CommandMenu onSelect={navigate} />
            <Button
              variant="outline"
              size="icon"
              asChild
              aria-label="Open documentation"
            >
              <a
                href="https://ui.shadcn.com/docs"
                target="_blank"
                rel="noreferrer"
              >
                <BookOpen className="size-4" />
              </a>
            </Button>
            <ModeToggle />
          </div>
        </header>

        {/* SidebarInset already renders the <main> landmark — keep this a <div> to avoid a nested/duplicate main */}
        <div className="flex-1 overflow-y-auto">
          {/* #5 — announce the new page to screen readers after client-side navigation */}
          <div aria-live="polite" className="sr-only">
            {pageName}
          </div>
          <div
            ref={contentRef}
            tabIndex={-1}
            className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-10 outline-none md:px-8"
          >
            {activeSlug === "introduction" ? (
              <IntroductionPage onNavigate={navigate} />
            ) : activeSlug === "installation" ? (
              <InstallationPage />
            ) : activeSlug === "colors" ? (
              <ColorsPage />
            ) : activeSlug === "typography" ? (
              <TypographyPage />
            ) : activeSlug === "spacing" ? (
              <SpacingPage />
            ) : activeSlug === "radius" ? (
              <RadiusPage />
            ) : activeSlug === "shadows" ? (
              <ShadowsPage />
            ) : activeSlug === "icons" ? (
              <IconsPage />
            ) : activeSlug === "states" ? (
              <InteractionStatesPage />
            ) : (
              <>
                <div className="flex flex-col gap-3">
                  <Badge variant="secondary" className="w-fit">
                    {entry.category}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {entry.name}
                  </h1>
                  <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                    {entry.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-semibold text-foreground">
                    Installation
                  </h2>
                  <InstallCommand command={entry.cli} />
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-semibold text-foreground">
                    Example
                  </h2>
                  <ComponentPreview entry={entry} />
                </div>
              </>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
