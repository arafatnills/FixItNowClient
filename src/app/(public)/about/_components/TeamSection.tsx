import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      name: "Tanvir Ahmed",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Sadia Rahman",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Mahmud Hasan",
      role: "Lead Technician Supervisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Meet the Leadership
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            The dedicated minds working round the clock to deliver dependable home services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm text-center"
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {member.name}
              </h4>
              <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}