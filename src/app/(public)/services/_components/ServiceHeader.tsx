"use client";

import Image from "next/image";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function ServiceHeader() {
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
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-6">
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Our Services
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
          Find professional, reliable home services to keep your space in
          perfect condition.
        </p>

        {/* Shadcn Input */}
        <div className="hidden lg:flex relative max-w-md items-center">
          <Search className="absolute left-3 w-5 h-5 text-slate-400 z-10" />
          <Input
            onChange={(e) => {
              handelSearch(e.target.value);
            }}
            defaultValue={
              searchTrams.get("q") ? searchTrams.get("q")?.toString() : ""
            }
            type="text"
            placeholder="Search for a service"
            className="w-full pl-10 py-6 rounded-xl bg-white dark:bg-slate-900 focus-visible:ring-teal-500"
          />
        </div>
      </div>



      {/* Optimized Next Image */}
      {/* <div className="w-full hidden md:block md:w-1/2 h-56 md:h-72 rounded-2xl overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800&auto=format&fit=crop"
          alt="Home Services"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div> */}
    </div>
  );
}
