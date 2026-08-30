import ServiceHeader from "./_components/ServiceHeader";
import MobileFilters from "./_components/MobileFilters";
import SidebarFilters from "./_components/SidebarFilters";

import ServiceList from "./_components/ServiceList";
import { servicesData } from "./_actions/serviceAction";
import { getCategories } from "./_actions/getAllCategories";
import { GlobalPagination } from "@/components/shared/Pagination";
import { SearchProp } from "@/lib/types";



export default async function ServicesPage({ searchParams }: SearchProp) {
  const query = await searchParams;
  const { services, meta } = await servicesData({ query });
  const categories = await getCategories();

  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="container mx-auto px-8 ">
        <ServiceHeader total={meta.total} />

        <MobileFilters cate={categories} />

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="hidden lg:block">
            <SidebarFilters cate={categories} />
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              <ServiceList service={services} />
            </div>

            {meta && meta.totalPages > 0 && (
              <GlobalPagination
                currentPage={meta.page}
                totalPages={meta.totalPages}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
