"use client"

import * as React from "react"
import {
  BookOpen,
  Box,
  Download,
  Move3d,
  Palette,
  Ruler,
  Search,
  Smile,
  SquareStack,
  Type,
  type LucideIcon,
} from "lucide-react"

import { docs, pageGroups } from "@/components/docs/registry"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

const pageIcons: Record<string, LucideIcon> = {
  introduction: BookOpen,
  installation: Download,
  colors: Palette,
  typography: Type,
  spacing: Move3d,
  radius: Ruler,
  shadows: SquareStack,
  icons: Smile,
}

export function CommandMenu({ onSelect }: { onSelect: (slug: string) => void }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  function run(slug: string) {
    setOpen(false)
    onSelect(slug)
  }

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        aria-label="Search documentation"
        className="relative size-9 justify-start p-0 text-muted-foreground sm:w-56 sm:px-3"
      >
        <Search className="size-4 sm:mr-2" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 hidden h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
          ⌘K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {pageGroups.map((group) => (
            <CommandGroup key={group.name} heading={group.name}>
              {group.items.map((page) => {
                const Icon = pageIcons[page.slug] ?? BookOpen
                return (
                  <CommandItem
                    key={page.slug}
                    value={`${group.name} ${page.name}`}
                    onSelect={() => run(page.slug)}
                  >
                    <Icon className="size-4" />
                    <span>{page.name}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Components">
            {docs.map((doc) => (
              <CommandItem
                key={doc.slug}
                value={`Components ${doc.name}`}
                onSelect={() => run(doc.slug)}
              >
                <Box className="size-4" />
                <span>{doc.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
