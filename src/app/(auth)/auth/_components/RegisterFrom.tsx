"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { registerActon } from "../_actions/authAction";
import { useActionState, useEffect, useState } from "react";

import FileUpload from "@/components/shadcn-space/radix/file-upload/file-upload-05";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { RegisterApiResponse, UserData } from "@/lib/types";

const initialState: RegisterApiResponse = {
  success: false,
  status: 201,
  message: "",
  data: {} as UserData,
};

const RegisterForm = () => {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const router = useRouter();

  const [state, action, pending] = useActionState(registerActon, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success("account successfully created!");
      router.replace("/auth/login");
    }
  }, [state, router]);

  return (
    <form className="w-full max-w-105" action={action}>
      <Card className="p-6 sm:p-8 shadow-lg border-teal-600/10 dark:border-teal-500/20 space-y-6">
        <div className="space-y-5">
          <div className="space-y-2 text-left">
            <Label htmlFor="profilePhoto">Profile Photo </Label>
            <FileUpload onImageChange={(image) => setProfilePhoto(image)} />

            {profilePhoto && (
              <Input type="hidden" name="profilePhoto" value={profilePhoto} />
            )}
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Arafat Nill"
              required
              className="h-12 text-base rounded-md"
            />
          </div>
          {/* Email Field */}
          <div className="space-y-2 text-left">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
              className="h-12 text-base rounded-md"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2 text-left">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">
                Password <span className="text-destructive">*</span>
              </Label>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="h-12 text-base rounded-md"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Button
            type="submit"
            className="w-full cursor-pointer h-12 text-base bg-teal-600 hover:bg-teal-700 text-white transition-colors"
          >
            {pending ? <>{<Spinner />} creating account</> : "Create account"}
          </Button>

          <div className="flex justify-end">
            <p className="w-fit  justify-end">
              {`Have an account? `}

              <Link
                href={"/auth/login"}
                className="text-teal-600 dark:text-teal-400"
              >
                login
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </form>
  );
};

export default RegisterForm;
