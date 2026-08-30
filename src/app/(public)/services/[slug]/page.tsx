import type { Metadata } from "next";
import { getSingleService } from "../_actions/getSingleService";
import BreadcrumbNav from "./_components/BreadcrumbNav";
import ServiceHero from "./_components/ServiceHero";
import ServiceHeader from "./_components/ServiceHeader";
import ServiceAbout from "./_components/ServiceAbout";
import ServiceSpecs from "./_components/ServiceSpecs";
import ServiceHowItWorks from "./_components/ServiceHowItWorks";
import DesktopBookingCard from "./_components/DesktopBookingCard";
import { getMe } from "@/services/getMe";
import MobileBookingBtn from "./_components/MobileBookingBtn";

const formatPrice = (price: string | number) =>
  `৳${Number(price || 0).toLocaleString("en-US")}`;

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  });

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getSingleService(slug);

  if (!service) return { title: "Service not found | FixItNow" };

  return {
    title: `${service.serviceName} in ${service.area}, ${service.city} | FixItNow`,
    description: service.description?.slice(0, 155),
    openGraph: {
      title: service.serviceName,
      description: service.description?.slice(0, 155),
      images: service.thumbnail ? [service.thumbnail] : [],
    },
  };
}

export default async function ServiceDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getSingleService(slug);
  const user = await getMe();

  if (!service) {
    return <div className="">not found</div>;
  }

  const imageUrl = service.thumbnail?.trim() || "";
  const categoryName = service.category?.name || "";
  const location = [service.area, service.city].filter(Boolean).join(", ");
  const formattedPrice = formatPrice(service.price);
  const formattedDate = formatDate(service.createdAt);

  return (
    <main className="min-h-screen pb-28 lg:pb-16 ">
      <div className="mx-auto w-full container px-4 py-5 sm:px-6 lg:px-8 lg:py-10">
        <BreadcrumbNav serviceName={service.serviceName} />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-10">
          <div className="min-w-0 space-y-6">
            <ServiceHero
              imageUrl={imageUrl}
              serviceName={service.serviceName}
              categoryName={categoryName}
            />
            <ServiceHeader
              serviceName={service.serviceName}
              location={location}
            />
            <MobileBookingBtn
              formattedPrice={formattedPrice}
              serviceId={service.id}
              technicianId={service.technicianId}
            />
            <ServiceAbout description={service.description} />
            <ServiceSpecs
              categoryName={categoryName}
              location={location}
              formattedDate={formattedDate}
            />
            <ServiceHowItWorks />
          </div>

          <DesktopBookingCard
            formattedPrice={formattedPrice}
            serviceId={service.id}
            technicianId={service.technicianId}
          />
        </div>
      </div>
    </main>
  );
}
