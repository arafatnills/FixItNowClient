import Link from "next/link";
import { Button } from "@/components/ui/button";
import Dialog07 from "@/components/shadcn-space/radix/dialog/dialog-07";

export default function MobilePriceStrip({
  formattedPrice,
  serviceId,
}: {
  formattedPrice: string;
  serviceId: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 lg:hidden dark:border-slate-800 dark:bg-slate-900">
      <div>
        <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
          Starting from
        </p>
        <p className="text-2xl font-extrabold text-teal-700 dark:text-teal-400">
          {formattedPrice}
        </p>
      </div>

      <Dialog07>
        <Button className="h-11 shrink-0 rounded-full bg-teal-600 px-7 text-white shadow-md shadow-teal-500/20 hover:bg-teal-700">
          Book Now
        </Button>
      </Dialog07>
    </div>
  );
}
