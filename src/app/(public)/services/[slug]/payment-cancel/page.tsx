import { getMe } from "@/services/getMe";
import Link from "next/link";

import { ArrowRight, XCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default async function PaymentSuccessPage() {
  const user = await getMe();
  const role = user.data.role;

  let navItems = "/dashboard";

  if (role === "ADMIN") {
    navItems = "/dashboard/admin";
  } else if (role === "CUSTOMER") {
    navItems = "/dashboard/customer";
  } else if (role === "TECHNICIAN") {
    navItems = "/dashboard/technician";
  }
  return (
    <main className="min-h-svh bg-slate-50 px-4 py-6 dark:bg-slate-950 sm:px-6 sm:py-10">
      <div className="mx-auto flex min-h-[calc(100svh-3rem)] w-full max-w-lg items-center justify-center sm:min-h-[calc(100svh-5rem)]">
        <Card className="w-full overflow-hidden border-slate-200 bg-white shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
          {/* Cancel Header */}
          <CardHeader className="px-5 pb-5 pt-8 text-center sm:px-8 sm:pt-10">
            {/* Cancel Icon */}
            <div
              className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-50 dark:bg-red-950/30"
              aria-hidden="true"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 shadow-sm dark:bg-red-900/40">
                <XCircle
                  className="h-10 w-10 text-red-600 dark:text-red-400"
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Status Badge */}
            <Badge
              variant="secondary"
              className="mx-auto mb-4 w-fit rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400"
            >
              Payment Cancelled
            </Badge>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Payment Cancelled
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
              Your payment was cancelled and the transaction was not completed.
              Your booking has not been confirmed.
            </p>
          </CardHeader>

          <CardContent className="px-5 pb-6 sm:px-8">
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-center dark:border-amber-950/60 dark:bg-amber-950/20">
              <p className="text-sm leading-6 text-amber-700 dark:text-amber-400">
                Your payment was cancelled. No payment has been completed and
                your booking is not confirmed.
              </p>
            </div>
          </CardContent>

          {/* Actions */}
          <CardFooter className="flex flex-col gap-3 px-5 pb-7 sm:px-8">
            <Button
              asChild
              className="h-11 w-full rounded-xl bg-teal-600 text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md dark:bg-teal-600 dark:hover:bg-teal-500"
            >
              <Link href={`${navItems}/my-booking`}>
                <ArrowRight className="mr-2 h-4 w-4" />
                <span>Go to My Bookings</span>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
