import type { Metadata } from "next";
import Link from "next/link";
import { Users, Heart, Clock, Award, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { volunteerRoles } from "@/data/team";
import { VolunteerForm } from "@/components/volunteer/volunteer-form";

export const metadata: Metadata = {
  title: "Volunteer - Vanitha",
  description: "Join our volunteer team and make a difference in the lives of women and children. Find volunteer opportunities that match your skills and interests.",
};

const benefits = [
  {
    icon: Heart,
    title: "Make an Impact",
    description: "Directly contribute to improving lives in our community",
  },
  {
    icon: Users,
    title: "Build Connections",
    description: "Meet like-minded people and expand your network",
  },
  {
    icon: Award,
    title: "Gain Experience",
    description: "Develop new skills and enhance your resume",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Volunteer on your own schedule with various time commitments",
  },
];

export default function VolunteerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mt-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
                Become a Volunteer
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Join our team of dedicated volunteers and help us create positive
                change in the lives of women and children in our community.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Why Volunteer With Us?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Volunteering with Vanitha is a rewarding experience that benefits
                both you and the community.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-lg">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Volunteer Opportunities
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We have a variety of roles to match your skills and availability.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {volunteerRoles.map((role) => (
                <Card key={role.title}>
                  <CardHeader>
                    <CardTitle className="font-serif text-lg">{role.title}</CardTitle>
                    <CardDescription>{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {role.commitment}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16 lg:py-24 scroll-mt-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Ready to Join Us?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Fill out our volunteer application form and we&apos;ll be in touch
                  to discuss opportunities that match your interests and availability.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        No experience required
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We provide training for all volunteer positions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Flexible scheduling</p>
                      <p className="text-sm text-muted-foreground">
                        Work around your availability and commitments
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        Virtual & in-person options
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Many roles can be done remotely
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">
                      Volunteer Application
                    </CardTitle>
                    <CardDescription>
                      Tell us about yourself and how you&apos;d like to help.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <VolunteerForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
              <span className="text-balance">Not Ready to Volunteer Yet?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              There are other ways you can support our mission.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/events">Attend an Event</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
