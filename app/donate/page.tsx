import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  CreditCard,
  Building2,
  Mail,
  Users,
  Check,
  Shield,
  TrendingUp,
  Globe,
  GraduationCap,
  Utensils,
  Home,
  Stethoscope,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site";
import { donationTiers, donationMethods } from "@/data/donations";
import { InteractiveDonationForm } from "@/components/donate/interactive-donation-form";

export const metadata: Metadata = {
  title: "Donate - Vanitha | Make a Difference Today",
  description:
    "Support Vanitha's mission to help women and children in need. Your tax-deductible donation goes directly to our programs for education, healthcare, and community support.",
  openGraph: {
    title: "Donate to Vanitha - Indian American Association of Women",
    description:
      "Your donation helps us provide education, healthcare, and support to women and children in need.",
    type: "website",
  },
};

const iconMap: Record<string, React.ElementType> = {
  "credit-card": CreditCard,
  "building-2": Building2,
  mail: Mail,
  users: Users,
};

const impactAreas = [
  {
    icon: GraduationCap,
    title: "Education",
    stat: "$50",
    description: "Provides school supplies for one child for a year",
  },
  {
    icon: Utensils,
    title: "Nutrition",
    stat: "$100",
    description: "Feeds a family of four for one month",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    stat: "$250",
    description: "Covers medical check-ups for 10 women",
  },
  {
    icon: Home,
    title: "Shelter",
    stat: "$500",
    description: "Supports emergency housing assistance",
  },
];

const trustIndicators = [
  { label: "501(c)(3) Certified", icon: Shield },
  { label: "90%+ to Programs", icon: TrendingUp },
  { label: "20+ Years of Service", icon: Globe },
];

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 lg:py-28">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary-foreground" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              {/* Trust Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-primary-foreground">
                  100% Tax Deductible - Tax ID: {siteConfig.taxId}
                </span>
              </div>

              <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
                <span className="text-balance">
                  Your Generosity{" "}
                  <span className="text-accent">Changes Lives</span>
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
                Every donation, no matter the size, helps us provide education,
                healthcare, and hope to women and children in need.
              </p>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap justify-center gap-6">
                {trustIndicators.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-primary-foreground/80"
                  >
                    <item.icon className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="relative -mt-12 z-10 pb-8">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {impactAreas.map((area) => (
                  <Card
                    key={area.title}
                    className="pt-0 group border-border/50 bg-card shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                          <area.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-primary">
                            {area.stat}
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {area.title}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Donation Form */}
        <section
          id="donate-form"
          className="py-16 lg:py-24 scroll-mt-16"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <Badge variant="outline" className="mb-4 border-primary/30">
                  <Heart className="mr-1.5 h-3 w-3 text-primary" />
                  Make Your Impact
                </Badge>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Choose How to Give
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Select a giving option that works for you. Monthly donations
                  help us plan ahead and create lasting change.
                </p>
              </div>

              <InteractiveDonationForm tiers={donationTiers} />
            </div>
          </div>
        </section>

        {/* Donation Tiers Visual */}
        <section className="border-t border-border/50 bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Impact by Giving Level
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                See exactly how your contribution makes a difference
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {donationTiers.map((tier, index) => (
                <Card
                  key={tier.name}
                  className={`relative overflow-hidden transition-all hover:shadow-lg ${
                    tier.featured
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border/50"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute right-0 top-0 bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Heart
                        className="h-6 w-6 text-primary"
                        fill={tier.featured ? "currentColor" : "none"}
                      />
                    </div>
                    <CardTitle className="font-serif text-xl">
                      {tier.name}
                    </CardTitle>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">
                        ${tier.amount}
                      </span>
                      <span className="text-muted-foreground">one-time</span>
                    </div>
                    <CardDescription className="text-base">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`mt-6 w-full ${
                        tier.featured
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      <a href={`#donate-form`}>Give ${tier.amount}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Multiple Ways to Give
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Choose the donation method that works best for you
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {donationMethods.map((method) => {
                  const Icon = iconMap[method.icon];
                  return (
                    <Card
                      key={method.name}
                      className="group border-border/50 transition-all hover:border-primary/30 hover:shadow-md"
                    >
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">
                            {method.name}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {method.description}
                          </p>
                          {method.link ? (
                            <a
                              href={method.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
                            >
                              Donate via {method.name}
                              <svg
                                className="ml-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          ) : (
                            <p className="mt-2 whitespace-pre-line text-xs text-muted-foreground">
                              {method.details}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial / Impact Story */}
        <section className="border-t border-border/50 bg-primary/5 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-3xl bg-card p-8 shadow-lg lg:p-12">
              <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
                <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-4 border-primary/20 lg:h-56 lg:w-56">
                  <Image
                    src="/vanitha-site/images/impact-story.jpg"
                    alt="Impact story - Education beneficiary"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <svg
                    className="mx-auto mb-4 h-10 w-10 text-primary/30 lg:mx-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="font-serif text-xl text-foreground lg:text-2xl">
                    {'"'}Because of donors like you, I was able to complete my
                    education and now I can support my entire family. You gave
                    me hope when I had none.{'"'}
                  </blockquote>
                  <div className="mt-6">
                    <p className="font-semibold text-foreground">
                      Priya S.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Scholarship Recipient, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-3xl border border-border/50 bg-gradient-to-br from-muted/50 to-background p-8 text-center lg:p-12">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">
                  More Ways to Make an Impact
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                {"Can't"} donate right now? There are other meaningful ways to
                support our mission.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/volunteer">
                    <Users className="mr-2 h-4 w-4" />
                    Become a Volunteer
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <Link href="/sponsors">
                    <Building2 className="mr-2 h-4 w-4" />
                    Corporate Sponsorship
                  </Link>
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
