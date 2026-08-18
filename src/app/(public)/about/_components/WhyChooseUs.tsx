import { ShieldCheck, BadgeDollarSign, Clock, Award } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Professionals",
      desc: "Every technician goes through strict background checks and skill verification tests.",
    },
    {
      icon: BadgeDollarSign,
      title: "Transparent Pricing",
      desc: "No hidden charges or surprise invoices. Upfront standardized rates before work begins.",
    },
    {
      icon: Clock,
      title: "On-Time Service",
      desc: "Book slots according to your schedule, with guaranteed punctual arrivals.",
    },
    {
      icon: Award,
      title: "Service Warranty",
      desc: "We stand behind our work. Enjoy a 7-day post-service warranty on all repairs.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Why Choose FixItNow?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            We are setting a higher standard for on-demand home and appliance maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}