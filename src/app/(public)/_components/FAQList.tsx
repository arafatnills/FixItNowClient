import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQList = ({ faqs }: { faqs: FAQItem[] }) => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className=" dark:bg-slate-900  rounded-xl px-6 shadow-sm data-[state=open]:shadow-md transition-all duration-200"
        >
          <AccordionTrigger className="hover:no-underline font-medium text-slate-800 dark:text-slate-100 py-5">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed pb-5">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
