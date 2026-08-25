import { SidebarMenuItems } from "@/lib/types";
import { FileText, LayoutDashboard, ListIndentDecrease, UserRoundCog } from "lucide-react";

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
  {
    label: "Profile",
    href: "/dashboard/customer/profile",
    icon: UserRoundCog
  }
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
    label: "My Orders",
    href: "/dashboard/technician/orders",
    icon: ListIndentDecrease,
  },
  {
    label: "Accept Bookings",
    href: "/dashboard/technician/accept-booking",
    icon: FileText,
  }
];

export const sidebarMenuItems = {
  CUSTOMER: USER_SIDEBAR_ITEMS,
  TECHNICIAN: TECHNICIAN_SIDEBAR_ITEMS,
  ADMIN: ADMIN_SIDEBAR_ITEMS,
};
