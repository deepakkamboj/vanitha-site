"use client";

import React from "react"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Heart, Calendar, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "Home", href: "/", icon: Home, description: "Return to homepage" },
  { name: "Donate", href: "/donate", icon: Heart, description: "Support our cause" },
  { name: "Events", href: "/events", icon: Calendar, description: "View upcoming events" },
  { name: "Volunteer", href: "/volunteer", icon: Users, description: "Join our team" },
  { name: "Contact", href: "/contact", icon: Mail, description: "Get in touch" },
];

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/3 to-accent/3 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Vanitha"
              width={180}
              height={70}
              className="h-16 w-auto"
            />
          </Link>
        </motion.div>

        {/* 404 Number with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-6"
        >
          <h1 className="font-serif text-[150px] font-bold leading-none text-primary/10 md:text-[200px]">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-20 w-20 text-primary md:h-28 md:w-28" strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 max-w-lg text-center"
        >
          <h2 className="mb-3 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground">
            {"The page you're looking for seems to have wandered off. Let us help you find your way back to making a difference."}
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSearch}
          className="mb-10 flex w-full max-w-md gap-2"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search our site..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            Search
          </Button>
        </motion.form>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-3xl"
        >
          <h3 className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card/50 p-4 text-center transition-all hover:border-primary/30 hover:bg-card hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{link.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10"
        >
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
