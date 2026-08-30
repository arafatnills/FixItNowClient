"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  LayoutDashboard,
  ReceiptText,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserType } from "@/components/shared/NavbarAuthSection";

type PaymentSuccessCardProps = {
  bookingId: string;
  transactionId: string;
  user: UserType;
};

type CopyType = "booking" | "transaction" | null;

export default function PaymentSuccessCard({
  bookingId,
  transactionId,
  user,
}: PaymentSuccessCardProps) {
  const [copied, setCopied] = useState<CopyType>(null);
  const role = user.data?.role;
  let navItems = "/dashboard";
  

  if (role === "ADMIN") {
    navItems = '/dashboard/admin';
  } else if (role === "CUSTOMER") {
    navItems = '/dashboard/customer';
  } else if (role === "TECHNICIAN") {
    navItems = '/dashboard/technician';
  }
  const handleCopy = async (value: string, type: Exclude<CopyType, null>) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(type);

      window.setTimeout(() => {
        setCopied(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <Card className="w-full overflow-hidden border-slate-200 bg-white shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
      {/* Success Header */}
      <CardHeader className="px-5 pb-5 pt-8 text-center sm:px-8 sm:pt-10">
        {/* Success Icon */}
        <div
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/40"
          aria-hidden="true"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 shadow-sm dark:bg-emerald-900/50">
            <CheckCircle2
              className="h-10 w-10 text-emerald-600 dark:text-emerald-400"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Status Badge */}
        <Badge
          variant="secondary"
          className="mx-auto mb-4 w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-400"
        >
          Payment Completed
        </Badge>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Payment Successful!
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
          Your payment has been successfully processed and your booking is now
          confirmed.
        </p>
      </CardHeader>

      {/* Payment Details */}
      <CardContent className="px-5 pb-6 sm:px-8">
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/60">
          {/* Booking ID */}
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
              Booking ID
            </p>

            <CopyableId
              value={bookingId}
              copied={copied === "booking"}
              onCopy={() => handleCopy(bookingId, "booking")}
              label="Copy booking ID"
            />
          </div>

          <Separator className="my-4 dark:bg-slate-800" />

          {/* Transaction ID */}
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
              Transaction ID
            </p>

            <CopyableId
              value={transactionId}
              copied={copied === "transaction"}
              onCopy={() => handleCopy(transactionId, "transaction")}
              label="Copy transaction ID"
            />
          </div>
        </div>

        {/* Info Message */}
        <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 dark:border-blue-950/60 dark:bg-blue-950/20">
          <p className="text-center text-xs leading-5 text-blue-700 dark:text-blue-400">
            Please keep your booking ID and transaction ID for future reference.
          </p>
        </div>
      </CardContent>

      {/* Actions */}
      <CardFooter className="flex flex-col gap-3 px-5 pb-7 sm:flex-row sm:px-8">
        
          <Button
           
            asChild
            className="h-11 w-full rounded-xl bg-teal-600 text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md dark:bg-teal-600 dark:hover:bg-teal-500 sm:flex-1"
          >
            <Link href={`${navItems}/my-booking`}>
              <ReceiptText className="mr-2 h-4 w-4" />
              <span>View Booking</span>
              <ArrowRight className="ml-auto h-4 w-4" />
            </Link>
          </Button>
       

        <Button
          asChild
          variant="outline"
          className="h-11 w-full rounded-xl border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 sm:flex-1"
        >
          <Link href={navItems}>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

/* -------------------------------------------------------------------------- */
/* Copyable ID                                                                */
/* -------------------------------------------------------------------------- */

type CopyableIdProps = {
  value: string;
  copied: boolean;
  onCopy: () => void;
  label: string;
};

function CopyableId({ value, copied, onCopy, label }: CopyableIdProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 dark:border-slate-800 dark:bg-slate-900">
        <p
          title={value}
          className="truncate font-mono text-xs text-slate-700 dark:text-slate-300 sm:text-sm"
        >
          {value}
        </p>
      </div>

      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-10 w-10 shrink-0 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
        onClick={onCopy}
        aria-label={label}
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
      </Button>
    </div>
  );
}
