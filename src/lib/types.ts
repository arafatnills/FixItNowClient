import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export type SidebarMenuItems = {
    label: string
    href: string
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
  
}

export type BookingType = {
  id: string;
  customerId: string;
  technicianId: string;
  serviceId: string;
  scheduledAt: string;
  status:
    | "PENDING"
    | "ACCEPTED"
    | "REJECTED"
    | "COMPLETED"
    | "CANCELLED"
    | "INPROGRESS";
  createdAt: string;
  updatedAt: string;
  service: {
    serviceName: string;
    price?: number;
  };
  paymentStatus?: "PAID" | "PENDING" | "FAILED";
};
