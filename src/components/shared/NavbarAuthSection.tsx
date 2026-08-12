"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { logout } from "@/services/logout";

type IUser = {
  success: boolean;
  status: number;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    profile: {
      id: string;
      userId: string;
      yearsOfExperience: number | null;
      bio: string | null;
      certificates: string[];
      createdAt: string;
      updatedAt: string;
    };
  };
};

type NavbarAuthSectionProps = {
  user: IUser;
};

export default function NavbarAuthSection({ user }: NavbarAuthSectionProps) {
  const handelLogOut = async (action: string) => {
    if (action === "logout") {
      await logout();
      toast.success("logout successfully");
    }
  };

  if (user.success === false) {
    return (
      <>
        <Button variant="ghost" asChild className="rounded-sm">
          <Link href="/auth/login">Log in</Link>
        </Button>
        <Button
          asChild
          className="bg-teal-600 hover:bg-teal-700 text-white rounded-sm"
        >
          <Link href="/auth/register">Sign up</Link>
        </Button>
      </>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-avatar.jpg" alt={user.data?.name} />
            <AvatarFallback className="bg-teal-100 text-teal-800">
              {user.data?.name
                ?.match(/\b\w/g)
                ?.slice(0, 2)
                .join("")
                .toUpperCase() || ""}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.data?.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              email: {user.data?.email}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              Role: {user.data?.role}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          {user.data?.role === "CUSTOMER" ? (
            <Link href="/dashboard/customer">Dashboard</Link>
          ) : user.data?.role === "TECHNICIAN" ? (
            <Link href="/dashboard/technician">Dashboard</Link>
          ) : user.data?.role === "ADMIN" ? (
            <Link href="/dashboard/admin">Dashboard</Link>
          ) : (
            ""
          )}
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-600 cursor-pointer"
          onClick={async () => {
            await handelLogOut("logout");
          }}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
