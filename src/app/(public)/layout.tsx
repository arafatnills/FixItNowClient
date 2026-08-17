import MobileDock from "@/components/shared/MobileDock";
import Navbar from "@/components/shared/Navbar";
import React, { Suspense } from "react";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
     <Suspense fallback={null}>
        <MobileDock />
      </Suspense>
    </>
  );
};

export default PublicLayout;
