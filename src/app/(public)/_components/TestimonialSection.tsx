import { TestimonialCarousel } from "./TestimonialCarousel";
import { TestimonialHeader } from "./TestimonialHeader";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      quote: "The plumber arrived within an hour and fixed my leak perfectly. Very professional and transparent pricing. Highly recommend!",
      author: "Sarah Johnson",
      location: "Gulshan, Dhaka",
      rating: 5,
    },
    {
      id: 2,
      quote: "I used the cleaning service for my new apartment. The team was thorough and left everything sparkling. Best service in town.",
      author: "Ahmed Kabir",
      location: "Banani, Dhaka",
      rating: 5,
    },
    {
      id: 3,
      quote: "The AC repair technician was very knowledgeable. He explained the issue clearly and fixed it quickly. Great experience!",
      author: "Nusrat Jahan",
      location: "Uttara, Dhaka",
      rating: 5,
    },
    {
      id: 4,
      quote: "Excellent electrical repair service. They found the short circuit issue in minutes and fixed it safely. Worth every penny.",
      author: "Rafiqul Islam",
      location: "Dhanmondi, Dhaka",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <TestimonialHeader />
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}