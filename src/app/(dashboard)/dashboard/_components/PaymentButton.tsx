"use client";
import { Button } from "@/components/ui/button";
import { BookingType } from "@/lib/types";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  CreditCard,
  Loader2,
} from "lucide-react";
import { useTransition } from "react";
import { createPaymentURL } from "../_actions/bookingActions";

const PaymentButton = ({ booking }: { booking: BookingType }) => {
  const [isPending, startTransition] = useTransition();
  const handlePayment = () => {
    startTransition(async () => {
      try {
        const response = await createPaymentURL(booking.id);
        if (response.success) {
          window.location.href = response.data.checkout;
        }
      } catch (error) {
        console.error("Payment initiation failed:", error);
      }
    });
  };

  const paymentStatus = booking.payment?.status;
  const bookingStatus = booking.status;
  const isPayableState =
    bookingStatus === "ACCEPTED" ||
    bookingStatus === "INPROGRESS" ||
    bookingStatus === "COMPLETED";

  let btnConfig = {
    text: "Not Paid",
    icon: null as React.ReactNode,
    classes:
      "bg-slate-50 text-slate-400 border-slate-200 dark:bg-slate-900/30 dark:text-slate-500 dark:border-slate-800/80 cursor-not-allowed opacity-80",
    disabled: true,
  };

  if (paymentStatus === "PAID") {
    btnConfig = {
      text: "Paid",
      icon: <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />,
      classes:
        "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30 cursor-default",
      disabled: true,
    };
  }
  // ── 3. FAILED (Retry State) ──
  else if (paymentStatus === "FAILED" && isPayableState) {
    btnConfig = {
      text: "Retry Payment",
      icon: <AlertCircle className="w-3.5 h-3.5 mr-1.5" />,
      classes:
        "bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:text-red-700 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30 dark:hover:bg-red-500/20 cursor-pointer shadow-sm",
      disabled: isPending,
    };
  }
  // ── 4. PENDING (Processing State) ──
  else if (paymentStatus === "PENDING" && isPayableState) {
    btnConfig = {
      text: "Pending...",
      icon: <Clock className="w-3.5 h-3.5 mr-1.5" />,
      classes:
        "bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100 hover:text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30 dark:hover:bg-amber-500/20 cursor-pointer shadow-sm",
      disabled: isPending,
    };
  }
  // ── 5. INITIAL PAYABLE (Pay Now State) ──
  else if (isPayableState) {
    btnConfig = {
      text: "Pay Now",
      icon: <CreditCard className="w-3.5 h-3.5 mr-1.5" />,
      classes:
        "bg-teal-50 text-teal-600 border-teal-200 hover:bg-teal-100 hover:text-teal-700 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/30 dark:hover:bg-teal-500/20 cursor-pointer shadow-sm",
      disabled: isPending,
    };
  }

  return (
    <Button
      onClick={handlePayment}
      disabled={btnConfig.disabled}
      variant="outline"
      size="sm"
      className={`h-7 px-3 text-xs transition-all duration-200 ${btnConfig.classes}`}
    >
      {isPending ? (
        <>
          <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          {btnConfig.icon}
          {btnConfig.text}
        </>
      )}
    </Button>
  );
};

export default PaymentButton;
