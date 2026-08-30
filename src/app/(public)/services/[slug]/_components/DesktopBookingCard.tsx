import Link from "next/link";
import { ShieldCheck, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { getMe } from "@/services/getMe";
import BookingButton from "./BookingButton";

export default async function DesktopBookingCard({
  formattedPrice,
  serviceId,
  technicianId,
}: {
  formattedPrice: string;
  serviceId: string;
  technicianId: string;
}) {
  const user = await getMe();

  return (
    <aside className="hidden lg:block">
      <Card className="sticky top-24 gap-0 border-slate-200 p-0 shadow-sm dark:border-slate-800">
        <CardContent className="space-y-5 p-6">
          <div>
            <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Starting from
            </p>
            <p className="text-3xl font-extrabold text-teal-700 dark:text-teal-400">
              {formattedPrice}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Final price depends on on-site inspection.
            </p>
          </div>
          <div className="space-y-2.5">
            <BookingButton
              serviceId={serviceId}
              technicianId={technicianId}
              user={user}
            />

            <Button
              asChild
              variant="outline"
              className="h-11 w-full rounded-full border-slate-200 dark:border-slate-700"
            >
              <Link href={`/technicians/${technicianId}`}>View technician</Link>
            </Button>
          </div>
          <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <p className="flex items-center gap-2">
              <ShieldCheck className="size-4 shrink-0 text-teal-600 dark:text-teal-500" />
              Verified &amp; background-checked
            </p>
            <p className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-teal-600 dark:text-teal-500" />
              Free cancellation before the visit
            </p>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
