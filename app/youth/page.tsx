import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Baby, Monitor, CheckCircle2, ArrowRight, Heart } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import projectsData from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Youth Programs - Vanitha",
  description: "Vanitha's youth-focused programs: education sponsorships, orphan care, vocational training, and digital inclusion for underserved children.",
};

const educationUs = projectsData.categories.find((c) => c.id === "education-us")!;
const indiaCategory = projectsData.categories.find((c) => c.id === "india")!;
const youthAreas = indiaCategory.areas.filter((a) => [5, 7].includes(a.number));
const educationArea = educationUs.areas[0];

const educationUpdate = projectsData.updates[1];

export default function YouthPage() {
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
                  <GraduationCap className="h-4 w-4" />
                  Education &amp; Youth
                </div>
                <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
                  Empowering the Next Generation
                </h1>
                <p className="mt-4 text-lg text-primary-foreground/85">
                  From classrooms in California to orphanages in India, Vanitha invests in children and young adults — giving them tools, support, and a chance to thrive.
                </p>
                <Button asChild size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/donate">
                    <Heart className="mr-2 h-5 w-5" />
                    Support Youth Programs
                  </Link>
                </Button>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/vanitha-site/images/2.png"
                    alt="Youth education programs"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Inclusion — US */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">United States</p>
              <h2 className="mt-1 font-serif text-2xl font-bold text-foreground md:text-3xl">
                {educationUs.title}
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">{educationUs.punchline}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <Card className="border-border/50">
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Monitor className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-lg">{educationArea.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{educationArea.description}</p>
                  {educationArea.sections.map((section) => (
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
                </CardContent>
              </Card>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/vanitha-site/images/5.png" alt="Digital inclusion programs" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Youth Programs — India */}
        <section className="bg-muted/30 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">India</p>
              <h2 className="mt-1 font-serif text-2xl font-bold text-foreground md:text-3xl">
                Education Sponsorships &amp; Orphan Care
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                {indiaCategory.intro}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {youthAreas.map((area) => (
                <Card key={area.number} className="border-border/50">
                  <CardHeader>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      {area.number === 5 ? <Baby className="h-5 w-5 text-primary" /> : <GraduationCap className="h-5 w-5 text-primary" />}
                    </div>
                    <CardTitle className="font-serif text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                    {area.sections.map((section) => (
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Story */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">A Student&apos;s Story</h2>
              <p className="mt-2 text-muted-foreground">Your support turns into real opportunities.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/vanitha-site/images/7.png" alt="Student support program" fill className="object-cover" />
              </div>
              <div className="space-y-4 rounded-2xl bg-primary/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{educationUpdate.date}</p>
                <h3 className="font-serif text-xl font-bold text-foreground">{educationUpdate.title}</h3>
                {"subtitle" in educationUpdate && <p className="text-sm font-medium text-primary">{educationUpdate.subtitle}</p>}
                <p className="text-sm text-muted-foreground">{educationUpdate.intro}</p>
                {"closing" in educationUpdate && (
                  <p className="rounded-lg bg-primary/10 px-4 py-3 text-sm text-muted-foreground">{educationUpdate.closing}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-14 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">Help a Child Reach Their Potential</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Every donation funds education, mentorship, and opportunity for young people who need it most.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/donate"><Heart className="mr-2 h-5 w-5" />Donate Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/projects">View All Projects<ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
