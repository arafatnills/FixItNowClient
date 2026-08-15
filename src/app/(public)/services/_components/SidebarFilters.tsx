import { Star } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { getCategories } from "../_actions/getAllCategories";
import { Category } from "./MobileFilters";

export default async function SidebarFilters() {
  const categories = await getCategories();

  return (
    <div className="hidden lg:block w-64 shrink-0 space-y-8 pr-6">
      {/* Categories */}
      <div>
        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
          Categories
        </h3>
        <div className="space-y-4">
          {categories.map((cat: Category) => (
            <div key={cat.id} className="flex items-center space-x-3">
              <Checkbox
                id={`cat-${cat.id}`}
                className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
              />
              <label
                htmlFor={`cat-${cat.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-slate-600 dark:text-slate-400 hover:text-teal-600 transition-colors"
              >
                {cat.name}
              </label>
            </div>
          ))}
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
