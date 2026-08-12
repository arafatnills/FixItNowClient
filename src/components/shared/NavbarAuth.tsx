import { getMe } from "@/services/getMe";
import NavbarAuthSection from "./NavbarAuthSection";

export default async function NavbarAuth() {
  const user = await getMe();
  return <NavbarAuthSection user={user} />;
}
