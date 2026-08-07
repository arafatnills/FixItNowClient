import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 md:p-8 ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-12 lg:gap-20">
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Welcome
            <span className="text-teal-600 dark:text-teal-500"> Back!</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Enter your credentials to access your dashboard, manage bookings,
            and explore services.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
