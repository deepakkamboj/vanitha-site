"use client";

import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pastEvents } from "@/data/events";

const categoryColors: Record<string, string> = {
  fundraiser: "bg-primary/10 text-primary",
  community: "bg-accent/20 text-accent-foreground",
  educational: "bg-chart-4/20 text-chart-4",
  health: "bg-chart-3/20 text-chart-3",
};

export function PastEventsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedEvents = showAll ? pastEvents : pastEvents.slice(0, 4);

  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Past Events & Impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A look back at the events and initiatives that have made a difference
            in our community over the years.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {displayedEvents.map((event) => (
            <Card key={event.id} className="group overflow-hidden">
              <div className="aspect-video bg-muted">
                <div className="flex h-full w-full items-center justify-center bg-primary/5">
                  <Calendar className="h-12 w-12 text-primary/30" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Badge className={categoryColors[event.category]} variant="secondary">
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{event.date}</span>
                </div>
                <CardTitle className="font-serif text-lg">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {event.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {pastEvents.length > 4 && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="min-w-40"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  View All {pastEvents.length} Events
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
