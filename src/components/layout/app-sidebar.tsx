"use client"

import {
  BookOpen,
  Boxes,
  Download,
  Move3d,
  Palette,
  Ruler,
  Smile,
  SquareStack,
  Type,
  type LucideIcon,
} from "lucide-react"

import { docs, pageGroups } from "@/components/docs/registry"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

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

export function AppSidebar({
  activeSlug,
  onSelect,
}: {
  activeSlug: string
  onSelect: (slug: string) => void
}) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-1 py-1.5">
          <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Boxes className="size-4.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-none">Skill UI</span>
            <span className="text-xs text-muted-foreground">
              Component Library
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {pageGroups.map((group) => (
          <SidebarGroup key={group.name}>
            <SidebarGroupLabel>{group.name}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((page) => {
                  const Icon = pageIcons[page.slug] ?? BookOpen
                  return (
                    <SidebarMenuItem key={page.slug}>
                      <SidebarMenuButton
                        isActive={page.slug === activeSlug}
                        onClick={() => onSelect(page.slug)}
                      >
                        <Icon className="size-4" />
                        <span>{page.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {docs.map((item) => (
                <SidebarMenuItem key={item.slug}>
                  <SidebarMenuButton
                    isActive={item.slug === activeSlug}
                    onClick={() => onSelect(item.slug)}
                  >
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                  {item.status === "new" && (
                    <SidebarMenuBadge className="text-success">
                      New
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <p className="px-2 py-1 text-xs text-muted-foreground">
          {docs.length} components · Tailwind v4
        </p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
