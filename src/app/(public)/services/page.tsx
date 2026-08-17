import ServiceHeader from "./_components/ServiceHeader";
import MobileFilters from "./_components/MobileFilters";
import SidebarFilters from "./_components/SidebarFilters";

import ServiceList from "./_components/ServiceList";
import { servicesData } from "./_actions/serviceAction";
import { getCategories } from "./_actions/getAllCategories";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ServicesPage({ searchParams }: PageProps) {
  const query = await searchParams;
  const { services } = await servicesData({ query });
  const categories = await getCategories();
  console.log(categories, "cl");
  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="container mx-auto px-8 ">
        <ServiceHeader />
        <MobileFilters />

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <SidebarFilters cate={categories} query={query} />

          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <ServiceList service={services} />
            </div>

            {/* Shadcn Pagination */}
          </div>
        </div>
      </div>
    </div>
  );
}
