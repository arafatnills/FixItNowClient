"use client";

import { Button } from "@/components/ui/button";
import { BookingType } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { cancelBooking } from "../_actions/bookingActions";
import { toast } from "sonner";

const CancelButton = ({ booking }: { booking: BookingType }) => {
  const [isPending, startTransition] = useTransition();
  const handelCancelBooking = () => {
    startTransition(async () => {
      try {
        const response = await cancelBooking(booking.id);
        if (response.success) {
          toast.success("Booking cancelled successfully!");
        } else if (!response.success) {
          toast.error("Booking cancelled failed!");
        }
      } catch (error) {
        console.error("Payment initiation failed:", error);
      }
    });
  };

  return (
    <Button
      onClick={handelCancelBooking}
      variant="outline"
      size="sm"
      disabled={booking.status !== "PENDING"}
      className="h-7 px-3 cursor-pointer text-xs text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:border-red-900/50 dark:hover:bg-red-950/30 bg-transparent"
    >
      {isPending ? (
        <>
          <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
        </>
      ) : (
        "Cancel"
      )}
    </Button>
  );
};

export default CancelButton;
