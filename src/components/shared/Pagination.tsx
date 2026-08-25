"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BookingPaginationProps {
  currentPage: number | string;
  totalPages: number | string;
}

export function GlobalPagination({
  currentPage,
  totalPages,
}: BookingPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = Number(currentPage) || 1;
  const total = Number(totalPages) || 1;

  if (total <= 1) return null;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    params.set("limit", String(10));
    return `${pathname}?${params.toString()}`;
  };

  const generatePagination = () => {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (page <= 3) {
      return [1, 2, 3, 4, "...", total];
    }

    if (page >= total - 2) {
      return [1, "...", total - 3, total - 2, total - 1, total];
    }

    return [1, "...", page - 1, page, page + 1, "...", total];
  };

  const pages = generatePagination();

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        {/* ── Previous Button ── */}
        <PaginationItem>
          <PaginationPrevious
            href={page > 1 ? createPageURL(page - 1) : "#"}
            className={page <= 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {/* ── Page Numbers & Ellipsis ── */}
        {pages.map((p, index) => (
          <PaginationItem key={index}>
            {p === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={createPageURL(p)}
                isActive={Number(p) === page}
              >
                {p}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* ── Next Button ── */}
        <PaginationItem>
          <PaginationNext
            href={page < total ? createPageURL(page + 1) : "#"}
            className={page >= total ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
