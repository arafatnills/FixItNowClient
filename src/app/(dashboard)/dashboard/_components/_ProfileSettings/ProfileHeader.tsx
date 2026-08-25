import Image from "next/image";
import { UserType } from "@/components/shared/NavbarAuthSection";

interface ProfileHeaderProps {
  user: UserType;
}

export default function ProfileHeader({
  user,
}: ProfileHeaderProps) {
  const isActive = user.data.status === "ACTIVE";

  return (
    <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-white p-2 shadow-sm dark:bg-card">
          <Image
            src="/logo.png"
            alt="Logo"
            width={45}
            height={45}
            className="object-contain"
          />
        </div>

        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sm font-medium text-[#006B7A]">
              Account
            </span>

            <span className="h-1 w-1 rounded-full bg-muted-foreground" />

            <span className="text-sm text-muted-foreground">
              Settings
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-foreground sm:text-3xl">
            Account Settings
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage your profile, account information and preferences.
          </p>
        </div>
      </div>

      {/* Account Status */}
      <div
        className="
          flex w-fit items-center gap-2 rounded-full
          border border-[#006B7A]/15 bg-white px-4 py-2
          shadow-sm dark:bg-card
        "
      >
        <span className="relative flex h-2.5 w-2.5">
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
              isActive ? "bg-emerald-400" : "bg-red-400"
            }`}
          />

          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
              isActive ? "bg-emerald-500" : "bg-red-500"
            }`}
          />
        </span>

        <span className="text-xs font-semibold">
          {isActive ? "Account Active" : "Account Blocked"}
        </span>
      </div>
    </div>
  );
}