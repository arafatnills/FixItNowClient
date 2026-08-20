"use client";
export type MetaType = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

export function ServicePagination({ meta }: { meta: MetaType }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(meta.page) || 1;
  const totalPages = Number(meta.totalPages) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={currentPage <= totalPages ? createPageURL(currentPage - 1) : "#"}
            className={
              currentPage <= 1
                ? "pointer-events-none opacity-50"
                : "hover:bg-teal-50"
            }
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;

          if (
            totalPages <= 5 ||
            totalPages === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= currentPage - 1 && currentPage + 1)
          ) {
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href={createPageURL(pageNumber)}
                  isActive={currentPage === pageNumber}
                  className={
                    currentPage === pageNumber
                      ? "bg-teal-600 hover:bg-teal-700 text-white border-teal-600"
                      : "hover:bg-teal-50"
                  }
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          }

          return null;
        })}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        

        <PaginationItem>
          <PaginationNext
            href={currentPage <= totalPages ? createPageURL(currentPage + 1) : "#"}
            className={
              currentPage >= totalPages
                ? "pointer-events-none opacity-50"
                : "hover:bg-teal-50"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
