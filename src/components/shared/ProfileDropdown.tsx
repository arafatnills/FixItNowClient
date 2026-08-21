import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import BorderAvatar from "../shadcn-space/radix/avatar/avatar-04";
import Link from "next/link";
import { UserType } from "./NavbarAuthSection";
import { logout } from "@/services/logout";
import { toast } from "sonner";

const ProfileDropdown = ({ user }: { user: UserType }) => {
  const handelLogOut = async (action: string) => {
    if (action === "logout") {
      await logout();
      toast.success("logout successfully");
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <BorderAvatar
            image={user.data?.profilePhoto}
            name={user.data?.name}
          />
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
};

export default ProfileDropdown;
