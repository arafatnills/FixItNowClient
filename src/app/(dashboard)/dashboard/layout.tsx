import MobileDock from "@/components/shared/MobileDock";
import Navbar from "@/components/shared/Navbar";
import React, { Suspense } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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

export default DashboardLayout;
