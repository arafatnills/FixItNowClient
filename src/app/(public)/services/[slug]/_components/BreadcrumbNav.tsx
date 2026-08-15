import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BreadcrumbNav({ serviceName }: { serviceName: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-xs text-slate-500 sm:text-sm dark:text-slate-400">
      <Link href="/" className="shrink-0 hover:text-teal-600">Home</Link>
      <ChevronRight className="size-3.5 shrink-0" />
      <Link href="/services" className="shrink-0 hover:text-teal-600">Services</Link>
      <ChevronRight className="size-3.5 shrink-0" />
      <span className="truncate font-medium text-slate-700 dark:text-slate-200">
        {serviceName}
      </span>
    </nav>
  );
}