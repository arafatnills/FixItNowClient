export default function ServiceHowItWorks() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-900 sm:text-xl dark:text-white">How booking works</h2>
      <ol className="space-y-3">
        {[
          "Pick a date and time that suits you.",
          "A verified technician confirms the visit.",
          "Pay after the job is done and approved.",
        ].map((step, i) => (
          <li key={step} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-700 dark:bg-teal-950 dark:text-teal-400">
              {i + 1}
            </span>
            <span className="pt-0.5">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}