import Link from "next/link";
import { Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-3xl bg-primary">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
                <span className="text-balance">Join Our Mission to Create Change</span>
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Whether through donations or volunteering your time, you can make a
                real difference in the lives of women and children in our community.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Link href="/donate">
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Now
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/volunteer">
                    <Users className="mr-2 h-5 w-5" />
                    Become a Volunteer
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-primary-foreground/10" />
              <div className="flex h-full items-center justify-center p-12">
                <div className="text-center text-primary-foreground">
                  <p className="text-6xl font-bold">100%</p>
                  <p className="mt-2 text-lg">of donations go directly to programs</p>
                  <div className="mt-6 flex justify-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">10K+</p>
                      <p className="text-sm opacity-80">Lives Changed</p>
                    </div>
                    <div className="h-12 w-px bg-primary-foreground/30" />
                    <div className="text-center">
                      <p className="text-2xl font-bold">500+</p>
                      <p className="text-sm opacity-80">Volunteers</p>
                    </div>
                    <div className="h-12 w-px bg-primary-foreground/30" />
                    <div className="text-center">
                      <p className="text-2xl font-bold">25+</p>
                      <p className="text-sm opacity-80">Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
