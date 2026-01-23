import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowLeft,
  Share2,
  Heart,
  Users,
  Tag,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { upcomingEvents, pastEvents, type Event } from "@/data/events";
import { EventDetailClient } from "@/components/events/event-detail-client";

// Get all events for static params
const allEvents = [...upcomingEvents, ...pastEvents];

export async function generateStaticParams() {
  return allEvents.map((event) => ({
    id: event.id,
  }));
}

// Generate metadata for each event
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const event = allEvents.find((e) => e.id === id);

  if (!event) {
    return {
      title: "Event Not Found - Vanitha",
    };
  }

  return {
    title: `${event.title} - Vanitha Events`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: "article",
      images: [event.image],
    },
  };
}

const categoryColors = {
  fundraiser: "bg-accent/20 text-accent-foreground border-accent/30",
  community: "bg-primary/10 text-primary border-primary/30",
  educational: "bg-blue-100 text-blue-800 border-blue-200",
  health: "bg-green-100 text-green-800 border-green-200",
};

const categoryLabels = {
  fundraiser: "Fundraiser",
  community: "Community Service",
  educational: "Educational",
  health: "Health & Wellness",
};

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = allEvents.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const isUpcoming = upcomingEvents.some((e) => e.id === event.id);

  // Get related events (same category, excluding current)
  const relatedEvents = allEvents
    .filter((e) => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
          <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/events"
                className="hover:text-primary transition-colors"
              >
                Events
              </Link>
              <span>/</span>
              <span className="text-foreground">{event.title}</span>
            </nav>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Event Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                />
                {event.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">
                      Featured Event
                    </Badge>
                  </div>
                )}
                {!isUpcoming && (
                  <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
                    <Badge
                      variant="secondary"
                      className="text-lg px-4 py-2 bg-background/90"
                    >
                      Past Event
                    </Badge>
                  </div>
                )}
              </div>

              {/* Event Details */}
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Badge
                    variant="outline"
                    className={categoryColors[event.category]}
                  >
                    <Tag className="mr-1.5 h-3 w-3" />
                    {categoryLabels[event.category]}
                  </Badge>
                  {isUpcoming && (
                    <Badge
                      variant="outline"
                      className="border-green-300 bg-green-50 text-green-700"
                    >
                      Upcoming
                    </Badge>
                  )}
                </div>

                <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
                  {event.title}
                </h1>

                <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                {/* Event Info Cards */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-card/50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Date
                      </p>
                      <p className="font-semibold text-foreground">
                        {event.date}
                      </p>
                    </div>
                  </div>

                  {event.time && (
                    <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-card/50 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Time
                        </p>
                        <p className="font-semibold text-foreground">
                          {event.time}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-card/50 p-4 sm:col-span-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Location
                      </p>
                      <p className="font-semibold text-foreground">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {isUpcoming && event.registrationLink && (
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 gap-2"
                      asChild
                    >
                      <Link href={event.registrationLink}>
                        <Users className="h-4 w-4" />
                        Register Now
                      </Link>
                    </Button>
                  )}
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 bg-transparent"
                    asChild
                  >
                    <Link href="/donate">
                      <Heart className="h-4 w-4" />
                      Support This Cause
                    </Link>
                  </Button>
                  <EventDetailClient event={event} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                About This Event
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>{event.description}</p>
                {isUpcoming && (
                  <>
                    <h3 className="mt-8 font-serif text-xl font-semibold text-foreground">
                      What to Expect
                    </h3>
                    <ul className="mt-4 space-y-2">
                      <li>
                        Engaging activities and programs designed to make a
                        positive impact
                      </li>
                      <li>
                        Opportunities to connect with like-minded community
                        members
                      </li>
                      <li>
                        Learn about our ongoing initiatives and how you can help
                      </li>
                      <li>
                        Refreshments and networking opportunities will be
                        provided
                      </li>
                    </ul>
                    <h3 className="mt-8 font-serif text-xl font-semibold text-foreground">
                      How to Participate
                    </h3>
                    <p>
                      Join us in making a difference! Whether you attend in
                      person, volunteer, or contribute through donations, every
                      effort counts towards our mission of helping those in
                      need.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <section className="border-t border-border/50 bg-muted/30 py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
                Related Events
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedEvents.map((relatedEvent) => (
                  <Card
                    key={relatedEvent.id}
                    className="group overflow-hidden border-border/50 transition-all hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={relatedEvent.image || "/placeholder.svg"}
                        alt={relatedEvent.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <Badge
                        variant="outline"
                        className={`mb-3 ${categoryColors[relatedEvent.category]}`}
                      >
                        {categoryLabels[relatedEvent.category]}
                      </Badge>
                      <h3 className="mb-2 font-semibold text-foreground line-clamp-2">
                        {relatedEvent.title}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {relatedEvent.date}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                        asChild
                      >
                        <Link href={`/events/${relatedEvent.id}`}>
                          View Details
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to Events */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Button variant="ghost" className="gap-2" asChild>
              <Link href="/events">
                <ArrowLeft className="h-4 w-4" />
                Back to All Events
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
