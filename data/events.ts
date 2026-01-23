export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: "fundraiser" | "community" | "educational" | "health";
  featured?: boolean;
  registrationLink?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: "annual-gala-2026",
    title: "Annual Charity Gala 2026",
    date: "March 15, 2026",
    time: "6:00 PM - 10:00 PM",
    location: "Fremont Marriott Silicon Valley, Fremont, CA",
    description: "Join us for an elegant evening celebrating our community's achievements and raising funds for women's education programs. Enjoy dinner, live entertainment, and inspiring stories from beneficiaries.",
    image: "/images/gala-event.jpg",
    category: "fundraiser",
    featured: true,
    registrationLink: "#register",
  },
  {
    id: "health-fair-2026",
    title: "Community Health Fair",
    date: "April 22, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Central Park, Fremont, CA",
    description: "Free health screenings, wellness workshops, and resources for underserved community members. Services include blood pressure checks, diabetes screening, and health education.",
    image: "/images/health-fair.jpg",
    category: "health",
    featured: true,
  },
  {
    id: "scholarship-drive-2026",
    title: "Education Scholarship Drive",
    date: "May 10, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Virtual Event",
    description: "Help us raise funds for scholarships that enable underprivileged girls to pursue higher education. Learn about our scholarship recipients and their inspiring journeys.",
    image: "/images/scholarship.jpg",
    category: "educational",
  },
  {
    id: "summer-camp-2026",
    title: "Youth Summer Learning Camp",
    date: "June 15-20, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "Irvington Community Center, Fremont, CA",
    description: "A week-long educational camp for children focusing on STEM activities, arts, and cultural enrichment. Scholarships available for families in need.",
    image: "/images/summer-camp.jpg",
    category: "educational",
  },
];

export const pastEvents: Event[] = [
  {
    id: "paradise-fire-relief",
    title: "Paradise Fire Disaster Relief",
    date: "2019",
    time: "",
    location: "Paradise, CA",
    description: "Emergency relief efforts for families affected by the devastating Paradise fire, providing essential supplies, temporary housing assistance, and emotional support.",
    image: "/images/fire-relief.jpg",
    category: "community",
  },
  {
    id: "take-her-back",
    title: "Take Her Back - Rescue, Restore, Reunite",
    date: "2019",
    time: "",
    location: "Multiple Locations",
    description: "A collaborative initiative to rescue and rehabilitate trafficking survivors, providing them with education, vocational training, and pathways to independence.",
    image: "/images/take-her-back.jpg",
    category: "community",
  },
  {
    id: "operation-care-comfort",
    title: "Operation Care and Comfort",
    date: "2019",
    time: "",
    location: "Bay Area, CA",
    description: "Supporting military families and veterans through care packages, community events, and connection to essential services.",
    image: "/images/operation-care.jpg",
    category: "community",
  },
  {
    id: "nepal-earthquake-relief",
    title: "Nepal Earthquake Relief",
    date: "2016",
    time: "",
    location: "Nepal",
    description: "Emergency humanitarian aid and long-term reconstruction support for communities devastated by the Nepal earthquake.",
    image: "/images/nepal-relief.jpg",
    category: "community",
  },
  {
    id: "senior-center-2015",
    title: "Senior Center Visit & Donation",
    date: "2015",
    time: "",
    location: "Fremont, CA",
    description: "Regular visits and donations to local senior centers, providing companionship, cultural programs, and essential supplies.",
    image: "/images/senior-center.jpg",
    category: "community",
  },
  {
    id: "abode-donation-2013",
    title: "Abode Services Donation",
    date: "2013",
    time: "",
    location: "Fremont, CA",
    description: "Support for Abode Services, a local organization helping homeless individuals and families find housing and stability.",
    image: "/images/abode-donation.jpg",
    category: "community",
  },
  {
    id: "health-fair-2003",
    title: "Vanitha Health Fair",
    date: "2003",
    time: "",
    location: "Fremont, CA",
    description: "One of our earliest community health initiatives, providing free health screenings and wellness education to underserved populations.",
    image: "/images/health-fair-2003.jpg",
    category: "health",
  },
  {
    id: "abhaya-orphanage-1998",
    title: "Abhaya Orphanage Support",
    date: "1998",
    time: "",
    location: "India",
    description: "Our founding initiative, establishing ongoing support for orphaned children including education, nutrition, and care.",
    image: "/images/abhaya-orphanage.jpg",
    category: "educational",
  },
];

export const eventCategories = [
  { value: "all", label: "All Events" },
  { value: "fundraiser", label: "Fundraisers" },
  { value: "community", label: "Community Service" },
  { value: "educational", label: "Educational" },
  { value: "health", label: "Health & Wellness" },
];
