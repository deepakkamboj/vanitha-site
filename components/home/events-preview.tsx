import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { upcomingEvents } from "@/data/events";

const categoryColors: Record<string, string> = {
  fundraiser: "bg-primary/10 text-primary",
  community: "bg-accent/20 text-accent-foreground",
  educational: "bg-chart-4/20 text-chart-4",
  health: "bg-chart-3/20 text-chart-3",
};

export function EventsPreview() {
  const featuredEvents = upcomingEvents.filter((event) => event.featured).slice(0, 2);

  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-2 text-muted-foreground">
              Join us at our upcoming events and be part of the change.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredEvents.map((event) => (
            <Card
              key={event.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-video bg-muted">
                <div className="flex h-full w-full items-center justify-center bg-primary/5">
                  <Calendar className="h-16 w-16 text-primary/30" />
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge className={categoryColors[event.category]}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </Badge>
                    <CardTitle className="mt-3 font-serif text-xl">
                      {event.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
                <Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90">
                  <Link href={`/events#${event.id}`}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
