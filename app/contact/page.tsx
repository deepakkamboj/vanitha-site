import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/site";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us - Vanitha",
  description: "Get in touch with Vanitha. We'd love to hear from you about volunteering, donations, partnerships, or any questions you may have.",
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 5pm PST",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our mailing address",
    value: siteConfig.contact.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`,
  },
  {
    icon: Clock,
    title: "Office Hours",
    description: "When we're available",
    value: "Mon - Fri: 9:00 AM - 5:00 PM PST",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary" />
            <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-accent" />
            <div className="absolute left-1/2 -bottom-40 h-[300px] w-[300px] rounded-full bg-primary/50" />
          </div>
          
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                				Have questions about our programs, want to volunteer, or interested in partnering with us? We'd love to hear from you.					
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method) => (
                <Card key={method.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-lg">
                      {method.title}
                    </CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">
                        {method.value}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Send Us a Message
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Fill out the form and we&apos;ll get back to you as soon as possible.
                  We typically respond within 1-2 business days.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="rounded-lg bg-card p-6">
                    <h3 className="font-semibold text-foreground">
                      General Inquiries
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Questions about our organization, programs, or how to get involved.
                    </p>
                  </div>
                  <div className="rounded-lg bg-card p-6">
                    <h3 className="font-semibold text-foreground">
                      Donation Questions
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Information about making donations, tax receipts, or corporate giving.
                    </p>
                  </div>
                  <div className="rounded-lg bg-card p-6">
                    <h3 className="font-semibold text-foreground">
                      Partnership Opportunities
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Interested in sponsoring events or collaborating on programs.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">
                      Get in Touch
                    </CardTitle>
                    <CardDescription>
                      We&apos;ll respond to your message within 1-2 business days.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="aspect-[2/1] overflow-hidden rounded-3xl bg-muted">
              <div className="flex h-full w-full items-center justify-center bg-primary/5">
                <div className="text-center">
                  <MapPin className="mx-auto h-12 w-12 text-primary/30" />
                  <p className="mt-4 font-serif text-xl font-semibold text-foreground">
                    Fremont, California
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
