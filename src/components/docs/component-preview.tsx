"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { DocEntry } from "./registry"

const VOID_TAGS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
])

/** Light-weight HTML pretty-printer — enough to read the rendered markup +
 *  its Tailwind classes. Not a full formatter (mixed text/element nodes stay
 *  on one line), but stable and dependency-free. */
function formatHtml(raw: string): string {
  const lines = raw.replace(/>\s*</g, ">\n<").split("\n")
  let depth = 0
  const out: string[] = []

  for (const token of lines) {
    const line = token.trim()
    if (!line) continue

    const isClosing = /^<\//.test(line)
    const isComment = /^<!--/.test(line)
    const selfContained = /^<[^>]+>.*<\/[^>]+>$/.test(line) // <tag …>text</tag>
    const tagName = line.match(/^<\/?([a-zA-Z0-9-]+)/)?.[1]?.toLowerCase()
    const isVoid = /\/>$/.test(line) || (!!tagName && VOID_TAGS.has(tagName))
    const isOpening = /^<[^/!]/.test(line) && !isVoid && !selfContained

    if (isClosing) depth = Math.max(0, depth - 1)
    out.push("  ".repeat(depth) + line)
    if (isOpening && !isComment) depth++
  }

  return out.join("\n")
}

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

type CodeView = "react" | "html"

export function ComponentPreview({ entry }: { entry: DocEntry }) {
  const Demo = entry.demo
  const previewRef = React.useRef<HTMLDivElement>(null)
  const [html, setHtml] = React.useState("")
  const [view, setView] = React.useState<CodeView>("react")

  // Capture the rendered markup (with Tailwind classes) from the live preview
  // after first paint. The preview tab is mounted by default, so its DOM is
  // available; we snapshot it into state so it survives tab switches.
  React.useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (previewRef.current) setHtml(formatHtml(previewRef.current.innerHTML))
    })
    return () => cancelAnimationFrame(id)
  }, [])

  const code = view === "react" ? entry.code : html || "<!-- rendering… -->"
  const filename = view === "react" ? `${entry.slug}.tsx` : `${entry.slug}.html`

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
          <div ref={previewRef}>
            <Demo />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="code">
        <div className="relative overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-3 py-2">
            <div className="flex items-center gap-3">
              <div
                role="tablist"
                aria-label="Code format"
                className="flex items-center gap-0.5 rounded-md bg-muted p-0.5"
              >
                {(["react", "html"] as const).map((v) => (
                  <button
                    key={v}
                    role="tab"
                    aria-selected={view === v}
                    onClick={() => setView(v)}
                    className={cn(
                      "rounded-sm px-2 py-1 text-xs font-medium transition-colors",
                      view === v
                        ? "bg-card text-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {v === "react" ? "React" : "HTML"}
                  </button>
                ))}
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                {filename}
              </span>
            </div>
            <CopyButton value={code} label="Copy code" />
          </div>
          <pre className="max-h-[480px] overflow-auto p-4 text-sm leading-relaxed">
            <code className="font-mono text-foreground">{code}</code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  )
}
