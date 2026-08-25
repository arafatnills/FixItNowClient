import { LucideIcon } from "lucide-react";

type ProfileStatCardProps = {
  title: string;
  value: string | number;
  suffix?: string;

  icon: LucideIcon;

  iconClassName?: string;
  cardClassName?: string;

  valueClassName?: string;
  titleClassName?: string;
};

export function ProfileStatCard({
  title,
  value,
  suffix,
  icon: Icon,

  iconClassName = "",
  cardClassName = "",

  valueClassName = "",
  titleClassName = "",
}: ProfileStatCardProps) {
  return (
    <div
      className={`
        group rounded-2xl
        border border-slate-200
        bg-white p-5
        transition-all duration-200
        hover:-translate-y-1
        hover:shadow-lg
        dark:border-border
        dark:bg-card
        ${cardClassName}
      `}
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className={`
            flex h-12 w-12 shrink-0
            items-center justify-center
            rounded-xl
            transition-transform duration-200
            group-hover:scale-105
            ${iconClassName}
          `}
        >
          <Icon className="h-5 w-5" />
        </div>

        {/* Content */}
        <div className="min-w-0">
          <p
            className={`
              text-xs font-medium
              uppercase tracking-wider
              text-muted-foreground
              ${titleClassName}
            `}
          >
            {title}
          </p>

          <p
            className={`
              mt-1 text-xl font-bold
              text-foreground
              ${valueClassName}
            `}
          >
            {value}

            {suffix && (
              <span className="ml-1 text-sm font-medium text-muted-foreground">
                {suffix}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}