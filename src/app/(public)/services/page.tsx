import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ServiceHeader from "./_components/ServiceHeader";
import MobileFilters from "./_components/MobileFilters";
import SidebarFilters from "./_components/SidebarFilters";
import ServiceCard from "./_components/ServiceCard";
import { servicesData, ServiceType } from "./_actions/serviceAction";

export default async function ServicesPage() {
  const fetchedServices = (await servicesData()).result;
  const servicesList = Array.isArray(fetchedServices) ? fetchedServices : [];
  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="container mx-auto px-8 ">
        <ServiceHeader />
        <MobileFilters />

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <SidebarFilters />

          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {servicesList.map((service: ServiceType) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Shadcn Pagination */}
            <Pagination className="justify-center md:justify-end">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive
                    className="bg-teal-700 hover:bg-teal-800 text-white"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">12</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
