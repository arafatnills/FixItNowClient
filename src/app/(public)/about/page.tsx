import { Metadata } from "next";
import AboutHero from "./_components/AboutHero";
import StatsSection from "./_components/StatsSection";
import MissionVision from "./_components/MissionVision";
import WhyChooseUs from "./_components/WhyChooseUs";
import TeamSection from "./_components/TeamSection";
import AboutCTA from "./_components/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | FixItNow",
  description: "Learn more about FixItNow, our mission, and our verified home repair technicians.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <StatsSection />
      <MissionVision />
      <WhyChooseUs />
      <TeamSection />
      <AboutCTA />
    </main>
  );
}