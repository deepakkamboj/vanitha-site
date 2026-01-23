"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { upcomingEvents, eventCategories } from "@/data/events";

const categoryColors: Record<string, string> = {
  fundraiser: "bg-primary/10 text-primary",
  community: "bg-accent/20 text-accent-foreground",
  educational: "bg-chart-4/20 text-chart-4",
  health: "bg-chart-3/20 text-chart-3",
};

export function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEvents =
    selectedCategory === "all"
      ? upcomingEvents
      : upcomingEvents.filter((event) => event.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Upcoming Events
            </h2>
            <p className="mt-2 text-muted-foreground">
              Mark your calendar and join us at these upcoming events.
            </p>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {eventCategories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="rounded-lg bg-muted/50 p-12 text-center">
            <Calendar className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-4 font-semibold text-foreground">No events found</h3>
            <p className="mt-2 text-muted-foreground">
              No events match the selected category. Try a different filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                id={event.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-lg scroll-mt-24  pt-0"
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
                        {event.category.charAt(0).toUpperCase() +
                          event.category.slice(1)}
                      </Badge>
                      {event.featured && (
                        <Badge variant="secondary" className="ml-2">
                          Featured
                        </Badge>
                      )}
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
                    {event.time && (
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                  {event.registrationLink && (
                    <Button
                      asChild
                      className="mt-4 w-full bg-primary hover:bg-primary/90"
                    >
                      <Link href={event.registrationLink}>
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
