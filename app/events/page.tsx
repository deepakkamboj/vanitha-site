import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { EventsSection } from "@/components/events/events-section";
import { PastEventsSection } from "@/components/events/past-events-section";

export const metadata: Metadata = {
  title: "Events - Vanitha",
  description: "Join Vanitha at our upcoming events and fundraisers. View our past events and see the impact we've made in our community.",
};

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                Events & Programs
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Join us at our community events, fundraisers, and educational programs.
                Together, we can make a difference.
              </p>
            </div>
          </div>
        </section>

        <EventsSection />
        <PastEventsSection />
      </main>
      <Footer />
    </div>
  );
}
