"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BriefcaseBusiness,
  LockKeyhole,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";
import PreviewEditPhoto from "./PreviewEditPhoto";
import { Separator } from "@/components/ui/separator";
import { useActionState } from "react";
import { updateProfile } from "../../_actions/bookingActions";
import { UpdateProfileInterface } from "@/lib/types";

type UpdateProfile = {
  name: string;
  profilePhoto: string;
  initials: string;
  email: string;
  experience: null | string | number;
  status: string;
  isActive: boolean;
  bio: string | null;
};

const initialState: UpdateProfileInterface = {
  success: false,
  message: "",
  status: 200,
  data: {
    id: "",
    profilePhoto: "",
    name: "",
    experience: 0,
    bio: "",
  },
};

const ProfileUPdateFrom = ({
  name,
  profilePhoto,
  initials,
  email,
  experience,
  status,
  isActive,
  bio,
}: UpdateProfile) => {
  const [state, action, pending] = useActionState(updateProfile, initialState);

  return (
    <form action={action} className="space-y-8">
      <div>
        <div className="mb-4">
          <Label className="text-sm font-semibold">Profile Photo</Label>

          <p className="mt-1 text-xs text-muted-foreground">
            Upload a clear photo for your professional profile.
          </p>
        </div>

        <div
          className="
                        flex flex-col gap-5
                        rounded-2xl border
                        bg-muted/20 p-5
                        sm:flex-row sm:items-center
                      "
        >
          <PreviewEditPhoto
            name={name}
            profilePhoto={profilePhoto}
            initials={initials}
          />
        </div>
      </div>

      <Separator />

      {/* =================================================
                      BASIC INFORMATION
                  ================================================== */}
      <div>
        <div className="mb-5">
          <h3 className="text-sm font-semibold">Basic Information</h3>

          <p className="mt-1 text-xs text-muted-foreground">
            Update the information displayed on your profile.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="displayName">Full Name</Label>

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
                defaultValue={name}
                name='name'
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
            <Label htmlFor="email">Email Address</Label>

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
                name='email'
                value={email}
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
            <Label htmlFor="experience">Experience</Label>

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
                name='experience'
                defaultValue={experience ?? ""}
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
            <Label>Account Status</Label>

            <div className="flex h-11 items-center rounded-lg border bg-muted/30 px-4">
              <span
                className={`mr-2 h-2.5 w-2.5 rounded-full ${
                  isActive ? "bg-emerald-500" : "bg-red-500"
                }`}
              />

              <span className="text-sm font-medium">{status}</span>

              <Badge variant="outline" className="ml-auto text-xs">
                Read only
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* =================================================
                      BIO
                  ================================================== */}
      <div className="space-y-2">
        <Label htmlFor="bio">About Me</Label>

        <textarea
          id="bio"
          name='bio'
          defaultValue={bio ?? ""}
          placeholder="Write something about yourself..."
          className="
                        min-h-32.5
                        w-full resize-none
                        rounded-xl border
                        bg-background
                        px-4 py-3
                        text-sm
                        outline-none
                        transition-all

                        placeholder:text-muted-foreground

                        focus:border-[#006B7A]
                        focus:ring-2
                        focus:ring-[#006B7A]/20
                      "
        />

        <p className="text-xs text-muted-foreground">
          Tell people a little about your experience and skills.
        </p>
      </div>

      {/* =================================================
                      SAVE
                  ================================================== */}
      <div
        className="
                      flex flex-col-reverse
                      gap-4 border-t
                      pt-6
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-[#006B7A]" />
          Your profile information is securely stored.
        </div>

        <Button
          type="submit"
          disabled={pending}
          className="
                        h-11 w-full rounded-lg
                        bg-linear-to-r
                        from-[#006B7A]
                        to-[#008A99]
                        px-7
                        font-semibold
                        text-white
                        shadow-md
                        shadow-[#006B7A]/20
                        transition-all

                        hover:from-[#005866]
                        hover:to-[#007887]
                        hover:shadow-lg
                        hover:shadow-[#006B7A]/25

                        sm:w-auto
                      "
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default ProfileUPdateFrom;
