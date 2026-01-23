export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface PastPresident {
  id: string;
  name: string;
  tenure: string;
  image: string;
  bio?: string;
}

export const pastPresidents: PastPresident[] = [
  {
    id: "padma-shandas",
    name: "Padma Shandas",
    tenure: "1995-2000, 2008-2009",
    image: "/images/leadership/padma-shandas.jpg",
    bio: "Founding President who established Vanitha's foundation and led the organization through its formative years.",
  },
  {
    id: "geetha-kumar",
    name: "Geetha Kumar",
    tenure: "2001-2002",
    image: "/images/leadership/geetha-kumar.jpg",
    bio: "Expanded Vanitha's community outreach programs and strengthened partnerships with local organizations.",
  },
  {
    id: "geeta-george",
    name: "Geeta George",
    tenure: "2003-2004, 2013-2015",
    image: "/images/leadership/geeta-george.jpg",
    bio: "Served multiple terms, leading major fundraising initiatives and expanding educational programs.",
  },
  {
    id: "prema-thekkek",
    name: "Prema Thekkek",
    tenure: "2005-2006",
    image: "/images/leadership/prema-thekkek.jpg",
    bio: "Focused on health initiatives and launched the first community health fair programs.",
  },
  {
    id: "usha-namboothiri",
    name: "Usha Namboothiri",
    tenure: "2007-2008",
    image: "/images/leadership/usha-namboothiri.jpg",
    bio: "Strengthened volunteer programs and increased community engagement initiatives.",
  },
  {
    id: "vimala-tharsayi",
    name: "Vimala Tharsayi",
    tenure: "2010-2012",
    image: "/images/leadership/vimala-tharsayi.jpg",
    bio: "Led disaster relief efforts and expanded Vanitha's charitable giving programs.",
  },
  {
    id: "mary-purayil",
    name: "Mary Purayil",
    tenure: "2015-2017",
    image: "/images/leadership/mary-purayil.jpg",
    bio: "Modernized operations and launched digital fundraising initiatives.",
  },
  {
    id: "shirley-jacob",
    name: "Shirley Jacob",
    tenure: "2017-2019",
    image: "/images/leadership/shirley-jacob.jpg",
    bio: "Expanded youth programs and strengthened scholarship offerings.",
  },
  {
    id: "annie-pathiparampil",
    name: "Annie Pathiparampil",
    tenure: "2019-2021",
    image: "/images/leadership/annie-pathiparampil.jpg",
    bio: "Led Vanitha through the COVID-19 pandemic with innovative relief programs.",
  },
];

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
