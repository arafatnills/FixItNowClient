import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
        <Button
          variant="ghost"
          asChild
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline-block">Back to Home</span>
          </Link>
        </Button>
      </div>

      {/* Main Content Wrapper */}
      <div className="w-full max-w-6xl px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome
              <span className="text-teal-600 dark:text-teal-500"> Back!</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Enter your credentials to access your dashboard, manage bookings,
              and explore our premium services.
            </p>
          </div>

          {/* Right Form Section (Children) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
