import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type SidebarMenuItems = {
  label: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

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

  payment?: {
    id: string;
    status: "PAID" | "PENDING" | "FAILED";
  } | null;
};

export enum BookingStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  INPROGRESS = "INPROGRESS",
}

export type BookingCustomer = {
  id: string;
  name: string;
  email?: string;
  profilePhoto?: string;
};

export type BookingService = {
  id: string;
  serviceName: string;
  price?: number;
};

export type Booking = {
  id: string;
  customerId: string;
  technicianId: string;
  serviceId: string;
  scheduledAt: string;
  status: BookingStatus;
  createdAt: string;
  updatedAt: string;

  customer: BookingCustomer;
  service: BookingService;
};

export type QueryTypes = {
  query?: { [key: string]: string | string[] | undefined };
};

export type SearchProp = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceData {
  id: string;
  serviceName: string;
  description: string;
  thumbnail: string;
  isPopular: boolean;
  categoriesId: string;
  technicianId: string;
  price: number;
  city: string;
  area: string;
  createdAt: string;
  updatedAt: string;
  category: Category;
}

export interface CreateServiceResponse {
  success: boolean;
  status: number;
  message: string;
  data: ServiceData;
}

export type TechnicianOverViewType = {
  myTotalServices: number;
  myOrders: number;
  myTotalRevenue: number;
};

export interface UserProfile {
  id: string;
  userId: string;
  experience: string | null;
  location: string | null;
  isVerified: boolean;
  avgRating: number;
  totalReviews: number;
  bio: string | null;
  certificates: string[];
  createdAt: string;
  updatedAt: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN" | string;
  status: "ACTIVE" | "INACTIVE" | "BLOCKED" | string;
  profilePhoto: string | null;
  createdAt: string;
  updatedAt: string;
  profile: UserProfile;
}

export interface RegisterApiResponse {
  success: boolean;
  status: number;
  message: string;
  data: UserData;
}

export interface UpdateProfileInterface {
  success: boolean;
  message: string;
  status: number;
  data?: {
    id: string;
    profilePhoto: string;
    name: string;
    experience: number;
    bio: string;
  } | null;
}
