"use client";
import { Star } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Category } from "./MobileFilters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SidebarFilters({
  cate,
  query,
}: {
  cate: Category[];
  query: { [key: string]: string | string[] | undefined };
}) {
  const categories = Array.isArray(cate) ? cate : [cate];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const selected = searchParams.getAll("category");

  const toggleCategory = (catId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.getAll("category");

    params.delete("category");

    const isChecked = current.includes(catId);
    const next = isChecked
      ? current.filter((c) => c !== catId)
      : [...current, catId];

    next.forEach((c) => params.append("category", c));
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="hidden lg:block w-64 shrink-0 space-y-8 pr-6">
      {/* Categories */}
      <div>
        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
          Categories
        </h3>
        <div className="space-y-4">
          {categories.map((cat: Category) => {
            const isChecked = selected.includes(cat.name);
            return (
              <div key={cat.id} className="flex items-center space-x-3">
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={() => toggleCategory(cat.name)}
                  id={`cat-${cat.id}`}
                  className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                />
                <label
                  htmlFor={`cat-${cat.id}`}
                  onClick={() => toggleCategory(cat.name)}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-slate-600 dark:text-slate-400 hover:text-teal-600 transition-colors"
                >
                  {cat.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Shadcn Slider */}
      <div>
        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
          Price Range
        </h3>
        <Slider defaultValue={[0]} max={5000} step={100} className="w-full" />
        <div className="flex justify-between mt-3 text-xs text-slate-500 font-medium">
          <span>৳0</span>
          <span>৳5000+</span>
        </div>
      </div>

      {/* Ratings */}
      <div>
        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
          Ratings
        </h3>
        <div className="space-y-4">
          {["4.5+", "4.0+"].map((rate, i) => (
            <div key={rate} className="flex items-center space-x-3">
              <Checkbox
                id={`rate-${i}`}
                className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
              />
              <label
                htmlFor={`rate-${i}`}
                className="flex items-center gap-1 text-sm font-medium cursor-pointer text-slate-600 dark:text-slate-400"
              >
                {rate}{" "}
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
