export interface ServiceType {
  id: string;
  serviceName: string;
  description: string;
  thumbnail: string;
  categoriesId: string;
  technicianId: string;
  price: string;
  city: string;
  area: string;
  createdAt: string;
  updatedAt: string;
  category: {
    name: string;
    id: string;
  };
  technician: {
    id: string;
    userId: string;
  };
}

export const servicesData = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/services`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 12,
      tags: ["services"],
    },
  });
  const result = await res.json();

  return {
    result: result.data.allServices,
    meta: result.data.meta,
  };
};
