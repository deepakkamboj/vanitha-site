import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users, CheckCircle2, ArrowRight, Shield } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import projectsData from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Women's Programs - Vanitha",
  description: "Vanitha supports women through shelter assistance, mentoring, financial independence guidance, and community care programs.",
};

const localCategory = projectsData.categories.find((c) => c.id === "local")!;
const shelterArea = localCategory.areas.find((a) => a.number === 2)!;
const communityArea = localCategory.areas.find((a) => a.number === 3)!;

const pillars = [
  { icon: Shield, title: "Safety & Shelter", description: "Supporting women and families in shelters through partner organizations like Shepherd's Gate and SAVE." },
  { icon: Heart, title: "Health & Wellness", description: "Providing care for women facing illness, crisis, and recovery — including cancer patients and families." },
  { icon: Users, title: "Mentoring & Independence", description: "Guiding women locally on financial independence, self-sufficiency, and community leadership." },
];

export default function WomenPage() {
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
                  <Users className="h-4 w-4" />
                  Women &amp; Families
                </div>
                <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
                  Standing With Women in Need
                </h1>
                <p className="mt-4 text-lg text-primary-foreground/85">
                  Vanitha was founded by women, for women. We provide direct support to women and families facing hardship — through shelter, mentoring, healthcare, and community.
                </p>
                <Button asChild size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/donate">
                    <Heart className="mr-2 h-5 w-5" />
                    Support Women&apos;s Programs
                  </Link>
                </Button>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/vanitha-site/images/1.png"
                    alt="Women empowerment programs"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Pillars */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">How We Support Women</h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Three pillars that guide our women-focused work.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="border-border/50 text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support for Vulnerable Populations */}
        <section className="bg-muted/30 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/vanitha-site/images/4.png" alt="Women shelter support" fill className="object-cover" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">California</p>
                <h2 className="mt-1 font-serif text-2xl font-bold text-foreground md:text-3xl">{shelterArea.title}</h2>
                <p className="mt-3 text-muted-foreground">{shelterArea.description}</p>
                <div className="mt-6 space-y-5">
                  {shelterArea.sections.map((section) => (
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
                {"note" in shelterArea && shelterArea.note && (
                  <p className="mt-4 rounded-lg bg-primary/5 px-4 py-3 text-xs italic text-muted-foreground">{shelterArea.note}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Mentoring & Community */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">California</p>
                <h2 className="mt-1 font-serif text-2xl font-bold text-foreground md:text-3xl">Mentoring &amp; Community Building</h2>
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
                <Image src="/vanitha-site/images/6.png" alt="Women mentoring programs" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-14 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">Be a Force for Women in Need</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Your support gives women a path to safety, health, and independence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/donate"><Heart className="mr-2 h-5 w-5" />Donate Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/volunteer">Volunteer With Us<ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
