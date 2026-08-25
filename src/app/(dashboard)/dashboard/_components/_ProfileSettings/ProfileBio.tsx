import { CircleUserRound } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { UserType } from "@/components/shared/NavbarAuthSection";

interface ProfileBioProps {
  profile: UserType["data"]["profile"];
}

export default function ProfileBio({
  profile,
}: ProfileBioProps) {
  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm dark:border-border">
      <CardHeader>
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
            <CardTitle className="text-base">
              About Me
            </CardTitle>

            <CardDescription>
              Personal profile information
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {profile.bio ? (
          <p className="text-sm leading-7 text-muted-foreground">
            {profile.bio}
          </p>
        ) : (
          <div className="rounded-xl border border-dashed p-6 text-center">
            <p className="text-sm text-muted-foreground">
              No bio added yet.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}