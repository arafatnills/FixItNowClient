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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./MobileToggle";
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

type NavbarProps = {
  user: IUser;
};

export default function Navbar({ user }: NavbarProps) {
  const [isLogout, setIsLogOut] = useState(false)
  const router = useRouter()
  const handelLogOut = async (action: string) => {
    if (action === "logout") {
      await logout();
      setIsLogOut(true)
    }
  };

  useEffect(() => {
    if (isLogout) {
      toast.success("logout successfully");
      router.push('/auth/login')
    }
  }, [isLogout, router]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/5 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-teal-700 dark:text-teal-500">
            FixIt<span className="text-amber-500">Now</span>
          </span>
        </Link>

        {/* Middle: Main Navigation (Hidden on small screens) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link
            href="/services"
            className="hover:text-foreground transition-colors"
          >
            All Services
          </Link>
          <Link
            href="/categories"
            className="hover:text-foreground transition-colors"
          >
            Categories
          </Link>
          {user && (
            <Link
              href="/dashboard/customer"
              className="hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* theme toggle  */}
        <div className="flex items-center gap-4">
          {/* Right Side: Auth / Profile */}
          <ModeToggle />
          {user.success === false ? (
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
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder-avatar.jpg"
                      alt={user.data?.name}
                    />
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
          )}
        </div>
      </div>
    </nav>
  );
}
