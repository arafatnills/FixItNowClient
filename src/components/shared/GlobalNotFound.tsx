import { Button } from "@/components/ui/button";
import { Wrench, Home, Search, MapPinOff } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <section className="relative flex-1 flex items-center justify-center overflow-hidden py-20 px-4">
        {/* Blueprint-style grid background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-size-[36px_36px]" />

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-teal-600/20 dark:bg-teal-600/20 rounded-full blur-[160px]" />

        <div className="relative z-10 w-full max-w-xl mx-auto">
          {/* Eyebrow */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-700/20 bg-teal-700/6 text-[11px] font-mono uppercase tracking-[0.25em] text-teal-700 dark:text-teal-400 dark:border-teal-400/20 dark:bg-teal-400/6">
              <MapPinOff className="h-3.5 w-3.5" />
              Dispatch Error
            </div>
          </div>

          {/* The ticket */}
          <div className="relative">
            {/* Stamp — the signature element */}
            <div className="absolute -top-5 -right-3 sm:right-6 z-20 -rotate-12 select-none pointer-events-none">
              <div className="border-[3px] border-red-600/80 dark:border-red-500/80 rounded-md px-3 py-1.5 sm:px-4 sm:py-2">
                <span className="block font-mono font-bold tracking-[0.15em] text-red-600/80 dark:text-red-500/80 text-sm sm:text-lg">
                  VOID
                </span>
              </div>
            </div>

            <div
              className="relative bg-card border border-border rounded-2xl shadow-xl overflow-hidden"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, transparent, transparent 2px, rgba(15,118,110,0.015) 2px, rgba(15,118,110,0.015) 4px)",
              }}
            >
              {/* Ticket header strip */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-dashed border-border bg-muted/40">
                <div className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    FixItNow · Work Order
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  #ERR-404
                </span>
              </div>

              {/* Ticket body */}
              <div className="px-6 sm:px-10 py-10 text-center space-y-6">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground [font-family:var(--font-display,inherit)]">
                  No job on file
                </h1>
                <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  {`This page was never scheduled. The request either moved,
                  finished, or doesn't exist - check the address and try
                  again.`}
                </p>

                {/* Ticket fields */}
                <div className="rounded-xl border border-border bg-muted/30 text-left max-w-sm mx-auto divide-y divide-dashed divide-border font-mono text-xs">
                  <div className="flex items-center justify-between px-4 py-2.5">
                    <span className="text-muted-foreground">
                      Requested page
                    </span>
                    <span className="text-foreground truncate max-w-35">
                      unknown route
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5">
                    <span className="text-muted-foreground">
                      Technician assigned
                    </span>
                    <span className="text-foreground">none</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5">
                    <span className="text-muted-foreground">Status</span>
                    <span className="inline-flex items-center gap-1.5 text-red-600 dark:text-red-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-600 dark:bg-red-500" />
                      cancelled
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button
                    asChild
                    size={"lg"}
                    className="cursor-pointer py-5 rounded-sm"
                  >
                    <Link href={"/"} className="flex items-center gap-2">
                      <Home size={30} />
                      Back to home
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant={"outline"}
                    size={"lg"}
                    className="cursor-pointer py-5 rounded-sm"
                  >
                    <Link href={"/services"} className="flex items-center gap-2">
                      <Search className="h-4 w-4" />
                      Browse services
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Perforated tear line */}
              <div className="relative h-0 border-t-2 border-dashed border-border">
                <div className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-background border border-border" />
                <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-background border border-border" />
              </div>

              {/* Ticket footer */}
              <div className="px-6 py-3 flex items-center justify-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
                  Keep this stub for your records
                </span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2 justify-center text-sm">
            <Link
              href="/services"
              className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              All services
            </Link>
            <span className="text-border">/</span>
            <Link
              href="/technicians"
              className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Find a technician
            </Link>
            <span className="text-border">/</span>
            <Link
              href="/dashboard"
              className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              My dashboard
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
