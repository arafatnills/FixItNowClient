import {
  BriefcaseBusiness,
  LockKeyhole,
  Mail,
  User,
} from "lucide-react";

import {
  Input,
} from "@/components/ui/input";

import {
  Label,
} from "@/components/ui/label";

import {
  Badge,
} from "@/components/ui/badge";

import { UserType } from "@/components/shared/NavbarAuthSection";

interface BasicInformationProps {
  user: UserType;
}

export default function BasicInformation({
  user,
}: BasicInformationProps) {
  const profile = user.data.profile;

  const isActive = user.data.status === "ACTIVE";

  return (
    <>
      <div>
        <div className="mb-5">
          <h3 className="text-sm font-semibold">
            Basic Information
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            Update the information displayed on your profile.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="displayName">
              Full Name
            </Label>

            <div className="relative">
              <User
                className="
                  pointer-events-none
                  absolute left-3 top-1/2
                  h-4 w-4
                  -translate-y-1/2
                  text-[#006B7A]
                "
              />

              <Input
                defaultValue={user.data?.name}
                id="displayName"
                placeholder="Enter your full name"
                className="
                  h-11 rounded-lg pl-10
                  focus-visible:border-[#006B7A]
                  focus-visible:ring-[#006B7A]
                "
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address
            </Label>

            <div className="relative">
              <Mail
                className="
                  pointer-events-none
                  absolute left-3 top-1/2
                  h-4 w-4
                  -translate-y-1/2
                  text-muted-foreground
                "
              />

              <Input
                id="email"
                value={user.data?.email}
                disabled
                className="
                  h-11 rounded-lg
                  bg-muted/50
                  pl-10 pr-10
                "
              />

              <LockKeyhole
                className="
                  absolute right-3 top-1/2
                  h-4 w-4
                  -translate-y-1/2
                  text-muted-foreground
                "
              />
            </div>

            <p className="text-xs text-muted-foreground">
              Contact admin to change your email address.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <Label htmlFor="experience">
              Experience
            </Label>

            <div className="relative">
              <BriefcaseBusiness
                className="
                  pointer-events-none
                  absolute left-3 top-1/2
                  h-4 w-4
                  -translate-y-1/2
                  text-[#006B7A]
                "
              />

              <Input
                id="experience"
                type="number"
                defaultValue={profile.experience ?? ""}
                placeholder="Years of experience"
                className="
                  h-11 rounded-lg pl-10
                  focus-visible:border-[#006B7A]
                  focus-visible:ring-[#006B7A]
                "
              />
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Label>
              Account Status
            </Label>

            <div className="flex h-11 items-center rounded-lg border bg-muted/30 px-4">
              <span
                className={`mr-2 h-2.5 w-2.5 rounded-full ${
                  isActive
                    ? "bg-emerald-500"
                    : "bg-red-500"
                }`}
              />

              <span className="text-sm font-medium">
                {user.data.status}
              </span>

              <Badge
                variant="outline"
                className="ml-auto text-xs"
              >
                Read only
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}