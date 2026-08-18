// TestimonialCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  location: string;
  rating: number;
};

export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setCount(api.scrollSnapList().length);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="-ml-4">
          {testimonials.map((t) => (
            <CarouselItem key={t.id} className="pl-4 basis-full md:basis-1/4">
              <figure className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < t.rating
                          ? "fill-amber-500 text-amber-500"
                          : "fill-transparent text-slate-300 dark:text-slate-700",
                      )}
                    />
                  ))}
                </div>

                <blockquote className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {t.author}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.location}
                  </p>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex cursor-pointer" />
        <CarouselNext className="hidden md:flex cursor-pointer" />
      </Carousel>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer",
              {
                "bg-teal-600 w-6": index + 1 === current,
                "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50":
                  index + 1 !== current,
              },
            )}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
