"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import ProfileDropdown from "./ProfileDropdown";

export type UserType = {
  success: boolean;
  status: number;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: "ACTIVE" | "BLOCKED";
    createdAt: string;
    updatedAt: string;
    profilePhoto: string;
    profile: {
      id: string;
      userId: string;
      experience: number | null;
      bio: string | null;
      certificates: string[];
      createdAt: string;
      updatedAt: string;
    };
  };
};

type NavbarAuthSectionProps = {
  user: UserType;
};

export default function NavbarAuthSection({ user }: NavbarAuthSectionProps) {
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

  return <ProfileDropdown user={user} />;
}
