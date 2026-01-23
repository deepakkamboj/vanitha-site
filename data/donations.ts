export interface DonationTier {
  name: string;
  amount: number;
  description: string;
  impact: string[];
  featured?: boolean;
}

export const donationTiers: DonationTier[] = [
  {
    name: "Supporter",
    amount: 25,
    description: "Every contribution makes a difference",
    impact: [
      "Provides school supplies for one child",
      "Supports one health screening",
    ],
  },
  {
    name: "Friend",
    amount: 50,
    description: "Help us extend our reach",
    impact: [
      "Provides textbooks for one student",
      "Supports one month of tutoring",
      "Recognition in our newsletter",
    ],
  },
  {
    name: "Advocate",
    amount: 100,
    description: "Make a meaningful impact",
    impact: [
      "Sponsors one child's education for a month",
      "Provides emergency relief supplies",
      "Recognition on our website",
    ],
    featured: true,
  },
  {
    name: "Champion",
    amount: 250,
    description: "Transform lives in our community",
    impact: [
      "Sponsors vocational training for one woman",
      "Provides three months of educational support",
      "Invitation to exclusive donor events",
    ],
  },
  {
    name: "Visionary",
    amount: 500,
    description: "Create lasting change",
    impact: [
      "Sponsors a full scholarship semester",
      "Funds a community health workshop",
      "Named recognition at events",
    ],
  },
  {
    name: "Philanthropist",
    amount: 1000,
    description: "Lead the way to a better future",
    impact: [
      "Sponsors a student's full year education",
      "Funds a complete health fair booth",
      "VIP recognition and exclusive updates",
    ],
  },
];

export const donationMethods = [
  {
    name: "PayPal",
    description: "Secure online payment",
    icon: "credit-card",
    link: "https://paypal.me/vanithaorg",
  },
  {
    name: "Zelle",
    description: "Bank transfer",
    icon: "building-2",
    details: "charity.vanitha@gmail.com",
  },
  {
    name: "Check",
    description: "Mail your donation",
    icon: "mail",
    details: "Make payable to Vanitha\n1601 Mento Ter, Fremont, CA 94539",
  },
  {
    name: "Employer Matching",
    description: "Double your impact",
    icon: "users",
    details: "Many employers match charitable donations. Check with your HR department.",
  },
];

export const sponsorshipLevels = [
  {
    name: "Bronze",
    amount: 1000,
    benefits: [
      "Logo on event materials",
      "Social media recognition",
      "Certificate of appreciation",
    ],
  },
  {
    name: "Silver",
    amount: 2500,
    benefits: [
      "All Bronze benefits",
      "Logo on website sponsor page",
      "Mention in press releases",
      "2 tickets to annual gala",
    ],
  },
  {
    name: "Gold",
    amount: 5000,
    benefits: [
      "All Silver benefits",
      "Featured logo placement",
      "Speaking opportunity at events",
      "4 tickets to annual gala",
      "Quarterly impact reports",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    amount: 10000,
    benefits: [
      "All Gold benefits",
      "Title sponsorship of one event",
      "Custom recognition plaque",
      "VIP table at annual gala",
      "Direct access to leadership",
    ],
  },
];

export const currentSponsors = [
  {
    name: "Community First Bank",
    tier: "Platinum",
    logo: "/vanitha-site/images/sponsors/bank.svg",
    website: "https://example.com",
  },
  {
    name: "TechForGood Inc",
    tier: "Gold",
    logo: "/vanitha-site/images/sponsors/tech.svg",
    website: "https://example.com",
  },
  {
    name: "Bay Area Medical Group",
    tier: "Gold",
    logo: "/vanitha-site/images/sponsors/medical.svg",
    website: "https://example.com",
  },
  {
    name: "Harmony Law Firm",
    tier: "Silver",
    logo: "/vanitha-site/images/sponsors/law.svg",
    website: "https://example.com",
  },
  {
    name: "Fresh Foods Market",
    tier: "Silver",
    logo: "/vanitha-site/images/sponsors/food.svg",
    website: "https://example.com",
  },
  {
    name: "Creative Design Studio",
    tier: "Bronze",
    logo: "/vanitha-site/images/sponsors/design.svg",
    website: "https://example.com",
  },
];
