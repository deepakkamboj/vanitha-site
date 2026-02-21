import React from "react";
import type { Metadata } from "next";
import {
  Package,
  Heart,
  Users,
  Monitor,
  Baby,
  Accessibility,
  GraduationCap,
  Stethoscope,
  Home,
  CheckCircle2,
  MapPin,
  CalendarDays,
  HandHeart,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import projectsData from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Projects - Vanitha | Areas of Impact",
  description:
    "Explore Vanitha's areas of impact — local relief in California, education equity in the US, and long-term partnerships in India.",
};

const iconMap: Record<string, React.ElementType> = {
  package: Package,
  heart: Heart,
  users: Users,
  monitor: Monitor,
  baby: Baby,
  accessibility: Accessibility,
  "graduation-cap": GraduationCap,
  stethoscope: Stethoscope,
  home: Home,
};

const categoryColors: Record<string, string> = {
  local: "bg-primary/10 text-primary border-primary/20",
  "education-us": "bg-accent/20 text-accent-foreground border-accent/30",
  india: "bg-secondary text-secondary-foreground border-border",
};


type Area = (typeof projectsData.categories)[0]["areas"][0];

function AreaCard({
  area,
  categoryId,
  location,
}: {
  area: Area;
  categoryId: string;
  location: string;
}) {
  const Icon = iconMap[area.icon] ?? Heart;
  const badgeClass = categoryColors[categoryId];

  return (
    <Card className="border-border/50 transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle className="font-serif text-lg leading-snug">
              {area.title}
            </CardTitle>
            <div className="mt-1.5">
              <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${badgeClass}`}>
                <MapPin className="h-3 w-3" />
                {location}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{area.description}</p>

        {area.sections.map((section) => (
          <div key={section.label}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/60">
              {section.label}
            </p>
            <ul className="space-y-1.5">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {"note" in area && area.note && (
          <p className="rounded-lg bg-muted/60 px-4 py-3 text-xs italic text-muted-foreground">
            {area.note}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 lg:py-28">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary-foreground" />
          </div>
          <div className="container relative mx-auto px-4 text-center">
            <Badge
              variant="outline"
              className="mb-6 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground"
            >
              <HandHeart className="mr-1.5 h-3.5 w-3.5" />
              Volunteer-Run · Community-Rooted
            </Badge>
            <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              {projectsData.hero.title}
            </h1>
            <p className="mt-3 text-lg font-medium text-accent md:text-xl">
              {projectsData.hero.subtitle}
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-base text-primary-foreground/85 md:text-lg">
              {projectsData.hero.description}
            </p>
          </div>
        </section>

        {/* Sections with Cards */}
        {projectsData.categories.map((category, idx) => (
          <section
            key={category.id}
            className={`py-14 lg:py-20 ${idx % 2 === 1 ? "bg-muted/30" : ""}`}
          >
            <div className="container mx-auto px-4">
              {/* Section Header */}
              <div className="mb-10 text-center">
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {category.title}
                </h2>
                {"punchline" in category && category.punchline && (
                  <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                    {category.punchline}
                  </p>
                )}
                {"intro" in category && category.intro && (
                  <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
                    {category.intro}
                  </p>
                )}
              </div>

              {/* Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.areas.map((area) => (
                  <AreaCard
                    key={area.number}
                    area={area}
                    categoryId={category.id}
                    location={category.location}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Operating Principles */}
        <section className="bg-primary py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
                {projectsData.principles.title}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
                {projectsData.principles.intro}
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 text-left">
                {projectsData.principles.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl bg-primary-foreground/10 px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Recent Updates */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                Recent Activity
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Stories from the field — what your support makes possible.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">

              {/* Update 1 — Jan 2026 */}
              {(() => {
                const u = projectsData.updates[0];
                return (
                  <Card className="flex flex-col border-border/50 shadow-md pt-0">
                    <CardHeader className="rounded-t-xl bg-primary/5 pb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground pt-3">
                        <CalendarDays className="h-4 w-4" />
                        {u.date}
                      </div>
                      <CardTitle className="font-serif text-xl">{u.title}</CardTitle>
                      <p className="text-sm font-medium text-primary">
                        In partnership with: {u.partner}
                      </p>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4 pt-5">
                      <p className="text-sm text-muted-foreground">{u.intro}</p>

                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/60">
                          We provided
                        </p>
                        <ul className="space-y-1.5">
                          {"provided" in u && u.provided?.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {"highlight" in u && u.highlight && (
                        <blockquote className="border-l-4 border-accent pl-4 text-sm italic text-foreground/70">
                          {u.highlight}
                        </blockquote>
                      )}

                      {"reflection" in u && u.reflection && (
                        <p className="text-sm text-muted-foreground">{u.reflection}</p>
                      )}

                      {"gratitude" in u && u.gratitude && (
                        <p className="rounded-lg bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
                          {u.gratitude}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })()}

              {/* Update 2 — March 2025 */}
              {(() => {
                const u = projectsData.updates[1];
                return (
                  <Card className="flex flex-col border-border/50 shadow-md pt-0">
                    <CardHeader className="rounded-t-xl bg-primary/5 pb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground pt-3">
                        <CalendarDays className="h-4 w-4" />
                        {u.date}
                      </div>
                      <CardTitle className="font-serif text-xl">{u.title}</CardTitle>
                      {"subtitle" in u && u.subtitle && (
                        <p className="text-sm font-medium text-primary">{u.subtitle}</p>
                      )}
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4 pt-5">
                      <p className="text-sm text-muted-foreground">{u.intro}</p>

                      {"expenses" in u && u.expenses && (
                        <div>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground/60">
                            Expenses sponsored
                          </p>
                          <div className="overflow-hidden rounded-lg border border-border/50">
                            {u.expenses.map((row, i) => {
                              const isTotal = row.label === "Total Amount Sponsored";
                              const isSubtotal = row.label === "Subtotal" || row.label.startsWith("GST");
                              return (
                                <div
                                  key={i}
                                  className={`flex justify-between px-4 py-2 text-sm ${
                                    isTotal
                                      ? "bg-primary text-primary-foreground font-semibold"
                                      : isSubtotal
                                      ? "bg-muted/60 text-foreground/70"
                                      : "border-b border-border/30 text-muted-foreground"
                                  }`}
                                >
                                  <span>{row.label}</span>
                                  <span className="font-mono">{row.amount}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {"closing" in u && u.closing && (
                        <p className="rounded-lg bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
                          {u.closing}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })()}

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
