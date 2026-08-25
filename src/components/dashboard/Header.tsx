"use client"

import { Fragment } from "react";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "../shared/MobileToggle";
import GitHubButton from "./GitHubButton";
import Link from "next/link";
import ProfileDropdown from "../shared/ProfileDropdown";
import { UserType } from "../shared/NavbarAuthSection";
const Header = ({user}: {user: UserType}) => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card">
      <div className="flex h-12 w-full items-center px-4 sm:px-6">
        {/* LEFT */}
        <div className="flex min-w-0 items-center gap-4">
          <SidebarTrigger className="[&_svg]:size-5!" />

          <Separator orientation="vertical" className="hidden h-4! sm:block" />
          <Breadcrumb className="hidden lg:flex">
            <BreadcrumbList>
              {segments.map((segment, index) => {
                const isLast = index === segments.length - 1;

                const label = segment
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase());

                const href = "/" + segments.slice(0, index + 1).join("/");

                return (
                  <Fragment key={href}>
                    <BreadcrumbItem>
                      {index === 0 ? (
                       
                        <span className="text-muted-foreground">{label}</span>
                      ) : isLast ? (
                        // Current page
                        <BreadcrumbPage>{label}</BreadcrumbPage>
                      ) : (
                       
                        <BreadcrumbLink asChild>
                          <Link href={href}>{label}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>

                    {!isLast && <BreadcrumbSeparator />}
                  </Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* RIGHT */}
        <div className="ml-auto flex shrink-0 items-center gap-4">
          <GitHubButton />
          <ModeToggle />
         <ProfileDropdown user={user}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
