export interface ServiceType {
  id: string;
  category: string;
  title: string;
  rating: number;
  reviews: number;
  description: string;
  price: number;
  image: string;
}

export const servicesData: ServiceType[] = [
  {
    id: "1",
    category: "Plumbing",
    title: "Plumbing Fix",
    rating: 4.8,
    reviews: 120,
    description: "Leak repair, pipe installation, drain cleaning.",
    price: 500,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "2",
    category: "Electrical",
    title: "Electrical Installations",
    rating: 4.9,
    reviews: 85,
    description: "Wiring, fan repair, circuit breakers, smart home setups.",
    price: 300,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "3",
    category: "Cleaning",
    title: "Deep House Cleaning",
    rating: 4.7,
    reviews: 210,
    description: "Deep home cleaning, sofa cleaning, move-in/out.",
    price: 800,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop",
  },
];