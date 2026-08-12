import React from "react";

interface StepCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const StepCard = ({ icon: Icon, title, description }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center text-center relative z-10">
      <div className="w-24 h-24 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-8 shadow-sm border border-slate-100 dark:border-slate-800">
        <Icon
          className="w-8 h-8 text-teal-700 dark:text-teal-400"
          strokeWidth={2.5}
        />
      </div>

      <div className="px-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
