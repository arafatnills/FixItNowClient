import { Star } from "lucide-react";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export const TestimonialCard = ({ quote, author, location, rating }: TestimonialCardProps) => {
  return (
  
    <div className="bg-[#f8faff] dark:bg-slate-900 rounded-2xl p-8 h-full flex flex-col border border-slate-100 dark:border-slate-800 shadow-sm">
      {/* 5 Stars Rating */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "text-amber-500 fill-amber-500"
                : "text-slate-300 dark:text-slate-700"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-700 dark:text-slate-300 italic mb-8 flex-1 leading-relaxed">
        `{quote}`
      </p>

      {/* Author Details */}
      <div>
        <p className="font-semibold text-slate-900 dark:text-slate-100">{author}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{location}</p>
      </div>
    </div>
  );
};