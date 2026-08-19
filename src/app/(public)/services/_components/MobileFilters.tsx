"use client";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import SidebarFilters from "./SidebarFilters";


export type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export default function MobileFilters({ cate }: { cate: Category[] }) {
  const searchTrams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const debounceReference = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handelSearch = (value: string) => {
    const params = new URLSearchParams();

    if (debounceReference.current) {
      clearTimeout(debounceReference.current);
    }

    debounceReference.current = setTimeout(() => {
      if (value) {
        params.set("q", value.trim());
      } else {
        params.delete("q");
      }
      router.push(`${pathName}?${params.toString()}`);
    }, 500);
  };

  return (
    <div className="block lg:hidden w-full mb-8 space-y-4">
      {/* Mobile Search & Filter */}
      <div className="flex gap-2 items-center">
        <div className="relative flex-1 items-center">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
          <Input
            onChange={(e) => {
              handelSearch(e.target.value);
            }}
            defaultValue={
              searchTrams.get("q") ? searchTrams.get("q")?.toString() : ""
            }
            type="text"
            placeholder="Search services..."
            className="w-full pl-9 rounded-full bg-white dark:bg-slate-900 focus-visible:ring-teal-500"
          />
        </div>

        <div className="">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full shrink-0"
              >
                <SlidersHorizontal className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Filter services by category, price, and rating.
                </SheetDescription>
              </SheetHeader>
              <SidebarFilters cate={cate} />

              <SheetFooter >
                logout
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
