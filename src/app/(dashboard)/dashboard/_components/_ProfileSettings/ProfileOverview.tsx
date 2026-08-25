import { UserType } from "@/components/shared/NavbarAuthSection";

import ProfileHero from "./ProfileHero";
import ProfileBio from "./ProfileBio";
import ProfileCertificates from "./ProfileCertificates";

interface ProfileOverviewProps {
  user: UserType;
}

export default function ProfileOverview({
  user,
}: ProfileOverviewProps) {
  return (
    <>
      <ProfileHero user={user} />

      <ProfileBio profile={user.data.profile} />

      <ProfileCertificates
        certificates={user.data.profile.certificates}
      />
    </>
  );
}