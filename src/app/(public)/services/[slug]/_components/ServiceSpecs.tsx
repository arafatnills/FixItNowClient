import { Wrench, MapPin, CalendarDays, Clock } from "lucide-react";

export default function ServiceSpecs({ categoryName, location, formattedDate }: { categoryName: string; location: string; formattedDate: string }) {
  const specs = [
    { icon: Wrench, label: "Category", value: categoryName },
    { icon: MapPin, label: "Service area", value: location || "—" },
    { icon: CalendarDays, label: "Listed on", value: formattedDate },
    { icon: Clock, label: "Response time", value: "Within 24 hours" },
  ];

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-900 sm:text-xl dark:text-white">Service details</h2>
      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {specs.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <Icon className="mt-0.5 size-5 shrink-0 text-teal-600 dark:text-teal-500" />
            <div className="min-w-0">
              <dt className="text-xs font-medium text-slate-400">{label}</dt>
              <dd className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}