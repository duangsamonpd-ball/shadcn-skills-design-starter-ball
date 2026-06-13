"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { DocEntry } from "./registry"

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = React.useState(false)

  async function copy() {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    toast.success("Copied to clipboard")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-7 text-muted-foreground"
      onClick={copy}
      aria-label={label}
    >
      {copied ? (
        <Check className="size-3.5 text-success" />
      ) : (
        <Copy className="size-3.5" />
      )}
    </Button>
  )
}

export function ComponentPreview({ entry }: { entry: DocEntry }) {
  const Demo = entry.demo

  return (
    <Tabs defaultValue="preview" className="w-full gap-4">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="preview">
        <div className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-card p-10">
          <div
            className={cn(
              "absolute inset-0 -z-10 opacity-60",
              "[background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:16px_16px]"
            )}
          />
          <Demo />
        </div>
      </TabsContent>

      <TabsContent value="code">
        <div className="relative overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <span className="font-mono text-xs text-muted-foreground">
              {entry.slug}.tsx
            </span>
            <CopyButton value={entry.code} label="Copy code" />
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
            <code className="font-mono text-foreground">{entry.code}</code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  )
}
