'use server'

export type SingleServiceType = {
  id: string;
  serviceName: string;
  description: string;
  thumbnail: string | null;
  categoriesId: string;
  technicianId: string;
  price: string;
  city: string;
  area: string;
  createdAt: string;
  updatedAt: string;

  category?: { id: string; name: string } | null;
  technician?: { id: string; name?: string | null } | null;
};

export const getSingleService = async (slug: string) => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services/${slug}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 12,
        tags: ["singleService"],
      },
    },
  );
  const result = await res.json();

  return result.data;
};
