
interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16 space-y-3">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-lg">{subtitle}</p>
    </div>
  );
};