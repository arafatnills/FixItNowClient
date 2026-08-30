"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SetStateAction, useActionState, useEffect, useState } from "react";
import { confirmBooking } from "../_actions/booking";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { UserType } from "@/components/shared/NavbarAuthSection";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type BookingButtonProps = {
  serviceId: string;
  technicianId: string;
  user: UserType;
};

const BookingButton = ({
  serviceId,
  technicianId,
  user,
}: BookingButtonProps) => {
  const [state, action, pending] = useActionState(confirmBooking, null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const role = user.data?.role;

  const [date, setDate] = useState<Date>();

  useEffect(() => {
    if (state?.success) {
      toast.success(`Booking Successfully!`);

      // Defer the local state updates until after the effect completes.
      const timer = window.setTimeout(() => {
        router.push(
          `${role === "CUSTOMER" ? "/dashboard/customer/my-booking" : "/dashboard/admin/my-booking"}`,
        );
        setIsOpen(false);
        setDate(undefined);
      }, 0);

      return () => window.clearTimeout(timer);
    }
  }, [state, router, role]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Book Now Button */}
      <DialogTrigger asChild>
        <Button
          disabled={!role || role === "TECHNICIAN"}
          type="button"
          className="h-11 md:w-full  rounded-full bg-teal-600 text-white shadow-md shadow-teal-500/20 hover:bg-teal-700 cursor-pointer"
        >
          Book Now
        </Button>
      </DialogTrigger>

      {/* Dialog */}
      <DialogContent className="sm:max-w-sm">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Book Service</DialogTitle>

            <DialogDescription>
              Select your booking date and confirm your booking.
            </DialogDescription>
          </DialogHeader>

          {/* Booking information */}
          <Input type="hidden" name="serviceId" value={serviceId} />

          <Input type="hidden" name="technicianId" value={technicianId} />

          {/* Scheduled date */}
          <div className="py-5">
            <label className="mb-2 block text-sm font-medium">
              Schedule Date
            </label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />

                  {date ? (
                    date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  ) : (
                    <span className="text-muted-foreground">Select a date</span>
                  )}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) =>
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                  }
                />
              </PopoverContent>
            </Popover>

            {/* Actual value submitted to Server Action */}
            <Input
              type="hidden"
              name="scheduledAt"
              value={date ? date.toISOString() : ""}
            />
          </div>

          {/* Footer */}
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" disabled={pending || !date}>
              {pending ? "Booking..." : "Confirm Booking"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingButton;
