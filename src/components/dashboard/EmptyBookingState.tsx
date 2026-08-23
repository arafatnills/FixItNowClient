import Link from "next/link";
import { CalendarX, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmptyBookingState() {
  return (
    <div className="w-full  flex flex-col items-center justify-center p-10 md:p-16 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-[#0a0a0a]/50 my-6">
      {/* ── Icon Container ── */}
      <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900/50 rounded-full flex items-center justify-center mb-5 shadow-sm border border-slate-200 dark:border-slate-800/80">
        <CalendarX className="w-10 h-10 text-slate-400 dark:text-slate-500" />
      </div>

      {/* ── Text Content ── */}
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
        No Bookings Found
      </h3>
      <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
        {`It looks like you haven't booked any services yet, or your past bookings have been cleared. Need something fixed?`}
      </p>

      {/* ── Call To Action Button ── */}
      <Button
        asChild
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-all shadow-md hover:shadow-teal-600/20"
      >
        <Link href="/services" >
          <Search className="w-4 h-4 mr-2" />
          Explore Services
        </Link>
      </Button>
    </div>
  );
}
