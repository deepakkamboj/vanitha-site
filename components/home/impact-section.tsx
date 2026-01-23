"use client";

import { useEffect, useState } from "react";
import { impactStats } from "@/data/site";

function AnimatedCounter({ value, label, description }: { value: string; label: string; description: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center">
      <p
        className={`font-serif text-4xl font-bold text-primary transition-all duration-700 md:text-5xl ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {value}
      </p>
      <p className="mt-2 text-lg font-semibold text-foreground">{label}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function ImpactSection() {
  return (
    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Our Impact Over the Years</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Since 1998, Vanitha has been dedicated to serving communities in need.
            Here&apos;s how your support has made a difference.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
