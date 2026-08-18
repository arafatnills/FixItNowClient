import { Compass, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="p-8 lg:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To empower homeowners with reliable, transparent, and prompt maintenance solutions while uplifting skilled technicians through continuous training and fair economic opportunities.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 lg:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To be Bangladesh’s most trusted home service ecosystem—leveraging modern technology to make every repair request as effortless as pressing a button.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}