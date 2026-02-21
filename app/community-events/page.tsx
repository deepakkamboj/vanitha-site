import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Package, Users, CalendarDays, CheckCircle2, ArrowRight, Heart, MapPin } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import projectsData from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Community Events - Vanitha",
  description: "Vanitha organizes community events — donation drives, volunteer days, food distributions, and outreach for those in need.",
};

const localCategory = projectsData.categories.find((c) => c.id === "local")!;
const essentialsArea = localCategory.areas.find((a) => a.number === 1)!;
const communityArea = localCategory.areas.find((a) => a.number === 3)!;
const recentUpdate = projectsData.updates[0];

export default function CommunityEventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/85 py-20 lg:py-28">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary-foreground" />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground">
                  <CalendarDays className="h-4 w-4" />
                  Community Events
                </div>
                <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
                  Showing Up Where It Matters
                </h1>
                <p className="mt-4 text-lg text-primary-foreground/85">
                  Vanitha brings volunteers together for donation drives, food distributions, and community outreach events — making direct impact in California and beyond.
                </p>
                <Button asChild size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/volunteer">
                    <Users className="mr-2 h-5 w-5" />
                    Join as a Volunteer
                  </Link>
                </Button>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/vanitha-site/images/3.png"
                    alt="Community events and drives"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Needs Drives */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/vanitha-site/images/8.png" alt="Essential needs collection" fill className="object-cover" />
              </div>
              <div>
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <MapPin className="h-3 w-3" />{localCategory.location}
                </div>
                <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl">{essentialsArea.title}</h2>
                <p className="mt-3 text-muted-foreground">{essentialsArea.description}</p>
                <div className="mt-6 space-y-5">
                  {essentialsArea.sections.map((section) => (
                    <div key={section.label}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/60">{section.label}</p>
                      <ul className="space-y-1.5">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {"note" in essentialsArea && essentialsArea.note && (
                  <p className="mt-4 rounded-lg bg-primary/5 px-4 py-3 text-xs italic text-muted-foreground">{essentialsArea.note}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Engagement */}
        <section className="bg-muted/30 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">{communityArea.title}</h2>
                <p className="mt-3 text-muted-foreground">{communityArea.description}</p>
                <div className="mt-6 space-y-5">
                  {communityArea.sections.map((section) => (
                    <div key={section.label}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/60">{section.label}</p>
                      <ul className="space-y-1.5">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/vanitha-site/images/6.png" alt="Volunteer engagement" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Recent Event Update */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">Recent Event</h2>
              <p className="mt-2 text-muted-foreground">From the field — what happened at our last community drive.</p>
            </div>
            <Card className="border-border/50 shadow-md overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image src="/vanitha-site/images/7.png" alt="Recent community event" fill className="object-cover" />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {recentUpdate.date}
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-bold text-foreground">{recentUpdate.title}</h3>
                  {"partner" in recentUpdate && (
                    <p className="mt-1 text-sm font-medium text-primary">In partnership with: {recentUpdate.partner}</p>
                  )}
                  <p className="mt-3 text-sm text-muted-foreground">{recentUpdate.intro}</p>
                  {"provided" in recentUpdate && recentUpdate.provided && (
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/60">We provided</p>
                      <ul className="space-y-1.5">
                        {recentUpdate.provided.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {"highlight" in recentUpdate && recentUpdate.highlight && (
                    <blockquote className="mt-4 border-l-4 border-accent pl-4 text-sm italic text-foreground/70">
                      {recentUpdate.highlight}
                    </blockquote>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-14 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">Join Us at the Next Event</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Volunteer your time or donate supplies to help us serve communities in need.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/volunteer"><Users className="mr-2 h-5 w-5" />Volunteer Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/donate"><Heart className="mr-2 h-4 w-4" />Donate<ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
