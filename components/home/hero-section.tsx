"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Play, Users, Globe, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { BASE_PATH } from "@/lib/base-path";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-accent" />
      </div>

      <div className="container relative mx-auto px-4 py-8 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <Heart className="h-4 w-4" fill="currentColor" />
                {siteConfig.nonprofit}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground">
                <Users className="h-4 w-4 text-accent" />
                Indian American Association Of Women
              </div>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">Help for the Helpless,{" "}</span>
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Education for All</span>
            </h1>
            
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link href="/donate">
                  <Heart className="mr-2 h-5 w-5" />
                  Make a Donation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary/30 hover:bg-primary/5">
                <Link href="/about">
                  Learn Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Years of Service</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Lives Impacted</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Active Volunteers</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-[600px] w-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 shadow-2xl">
                <Image
                  src={`${BASE_PATH}/images/hero-community.jpg`}
                  alt="Vanitha community impact"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <p className="font-serif text-2xl font-semibold">Empowering Communities</p>
                  <p className="text-primary-foreground/80">Since 1998</p>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -left-4 top-3 rounded-2xl bg-card p-4 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">1000+</p>
                    <p className="text-xs text-muted-foreground">Scholarships Given</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -right-4 bottom-32 rounded-2xl bg-card p-4 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">Global</p>
                    <p className="text-xs text-muted-foreground">Community Impact</p>
                  </div>
                </div>
              </motion.div>

              {/* Tax ID Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-card px-6 py-3 shadow-lg border border-border/50">
                <p className="text-xs text-muted-foreground">Tax ID: <span className="font-mono font-semibold text-foreground">{siteConfig.taxId}</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
