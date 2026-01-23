"use client";

import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent" />
      </div>

      <div className="container relative mx-auto px-4 py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Heart className="h-4 w-4" />
              {siteConfig.nonprofit}
            </div>
            
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">Help for the Helpless,{" "}</span>
              <span className="text-primary">Education for All</span>
            </h1>
            
            <p className="max-w-xl text-lg text-muted-foreground">
              {siteConfig.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/donate">
                  <Heart className="mr-2 h-5 w-5" />
                  Make a Donation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">
                  Learn Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-secondary text-xs font-medium text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> active volunteers
                making a difference
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-square">
              {/* Main Image Container */}
              <div className="absolute right-0 top-0 h-80 w-80 overflow-hidden rounded-3xl bg-primary/10">
                <div className="flex h-full w-full items-center justify-center">
                  <Heart className="h-24 w-24 text-primary/30" />
                </div>
              </div>
              
              {/* Secondary Image */}
              <div className="absolute bottom-8 left-0 h-64 w-64 overflow-hidden rounded-3xl bg-accent/20">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <p className="font-serif text-4xl font-bold text-accent">25+</p>
                    <p className="text-sm text-muted-foreground">Years of Impact</p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute bottom-0 right-8 rounded-2xl bg-card p-6 shadow-lg">
                <p className="text-sm text-muted-foreground">Tax ID</p>
                <p className="font-mono text-lg font-semibold text-foreground">
                  {siteConfig.taxId}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
