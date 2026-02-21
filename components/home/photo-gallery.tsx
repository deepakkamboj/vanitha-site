import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const photos = [
  { src: "/vanitha-site/images/1.png", alt: "Vanitha community volunteers", className: "col-span-1 row-span-2" },
  { src: "/vanitha-site/images/2.png", alt: "Education programs", className: "col-span-1 row-span-1" },
  { src: "/vanitha-site/images/3.png", alt: "Community impact", className: "col-span-1 row-span-1" },
  { src: "/vanitha-site/images/4.png", alt: "Outreach programs", className: "col-span-2 row-span-1" },
  { src: "/vanitha-site/images/5.png", alt: "Women empowerment", className: "col-span-1 row-span-1" },
  { src: "/vanitha-site/images/6.png", alt: "Youth programs", className: "col-span-1 row-span-1" },
];

export function PhotoGallery() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Moments of Impact
            </h2>
            <p className="mt-2 text-muted-foreground">
              A glimpse into the lives we touch every day.
            </p>
          </div>
          <Button asChild variant="outline" className="bg-transparent">
            <Link href="/about">
              Our Full Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4" style={{ height: "520px" }}>
          {/* Photo 1 — tall left */}
          <div className="relative col-span-1 row-span-2 overflow-hidden rounded-2xl md:row-span-2">
            <Image
              src="/vanitha-site/images/1.png"
              alt="Vanitha community volunteers"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Photo 2 */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/vanitha-site/images/2.png"
              alt="Education programs"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Photo 3 */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/vanitha-site/images/3.png"
              alt="Community impact"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Photo 4 — tall right */}
          <div className="relative row-span-2 overflow-hidden rounded-2xl">
            <Image
              src="/vanitha-site/images/4.png"
              alt="Outreach programs"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Photo 5 */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/vanitha-site/images/5.png"
              alt="Women empowerment"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Photo 6 */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/vanitha-site/images/6.png"
              alt="Youth programs"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
