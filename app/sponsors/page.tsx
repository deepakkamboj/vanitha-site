import React from "react"
import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Check, Star, Award, Heart } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sponsorshipLevels, currentSponsors } from "@/data/donations";

export const metadata: Metadata = {
  title: "Sponsors - Vanitha",
  description: "Partner with Vanitha as a corporate sponsor. Learn about sponsorship opportunities and see our current sponsors.",
};

const tierColors: Record<string, string> = {
  Bronze: "bg-amber-600/10 text-amber-700",
  Silver: "bg-gray-400/10 text-gray-600",
  Gold: "bg-yellow-500/10 text-yellow-700",
  Platinum: "bg-slate-600/10 text-slate-700",
};

const tierIcons: Record<string, React.ElementType> = {
  Bronze: Award,
  Silver: Award,
  Gold: Star,
  Platinum: Star,
};

export default function SponsorsPage() {
  const platinumSponsors = currentSponsors.filter((s) => s.tier === "Platinum");
  const goldSponsors = currentSponsors.filter((s) => s.tier === "Gold");
  const silverSponsors = currentSponsors.filter((s) => s.tier === "Silver");
  const bronzeSponsors = currentSponsors.filter((s) => s.tier === "Bronze");

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
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mt-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
                Partner With Us
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Corporate sponsorship enables us to expand our programs and reach
                more people in need. Join our community of sponsors making a real impact.
              </p>
            </div>
          </div>
        </section>

        {/* Sponsorship Levels */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Sponsorship Levels
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Choose a sponsorship level that aligns with your company&apos;s
                giving goals and receive recognition for your support.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {sponsorshipLevels.map((level) => {
                const Icon = tierIcons[level.name];
                return (
                  <Card
                    key={level.name}
                    className={`relative overflow-hidden ${
                      level.featured ? "border-primary ring-2 ring-primary/20" : ""
                    }`}
                  >
                    {level.featured && (
                      <div className="absolute right-0 top-0 bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        Most Popular
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div
                        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${tierColors[level.name]}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="font-serif text-xl">{level.name}</CardTitle>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold text-foreground">
                          ${level.amount.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground">/year</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {level.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className={`mt-6 w-full ${
                          level.featured
                            ? "bg-primary hover:bg-primary/90"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        <Link href="/contact?subject=sponsorship">
                          Become a Sponsor
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Current Sponsors */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Our Sponsors
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We&apos;re grateful to these organizations for their generous support
                of our mission.
              </p>
            </div>

            {platinumSponsors.length > 0 && (
              <div className="mb-12">
                <h3 className="mb-6 text-center font-serif text-xl font-semibold text-foreground">
                  Platinum Sponsors
                </h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {platinumSponsors.map((sponsor) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-24 w-64 items-center justify-center rounded-lg bg-card p-4 transition-shadow hover:shadow-lg"
                    >
                      <div className="text-center">
                        <Building2 className="mx-auto h-8 w-8 text-slate-600" />
                        <p className="mt-2 font-medium text-foreground group-hover:text-primary">
                          {sponsor.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {goldSponsors.length > 0 && (
              <div className="mb-12">
                <h3 className="mb-6 text-center font-serif text-xl font-semibold text-foreground">
                  Gold Sponsors
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {goldSponsors.map((sponsor) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-20 w-48 items-center justify-center rounded-lg bg-card p-4 transition-shadow hover:shadow-lg"
                    >
                      <div className="text-center">
                        <Building2 className="mx-auto h-6 w-6 text-yellow-600" />
                        <p className="mt-1 text-sm font-medium text-foreground group-hover:text-primary">
                          {sponsor.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {silverSponsors.length > 0 && (
              <div className="mb-12">
                <h3 className="mb-6 text-center font-serif text-xl font-semibold text-foreground">
                  Silver Sponsors
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {silverSponsors.map((sponsor) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-16 w-40 items-center justify-center rounded-lg bg-card p-3 transition-shadow hover:shadow-lg"
                    >
                      <p className="text-sm font-medium text-foreground group-hover:text-primary">
                        {sponsor.name}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {bronzeSponsors.length > 0 && (
              <div>
                <h3 className="mb-6 text-center font-serif text-xl font-semibold text-foreground">
                  Bronze Sponsors
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {bronzeSponsors.map((sponsor) => (
                    <Badge
                      key={sponsor.name}
                      variant="secondary"
                      className="px-4 py-2 text-sm"
                    >
                      {sponsor.name}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Why Sponsor */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Why Sponsor Vanitha?
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    When you sponsor Vanitha, you&apos;re not just supporting a
                    non-profit—you&apos;re investing in the future of women and children
                    in our community.
                  </p>
                  <p>
                    Your sponsorship helps fund educational scholarships, health
                    initiatives, disaster relief efforts, and programs that empower
                    women to achieve financial independence.
                  </p>
                  <p>
                    As a sponsor, you&apos;ll receive recognition across our events,
                    website, and communications, connecting your brand with our
                    community of supporters who value corporate social responsibility.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Check className="h-5 w-5 text-primary" />
                      Tax Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      All sponsorship contributions are tax-deductible as we are a
                      501(c)(3) organization.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Check className="h-5 w-5 text-primary" />
                      Community Connection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Connect with our engaged community of donors, volunteers, and
                      supporters.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Check className="h-5 w-5 text-primary" />
                      Customizable Packages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We can customize sponsorship packages to meet your specific
                      goals and interests.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <Heart className="mx-auto h-12 w-12 text-primary-foreground/80" />
            <h2 className="mt-6 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
              <span className="text-balance">Ready to Make a Difference?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Contact us to discuss how your organization can partner with Vanitha
              to create positive change in our community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/contact?subject=sponsorship">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/donate">Make a Personal Donation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
