import { getMe } from "@/services/getMe";
import { UserType } from "@/components/shared/NavbarAuthSection";

import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";

export default async function ProfileSettings() {
  const user: UserType = await getMe();

  // if (!user || !user.data) {
  //   console.error("getMe() Failed to fetch user:", user); 
  //   return (
  //     <div className="flex h-screen items-center justify-center">
  //       <p className="text-muted-foreground">
  //         Failed to load profile data. Please refresh or log in again.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-10">
        <ProfileHeader user={user} />

        <ProfileTabs user={user} />
      </div>
    </div>
  );
}