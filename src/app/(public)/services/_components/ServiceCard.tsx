import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceType } from "../_actions/serviceAction";
import SuccessBadgeDemo from "@/components/shadcn-space/radix/badge/badge-07";

export default function ServiceCard({ service }: { service: ServiceType }) {
  const imageUrl = service.thumbnail?.trim();
  const detailsHref = `/services/${service.id}`;

  return (
    <Card
      className="group flex h-full flex-col gap-0 overflow-hidden border-slate-200/60 bg-white p-0
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10
                 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={imageUrl}
          alt="thumbnail"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-0 z-10 pointer-events-none">
          <SuccessBadgeDemo label={service.category?.name || "Service"} />
        </div>
      </div>

      {/* 2. Content */}
      <CardContent className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="line-clamp-1 text-lg font-bold text-slate-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
          {service.serviceName}
        </h3>

        <p className="line-clamp-2 min-h-10 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {service.description}
        </p>

        <div className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          <MapPin className="size-4 shrink-0 text-teal-600 dark:text-teal-500" />
          <span className="truncate">
            {[service.area, service.city].filter(Boolean).join(", ")}
          </span>
        </div>
      </CardContent>

      {/* 3. Footer */}
      <CardFooter className="flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/50 px-5 py-4 dark:border-slate-800 dark:bg-slate-900/20">
        <div className="flex min-w-0 flex-col">
          <span className="mb-0.5 text-[13px] font-bold tracking-wider text-slate-400">
            Starting From
          </span>
          <span className="truncate text-xl font-extrabold text-teal-700 dark:text-teal-400">
            ৳{Number(service.price || 0).toLocaleString("en-US")}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <Button
            asChild
            variant="link"
            size="sm"
            className="h-9 gap-1 px-2 text-slate-600 hover:bg-transparent hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
          >
            <Link href={detailsHref}>
              View details
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
