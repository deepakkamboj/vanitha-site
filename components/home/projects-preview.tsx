import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Package, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import projectsData from "@/data/projects.json";

const iconMap: Record<string, React.ElementType> = {
  package: Package,
  heart: Heart,
  users: Users,
};

const localCategory = projectsData.categories.find((c) => c.id === "local")!;

export function ProjectsPreview() {
  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              {localCategory.title}
            </h2>
            <p className="mt-2 text-muted-foreground">{localCategory.punchline}</p>
          </div>
          <Button asChild variant="outline" className="bg-transparent">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {localCategory.areas.map((area) => {
            const Icon = iconMap[area.icon] ?? Heart;
            return (
              <Card key={area.title} className="border-border/50 transition-all hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-serif text-lg leading-snug">
                        {area.title}
                      </CardTitle>
                      <div className="mt-1.5">
                        <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          <MapPin className="h-3 w-3" />
                          {localCategory.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                  {area.sections.slice(0, 1).map((section) => (
                    <div key={section.label}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/60">
                        {section.label}
                      </p>
                      <ul className="space-y-1">
                        {section.items.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            <span className="text-xs text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
