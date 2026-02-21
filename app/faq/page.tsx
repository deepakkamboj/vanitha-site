import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ - Vanitha",
  description:
    "Frequently asked questions about Vanitha — donations, project selection, grant recipients, partnerships, and more.",
};

const faqs = [
  {
    question: "Why should I donate to Vanitha?",
    answer: `Vanitha is a 100% volunteer-run 501(c)(3) non-profit organization with over 25 years of service to communities in need. Because there is no paid staff, your donation goes directly to programs — education, healthcare, disaster relief, and women's empowerment — rather than administrative overhead. All contributions are fully tax-deductible (TAX ID: ${siteConfig.taxId}). Whether you give $50 or $5,000, every dollar creates measurable impact in the lives of women and children locally in California, across the United States, and in India.`,
  },
  {
    question: "How does Vanitha choose projects?",
    answer:
      "Projects are selected through a deliberate process led by Vanitha's Board of Directors in consultation with community partners and volunteers. The board evaluates proposals based on community need, alignment with our mission of education and support for the helpless, feasibility, and the ability to reach underserved populations. We prioritize initiatives where our funding and volunteer effort can make a direct, lasting difference — such as scholarship programs, health fairs, disaster relief drives, and vocational training.",
  },
  {
    question: "How are the grant recipients selected?",
    answer:
      "Grant and scholarship recipients are identified through a structured review process. Applications are evaluated against published criteria including demonstrated financial need, academic or community merit, and alignment with Vanitha's mission. The selection committee comprises board members and experienced volunteers who review each application impartially. Recipients in India are nominated through vetted partner organizations on the ground to ensure accountability and transparency.",
  },
  {
    question: "How can I partner with the organization?",
    answer:
      "There are several ways to partner with Vanitha: (1) Corporate Sponsorship — choose a Bronze, Silver, Gold, or Platinum tier to sponsor events and programs in exchange for recognition and engagement opportunities. (2) Employer Matching — many companies match employee donations; contact your HR department or use platforms like Benevity or YourCause. (3) Volunteer — join our team as an event coordinator, education mentor, community outreach specialist, or fundraising volunteer. (4) In-Kind Partnerships — donate goods, services, or expertise that support our programs. Reach out via our Contact page to explore a custom arrangement.",
  },
  {
    question:
      "What measures does Vanitha take to ensure donations reach the beneficiary?",
    answer:
      "Vanitha is entirely volunteer-run, meaning there are no salaries or administrative costs that reduce the impact of your donation. We work through trusted local partners and community organizations — both in the US and India — who are vetted for track record and transparency. The Board of Directors reviews all expenditures, and program outcomes are reported to donors and the community through our annual updates. We maintain our 501(c)(3) status with the IRS, which requires ongoing compliance with financial reporting and accountability standards.",
  },
  {
    question: "Can I donate if I live outside the United States?",
    answer:
      "Yes — anyone anywhere in the world can donate to Vanitha. The easiest way is through PayPal (paypal.me/vanithaorg), which accepts international cards and bank transfers. You can also send a wire transfer or contact us for other arrangements. Please note that the tax-deductibility of your donation applies only to US taxpayers under IRS rules. If you are outside the US, please check with your local tax authority regarding any applicable charitable giving deductions.",
  },
];

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 lg:py-28">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary-foreground" />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2">
                <HelpCircle className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-primary-foreground">
                  Frequently Asked Questions
                </span>
              </div>
              <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
                Got <span className="text-accent">Questions?</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
                Find answers to the most common questions about donating,
                partnerships, and how Vanitha works.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl border border-border/60 bg-card shadow-sm open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                    <span className="font-serif text-lg font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </summary>
                  <div className="border-t border-border/40 px-6 pb-6 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Still have questions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We&apos;re happy to help. Reach out and a member of our team will
              get back to you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
