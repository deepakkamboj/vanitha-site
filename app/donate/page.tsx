import React from "react";
import type { Metadata } from "next";
import { HeartHandshake, Mail, Shield, TrendingUp, Globe } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/site";

const trustIndicators = [
  { label: "501(c)(3) Certified", icon: Shield },
  { label: "90%+ to Programs", icon: TrendingUp },
  { label: "20+ Years of Service", icon: Globe },
];

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

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 lg:py-28">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary-foreground" />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-primary-foreground">
                  100% Tax Deductible · Tax ID: {siteConfig.taxId}
                </span>
              </div>
              <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
                Your Generosity{" "}
                <span className="text-accent">Changes Lives</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
                Every donation, no matter the size, helps us provide education,
                healthcare, and hope to women and children in need.
              </p>
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

        {/* Org Info Header */}
        <section className="py-12 text-center">
          <div className="container mx-auto max-w-xl px-4">
            <p className="text-muted-foreground">
              Maximize your donations with matching contribution from your
              employer
            </p>
            <h1 className="mt-3 font-serif text-2xl font-bold text-primary">
              &ldquo;{siteConfig.name}&rdquo;
            </h1>
            <p className="font-medium text-primary">{siteConfig.nonprofit}</p>
            <p className="font-medium text-primary">
              TAX ID: {siteConfig.taxId}
            </p>
          </div>
        </section>

        {/* Payment Method Tiles */}
        <section className="pb-16">
          <div className="container mx-auto max-w-2xl space-y-4 px-4">

            {/* PayPal */}
            <div className="flex items-center gap-4 rounded-lg border border-border/50 bg-card p-5 shadow-sm">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-muted">
                <HeartHandshake className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-primary">PayPal</h2>
              </div>
              <div className="shrink-0">
                <a
                  href="https://paypal.me/vanithaorg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Donate via PayPal"
                >
                  <div
                    className="flex flex-col items-center rounded-md px-4 py-2"
                    style={{ backgroundColor: "#FFC439" }}
                  >
                    <span className="text-base font-bold">
                      <span style={{ color: "#003087" }}>Pay</span>
                      <span style={{ color: "#009CDE" }}>Pal</span>
                      <span style={{ color: "#003087" }}> Donate</span>
                    </span>
                    <span className="mt-0.5 text-[10px] text-gray-600">
                      VISA · MC · AMEX · Discover
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Zelle */}
            <div className="flex items-center gap-4 rounded-lg border border-border/50 bg-card p-5 shadow-sm">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-muted">
                <HeartHandshake className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-primary">Zelle</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {siteConfig.contact.email}
                </p>
              </div>
              <div className="shrink-0">
                <div
                  className="rounded px-5 py-2 text-lg font-bold text-white"
                  style={{ backgroundColor: "#6D1ED4" }}
                >
                  Zelle<sup className="text-xs">®</sup>
                </div>
              </div>
            </div>

            {/* Check by Mail */}
            <div className="flex items-center gap-4 rounded-lg border border-border/50 bg-card p-5 shadow-sm">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-muted">
                <HeartHandshake className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-primary">Check</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Make Payable to <span className="font-semibold text-foreground">{siteConfig.name}</span>
                </p>
                <p className="text-sm text-muted-foreground">Mail checks to</p>
                <p className="text-sm italic text-muted-foreground">
                  Geeta George, {siteConfig.contact.address}
                </p>
              </div>
              <div className="shrink-0">
                <Mail className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>

            {/* Employer Matching */}
            <div className="flex items-center gap-4 rounded-lg border border-border/50 bg-card p-5 shadow-sm">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-muted">
                <HeartHandshake className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-primary">
                  Donate with Matching contribution from your employers
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  to {siteConfig.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.nonprofit}. TAX ID: {siteConfig.taxId}
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
