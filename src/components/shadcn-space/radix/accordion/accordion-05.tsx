import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionListProps = {
  question: string;
  answer: string;
};

const AccordionList = ({ faqData }: { faqData: AccordionListProps[] }) => {
  return (
    <div className="flex items-center justify-center w-full ">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="w-full"
      >
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="px-4 py-3 cursor-pointer hover:no-underline items-center">
              <span className="flex items-center gap-4">
                {/* <item.icon className="size-4 shrink-0 text-muted-foreground" /> */}
                <span className="font-bold">{item.question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
export default AccordionList;
