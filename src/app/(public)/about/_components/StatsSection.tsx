export default function StatsSection() {
  const stats = [
    { value: "25,000+", label: "Completed Repairs" },
    { value: "1,200+", label: "Verified Technicians" },
    { value: "98.5%", label: "Satisfaction Rate" },
    { value: "30 Min", label: "Average Response Time" },
  ];

  return (
    <section className="py-14 bg-teal-700 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-teal-600/60">
          {stats.map((stat, index) => (
            <div key={index} className="pt-6 md:pt-0 px-4">
              <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-teal-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}