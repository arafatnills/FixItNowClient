import { Badge } from "@/components/ui/badge";
import { BookingStatus } from "@/lib/types";


interface BookingStatusBadgeProps {
  status: BookingStatus;
}

const statusConfig = {
  [BookingStatus.PENDING]: {
    label: "Pending",
    className:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400",
  },

  [BookingStatus.ACCEPTED]: {
    label: "Accepted",
    className:
      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400",
  },

  [BookingStatus.REJECTED]: {
    label: "Rejected",
    className:
      "border-red-200 bg-red-50 text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400",
  },

  [BookingStatus.COMPLETED]: {
    label: "Completed",
    className:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400",
  },

  [BookingStatus.CANCELLED]: {
    label: "Cancelled",
    className:
      "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-400",
  },

  [BookingStatus.INPROGRESS]: {
    label: "In Progress",
    className:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400",
  },
};

export function BookingStatusBadge({
  status,
}: BookingStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge
      variant="outline"
      className={`rounded-full px-3 py-1 text-xs font-semibold ${config.className}`}
    >
      {config.label}
    </Badge>
  );
}