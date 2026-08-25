import {
  ShieldCheck,
} from "lucide-react";

import {
  Label,
} from "@/components/ui/label";

import {
  Button,
} from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import { UserType } from "@/components/shared/NavbarAuthSection";

interface ProfileAboutFormProps {
  user: UserType;
}

export default function ProfileAboutForm({
  user,
}: ProfileAboutFormProps) {
  const profile = user.data.profile;

  return (
    <>
      <Separator />

      {/* Bio */}
      <div className="space-y-2">
        <Label htmlFor="bio">
          About Me
        </Label>

        <textarea
          id="bio"
          defaultValue={profile.bio ?? ""}
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

      {/* Save */}
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
    </>
  );
}