import Footer from "@/components/shared/Footer";
import MobileDock from "@/components/shared/MobileDock";
import Navbar from "@/components/shared/Navbar";
import React, { Suspense } from "react";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="">
        <Navbar />
        {children}
        <Footer />
        <Suspense fallback={null}>
          <MobileDock />
        </Suspense>
      </div>
    </>
  );
};

export default PublicLayout;
