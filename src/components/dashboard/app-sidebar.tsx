"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png";
import { UserType } from "../shared/NavbarAuthSection";
import { sidebarMenuItems } from "@/app/(dashboard)/dashboard/_config/sidebarMenuItems";
import { SidebarMenuItems } from "@/lib/types";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";

export function AppSidebar({ user }: { user: UserType }) {
  const pathName = usePathname();
  const role = user.data.role;
  let navItems: SidebarMenuItems[] = [];

  if (role === "ADMIN") {
    navItems = sidebarMenuItems.ADMIN;
  } else if (role === "CUSTOMER") {
    navItems = sidebarMenuItems.CUSTOMER;
  } else if (role === "TECHNICIAN") {
    navItems = sidebarMenuItems.TECHNICIAN;
  }
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2 overflow-hidden">
          <Image
            src={logo}
            width={40}
            height={100}
            alt="logo"
            className="shrink-0"
          />

          <span className="text-2xl font-bold text-teal-700 gap-2 dark:text-teal-500 flex items-center whitespace-nowrap group-data-[collapsible=icon]:hidden">
            FixIt<span className="text-amber-500">Now</span>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((menu) => (
                <SidebarMenuItem key={menu.href}>
                  <SidebarMenuButton isActive={pathName === menu.href} asChild>
                    <Link href={menu.href}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <menu.icon />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{menu.label}</p>
                        </TooltipContent>
                      </Tooltip>

                      {menu.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>Auth</SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
