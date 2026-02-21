import React from "react"
import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Check, Star, Award, Heart, RefreshCw, Quote } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sponsorshipLevels, donationTiers } from "@/data/donations";
import { siteConfig } from "@/data/site";

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

        {/* Donation Impact Levels */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Every Dollar Makes a Difference
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                See exactly what your donation achieves in our programs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {donationTiers.filter((t) => [50, 100, 250, 500].includes(t.amount)).map((tier) => (
                <Card key={tier.name} className={`relative ${tier.featured ? "border-primary ring-2 ring-primary/20" : ""}`}>
                  {tier.featured && (
                    <div className="absolute right-0 top-0 bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className="text-3xl font-bold text-foreground">${tier.amount}</div>
                    <CardTitle className="font-serif text-lg">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-6 w-full bg-primary hover:bg-primary/90">
                      <Link href="/donate">Donate ${tier.amount}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Giving & Corporate Matching */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Multiply Your Impact
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Recurring gifts and employer matching help us plan for the future
                and maximize every dollar.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Give Monthly</CardTitle>
                  <CardDescription>
                    A small monthly commitment creates lasting, predictable impact.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">$10/month provides school supplies year-round</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">$25/month sponsors one child&apos;s tutoring</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">Cancel or change anytime</span>
                  </div>
                  <Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90">
                    <Link href="/donate">Set Up Monthly Giving</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-accent/5">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                    <Building2 className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Corporate Matching</CardTitle>
                  <CardDescription>
                    Many employers match employee donations — doubling your impact at no extra cost.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">Check with your HR or use Benevity / YourCause portals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">Vanitha is a registered 501(c)(3) — TAX ID: {siteConfig.taxId}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">We&apos;ll provide any documentation your employer needs</span>
                  </div>
                  <Button asChild variant="outline" className="mt-4 w-full bg-transparent">
                    <Link href="/contact?subject=matching">Contact Us to Match</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stories of Impact — WIP */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Stories of Impact
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Real stories from the people whose lives have been changed by
                your generosity.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-dashed opacity-60">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <Quote className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm italic text-muted-foreground">
                      Personal story coming soon&hellip;
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Testimonials in progress — check back soon.
            </p>
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
