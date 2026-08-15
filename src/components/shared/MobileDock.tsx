"use client";

// components/shared/MobileDock.tsx

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DOCK_HIDDEN_PREFIXES, navLinks } from "./NavLinks";

const DOCK_LABELS: Record<string, string> = {
  "/": "Home",
  "/services": "Services",
  "/about": "About",
  "/contact": "Contact",
};

export default function MobileDock() {
  const pathname = usePathname();

  if (DOCK_HIDDEN_PREFIXES.some((p) => pathname.startsWith(p))) return null;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/85 backdrop-blur-xl supports-backdrop-filter:bg-background/60 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto grid h-16 max-w-lg grid-cols-4 items-center px-2">
        {navLinks.map(({ name, href, icon: Icon }) => {
          const active = isActive(href);

          return (
            <li key={href} className="flex justify-center">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 transition-colors active:scale-95",
                  active
                    ? "text-teal-600 dark:text-teal-500"
                    : "text-muted-foreground",
                )}
              >
                {/* active indicator */}
                <span
                  className={cn(
                    "absolute top-0 h-0.5 w-8 rounded-full bg-teal-600 transition-opacity duration-200 dark:bg-teal-500",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
                <Icon
                  className="size-5 shrink-0"
                  strokeWidth={active ? 2.5 : 2}
                />
                <span
                  className={cn(
                    "text-[10px] leading-none",
                    active ? "font-semibold" : "font-medium",
                  )}
                >
                  {DOCK_LABELS[href] ?? name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
