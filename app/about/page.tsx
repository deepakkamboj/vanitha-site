import React from "react"
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Shield, Users } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig, coreValues } from "@/data/site";
import { boardMembers, advisoryBoard } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us - Vanitha",
  description: "Learn about Vanitha, an Indian American Association of Women dedicated to serving communities in need through education and charity since 1998.",
};

const iconMap: Record<string, React.ElementType> = {
  heart: Heart,
  book: BookOpen,
  users: Users,
  shield: Shield,
};

function TeamMemberCard({ member }: { member: typeof boardMembers[0] }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square bg-muted">
        <div className="flex h-full w-full items-center justify-center bg-primary/5">
          <span className="font-serif text-4xl font-bold text-primary/30">
            {member.name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="font-serif text-lg">{member.name}</CardTitle>
        <CardDescription className="font-medium text-primary">
          {member.role}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{member.bio}</p>
      </CardContent>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                <span className="text-balance">About Vanitha</span>
              </h1>
              <p className="mt-4 text-xl text-primary font-medium">
                {siteConfig.tagline}
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                {siteConfig.description}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Our Story
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    Founded in 1998, Vanitha began with a simple yet powerful vision:
                    to provide help for the helpless and education for all. What started
                    as a small group of dedicated Indian American women in the Bay Area
                    has grown into a thriving organization that has touched thousands of lives.
                  </p>
                  <p>
                    Our journey began with support for the Abhaya Orphanage in India,
                    providing education, nutrition, and care for orphaned children.
                    Since then, we&apos;ve expanded our reach to include health fairs,
                    disaster relief, senior center support, and numerous educational
                    programs.
                  </p>
                  <p>
                    As a 501(c)(3) non-profit organization (Tax ID: {siteConfig.taxId}),
                    we operate entirely on volunteer power. This means 100% of your
                    donations go directly to our programs and the communities we serve.
                  </p>
                </div>
                <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
                  <Link href="/donate">
                    Support Our Mission
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-primary/10 p-8">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <Heart className="h-16 w-16 text-primary" />
                    <p className="mt-4 font-serif text-2xl font-bold text-foreground">
                      Since 1998
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Serving communities with compassion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide services to communities in need through educational
                    forums and charity, empowering women and children to achieve
                    their full potential and break cycles of poverty.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A world where every woman and child has access to education,
                    healthcare, and the support they need to thrive, regardless
                    of their circumstances.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section id="values" className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Our Core Values
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                These principles guide everything we do at Vanitha.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value) => {
                const Icon = iconMap[value.icon];
                return (
                  <Card key={value.title} className="text-center">
                    <CardHeader>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-serif text-lg">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Our Leadership
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Meet the dedicated volunteers who guide Vanitha&apos;s mission.
              </p>
            </div>

            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Board of Directors
              </h3>
              <Button asChild variant="outline" size="sm" className="bg-transparent">
                <Link href="/about/past-leadership">
                  View Past Leadership
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {boardMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>

            <h3 className="mb-6 mt-12 font-serif text-xl font-semibold text-foreground">
              Advisory Board
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {advisoryBoard.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl bg-primary p-8 text-center lg:p-12">
              <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
                <span className="text-balance">Want to Learn More?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
                We&apos;d love to tell you more about our programs and how you can get involved.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/volunteer">Volunteer With Us</Link>
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
