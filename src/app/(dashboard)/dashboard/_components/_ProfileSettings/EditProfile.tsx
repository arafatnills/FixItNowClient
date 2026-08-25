import {
  Camera,
  Settings,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { UserType } from "@/components/shared/NavbarAuthSection";

import ProfilePhotoUpload from "./ProfilePhotoUpload";
import BasicInformation from "./BasicInformation";
import ProfileAboutForm from "./ProfileAboutForm";

interface EditProfileProps {
  user: UserType;
}

export default function EditProfile({
  user,
}: EditProfileProps) {
  return (
    <Card className="overflow-hidden rounded-2xl border-slate-200 shadow-sm dark:border-border">
      {/* Header */}
      <CardHeader className="border-b bg-white px-5 py-6 dark:bg-card sm:px-7">
        <div className="flex items-center gap-4">
          <div
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              bg-[#006B7A]/10
              text-[#006B7A]
            "
          >
            <Settings className="h-5 w-5" />
          </div>

          <div>
            <CardTitle>
              Edit Profile
            </CardTitle>

            <CardDescription className="mt-1">
              Update your personal information and profile photo.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-5 sm:p-7">
        <form className="space-y-8">
          <ProfilePhotoUpload user={user} />

          <BasicInformation user={user} />

          <ProfileAboutForm user={user} />
        </form>
      </CardContent>
    </Card>
  );
}