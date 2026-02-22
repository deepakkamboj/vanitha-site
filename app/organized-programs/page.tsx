import type { Metadata } from "next";
import { BASE_PATH } from "@/lib/base-path";
import Image from "next/image";
import Link from "next/link";
import {
  Package, Heart, Users, Monitor, Baby, Accessibility,
  GraduationCap, Stethoscope, Home, CheckCircle2, ArrowRight, HandHeart, MapPin,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import projectsData from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Organized Programs - Vanitha",
  description: "Vanitha's organized programs span local relief in California, education equity in the US, and long-term partnerships across India.",
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

const categoryPhotos: Record<string, string> = {
  local: `${BASE_PATH}/images/8.png`,
  "education-us": `${BASE_PATH}/images/5.png`,
  india: `${BASE_PATH}/images/3.png`,
};

export default function OrganizedProgramsPage() {
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
                  <HandHeart className="h-4 w-4" />
                  Organized Programs
                </div>
                <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
                  {projectsData.hero.subtitle}
                </h1>
                <p className="mt-4 text-lg text-primary-foreground/85">
                  {projectsData.hero.description}
                </p>
                <Button asChild size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/donate">
                    <Heart className="mr-2 h-5 w-5" />
                    Support Our Programs
                  </Link>
                </Button>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={`${BASE_PATH}/images/4.png`}
                    alt="Organized programs overview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Sections */}
        {projectsData.categories.map((category, idx) => (
          <section key={category.id} className={`py-16 lg:py-20 ${idx % 2 === 1 ? "bg-muted/30" : ""}`}>
            <div className="container mx-auto px-4">

              {/* Section header with photo */}
              <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <MapPin className="h-3 w-3" />{category.location}
                  </div>
                  <h2 className="mt-1 font-serif text-2xl font-bold text-foreground md:text-3xl">{category.title}</h2>
                  {"punchline" in category && category.punchline && (
                    <p className="mt-2 text-muted-foreground">{category.punchline}</p>
                  )}
                  {"intro" in category && category.intro && (
                    <p className="mt-2 text-muted-foreground">{category.intro}</p>
                  )}
                </div>
                <div className="relative aspect-[16/7] overflow-hidden rounded-2xl">
                  <Image
                    src={categoryPhotos[category.id]}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Area cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.areas.map((area) => {
                  const Icon = iconMap[area.icon] ?? Heart;
                  const badgeClass = categoryColors[category.id];
                  return (
                    <Card key={area.number} className="border-border/50 transition-all hover:shadow-md">
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="font-serif text-lg leading-snug">{area.title}</CardTitle>
                            <div className="mt-1.5">
                              <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${badgeClass}`}>
                                <MapPin className="h-3 w-3" />{category.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">{area.description}</p>
                        {area.sections.slice(0, 1).map((section) => (
                          <div key={section.label}>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/60">{section.label}</p>
                            <ul className="space-y-1.5">
                              {section.items.slice(0, 3).map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* Operating Principles */}
        <section className="bg-primary py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">{projectsData.principles.title}</h2>
              <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">{projectsData.principles.intro}</p>
              <ul className="mt-8 grid gap-4 text-left sm:grid-cols-2">
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

        {/* CTA */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl bg-secondary/50 p-8 text-center lg:p-12">
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">Ready to Make a Difference?</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Every contribution — your time, money, or supplies — directly funds these programs.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/donate"><Heart className="mr-2 h-5 w-5" />Donate Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <Link href="/projects">Full Projects Page<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
