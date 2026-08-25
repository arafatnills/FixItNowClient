import { getMe } from "@/services/getMe";
import { UserType } from "@/components/shared/NavbarAuthSection";

import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";

export default async function ProfileSettings() {
  const user: UserType = await getMe();

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-10">
        <ProfileHeader user={user} />

        <ProfileTabs user={user} />
      </div>
    </div>
  );
}