This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

```
├── public/
│   ├── file.svg
│   ├── fixitnow_logo.png
│   ├── globe.svg
│   ├── logo.png
│   ├── next.svg
│   ├── placeholder-avatar.png
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   └── auth/
│   │   │       ├── _actions/
│   │   │       │   └── authAction.ts
│   │   │       ├── _components/
│   │   │       │   ├── LoginFrom.tsx
│   │   │       │   └── RegisterFrom.tsx
│   │   │       ├── login/
│   │   │       │   └── page.tsx
│   │   │       ├── register/
│   │   │       │   └── page.tsx
│   │   │       └── layout.tsx
│   │   ├── (dashboard)/
│   │   │   └── dashboard/
│   │   │       ├── _actions/
│   │   │       │   └── bookingActions.ts
│   │   │       ├── _components/
│   │   │       │   ├── _ProfileSettings/
│   │   │       │   │   ├── BasicInformation.tsx
│   │   │       │   │   ├── EditProfile.tsx
│   │   │       │   │   ├── PreviewEditPhoto.tsx
│   │   │       │   │   ├── ProfileAboutForm.tsx
│   │   │       │   │   ├── ProfileBio.tsx
│   │   │       │   │   ├── ProfileCertificates.tsx
│   │   │       │   │   ├── ProfileHeader.tsx
│   │   │       │   │   ├── ProfileHero.tsx
│   │   │       │   │   ├── ProfileOverview.tsx
│   │   │       │   │   ├── ProfilePhotoUpload.tsx
│   │   │       │   │   ├── ProfileSettings.tsx
│   │   │       │   │   ├── ProfileStatCard.tsx
│   │   │       │   │   ├── ProfileTabs.tsx
│   │   │       │   │   └── ProfileUPdateFrom.tsx
│   │   │       │   ├── CancelButton.tsx
│   │   │       │   ├── CustomerOverview.tsx
│   │   │       │   ├── MyBookingList.tsx
│   │   │       │   ├── PaymentButton.tsx
│   │   │       │   ├── PaymentStatusChart.tsx
│   │   │       │   ├── Profile.tsx
│   │   │       │   └── StatCard.tsx
│   │   │       ├── _config/
│   │   │       │   └── sidebarMenuItems.ts
│   │   │       ├── admin/
│   │   │       │   ├── my-booking/
│   │   │       │   │   ├── loading.tsx
│   │   │       │   │   └── page.tsx
│   │   │       │   ├── profile/
│   │   │       │   │   └── page.tsx
│   │   │       │   ├── loading.tsx
│   │   │       │   └── page.tsx
│   │   │       ├── customer/
│   │   │       │   ├── my-booking/
│   │   │       │   │   ├── loading.tsx
│   │   │       │   │   └── page.tsx
│   │   │       │   ├── profile/
│   │   │       │   │   ├── loading.tsx
│   │   │       │   │   └── page.tsx
│   │   │       │   ├── loading.tsx
│   │   │       │   └── page.tsx
│   │   │       ├── technician/
│   │   │       │   ├── _components/
│   │   │       │   │   ├── BookingStatusBadge.tsx
│   │   │       │   │   ├── BookingStatusDropdown.tsx
│   │   │       │   │   ├── BookingTable.tsx
│   │   │       │   │   ├── BookingTableBody.tsx
│   │   │       │   │   ├── BookingTableHeader.tsx
│   │   │       │   │   ├── BookingTableRow.tsx
│   │   │       │   │   ├── TechnicianOverview.tsx
│   │   │       │   │   └── TechnicianOverviewChart.tsx
│   │   │       │   ├── my-services/
│   │   │       │   │   ├── _components/
│   │   │       │   │   │   ├── MyServicesHeader.tsx
│   │   │       │   │   │   ├── PostFromDialog.tsx
│   │   │       │   │   │   ├── ServiceTable.tsx
│   │   │       │   │   │   ├── ServiceTableBody.tsx
│   │   │       │   │   │   └── ServiceTableHeader.tsx
│   │   │       │   │   ├── loading.tsx
│   │   │       │   │   └── page.tsx
│   │   │       │   ├── orders/
│   │   │       │   │   ├── loading.tsx
│   │   │       │   │   └── page.tsx
│   │   │       │   ├── profile/
│   │   │       │   │   ├── loading.tsx
│   │   │       │   │   └── page.tsx
│   │   │       │   ├── loading.tsx
│   │   │       │   └── page.tsx
│   │   │       ├── layout.tsx
│   │   │       └── loading.tsx
│   │   ├── (public)/
│   │   │   ├── _components/
│   │   │   │   ├── FAQHeader.tsx
│   │   │   │   ├── FAQSection.tsx
│   │   │   │   ├── FeatureBadge.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── HeroSearch.tsx
│   │   │   │   ├── HeroType.tsx
│   │   │   │   ├── HowItWorks.tsx
│   │   │   │   ├── StepCard.tsx
│   │   │   │   ├── TestimonialCard.tsx
│   │   │   │   ├── TestimonialCarousel.tsx
│   │   │   │   ├── TestimonialHeader.tsx
│   │   │   │   └── TestimonialSection.tsx
│   │   │   ├── about/
│   │   │   │   ├── _components/
│   │   │   │   │   ├── AboutCTA.tsx
│   │   │   │   │   ├── AboutHero.tsx
│   │   │   │   │   ├── MissionVision.tsx
│   │   │   │   │   ├── StatsSection.tsx
│   │   │   │   │   ├── TeamSection.tsx
│   │   │   │   │   └── WhyChooseUs.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   ├── _actions/
│   │   │   │   │   ├── getAllCategories.ts
│   │   │   │   │   ├── getSingleService.ts
│   │   │   │   │   └── serviceAction.ts
│   │   │   │   ├── _components/
│   │   │   │   │   ├── FilterControls.tsx
│   │   │   │   │   ├── MobileFilters.tsx
│   │   │   │   │   ├── Pagination.tsx
│   │   │   │   │   ├── ServiceCard.tsx
│   │   │   │   │   ├── ServiceHeader.tsx
│   │   │   │   │   ├── ServiceList.tsx
│   │   │   │   │   └── SidebarFilters.tsx
│   │   │   │   ├── [slug]/
│   │   │   │   │   ├── _actions/
│   │   │   │   │   │   └── booking.ts
│   │   │   │   │   ├── _components/
│   │   │   │   │   │   ├── BookingButton.tsx
│   │   │   │   │   │   ├── BreadcrumbNav.tsx
│   │   │   │   │   │   ├── DesktopBookingCard.tsx
│   │   │   │   │   │   ├── MobileBookingBtn.tsx
│   │   │   │   │   │   ├── MobilePriceStrip.tsx
│   │   │   │   │   │   ├── ServiceAbout.tsx
│   │   │   │   │   │   ├── ServiceHeader.tsx
│   │   │   │   │   │   ├── ServiceHero.tsx
│   │   │   │   │   │   ├── ServiceHowItWorks.tsx
│   │   │   │   │   │   └── ServiceSpecs.tsx
│   │   │   │   │   ├── payment-cancel/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── payment-success/
│   │   │   │   │   │   ├── _components/
│   │   │   │   │   │   │   └── PaymentSuccessCard.tsx
│   │   │   │   │   │   └── [sessionId]/
│   │   │   │   │   │       ├── loading.tsx
│   │   │   │   │   │       └── page.tsx
│   │   │   │   │   ├── loading.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── loading.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── opengraph-image.png
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── app-sidebar.tsx
│   │   │   ├── EmptyBookingState.tsx
│   │   │   ├── GitHubButton.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── MyBookingSkeleton.tsx
│   │   │   ├── OverViewSkeleton.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── ProfileSettingsSkeleton.tsx
│   │   ├── shadcn-space/
│   │   │   └── radix/
│   │   │       ├── accordion/
│   │   │       │   └── accordion-05.tsx
│   │   │       ├── avatar/
│   │   │       │   └── avatar-04.tsx
│   │   │       ├── badge/
│   │   │       │   └── badge-07.tsx
│   │   │       ├── card/
│   │   │       │   └── card-19.tsx
│   │   │       ├── carousel/
│   │   │       │   └── carousel-01.tsx
│   │   │       └── file-upload/
│   │   │           └── file-upload-05.tsx
│   │   ├── shared/
│   │   │   ├── CurrentYear.tsx
│   │   │   ├── FiltersByStatus.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── GlobalNotFound.tsx
│   │   │   ├── GlobalTheme.tsx
│   │   │   ├── MobileDock.tsx
│   │   │   ├── MobileToggle.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavbarAuth.tsx
│   │   │   ├── NavbarAuthSection.tsx
│   │   │   ├── NavLinks.ts
│   │   │   ├── Pagination.tsx
│   │   │   ├── ProfileDropdown.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── TableEmptyState.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   └── ThemeColorSync.tsx
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── field.tsx
│   │       ├── input-group.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── spinner.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       └── tooltip.tsx
│   ├── hooks/
│   │   └── use-mobile.ts
│   ├── lib/
│   │   ├── types.ts
│   │   └── utils.ts
│   ├── services/
│   │   ├── getMe.ts
│   │   ├── logout.ts
│   │   └── refreshToken.ts
│   ├── utils/
│   │   └── jwt.ts
│   └── proxy.ts
├── .env.example
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```
