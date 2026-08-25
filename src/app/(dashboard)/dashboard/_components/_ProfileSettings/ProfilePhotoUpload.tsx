import {
  Camera,
  Upload,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  Input,
} from "@/components/ui/input";

import {
  Label,
} from "@/components/ui/label";

import { Separator } from "@/components/ui/separator";

import { UserType } from "@/components/shared/NavbarAuthSection";

interface ProfilePhotoUploadProps {
  user: UserType;
}

export default function ProfilePhotoUpload({
  user,
}: ProfilePhotoUploadProps) {
  const initials =
    user.data.name
      ?.split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  return (
    <>
      <div>
        <div className="mb-4">
          <Label className="text-sm font-semibold">
            Profile Photo
          </Label>

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
          {/* Avatar */}
          <div className="relative mx-auto sm:mx-0">
            <Avatar
              className="
                h-24 w-24
                border-4 border-white
                shadow-md
                dark:border-card
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
                  text-2xl font-bold
                  text-[#006B7A]
                "
              >
                {initials}
              </AvatarFallback>
            </Avatar>

            <div
              className="
                absolute -bottom-1 -right-1
                flex h-8 w-8
                items-center justify-center
                rounded-full
                border-2 border-white
                bg-[#006B7A]
                text-white shadow-md
                dark:border-card
              "
            >
              <Camera className="h-4 w-4" />
            </div>
          </div>

          {/* Upload */}
          <div className="flex-1 text-center sm:text-left">
            <Input
              type="file"
              id="photo-upload"
              accept="image/*"
              className="hidden"
            />

            <Label
              htmlFor="photo-upload"
              className="
                inline-flex h-10
                cursor-pointer items-center
                justify-center
                rounded-lg
                bg-[#006B7A]
                px-5
                text-sm font-semibold
                text-white
                shadow-sm
                transition-all
                hover:bg-[#005866]
                hover:shadow-md
              "
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload New Photo
            </Label>

            <p className="mt-2 text-xs text-muted-foreground">
              JPG, PNG or WEBP • Recommended 400×400px
            </p>
          </div>
        </div>
      </div>

      <Separator />
    </>
  );
}