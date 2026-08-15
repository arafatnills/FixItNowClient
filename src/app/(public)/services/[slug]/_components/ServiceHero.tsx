import Image from "next/image";

export default function ServiceHero({ imageUrl, serviceName, categoryName }: { imageUrl: string; serviceName: string; categoryName: string }) {
  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-200 sm:aspect-video dark:bg-slate-800">
      <Image
        src={imageUrl}
        alt={serviceName}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 640px"
        className="object-cover"
      />
      <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm backdrop-blur sm:top-4 sm:left-4 dark:bg-slate-900/90 dark:text-teal-400">
        {categoryName}
      </span>
    </div>
  );
}