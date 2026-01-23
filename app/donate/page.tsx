import React from "react"
import type { Metadata } from "next";
import Link from "next/link";
import { Heart, CreditCard, Building2, Mail, Users, Check } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/site";
import { donationTiers, donationMethods } from "@/data/donations";
import { DonationForm } from "@/components/donate/donation-form";

export const metadata: Metadata = {
  title: "Donate - Vanitha",
  description: "Support Vanitha's mission to help women and children in need. Your tax-deductible donation goes directly to our programs.",
};

const iconMap: Record<string, React.ElementType> = {
  "credit-card": CreditCard,
  "building-2": Building2,
  mail: Mail,
  users: Users,
};

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="mt-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
                Make a Difference Today
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Your donation directly supports women and children in need.
                As a 501(c)(3) organization, all donations are tax-deductible.
              </p>
              <p className="mt-4 font-mono text-sm text-primary-foreground/70">
                Tax ID: {siteConfig.taxId}
              </p>
            </div>
          </div>
        </section>

        {/* Donation Tiers */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Choose Your Impact Level
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Every contribution, no matter the size, makes a real difference in
                someone&apos;s life.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {donationTiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={`relative overflow-hidden ${
                    tier.featured ? "border-primary ring-2 ring-primary/20" : ""
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute right-0 top-0 bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">{tier.name}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-primary">
                        ${tier.amount}
                      </span>
                      <span className="text-muted-foreground">one-time</span>
                    </div>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.impact.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{item}</span>
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
                      <Link href={`#donate-form?amount=${tier.amount}`}>
                        Donate ${tier.amount}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Amount Form */}
        <section id="donate-form" className="bg-secondary/30 py-16 lg:py-24 scroll-mt-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="font-serif text-2xl">
                    Make a Donation
                  </CardTitle>
                  <CardDescription>
                    Choose a preset amount or enter your own custom donation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DonationForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Ways to Give
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We accept donations through multiple channels to make giving easy for you.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {donationMethods.map((method) => {
                const Icon = iconMap[method.icon];
                return (
                  <Card key={method.name} className="text-center">
                    <CardHeader>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-serif text-lg">
                        {method.name}
                      </CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {method.link ? (
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          Donate via {method.name}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line text-sm text-muted-foreground">
                          {method.details}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl bg-card p-8 text-center lg:p-12">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">Other Ways to Support</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Can&apos;t donate right now? There are other ways to help.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/volunteer">Become a Volunteer</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/sponsors">Sponsor an Event</Link>
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
