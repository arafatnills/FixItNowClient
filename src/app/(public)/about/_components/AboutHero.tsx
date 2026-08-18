import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-teal-50/50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              About FixItNow
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
              Simplifying Home Repairs with <span className="text-teal-600 dark:text-teal-400">Trusted Experts</span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We connect homeowners and businesses with background-verified, skilled technicians for seamless plumbing, electrical, AC, and appliance services—all in one place.
            </p>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
                alt="FixItNow Technician at work"
                width={700}
                height={500}
                className="w-full h-[380px] lg:h-[460px] object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            
            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-xl hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-xl">
                ★
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900 dark:text-white">4.9 / 5.0</p>
                <p className="text-xs text-slate-500 font-medium">Customer Rating across Bangladesh</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}