import { Button } from "@/components/ui/button";
import { BookingType } from "@/lib/types";
import { CreditCard } from "lucide-react";

const PaymentButton = ({ booking }: { booking: BookingType }) => {
  return (
    <Button
      disabled={booking.status !== "ACCEPTED"}
      variant="outline"
      size="sm"
      className={`h-7 px-3 text-xs transition-all duration-200 ${
        booking.status === "ACCEPTED"
          ? "bg-teal-50 text-teal-600 border-teal-200 hover:bg-teal-100 hover:text-teal-700 hover:border-teal-300 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/30 dark:hover:bg-teal-500/20 shadow-sm cursor-pointer"
          : "bg-slate-50 text-slate-400 border-slate-200 dark:bg-slate-900/30 dark:text-slate-500 dark:border-slate-800/80 cursor-not-allowed opacity-80"
      }`}
    >
      {booking.status === "ACCEPTED" ? (
        <>
          <CreditCard className="w-3.5 h-3.5 mr-1.5" />
          Pay Now
        </>
      ) : (
        "Not Paid"
      )}
    </Button>
  );
};

export default PaymentButton;
