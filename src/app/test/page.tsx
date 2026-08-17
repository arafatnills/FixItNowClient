
import type { Metadata } from "next";

import ServiceHeader from "../(public)/services/_components/ServiceHeader";

export const metadata: Metadata = {
  title: {
    absolute: "Services - Fix It Now",
  },
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ServicesPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const search = await searchParams
  console.log(search)
  return (
    <div>
      <div className="max-w-11/12 mx-auto py-6 mb-20">
        <div className="space-y-2 mb-4">
          <ServiceHeader />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4"></div>
          {/* service list here  */}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
