import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MobileFilters() {
  const categories = ["All", "Plumbing", "Electrical", "Cleaning", "Repair"];

  return (
    <div className="block lg:hidden w-full mb-8 space-y-4">
      {/* Mobile Search & Filter */}
      <div className="flex gap-2 items-center">
        <div className="relative flex-1 items-center">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
          <Input
            type="text"
            placeholder="Search services..."
            className="w-full pl-9 rounded-full bg-white dark:bg-slate-900 focus-visible:ring-teal-500"
          />
        </div>
        <Button variant="outline" size="icon" className="rounded-full shrink-0">
          <SlidersHorizontal className="w-4 h-4 text-slate-600 dark:text-slate-300" />
        </Button>
      </div>

      {/* Horizontal Scrollable Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat, idx) => (
          <Button
            key={cat}
            variant={idx === 0 ? "default" : "outline"}
            className={`rounded-full h-8 text-sm ${idx === 0 ? "bg-teal-700 hover:bg-teal-800 text-white" : "bg-white dark:bg-slate-900"}`}
          >
            {cat}
          </Button>
        ))}
      </div>
    </div>
  );
}