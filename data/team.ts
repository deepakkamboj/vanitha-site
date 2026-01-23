export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const boardMembers: TeamMember[] = [
  {
    id: "geeta-george",
    name: "Geeta George",
    role: "President & Founder",
    bio: "Geeta has been the driving force behind Vanitha since its founding in 1998. Her vision of empowering women and children through education and community support has touched thousands of lives.",
    image: "/images/team/president.jpg",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Vice President",
    bio: "Priya brings 15 years of non-profit management experience and is passionate about creating sustainable programs that create lasting change in communities.",
    image: "/images/team/vice-president.jpg",
  },
  {
    id: "lakshmi-patel",
    name: "Lakshmi Patel",
    role: "Secretary",
    bio: "Lakshmi ensures smooth operations and communications across all Vanitha programs. Her organizational skills keep our initiatives running efficiently.",
    image: "/images/team/secretary.jpg",
  },
  {
    id: "anita-krishnan",
    name: "Anita Krishnan",
    role: "Treasurer",
    bio: "Anita oversees all financial operations with meticulous attention to transparency. She ensures every donation is used effectively to maximize impact.",
    image: "/images/team/treasurer.jpg",
  },
];

export const advisoryBoard: TeamMember[] = [
  {
    id: "dr-meera-rao",
    name: "Dr. Meera Rao",
    role: "Health Programs Advisor",
    bio: "Dr. Rao guides our health initiatives, ensuring our programs meet the highest standards of care and reach those most in need.",
    image: "/images/team/health-advisor.jpg",
  },
  {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    role: "Education Programs Advisor",
    bio: "Rajesh brings expertise in educational program design and helps shape our scholarship and learning initiatives.",
    image: "/images/team/education-advisor.jpg",
  },
];

export const volunteerRoles = [
  {
    title: "Event Coordinator",
    description: "Help plan and execute our community events and fundraisers",
    commitment: "5-10 hours/month",
    skills: ["Organization", "Communication", "Event Planning"],
  },
  {
    title: "Education Mentor",
    description: "Provide tutoring and mentorship to students in our programs",
    commitment: "2-4 hours/week",
    skills: ["Teaching", "Patience", "Subject Expertise"],
  },
  {
    title: "Community Outreach",
    description: "Help spread awareness and connect with community members",
    commitment: "3-5 hours/month",
    skills: ["Communication", "Networking", "Social Media"],
  },
  {
    title: "Administrative Support",
    description: "Assist with office tasks, data entry, and communications",
    commitment: "4-8 hours/month",
    skills: ["Organization", "Computer Skills", "Attention to Detail"],
  },
  {
    title: "Health Fair Volunteer",
    description: "Support our health screening events and wellness programs",
    commitment: "Event-based",
    skills: ["Healthcare Background (preferred)", "Compassion", "Teamwork"],
  },
  {
    title: "Fundraising Team",
    description: "Help with donor outreach, grant writing, and campaigns",
    commitment: "5-10 hours/month",
    skills: ["Writing", "Research", "Relationship Building"],
  },
];
