"use client";

import {
  LayoutDashboard,
  Settings,
} from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { UserType } from "@/components/shared/NavbarAuthSection";

import ProfileOverview from "./ProfileOverview";
import EditProfile from "./EditProfile";

interface ProfileTabsProps {
  user: UserType;
}

export default function ProfileTabs({
  user,
}: ProfileTabsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <div className="mb-6">
        <TabsList
          className="
            h-12 rounded-xl
            border border-slate-200
            bg-white p-1 shadow-sm
            dark:border-border
            dark:bg-card
          "
        >
          <TabsTrigger value="overview">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Overview
          </TabsTrigger>

          <TabsTrigger value="settings">
            <Settings className="mr-2 h-4 w-4" />
            Edit Profile
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent
        value="overview"
        className="mt-0 space-y-6 focus-visible:outline-none"
      >
        <ProfileOverview user={user} />
      </TabsContent>

      <TabsContent
        value="settings"
        className="mt-0 focus-visible:outline-none"
      >
        <EditProfile user={user} />
      </TabsContent>
    </Tabs>
  );
}