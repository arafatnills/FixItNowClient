"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckIcon } from "lucide-react";
const BorderAvatar = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="relative w-fit">
        <Avatar className="ring-offset-background ring-2 ring-teal-600 ring-offset-2 dark:ring-teal-400">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="text-xs">
            {name?.match(/\b\w/g)?.slice(0, 2).join("").toUpperCase() || ""}
          </AvatarFallback>
        </Avatar>
        <span className="absolute -right-1.5 -bottom-1.5 inline-flex size-4 items-center justify-center rounded-full bg-teal-600 dark:bg-teal-400">
          <CheckIcon className="size-3 text-white" />
        </span>
      </div>
    </div>
  );
};

export default BorderAvatar;
