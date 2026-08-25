import { Skeleton } from "@/components/ui/skeleton";
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CircleUserRound,
  FileBadge2,
  Mail,
  ShieldCheck,
  Crown,
} from "lucide-react";
import Image from "next/image";

export default function ProfileSkeleton() {
  return (
    <div className="space-y-6">
      {/* =====================================================
          PROFILE HERO SKELETON
      ====================================================== */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-border dark:bg-card">
        {/* Cover */}
        <div className="relative h-40 overflow-hidden sm:h-48">
          <div
            className="
              absolute inset-0
              bg-linear-to-br
              from-[#005A69]
              via-[#00798A]
              to-[#E99A18]
            "
          />

          {/* Static Logo / Branding */}
          <div className="absolute left-5 top-5 sm:left-7 sm:top-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 p-1.5 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-9 w-9 object-contain"
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

          {/* Dynamic Role */}
          <div className="absolute right-5 top-5 sm:right-7 sm:top-6">
            <Skeleton className="h-7 w-28 rounded-full bg-white/30" />
          </div>
        </div>

        <div className="relative px-5 pb-7 sm:px-8">
          {/* =================================================
              PROFILE INFO
          ================================================== */}
          <div className="-mt-16 flex flex-col gap-5 md:flex-row md:items-end">
            {/* Dynamic Profile Image */}
            <div className="relative mx-auto md:mx-0">
              <Skeleton
                className="
                  h-32 w-32 rounded-full
                  border-[5px]
                  border-white
                  shadow-xl
                  dark:border-card
                "
              />

              {/* Static Premium Icon */}
              <div
                className="
                  absolute bottom-1 right-1
                  flex h-9 w-9 items-center
                  justify-center rounded-full
                  border-4 border-white
                  bg-[#E99A18]
                  text-white shadow-lg
                  dark:border-card
                "
              >
                <Crown className="h-4 w-4 fill-current" />
              </div>
            </div>

            {/* Dynamic User Information */}
            <div className="flex-1 text-center md:pb-2 md:text-left">
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                {/* Name */}
                <Skeleton className="mx-auto h-8 w-44 rounded-md md:mx-0" />

                {/* Static */}
                <span
                  className="
                    mx-auto inline-flex w-fit
                    items-center rounded-full
                    bg-[#E99A18]/10
                    px-2.5 py-1
                    text-xs font-medium
                    text-[#C57D00]
                    dark:text-[#E9A62D]
                    md:mx-0
                  "
                >
                  <Crown className="mr-1 h-3 w-3" />
                  Premium
                </span>
              </div>

              {/* Email */}
              <div className="mt-2 flex items-center justify-center gap-1.5 md:justify-start">
                <Mail className="h-3.5 w-3.5 text-[#006B7A]" />

                <Skeleton className="h-4 w-52 rounded-md" />
              </div>

              {/* Joined Date + Status */}
              <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                {/* Joined Date */}
                <div className="flex h-6 items-center gap-1.5 rounded-full border px-2.5">
                  <CalendarDays className="h-3 w-3 text-muted-foreground" />

                  <Skeleton className="h-3 w-20 rounded-md" />
                </div>

                {/* Status */}
                <div className="flex h-6 items-center gap-1.5 rounded-full border px-2.5">
                  <Skeleton className="h-2 w-2 rounded-full" />

                  <Skeleton className="h-3 w-14 rounded-md" />
                </div>
              </div>
            </div>
          </div>

          <div className="my-7 h-px bg-border" />

          {/* =================================================
              PROFILE STATS
          ================================================== */}
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Experience */}
            <div
              className="
                rounded-2xl
                border border-slate-200
                bg-white p-5
                dark:border-border
                dark:bg-card
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-[#006B7A]/10
                    text-[#006B7A]
                  "
                >
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Experience
                  </p>

                  <div className="mt-1">
                    <Skeleton className="h-6 w-20 rounded-md" />
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates */}
            <div
              className="
                rounded-2xl
                border border-slate-200
                bg-white p-5
                dark:border-border
                dark:bg-card
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-[#E99A18]/10
                    text-[#D58A00]
                  "
                >
                  <Award className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Certificates
                  </p>

                  <div className="mt-1">
                    <Skeleton className="h-6 w-20 rounded-md" />
                  </div>
                </div>
              </div>
            </div>

            {/* Account */}
            <div
              className="
                rounded-2xl
                border border-slate-200
                bg-white p-5
                dark:border-border
                dark:bg-card
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-emerald-50
                    text-emerald-600
                    dark:bg-emerald-500/10
                    dark:text-emerald-400
                  "
                >
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Account
                  </p>

                  <div className="mt-1">
                    <Skeleton className="h-6 w-24 rounded-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BIO + PREMIUM
      ====================================================== */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* About Me */}
        <div
          className="
            rounded-2xl
            border border-slate-200
            bg-white
            shadow-sm
            lg:col-span-2
            dark:border-border
            dark:bg-card
          "
        >
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-[#006B7A]/10
                  text-[#006B7A]
                "
              >
                <CircleUserRound className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  About Me
                </h3>

                <p className="text-sm text-muted-foreground">
                  Personal profile information
                </p>
              </div>
            </div>

            {/* Dynamic Bio */}
            <div className="mt-5 space-y-2">
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-[92%] rounded-md" />
              <Skeleton className="h-4 w-[75%] rounded-md" />
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            border border-[#E99A18]/20
            bg-linear-to-br
            from-[#FFF8E8]
            via-white
            to-[#F0FBFC]
            shadow-sm
            dark:from-[#E99A18]/5
            dark:via-card
            dark:to-[#006B7A]/5
          "
        >
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-[#E99A18]
                  text-white
                  shadow-md
                "
              >
                <Crown className="h-5 w-5 fill-current" />
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  Premium Plan
                </h3>

                <p className="text-sm text-muted-foreground">
                  Your current subscription
                </p>
              </div>
            </div>

            {/* Dynamic Lifetime Access */}
            <Skeleton className="mt-5 h-7 w-36 rounded-md" />

            {/* Dynamic subscription value only */}
            <div className="mt-5 rounded-xl bg-white/70 p-3 dark:bg-background/40">
              <Skeleton className="h-3 w-full rounded-md" />
              <Skeleton className="mt-2 h-3 w-[80%] rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CERTIFICATES
      ====================================================== */}
      <div
        className="
          rounded-2xl
          border border-slate-200
          bg-white
          shadow-sm
          dark:border-border
          dark:bg-card
        "
      >
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-[#E99A18]/10
                text-[#D58A00]
              "
            >
              <FileBadge2 className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-base font-semibold">
                Certificates
              </h3>

              <p className="text-sm text-muted-foreground">
                Your professional certificates
              </p>
            </div>
          </div>

          {/* Dynamic Certificates */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                  flex items-center justify-between
                  rounded-xl
                  border
                  bg-muted/20
                  p-4
                "
              >
                <div className="flex min-w-0 items-center gap-3">
                  <Skeleton className="h-9 w-9 shrink-0 rounded-lg" />

                  <Skeleton className="h-4 w-32 rounded-md" />
                </div>

                <Skeleton className="ml-2 h-4 w-4 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}