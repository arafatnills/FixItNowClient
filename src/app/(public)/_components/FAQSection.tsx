import { FAQHeader } from "./FAQHeader";
import { FAQList } from "./FAQList";

export default function FAQSection() {
  const faqData = [
    {
      question: "How do I pay?",
      answer:
        "You can pay securely online using any major credit card, debit card, or mobile banking platforms. Payment is only processed once the job is completed to your satisfaction.",
    },
    {
      question: "Are the pros vetted?",
      answer:
        "Yes, absolutely. Every professional on our platform undergoes a strict background check, identity verification, and skill assessment before they are allowed to take any jobs.",
    },
    {
      question: "What if I'm not satisfied?",
      answer:
        "Your satisfaction is our priority. If you are not completely satisfied with the service provided, let us know within 24 hours, and we will make it right or offer a refund according to our guarantee policy.",
    },
    {
      question: "Can I reschedule?",
      answer:
        "Yes, you can easily reschedule your booking up to 24 hours before the scheduled time without any extra fees through your user dashboard.",
    },
  ];

  return (
    <section className="py-20 md:py-28 ">
      <div className="container mx-auto px-4 max-w-3xl">
        <FAQHeader />

        <FAQList faqs={faqData} />
      </div>
    </section>
  );
}
