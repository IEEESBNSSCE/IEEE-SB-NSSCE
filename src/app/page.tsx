import Hero from "@/components/home/Hero";
import SocietiesShowcase from "@/components/home/SocietiesShowcase";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import AboutSection from "@/components/home/AboutSection";
import AchievementsPreview from "@/components/home/AchievementsPreview";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <SocietiesShowcase />
      <UpcomingEvents />
      <AboutSection />
      <AchievementsPreview />
      <CtaSection />
    </div>
  );
}

