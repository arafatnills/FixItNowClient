import { MapPin, BadgeCheck } from "lucide-react";

export default function ServiceHeader({ serviceName, location }: { serviceName: string; location: string }) {
  return (
    <header className="space-y-3">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">
        {serviceName}
      </h1>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <MapPin className="size-4 shrink-0 text-teal-600 dark:text-teal-500" />
          {location}
        </span>
        <span className="flex items-center gap-1.5">
          <BadgeCheck className="size-4 shrink-0 text-teal-600 dark:text-teal-500" />
          Verified technician
        </span>
      </div>
    </header>
  );
}