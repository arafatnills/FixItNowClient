export default function ServiceAbout({ description }: { description: string }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-900 sm:text-xl dark:text-white">About this service</h2>
      <p className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
    </section>
  );
}