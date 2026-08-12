import React from "react";
import { Search, Calendar, CheckCircle } from "lucide-react";

import { StepCard } from "./StepCard"; 
import { SectionHeader } from "@/components/shared/SectionHeader";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "1. Find your service",
      description:
        "Browse our extensive list of services or search for exactly what you need.",
      icon: Search,
    },
    {
      id: 2,
      title: "2. Book a pro",
      description:
        "Choose a top-rated technician and schedule a time that works for you.",
      icon: Calendar,
    },
    {
      id: 3,
      title: "3. Job done",
      description:
        "Relax while our professional takes care of the issue. Pay securely online.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          title="How it works"
          subtitle="Three simple steps to a better home."
        />

        <div className="relative mt-8">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-slate-200 dark:bg-slate-800 z-0" />

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step) => (
              <StepCard
                key={step.id}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
