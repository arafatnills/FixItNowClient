import React from "react";
import ServiceCard from "./ServiceCard";


// Define the interface based on your JSON
interface ServiceData {
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


const ServiceList = ({service}: {service: ServiceData[]}) => {
    const serviceList = Array.isArray(service) ? service : [service]
  return (
    <>
      {serviceList.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </>
  );
};

export default ServiceList;
