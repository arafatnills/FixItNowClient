"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import PostFromDialog, { Categories, ServiceFormData } from "./PostFromDialog";
import { BookingEmptyState } from "@/components/shared/TableEmptyState";

interface ServiceTableBodyProps {
  services: ServiceFormData[];
  categories: Categories[];
}

export function ServiceTableBody({
  services,
  categories,
}: ServiceTableBodyProps) {
  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      console.log("Deleting service ID:", id);
      // await deleteServiceAction(id);
    }
  };

  return (
    <TableBody>
      {services.length === 0 ? (
        <BookingEmptyState
          clm={5}
          msg1={"No services found"}
          msg2={`No services found. Click "Create Service" to add one.`}
        />
      ) : (
        services.map((service) => (
          <TableRow key={service.id}>
            <TableCell className="font-medium">{service.serviceName}</TableCell>
            <TableCell>৳{service.price}</TableCell>
            <TableCell>
              {service.area}, {service.city}
            </TableCell>
            <TableCell>
              {service.isPopular ? (
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                  Yes
                </span>
              ) : (
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                  No
                </span>
              )}
            </TableCell>

            <TableCell className="text-right">
              <div className="flex justify-end items-center gap-2">
                <PostFromDialog
                  mode="edit"
                  post={service}
                  categories={categories}
                />

                {/* Delete Button */}
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(service.id as string)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  );
}
