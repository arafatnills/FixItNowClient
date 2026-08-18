import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl bg-slate-900 text-white p-10 lg:p-16 overflow-hidden shadow-xl border border-slate-800">
          
          <div className="relative z-10 max-w-2xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Experience Seamless Home Repair?
            </h2>
            <p className="text-slate-300 text-base lg:text-lg">
              Book a verified technician in less than two minutes, or join our growing network of service experts.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-all shadow-md hover:shadow-teal-600/20"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/become-technician"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold transition-all"
              >
                <Wrench className="w-4 h-4 text-teal-400" />
                Join as Technician
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}