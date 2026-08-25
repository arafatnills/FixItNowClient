import Image from "next/image";
import {
  User,
  Mail,
  Crown,
  ShieldCheck,
  LayoutDashboard,
  Settings,
  CreditCard,
  Upload,
  Sparkles,
  CheckCircle2,
  LockKeyhole,
  Camera,
  BriefcaseBusiness,
  Award,
  CalendarDays,
  FileBadge2,
  CircleUserRound,
  ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Separator } from "@/components/ui/separator";

import { getMe } from "@/services/getMe";
import { UserType } from "@/components/shared/NavbarAuthSection";
import { ProfileStatCard } from "./_ProfileSettings/ProfileStatCard";

export default async function ProfileSettings() {
  const user: UserType = await getMe();

  const profile = user.data.profile;
  const isActive = user.data.status === "ACTIVE";

  const initials =
    user.data.name
      ?.split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  const joinedDate = new Date(user.data.createdAt).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-10">
        {/* =====================================================
            TOP HEADER
        ====================================================== */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-white p-2 shadow-sm dark:bg-card">
              <Image
                src="/logo.png"
                alt="Logo"
                width={45}
                height={45}
                className="object-contain"
              />
            </div>

            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="text-sm font-medium text-[#006B7A]">
                  Account
                </span>

                <span className="h-1 w-1 rounded-full bg-muted-foreground" />

                <span className="text-sm text-muted-foreground">Settings</span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-foreground sm:text-3xl">
                Account Settings
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Manage your profile, account information and preferences.
              </p>
            </div>
          </div>

          {/* Account Status */}
          <div
            className="
              flex w-fit items-center gap-2 rounded-full
              border border-[#006B7A]/15 bg-white px-4 py-2
              shadow-sm dark:bg-card
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                  isActive ? "bg-emerald-400" : "bg-red-400"
                }`}
              />

              <span
                className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                  isActive ? "bg-emerald-500" : "bg-red-500"
                }`}
              />
            </span>

            <span className="text-xs font-semibold">
              {isActive ? "Account Active" : "Account Blocked"}
            </span>
          </div>
        </div>

        {/* =====================================================
            TABS
        ====================================================== */}
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-6">
            <TabsList
              className="
                h-12 rounded-xl border border-slate-200
                bg-white p-1 shadow-sm
                dark:border-border dark:bg-card
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

          {/* =====================================================
              OVERVIEW
          ====================================================== */}
          <TabsContent
            value="overview"
            className="mt-0 space-y-6 focus-visible:outline-none"
          >
            {/* =================================================
                PROFILE HERO
            ================================================== */}
            <Card className="overflow-hidden p-0 rounded-3xl border-slate-200 shadow-sm dark:border-border">
              {/* Cover */}
              <div className="relative h-40 overflow-hidden sm:h-48">
                {/* Main gradient */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-br
                    from-[#005A69]
                    via-[#00798A]
                    to-[#E99A18]
                  "
                />

                {/* Decorative shapes */}
                <div
                  className="
                    absolute -right-20 -top-24
                    h-72 w-72 rounded-full
                    bg-white/10 blur-2xl
                  "
                />

                <div
                  className="
                    absolute -bottom-32 left-1/3
                    h-80 w-80 rounded-full
                    bg-[#E99A18]/20 blur-3xl
                  "
                />

                <div
                  className="
                    absolute -left-20 top-20
                    h-52 w-52 rounded-full
                    bg-[#00A6B8]/20 blur-3xl
                  "
                />

                {/* Pattern */}
                <div
                  className="
                    absolute inset-0 opacity-[0.08]
                    bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
                    bg-size-[32px_32px]
                  "
                />

                {/* Brand Logo */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 p-1.5 shadow-lg">
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>

                    <div className="hidden sm:block">
                      <p className="text-sm font-bold text-white">
                        Professional Account
                      </p>

                      <p className="text-xs text-white/70">
                        Manage your profile
                      </p>
                    </div>
                  </div>
                </div>

                {/* Role */}
                <div className="absolute right-5 top-5 sm:right-7 sm:top-6">
                  <Badge
                    className="
                      border border-white/20
                      bg-white/15
                      px-3 py-1.5
                      text-white
                      shadow-lg
                      backdrop-blur-md
                      hover:bg-white/20
                    "
                  >
                    <Sparkles className="mr-1.5 h-3.5 w-3.5" />

                    {user.data.role === "admin"
                      ? "Admin Account"
                      : "Member Account"}
                  </Badge>
                </div>
              </div>

              <CardContent className="relative px-5 pb-7 sm:px-8">
                {/* =================================================
                    PROFILE IDENTITY
                ================================================== */}
                <div className="-mt-16 flex flex-col gap-5 md:-mt-16 md:flex-row md:items-end">
                  {/* Avatar */}
                  <div className="relative mx-auto md:mx-0">
                    <Avatar
                      className="
                        h-32 w-32
                        border-[5px]
                        border-white
                        bg-white
                        shadow-xl
                        dark:border-card
                        dark:bg-card
                      "
                    >
                      <AvatarImage
                        src={user.data.profilePhoto}
                        alt={user.data.name}
                        className="object-cover"
                      />

                      <AvatarFallback
                        className="
                          bg-[#006B7A]/10
                          text-3xl font-bold
                          text-[#006B7A]
                        "
                      >
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Identity */}
                  <div className="flex-1  text-center md:pb-2 md:text-left">
                    <div className="flex  flex-col gap-2 md:flex-row md:items-center">
                      <h2 className="text-2xl pt-15 font-bold tracking-tight text-slate-900 dark:text-foreground">
                        {user.data.name}
                      </h2>
                    </div>

                    <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted-foreground md:justify-start">
                      <Mail className="h-3.5 w-3.5 text-[#006B7A]" />
                      {user.data.email}
                    </p>

                    <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                      <Badge
                        variant="outline"
                        className="border-[#006B7A]/20 bg-[#006B7A]/5 text-[#006B7A]"
                      >
                        <CalendarDays className="mr-1.5 h-3 w-3" />
                        Joined {joinedDate}
                      </Badge>

                      <Badge
                        variant="outline"
                        className={
                          isActive
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border-red-200 bg-red-50 text-red-700"
                        }
                      >
                        <CheckCircle2 className="mr-1.5 h-3 w-3" />
                        {user.data.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <Separator className="my-7" />

                {/* =================================================
                    PROFILE STATS
                ================================================== */}
                <div className="grid gap-4 sm:grid-cols-3">
                  <ProfileStatCard
                    title="Experience"
                    value={profile.experience ?? 0}
                    suffix="Years"
                    icon={BriefcaseBusiness}
                    iconClassName="
      bg-[#006B7A]/10
      text-[#006B7A]
    "
                    cardClassName="
      hover:border-[#006B7A]/30
    "
                  />

                  <ProfileStatCard
                    title="Certificates"
                    value={profile.certificates?.length ?? 0}
                    suffix="Earned"
                    icon={Award}
                    iconClassName="
      bg-[#E99A18]/10
      text-[#D58A00]
    "
                    cardClassName="
      hover:border-[#E99A18]/30
    "
                  />

                  <ProfileStatCard
                    title="Account"
                    value={user.data.status}
                    icon={ShieldCheck}
                    iconClassName="
      bg-emerald-50
      text-emerald-600
      dark:bg-emerald-500/10
      dark:text-emerald-400
    "
                    cardClassName="
      hover:border-emerald-200
    "
                  />
                </div>
              </CardContent>
            </Card>

            {/* =================================================
                BIO + ACCOUNT DETAILS
            ================================================== */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Bio */}
              <Card className="rounded-2xl border-slate-200 shadow-sm lg:col-span-2 dark:border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-xl
                        bg-[#006B7A]/10
                        text-[#006B7A]
                      "
                    >
                      <CircleUserRound className="h-5 w-5" />
                    </div>

                    <div>
                      <CardTitle className="text-base">About Me</CardTitle>

                      <CardDescription>
                        Personal profile information
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {profile.bio ? (
                    <p className="text-sm leading-7 text-muted-foreground">
                      {profile.bio}
                    </p>
                  ) : (
                    <div className="rounded-xl border border-dashed p-6 text-center">
                      <p className="text-sm text-muted-foreground">
                        No bio added yet.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* =================================================
                CERTIFICATES
            ================================================== */}
            {profile.certificates?.length > 0 && (
              <Card className="rounded-2xl border-slate-200 shadow-sm dark:border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-xl
                        bg-[#E99A18]/10
                        text-[#D58A00]
                      "
                    >
                      <FileBadge2 className="h-5 w-5" />
                    </div>

                    <div>
                      <CardTitle className="text-base">Certificates</CardTitle>

                      <CardDescription>
                        Your professional certificates
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {profile.certificates.map((certificate, index) => (
                      <div
                        key={`${certificate}-${index}`}
                        className="
                            flex items-center justify-between
                            rounded-xl border
                            bg-muted/20 p-4
                            transition-colors
                            hover:border-[#E99A18]/30
                            hover:bg-[#E99A18]/5
                          "
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className="
                                flex h-9 w-9 shrink-0
                                items-center justify-center
                                rounded-lg
                                bg-[#E99A18]/10
                                text-[#D58A00]
                              "
                          >
                            <Award className="h-4 w-4" />
                          </div>

                          <p className="truncate text-sm font-medium">
                            {certificate}
                          </p>
                        </div>

                        <ArrowUpRight className="ml-2 h-4 w-4 shrink-0 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* =====================================================
              EDIT PROFILE
          ====================================================== */}
          <TabsContent
            value="settings"
            className="mt-0 focus-visible:outline-none"
          >
            <Card className="overflow-hidden rounded-2xl border-slate-200 shadow-sm dark:border-border">
              {/* Header */}
              <CardHeader className="border-b bg-white px-5 py-6 dark:bg-card sm:px-7">
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      bg-[#006B7A]/10
                      text-[#006B7A]
                    "
                  >
                    <Settings className="h-5 w-5" />
                  </div>

                  <div>
                    <CardTitle>Edit Profile</CardTitle>

                    <CardDescription className="mt-1">
                      Update your personal information and profile photo.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-5 sm:p-7">
                <form className="space-y-8">
                  {/* =================================================
                      PHOTO
                  ================================================== */}
                  <div>
                    <div className="mb-4">
                      <Label className="text-sm font-semibold">
                        Profile Photo
                      </Label>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Upload a clear photo for your professional profile.
                      </p>
                    </div>

                    <div
                      className="
                        flex flex-col gap-5
                        rounded-2xl border
                        bg-muted/20 p-5
                        sm:flex-row sm:items-center
                      "
                    >
                      <div className="relative mx-auto sm:mx-0">
                        <Avatar
                          className="
                            h-24 w-24
                            border-4 border-white
                            shadow-md
                            dark:border-card
                          "
                        >
                          <AvatarImage
                            src={user.data.profilePhoto}
                            alt={user.data.name}
                            className="object-cover"
                          />

                          <AvatarFallback
                            className="
                              bg-[#006B7A]/10
                              text-2xl font-bold
                              text-[#006B7A]
                            "
                          >
                            {initials}
                          </AvatarFallback>
                        </Avatar>

                        <div
                          className="
                            absolute -bottom-1 -right-1
                            flex h-8 w-8
                            items-center justify-center
                            rounded-full
                            border-2 border-white
                            bg-[#006B7A]
                            text-white shadow-md
                            dark:border-card
                          "
                        >
                          <Camera className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="flex-1 text-center sm:text-left">
                        <Input
                          type="file"
                          id="photo-upload"
                          accept="image/*"
                          className="hidden"
                        />

                        <Label
                          htmlFor="photo-upload"
                          className="
                            inline-flex h-10
                            cursor-pointer items-center
                            justify-center
                            rounded-lg
                            bg-[#006B7A]
                            px-5
                            text-sm font-semibold
                            text-white
                            shadow-sm
                            transition-all
                            hover:bg-[#005866]
                            hover:shadow-md
                          "
                        >
                          <Upload className="mr-2 h-4 w-4" />
                          Upload New Photo
                        </Label>

                        <p className="mt-2 text-xs text-muted-foreground">
                          JPG, PNG or WEBP • Recommended 400×400px
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* =================================================
                      BASIC INFORMATION
                  ================================================== */}
                  <div>
                    <div className="mb-5">
                      <h3 className="text-sm font-semibold">
                        Basic Information
                      </h3>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Update the information displayed on your profile.
                      </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="displayName">Full Name</Label>

                        <div className="relative">
                          <User
                            className="
                              pointer-events-none
                              absolute left-3 top-1/2
                              h-4 w-4
                              -translate-y-1/2
                              text-[#006B7A]
                            "
                          />

                          <Input
                            defaultValue={user.data.name}
                            id="displayName"
                            placeholder="Enter your full name"
                            className="
                              h-11 rounded-lg pl-10
                              focus-visible:border-[#006B7A]
                              focus-visible:ring-[#006B7A]
                            "
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>

                        <div className="relative">
                          <Mail
                            className="
                              pointer-events-none
                              absolute left-3 top-1/2
                              h-4 w-4
                              -translate-y-1/2
                              text-muted-foreground
                            "
                          />

                          <Input
                            id="email"
                            value={user.data.email}
                            disabled
                            className="
                              h-11 rounded-lg
                              bg-muted/50
                              pl-10 pr-10
                            "
                          />

                          <LockKeyhole
                            className="
                              absolute right-3 top-1/2
                              h-4 w-4
                              -translate-y-1/2
                              text-muted-foreground
                            "
                          />
                        </div>

                        <p className="text-xs text-muted-foreground">
                          Contact admin to change your email address.
                        </p>
                      </div>

                      {/* Experience */}
                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience</Label>

                        <div className="relative">
                          <BriefcaseBusiness
                            className="
                              pointer-events-none
                              absolute left-3 top-1/2
                              h-4 w-4
                              -translate-y-1/2
                              text-[#006B7A]
                            "
                          />

                          <Input
                            id="experience"
                            type="number"
                            defaultValue={profile.experience ?? ""}
                            placeholder="Years of experience"
                            className="
                              h-11 rounded-lg pl-10
                              focus-visible:border-[#006B7A]
                              focus-visible:ring-[#006B7A]
                            "
                          />
                        </div>
                      </div>

                      {/* Status */}
                      <div className="space-y-2">
                        <Label>Account Status</Label>

                        <div className="flex h-11 items-center rounded-lg border bg-muted/30 px-4">
                          <span
                            className={`mr-2 h-2.5 w-2.5 rounded-full ${
                              isActive ? "bg-emerald-500" : "bg-red-500"
                            }`}
                          />

                          <span className="text-sm font-medium">
                            {user.data.status}
                          </span>

                          <Badge variant="outline" className="ml-auto text-xs">
                            Read only
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* =================================================
                      BIO
                  ================================================== */}
                  <div className="space-y-2">
                    <Label htmlFor="bio">About Me</Label>

                    <textarea
                      id="bio"
                      defaultValue={profile.bio ?? ""}
                      placeholder="Write something about yourself..."
                      className="
                        min-h-32.5
                        w-full resize-none
                        rounded-xl border
                        bg-background
                        px-4 py-3
                        text-sm
                        outline-none
                        transition-all

                        placeholder:text-muted-foreground

                        focus:border-[#006B7A]
                        focus:ring-2
                        focus:ring-[#006B7A]/20
                      "
                    />

                    <p className="text-xs text-muted-foreground">
                      Tell people a little about your experience and skills.
                    </p>
                  </div>

                  {/* =================================================
                      SAVE
                  ================================================== */}
                  <div
                    className="
                      flex flex-col-reverse
                      gap-4 border-t
                      pt-6
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ShieldCheck className="h-4 w-4 text-[#006B7A]" />
                      Your profile information is securely stored.
                    </div>

                    <Button
                      type="submit"
                      className="
                        h-11 w-full rounded-lg
                        bg-linear-to-r
                        from-[#006B7A]
                        to-[#008A99]
                        px-7
                        font-semibold
                        text-white
                        shadow-md
                        shadow-[#006B7A]/20
                        transition-all

                        hover:from-[#005866]
                        hover:to-[#007887]
                        hover:shadow-lg
                        hover:shadow-[#006B7A]/25

                        sm:w-auto
                      "
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
