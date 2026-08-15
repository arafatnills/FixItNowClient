// constants/navLinks.ts

import { Home, LayoutGrid, Info, Phone, type LucideIcon } from "lucide-react";

export type NavLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  showInNavbar: boolean; 
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "/", icon: Home, showInNavbar: false },
  { name: "All Services", href: "/services", icon: LayoutGrid, showInNavbar: true },
  { name: "About Us", href: "/about", icon: Info, showInNavbar: true },
  { name: "Contact Us", href: "/contact", icon: Phone, showInNavbar: true },
];


export const DOCK_HIDDEN_PREFIXES = ["/auth", ];