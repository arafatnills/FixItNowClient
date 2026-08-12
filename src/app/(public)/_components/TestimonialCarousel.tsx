"use client";

import  { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TestimonialCard } from "./TestimonialCard";

interface TestimonialData {
  id: number;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export const TestimonialCarousel = ({
  testimonials,
}: {
  testimonials: TestimonialData[];
}) => {
  const [plugin] = useState(() =>
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <div className="relative px-4 md:px-12">
      <Carousel
        plugins={[plugin]}
        onMouseEnter={plugin.stop}
        onMouseLeave={plugin.reset}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full py-2">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                  rating={testimonial.rating}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
        <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
      </Carousel>
    </div>
  );
};
