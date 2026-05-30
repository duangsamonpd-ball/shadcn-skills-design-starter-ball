import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-background p-6">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-lg border border-border bg-card p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-card-foreground">
            create-skill-design
          </h1>
          <p className="text-sm text-muted-foreground">
            Next.js + shadcn/ui + Tailwind v4, wired to the design-token system in{" "}
            <code className="rounded-sm bg-muted px-1 py-0.5 text-xs text-foreground">
              DESIGN.md
            </code>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
    </main>
  );
}
