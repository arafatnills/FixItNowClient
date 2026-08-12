import React from "react";
import { BadgeCheck, Star, ShieldCheck } from "lucide-react";

// ==========================================
// 1. The Reusable Component
// ==========================================
interface FeatureBadgeProps {
  icon: React.ReactNode;
  text: string;
}

export const FeatureBadge = ({ icon, text }: FeatureBadgeProps) => {
  return (
    <div className="flex items-center gap-2.5">
      {/* Icon container prevents the icon from shrinking */}
      <div className="shrink-0">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {text}
      </span>
    </div>
  );
};

// ==========================================
// 2. Example Usage (The Section from Image)
// ==========================================
export default function TrustIndicators() {
  return (
    <div className="w-full flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 md:gap-12 p-6 ">
      
      {/* Item 1 */}
      <FeatureBadge
        icon={
          <BadgeCheck 
            className="w-6 h-6 text-emerald-500" 
            fill="currentColor" 
            stroke="white" // This makes the checkmark white on the solid green background
          />
        }
        text="Vetted Professionals"
      />

      {/* Item 2 */}
      <FeatureBadge
        icon={
          <Star 
            className="w-6 h-6 text-orange-400" 
            fill="currentColor" 
            stroke="white" 
          />
        }
        text="4.8/5 Average Rating"
      />

      {/* Item 3 */}
      <FeatureBadge
        icon={
          <ShieldCheck 
            className="w-6 h-6 text-blue-600" 
            fill="currentColor" 
            stroke="white" 
          />
        }
        text="Service Guarantee"
      />

    </div>
  );
}