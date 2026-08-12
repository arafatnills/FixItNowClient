import Image from "next/image";
import { Star } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceType } from "../_actions/ServiceData";

export default function ServiceCard({ service }: { service: ServiceType }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full group border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
      {/* Optimized Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge variant="secondary" className="absolute top-3 left-3 bg-white/95 text-slate-800 hover:bg-white/95">
          {service.category}
        </Badge>
      </div>

      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-1">
            {service.title}
          </h3>
          <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded text-sm font-medium text-amber-700 dark:text-amber-500">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            {service.rating}
          </div>
        </div>
        
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
          {service.description}
        </p>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex items-end justify-between">
        <div>
          <p className="text-xs text-slate-400 mb-0.5">Starting from</p>
          <p className="font-bold text-teal-700 dark:text-teal-400 text-lg">
            ৳{service.price}
          </p>
        </div>
        <Button className="bg-amber-500 hover:bg-amber-600 text-white transition-colors">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}