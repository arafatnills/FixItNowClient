"use client"; // ক্লায়েন্ট সাইড ফর্ম হ্যান্ডেল করার জন্য

import { SearchIcon } from "lucide-react";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

export function HeroSearch() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add search logic or routing here
    console.log("Searching for pros...");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-2xl mx-auto mt-8 px-4 sm:px-0"
    >
      <Field className="w-full">
        <InputGroup className="h-14 md:h-16 rounded-full shadow-lg bg-background border border-teal-600/20 overflow-hidden flex items-center pr-2 pl-4 focus-within:ring-2 focus-within:ring-teal-600/50 transition-all">
          <InputGroupAddon
            align="inline-start"
            className="flex items-center text-muted-foreground"
          >
            <SearchIcon className="h-5 w-5 md:h-6 md:w-6 text-teal-600/70" />
          </InputGroupAddon>

          <InputGroupInput
            id="hero-search-input"
            className="flex-1 text-base md:text-lg border-none focus-visible:ring-0 px-3 h-full bg-transparent outline-none placeholder:text-muted-foreground"
            placeholder="What service do you need?..."
          />

          <InputGroupAddon align="inline-end" className="flex items-center">
            <Button
              type="submit"
              size="lg"
              className="rounded-full cursor-pointer bg-teal-600 hover:bg-teal-700 text-white h-10 md:h-12 px-6 md:px-8 text-sm md:text-base transition-colors"
            >
              Find a Pro
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </form>
  );
}
