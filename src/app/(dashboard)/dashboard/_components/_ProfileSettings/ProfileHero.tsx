import Image from "next/image";
import {
  Mail,
  Sparkles,
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
  BriefcaseBusiness,
  Award,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import { Separator } from "@/components/ui/separator";

import { UserType } from "@/components/shared/NavbarAuthSection";
import { ProfileStatCard } from "./ProfileStatCard";



interface ProfileHeroProps {
  user: UserType;
}

export default function ProfileHero({
  user,
}: ProfileHeroProps) {
  const profile = user.data.profile;

  const isActive = user.data.status === "ACTIVE";

  const initials =
    user.data.name
      ?.split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  const joinedDate = new Date(
    user.data.createdAt,
  ).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <Card className="overflow-hidden rounded-3xl border-slate-200 p-0 shadow-sm dark:border-border">
      {/* ================= COVER ================= */}
      <div className="relative h-40 overflow-hidden sm:h-48">
        {/* Main Gradient */}
        <div
          className="
            absolute inset-0
            bg-linear-to-br
            from-[#005A69]
            via-[#00798A]
            to-[#E99A18]
          "
        />

        {/* Decorative Shapes */}
        <div
          className="
            absolute -right-20 -top-24
            h-72 w-72 rounded-full
            bg-white/10 blur-2xl
          "
        />

        <div
          className="
            absolute -bottom-32 left-1/3
            h-80 w-80 rounded-full
            bg-[#E99A18]/20 blur-3xl
          "
        />

        <div
          className="
            absolute -left-20 top-20
            h-52 w-52 rounded-full
            bg-[#00A6B8]/20 blur-3xl
          "
        />

        {/* Pattern */}
        <div
          className="
            absolute inset-0 opacity-[0.08]
            bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            bg-size-[32px_32px]
          "
        />

        {/* Brand */}
        <div className="absolute left-5 top-5 sm:left-7 sm:top-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 p-1.5 shadow-lg">
              <Image
                src="/logo.png"
                alt="Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold text-white">
                Professional Account
              </p>

              <p className="text-xs text-white/70">
                Manage your profile
              </p>
            </div>
          </div>
        </div>

        {/* Role */}
        <div className="absolute right-5 top-5 sm:right-7 sm:top-6">
          <Badge
            className="
              border border-white/20
              bg-white/15
              px-3 py-1.5
              text-white
              shadow-lg
              backdrop-blur-md
              hover:bg-white/20
            "
          >
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />

            {user.data.role === "admin"
              ? "Admin Account"
              : "Member Account"}
          </Badge>
        </div>
      </div>

      <CardContent className="relative px-5 pb-7 sm:px-8">
        {/* ================= IDENTITY ================= */}
        <div className="-mt-16 flex flex-col gap-5 md:flex-row md:items-end">
          {/* Avatar */}
          <div className="relative mx-auto md:mx-0">
            <Avatar
              className="
                h-32 w-32
                border-[5px]
                border-white
                bg-white
                shadow-xl
                dark:border-card
                dark:bg-card
              "
            >
              <AvatarImage
                src={user.data.profilePhoto}
                alt={user.data.name}
                className="object-cover"
              />

              <AvatarFallback
                className="
                  bg-[#006B7A]/10
                  text-3xl font-bold
                  text-[#006B7A]
                "
              >
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Identity */}
          <div className="flex-1 text-center md:pb-2 md:text-left">
            <h2 className="pt-15 text-2xl font-bold tracking-tight text-slate-900 dark:text-foreground">
              {user.data.name}
            </h2>

            <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted-foreground md:justify-start">
              <Mail className="h-3.5 w-3.5 text-[#006B7A]" />
              {user.data.email}
            </p>

            <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
              <Badge
                variant="outline"
                className="border-[#006B7A]/20 bg-[#006B7A]/5 text-[#006B7A]"
              >
                <CalendarDays className="mr-1.5 h-3 w-3" />
                Joined {joinedDate}
              </Badge>

              <Badge
                variant="outline"
                className={
                  isActive
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }
              >
                <CheckCircle2 className="mr-1.5 h-3 w-3" />
                {user.data.status}
              </Badge>
            </div>
          </div>
        </div>

        <Separator className="my-7" />

        {/* ================= STATS ================= */}
        <div className="grid gap-4 sm:grid-cols-3">
          <ProfileStatCard
            title="Experience"
            value={profile.experience ?? 0}
            suffix="Years"
            icon={BriefcaseBusiness}
            iconClassName="bg-[#006B7A]/10 text-[#006B7A]"
            cardClassName="hover:border-[#006B7A]/30"
          />

          <ProfileStatCard
            title="Certificates"
            value={profile.certificates?.length ?? 0}
            suffix="Earned"
            icon={Award}
            iconClassName="bg-[#E99A18]/10 text-[#D58A00]"
            cardClassName="hover:border-[#E99A18]/30"
          />

          <ProfileStatCard
            title="Account"
            value={user.data.status}
            icon={ShieldCheck}
            iconClassName="
              bg-emerald-50
              text-emerald-600
              dark:bg-emerald-500/10
              dark:text-emerald-400
            "
            cardClassName="hover:border-emerald-200"
          />
        </div>
      </CardContent>
    </Card>
  );
}