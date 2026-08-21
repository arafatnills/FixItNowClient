import { getMe } from "@/services/getMe";
import React from "react";
import ProfileDropdown from "../shared/ProfileDropdown";

const Profile = async () => {
  const user = await getMe();
  return <ProfileDropdown user={user} />;
};

export default Profile;
