import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ImpactSection } from "@/components/home/impact-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { EventsPreview } from "@/components/home/events-preview";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ImpactSection />
        <ProgramsSection />
        <EventsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
