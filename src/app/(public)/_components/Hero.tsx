import { HeroSearch } from "./HeroSearch";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-22 lg:py-32 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 z-10">
        {/* Responsive Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Expert Home Services, <br className="hidden sm:block" />
          <span className="text-teal-600 dark:text-teal-500">
            Just a Click Away
          </span>
        </h1>

        {/* Responsive Paragraph */}
        <p className="max-w-2xl leading-normal text-muted-foreground text-base sm:text-lg md:text-xl sm:leading-8">
          From leaky pipes to full home cleaning, find trusted, vetted
          professionals in your area instantly.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <HeroSearch />
        </div>
      </div>
    </section>
  );
};

export default Hero;
