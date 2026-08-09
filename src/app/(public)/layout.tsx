import Navbar from "@/components/shared/Navbar";
import { getMe } from "@/services/getMe";
import React from "react";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  );
};

export default PublicLayout;
