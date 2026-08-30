import { SidebarMenuItems } from "@/lib/types";
import { FileText, LayoutDashboard, ListIndentDecrease, NotebookPen } from "lucide-react";

const USER_SIDEBAR_ITEMS: SidebarMenuItems[] = [
  {
    label: "Dashboard",
    href: "/dashboard/customer",
    icon: LayoutDashboard,
  },
  {
    label: "My Bookings",
    href: "/dashboard/customer/my-booking",
    icon: FileText,
  },
 
];

const ADMIN_SIDEBAR_ITEMS: SidebarMenuItems[] = [
  {
    label: "Dashboard",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Services",
    href: "/dashboard/services",
    icon: ListIndentDecrease,
  },
  {
    label: "My Bookings",
    href: "/dashboard/admin/my-booking",
    icon: FileText,
  }
];

const TECHNICIAN_SIDEBAR_ITEMS: SidebarMenuItems[] = [
  {
    label: "Dashboard",
    href: "/dashboard/technician",
    icon: LayoutDashboard,
  },
  {
    label: "My Services",
    href: "/dashboard/technician/my-services",
    icon: NotebookPen,
  },
  {
    label: "My Orders",
    href: "/dashboard/technician/orders",
    icon: FileText,
  },
 
];








export const sidebarMenuItems = {
  CUSTOMER: USER_SIDEBAR_ITEMS,
  TECHNICIAN: TECHNICIAN_SIDEBAR_ITEMS,
  ADMIN: ADMIN_SIDEBAR_ITEMS,
};
