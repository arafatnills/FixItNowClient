"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookingStatus } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filtersItems: BookingStatus[] = [
  BookingStatus.PENDING,
  BookingStatus.ACCEPTED,
  BookingStatus.REJECTED,
  BookingStatus.COMPLETED,
  BookingStatus.CANCELLED,
  BookingStatus.INPROGRESS,
];

const statusColors: Record<BookingStatus, string> = {
  [BookingStatus.PENDING]: "bg-amber-500",
  [BookingStatus.ACCEPTED]: "bg-blue-500",
  [BookingStatus.REJECTED]: "bg-red-500",
  [BookingStatus.COMPLETED]: "bg-emerald-500",
  [BookingStatus.CANCELLED]: "bg-slate-500",
  [BookingStatus.INPROGRESS]: "bg-violet-500",
};

export function SelectFilters() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams()
  const currentStatus = searchParams.get("status") || "";
  const handleFilterChange = (value: string) => {
    if (value === "ALL") {
      router.push(pathName);
    } else {
      router.push(`${pathName}?status=${value}`);
    }
  };
  return (
    <Select value={currentStatus} onValueChange={handleFilterChange}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Filters by Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filters</SelectLabel>
          <SelectItem value="ALL">
            <span className="mr-2 h-2 w-2 rounded-full bg-slate-300 inline-block" />
            All Status
          </SelectItem>
          {filtersItems.map((item) => (
            <SelectItem key={item} value={item}>
              <span
                className={`mr-2 h-2 w-2 rounded-full ${statusColors[item]}`}
              />{" "}
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
