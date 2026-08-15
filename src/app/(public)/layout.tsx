import MobileDock from "@/components/shared/MobileDock";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <MobileDock/>
    </>
  );
};

export default PublicLayout;
