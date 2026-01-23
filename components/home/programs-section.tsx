import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Stethoscope, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    title: "Education Programs",
    description: "Scholarships, tutoring, and educational resources for underprivileged students to break the cycle of poverty.",
    icon: BookOpen,
    href: "/about#education",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Health Initiatives",
    description: "Free health screenings, wellness workshops, and medical support for underserved community members.",
    icon: Stethoscope,
    href: "/events",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    title: "Community Support",
    description: "Disaster relief, senior care, and support services for families facing difficult circumstances.",
    icon: Heart,
    href: "/about#community",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Women Empowerment",
    description: "Vocational training, mentorship, and resources to help women achieve financial independence.",
    icon: Users,
    href: "/about#women",
    color: "bg-accent/20 text-accent-foreground",
  },
];

export function ProgramsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Our Programs & Initiatives</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We focus on education, health, and community support to create lasting change
            in the lives of women and children.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="group transition-all duration-300 hover:shadow-lg border-border/50"
            >
              <CardHeader>
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${program.color}`}>
                  <program.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-serif text-xl">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={program.href}
                  className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/about">
              Explore All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
