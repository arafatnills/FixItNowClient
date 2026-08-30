"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Upload } from "lucide-react";
import { useState } from "react";

type EditType = {
  profilePhoto: string;
  name: string;
  initials: string;
};

const PreviewEditPhoto = ({ profilePhoto, name, initials }: EditType) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);

      const img = new globalThis.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 400;
        const MAX_HEIGHT = 400;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);

          const base64String = canvas.toDataURL("image/jpeg", 0.8);
          setCompressedImage(base64String);
        }
      };
      img.src = imageUrl;
    }
  };
  return (
    <>
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
            src={previewUrl || profilePhoto}
            alt={name}
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

      <div className="flex-1 text-center sm:text-left">
        <Input
          type="file"
          id="photo-upload"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />

        {compressedImage && (
          <Input type="hidden" name="profilePhoto" value={compressedImage} />
        )}

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
    </>
  );
};

export default PreviewEditPhoto;
