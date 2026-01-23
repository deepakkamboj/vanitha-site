import React from "react"
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Heart, Shield, Users, Target, Eye, Sparkles, TrendingUp } from "lucide-react";
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
    <Card className="overflow-hidden pt-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="aspect-square bg-muted">
        <div className="flex h-full w-full items-center justify-center bg-primary/5 transition-colors duration-300 hover:bg-primary/10">
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
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary" />
            <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-accent" />
            <div className="absolute left-1/2 -bottom-40 h-[300px] w-[300px] rounded-full bg-primary/50" />
          </div>
          
          <div className="container relative mx-auto px-4">
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
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-primary/10">
                    <Image
                      src="/images/lady1.webp"
                      alt="Vanitha community volunteers"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="rounded-2xl bg-primary p-6 text-center">
                    <p className="font-serif text-3xl font-bold text-primary-foreground">
                      25+
                    </p>
                    <p className="mt-1 text-sm text-primary-foreground/80">
                      Years of Service
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl bg-accent/20 p-6 text-center">
                    <p className="font-serif text-3xl font-bold text-foreground">
                      10K+
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lives Impacted
                    </p>
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-accent/10">
                    <Image
                      src="/images/lady2.webp"
                      alt="Education programs"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
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
              <Card className="bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-2xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide services to communities in need through educational
                    forums and charity, empowering women and children to achieve
                    their full potential and break cycles of poverty.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-2">
                      <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Compassionate support for vulnerable communities
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Education as a pathway to empowerment
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Breaking cycles of poverty through opportunity
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                      <Eye className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="font-serif text-2xl">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A world where every woman and child has access to education,
                    healthcare, and the support they need to thrive, regardless
                    of their circumstances.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-2">
                      <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Universal access to quality education
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Healthcare and well-being for all
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Equitable support regardless of circumstances
                      </p>
                    </div>
                  </div>
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
