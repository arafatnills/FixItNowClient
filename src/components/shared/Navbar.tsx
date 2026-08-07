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
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  // TODO: Replace with your actual auth state from Context/Redux/Zustand
  const user = {
    isLoggedIn: true,
    name: "Arafat Nill",
    role: "TECHNICIAN",
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
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
          {user.isLoggedIn && (
            <Link
              href="/dashboard"
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
          {!user.isLoggedIn ? (
            <>
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  Sign up
                </Button>
              </Link>
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
                      alt={user.name}
                    />
                    <AvatarFallback className="bg-teal-100 text-teal-800">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      Role: {user.role}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 cursor-pointer">
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
