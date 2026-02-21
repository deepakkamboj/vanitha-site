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
    image: "/vanitha-site/images/leaders/padma-shandas.webp",
    bio: "Founding President who established Vanitha's foundation and led the organization through its formative years.",
  },
  {
    id: "geetha-kumar",
    name: "Geetha Kumar",
    tenure: "2001-2002",
    image: "/vanitha-site/images/leaders/geetha-kumar.webp",
    bio: "Expanded Vanitha's community outreach programs and strengthened partnerships with local organizations.",
  },
  {
    id: "geeta-george",
    name: "Geeta George",
    tenure: "2003-2004, 2013-2015",
    image: "/vanitha-site/images/leaders/geeta-george.webp",
    bio: "Served multiple terms, leading major fundraising initiatives and expanding educational programs.",
  },
  {
    id: "prema-thekkek",
    name: "Prema Thekkek",
    tenure: "2005-2006",
    image: "/vanitha-site/images/leaders/prema-thekkek.webp",
    bio: "Focused on health initiatives and launched the first community health fair programs.",
  },
  {
    id: "usha-namboothiri",
    name: "Usha Namboothiri",
    tenure: "2007-2008",
    image: "/vanitha-site/images/leaders/usha-namboothiri.webp",
    bio: "Strengthened volunteer programs and increased community engagement initiatives.",
  },
  {
    id: "vimala-tharsayi",
    name: "Vimala Tharsayi",
    tenure: "2010-2012",
    image: "/vanitha-site/images/leaders/vimala-tharsayi.webp",
    bio: "Led disaster relief efforts and expanded Vanitha's charitable giving programs.",
  },
  {
    id: "mary-purayil",
    name: "Mary Purayil",
    tenure: "2015-2017",
    image: "/vanitha-site/images/leaders/mary-purayil.webp",
    bio: "Modernized operations and launched digital fundraising initiatives.",
  },
  {
    id: "shirley-jacob",
    name: "Shirley Jacob",
    tenure: "2017-2019",
    image: "/vanitha-site/images/leaders/shirley-jacob.webp",
    bio: "Expanded youth programs and strengthened scholarship offerings.",
  },
  {
    id: "annie-pathiparampil",
    name: "Annie Pathiparampil",
    tenure: "2019-2021",
    image: "/vanitha-site/images/leaders/annie-pathiparampil2.webp",
    bio: "Led Vanitha through the COVID-19 pandemic with innovative relief programs.",
  },
];

export const boardMembers: TeamMember[] = [
  {
    id: "manju-abraham",
    name: "Manju Abraham",
    role: "President",
    bio: "Manju is an engineering executive who brings over three decades of experience leading and scaling global organizations. She makes a difference by turning ideas into structured action. She applies the same operational discipline, strategic clarity, and accountability to Vanitha's mission, expanding both global partnerships and hands-on local impact. She is committed to building an engaged community of volunteers and supporters, communicating our impact, fostering mentorship, and creating meaningful opportunities to serve with compassion. At the center of her leadership, driven by a lifelong passion to mentor and lift others up, is her belief that service is a shared responsibility and a profound source of joy, dignity, and human connection.",
    image: "/vanitha-site/images/team/manju-abraham.webp",
  },
  {
    id: "geeta-george",
    name: "Geeta George",
    role: "Chair Person",
    bio: "Geeta is an engineering architect and has been the driving force behind Vanitha since 2001, serving as President multiple times and doing the outreach into the community of supporters and sponsors and succession planning for sustained results. She is generous and tireless in her efforts to make a difference. Her passion and spirit are an inspiration for others. Her vision of empowering women and children through education and community support has touched thousands of lives.",
    image: "/vanitha-site/images/leaders/geeta-george.webp",
  },
  {
    id: "priya-sarojini",
    name: "Priya Sarojini",
    role: "Secretary",
    bio: "Priya brings three decades of supply-chain management experience and is passionate about creating sustainable programs that create lasting change in communities. Her generous donations and efforts have touched many lives and institutions supporting women and children. She is passionate about mentoring and growing young people and enjoys sharing her knowledge and experience. Vanitha's activities provide great joy and meaning in her life.",
    image: "/vanitha-site/images/team/priya-sarojini.webp",
  },
  {
    id: "usha-dawn",
    name: "Usha Dawn",
    role: "Board of Director",
    bio: "Usha is a seasoned technology leader and community advocate serving as a Board Member on Vanitha's Charity Board. With close to three decades of experience in the tech industry, she currently works as a Technical Program Manager, driving AI-led innovation and enterprise programs. Beyond her professional achievements, Usha is a poet, blogger, and passionate patron of the arts, and an active SFJAZZ member who deeply supports music and cultural expression. Committed to philanthropy and women's empowerment, she brings strategic vision, compassion, and strong community engagement to Vanitha's mission of uplifting and supporting those in need.",
    image: "/vanitha-site/images/team/usha-dawn.webp",
  },
];

export const advisoryBoard: TeamMember[] = [
  {
    id: "dr-meera-rao",
    name: "Dr. Meera Rao",
    role: "Health Programs Advisor",
    bio: "Dr. Rao guides our health initiatives, ensuring our programs meet the highest standards of care and reach those most in need.",
    image: "/vanitha-site/images/team/health-advisor.webp",
  },
  {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    role: "Education Programs Advisor",
    bio: "Rajesh brings expertise in educational program design and helps shape our scholarship and learning initiatives.",
    image: "/vanitha-site/images/team/education-advisor.webp",
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
