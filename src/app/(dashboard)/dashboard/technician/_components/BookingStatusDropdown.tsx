"use client";

import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BookingStatusBadge } from "./BookingStatusBadge";
import { BookingStatus } from "@/lib/types";

interface BookingStatusDropdownProps {
  status: BookingStatus;
  loading?: boolean;
  onStatusChange: (status: BookingStatus) => void;
}

const statusColors: Record<BookingStatus, string> = {
  [BookingStatus.PENDING]: "bg-amber-500",
  [BookingStatus.ACCEPTED]: "bg-blue-500",
  [BookingStatus.REJECTED]: "bg-red-500",
  [BookingStatus.COMPLETED]: "bg-emerald-500",
  [BookingStatus.CANCELLED]: "bg-slate-500",
  [BookingStatus.INPROGRESS]: "bg-violet-500",
};

const statusLabels: Record<BookingStatus, string> = {
  [BookingStatus.PENDING]: "Pending",
  [BookingStatus.ACCEPTED]: "Accepted",
  [BookingStatus.REJECTED]: "Rejected",
  [BookingStatus.COMPLETED]: "Completed",
  [BookingStatus.CANCELLED]: "Cancelled",
  [BookingStatus.INPROGRESS]: "In Progress",
};

export function BookingStatusDropdown({
  status,
  loading = false,
  onStatusChange,
}: BookingStatusDropdownProps) {
  const cancelableStatus = ["PENDING", "COMPLETED", "CANCELLED", "INPROGRESS"];
  const isAlreadyCancelled = status === BookingStatus.CANCELLED;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          disabled={loading}
          className="h-auto gap-1 p-0 hover:bg-transparent"
        >
          <BookingStatusBadge status={status} />

          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-44">
        {Object.values(BookingStatus).map((statusValue) => {
          const isCurrent = status === statusValue;
          const isRestrictedOption = cancelableStatus.includes(statusValue);
          const isDisabled =
            isCurrent || isAlreadyCancelled || isRestrictedOption;
          return (
            <DropdownMenuItem
              key={statusValue}
              disabled={isDisabled}
              onClick={() => onStatusChange(statusValue)}
              className="cursor-pointer"
            >
              <span
                className={`mr-2 h-2 w-2 rounded-full ${statusColors[statusValue]}`}
              />

              {statusLabels[statusValue]}

              {isCurrent && (
                <span className="ml-auto  text-[10px] text-muted-foreground">
                  Current
                </span>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
