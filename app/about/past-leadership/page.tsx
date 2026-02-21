"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, Heart, Calendar } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { pastPresidents } from "@/data/team";

export default function PastLeadershipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary" />
            <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-accent" />
          </div>
          
          <div className="container relative mx-auto px-4">
            <Link 
              href="/about" 
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to About
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                Our Legacy
              </div>
              
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Past Leadership
              </h1>
              
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We honor the dedicated women who have led Vanitha through the years, 
                each contributing their vision, passion, and tireless efforts to build 
                our organization into what it is today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Past Presidents Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Past Presidents
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                These inspiring leaders have shaped Vanitha&apos;s mission and guided our 
                organization through decades of community service.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastPresidents.map((president, index) => (
                <motion.div
                  key={president.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group h-full overflow-hidden border-border/50 bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30  pt-0">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                        <Image
                          src={president.image || "/placeholder.svg"}
                          alt={president.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                          <h3 className="font-serif text-xl font-semibold">
                            {president.name}
                          </h3>
                          <div className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/80">
                            <Calendar className="h-4 w-4" />
                            {president.tenure}
                          </div>
                        </div>
                      </div>
                      
                      {president.bio && (
                        <div className="p-6">
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {president.bio}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="border-t border-border/50 bg-secondary/30 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl"
            >
              <div className="mb-8 text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" fill="currentColor" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Honoring Our Founders
                </h2>
              </div>

              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/vanitha-site/images/founders.png"
                    alt="Vanitha founders"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Vanitha was founded in 1995 by a group of visionary Indian American women
                    who recognized the need for community support, education, and charitable
                    services in the Bay Area. Their founding vision of &ldquo;Help for the helpless
                    and education for all&rdquo; continues to guide our mission today.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href="/about">Current Leadership</Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent">
                      <Link href="/volunteer">Join Our Mission</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Leadership Timeline
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Nearly three decades of dedicated leadership and community service.
              </p>
            </motion.div>

            <div className="relative mx-auto max-w-4xl">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

              {pastPresidents.map((president, index) => (
                <motion.div
                  key={president.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-8 flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <div className={`inline-block rounded-lg bg-card p-4 shadow-sm border border-border/50 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}>
                      <p className="text-sm font-semibold text-primary">{president.tenure}</p>
                      <p className="font-medium text-foreground">{president.name}</p>
                    </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2">
                    <div className="h-4 w-4 rounded-full border-4 border-primary bg-background" />
                  </div>
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
