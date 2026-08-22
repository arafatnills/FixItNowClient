import { getMe } from "@/services/getMe";
import PaymentSuccessCard from "../_components/PaymentSuccessCard";

type PageProps = {
  params: Promise<{
    slug: string;
    sessionId: string;
  }>;
};

export default async function PaymentSuccessPage({
  params,
}: PageProps) {
  const { slug, sessionId } = await params;
  const user = await getMe()


  // Supports both:
  // sessionId = "cs_test_xxxxx"
  // sessionId = "session_id=cs_test_xxxxx"
  const transactionId = sessionId.startsWith("session_id=")
    ? sessionId.replace("session_id=", "")
    : sessionId;

  return (
    <main className="min-h-svh bg-slate-50 px-4 py-6 dark:bg-slate-950 sm:px-6 sm:py-10">
      <div className="mx-auto flex min-h-[calc(100svh-3rem)] w-full max-w-lg items-center justify-center sm:min-h-[calc(100svh-5rem)]">
        <PaymentSuccessCard
          bookingId={slug}
          transactionId={transactionId}
          user={user}
        />

       
      </div>
    </main>
  );
}

