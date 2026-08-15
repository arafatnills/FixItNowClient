import MobileDock from "@/components/shared/MobileDock";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <MobileDock/>
    </>
  );
};

export default DashboardLayout;
