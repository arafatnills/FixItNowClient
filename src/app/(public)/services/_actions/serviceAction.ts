"use server";
export interface ServiceType {
  id: string;
  serviceName: string;
  description: string;
  thumbnail: string;
  price: number;
  city: string;
  area: string;
  category: {
    name: string;
  };
  technician: {
    user: {
      name: string;
    };
  };
}

export const servicesData = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  
  const params = new URLSearchParams();
  if (query?.q) {
    params.set("q", query.q as string);
  }

  if (query?.city) {
    params.set("city", query.city as string);
  }

  if (query?.area) {
    params.set("area", query.area as string);
  }

  if (query?.category) {
    params.set("category", query.category as string);
  }

  if (query?.category) {
    if (Array.isArray(query.category)) {
      query.category.forEach((cat) => params.append("category", cat));
    } else {
      params.append("category", query.category as string);
    }
  }
  if(query?.minPrice){
    params.set('minPrice', query.minPrice as string)
  }
  if(query?.maxPrice){
    params.set('maxPrice', query.maxPrice as string)
  }

  if (query?.page) {
    params.set("page", query.page as string);
  }

  if (query?.limit) {
    params.set("limit", query.limit as string);
  }
  if (query?.sort) {
    params.set("sort", query.sort as string);
  }



  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services?${params.toString()}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 12,
        tags: ["services"],
      },
    },
  );
  const result = await res.json();

  return {
    services: result.data.allServices,
    meta: result.data.meta,
  };
};
