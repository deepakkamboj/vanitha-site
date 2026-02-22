"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, HeartHandshake, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { BASE_PATH } from "@/lib/base-path";

type NavChild = { name: string; href: string };
type NavItem = { name: string; href: string; children?: NavChild[] };

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = siteConfig.navigation as NavItem[];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <Image
            src={`${BASE_PATH}/images/logo.png`}
            alt="Vanitha - Indian American Association of Women"
            width={160}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
          <span className="text-xl font-bold uppercase text-primary">{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    item.children.some((c) => pathname === c.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      openDropdown === item.name && "rotate-180"
                    )}
                  />
                </button>
                {openDropdown === item.name && (
                  <div className="absolute left-0 top-full z-50 min-w-[190px] rounded-lg border border-border bg-background py-1 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-primary"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <Link href="/donate">
              <HeartHandshake className="mr-2 h-4 w-4" />
              Donate
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border lg:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      setExpandedMobile(expandedMobile === item.name ? null : item.name)
                    }
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        expandedMobile === item.name && "rotate-180"
                      )}
                    />
                  </button>
                  {expandedMobile === item.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
                    pathname === item.href ? "bg-secondary text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="mt-4">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/donate">
                  <HeartHandshake className="mr-2 h-4 w-4" />
                  Donate
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
