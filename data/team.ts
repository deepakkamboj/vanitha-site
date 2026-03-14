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
    image: "/images/leaders/padma-shandas.png",
    bio: "Founding President who established Vanitha's foundation and led the organization through its formative years.",
  },
  {
    id: "geetha-kumar",
    name: "Geetha Kumar",
    tenure: "2001-2002",
    image: "/images/leaders/geetha-kumar.png",
    bio: "Expanded Vanitha's community outreach programs and strengthened partnerships with local organizations.",
  },
  {
    id: "geeta-george",
    name: "Geeta George",
    tenure: "2003-2004, 2013-2015",
    image: "/images/leaders/geeta-george.jpg",
    bio: "Served multiple terms, leading major fundraising initiatives and expanding educational programs.",
  },
  {
    id: "prema-thekkek",
    name: "Prema Thekkek",
    tenure: "2005-2006",
    image: "/images/leaders/prema-thekkek.png",
    bio: "Focused on health initiatives and launched the first community health fair programs.",
  },
  {
    id: "usha-namboothiri",
    name: "Usha Namboothiri",
    tenure: "2007-2008",
    image: "/images/leaders/usha-namboothiri.png",
    bio: "Strengthened volunteer programs and increased community engagement initiatives.",
  },
  {
    id: "vimala-tharsayi",
    name: "Vimala Tharsayi",
    tenure: "2010-2012",
    image: "/images/leaders/vimala-tharsayi.png",
    bio: "Led disaster relief efforts and expanded Vanitha's charitable giving programs.",
  },
  {
    id: "mary-purayil",
    name: "Mary Purayil",
    tenure: "2015-2017",
    image: "/images/leaders/mary-purayil.jpg",
    bio: "Modernized operations and launched digital fundraising initiatives.",
  },
  {
    id: "shirley-jacob",
    name: "Shirley Jacob",
    tenure: "2017-2019",
    image: "/images/leaders/shirley-jacob.jpg",
    bio: "Expanded youth programs and strengthened scholarship offerings.",
  },
  {
    id: "annie-pathiparampil",
    name: "Annie Pathiparampil",
    tenure: "2019-2021",
    image: "/images/leaders/annie-pathiparampil2.jpg",
    bio: "Led Vanitha through the COVID-19 pandemic with innovative relief programs.",
  },
];

export const boardMembers: TeamMember[] = [
  {
    id: "manju-abraham",
    name: "Manju Abraham",
    role: "President",
    bio: "Manju is an engineering executive who brings over three decades of experience leading and scaling global organizations. She makes a difference by turning ideas into structured action. She applies the same operational discipline, strategic clarity, and accountability to Vanitha's mission, expanding both global partnerships and hands-on local impact. She is committed to building an engaged community of volunteers and supporters, communicating our impact, fostering mentorship, and creating meaningful opportunities to serve with compassion. At the center of her leadership, driven by a lifelong passion to mentor and lift others up, is her belief that service is a shared responsibility and a profound source of joy, dignity, and human connection.",
    image: "/images/leaders/manju-abraham.jpg",
  },
  {
    id: "geeta-george",
    name: "Geeta George",
    role: "Chair Person",
    bio: "Geeta is an engineering architect and has been the driving force behind Vanitha since 2001, serving as President multiple times and doing the outreach into the community of supporters and sponsors and succession planning for sustained results. She is generous and tireless in her efforts to make a difference. Her passion and spirit are an inspiration for others. Her vision of empowering women and children through education and community support has touched thousands of lives.",
    image: "/images/leaders/geeta-george.jpg",
  },
  {
    id: "priya-sarojini",
    name: "Priya Sarojini",
    role: "Secretary",
    bio: "Priya brings three decades of supply-chain management experience and is passionate about creating sustainable programs that create lasting change in communities. Her generous donations and efforts have touched many lives and institutions supporting women and children. She is passionate about mentoring and growing young people and enjoys sharing her knowledge and experience. Vanitha's activities provide great joy and meaning in her life.",
    image: "/images/leaders/priya-sarojini.jpg",
  },
  {
    id: "usha-dawn",
    name: "Usha Dawn",
    role: "Board of Director",
    bio: "Usha is a seasoned technology leader and community advocate serving as a Board Member on Vanitha's Charity Board. With close to three decades of experience in the tech industry, she currently works as a Technical Program Manager, driving AI-led innovation and enterprise programs. Beyond her professional achievements, Usha is a poet, blogger, and passionate patron of the arts, and an active SFJAZZ member who deeply supports music and cultural expression. Committed to philanthropy and women's empowerment, she brings strategic vision, compassion, and strong community engagement to Vanitha's mission of uplifting and supporting those in need.",
    image: "/images/leaders/Usha-Alve-262.jpg",
  },
  {
    id: "dolly-thomas",
    name: "Dolly Thomas",
    role: "Board of Director",
    bio: "Dolly is a dedicated volunteer and community leader committed to Vanitha's mission of empowering women and children through education and charitable service.",
    image: "/images/leaders/dolly-thomas.jpg",
  },
  {
    id: "annie-pathiparambil",
    name: "Annie Pathiparambil",
    role: "Board of Director",
    bio: "Annie brings years of experience in community service and volunteer leadership, championing Vanitha's programs that support underserved populations.",
    image: "/images/leaders/annie-pathiparampil2.jpg",
  },
  {
    id: "lizy-john",
    name: "Lizy John",
    role: "Board of Director",
    bio: "Lizy is a passionate advocate for education and women's empowerment, contributing her expertise to advance Vanitha's community impact initiatives.",
    image: "/images/leaders/lizy-john.jpg",
  },
  {
    id: "sucheta-nallamuthu",
    name: "Sucheta Nallamuthu",
    role: "Board of Director",
    bio: "Sucheta brings strategic vision and community engagement expertise to Vanitha's board, helping drive meaningful change for those in need.",
    image: "/images/leaders/sucheta-n.jpg",
  },
  {
    id: "mary-joseph",
    name: "Mary Joseph",
    role: "Board of Director",
    bio: "Mary is a compassionate leader dedicated to Vanitha's charitable mission, actively supporting programs that serve vulnerable communities across California.",
    image: "/images/leaders/mary-joseph.jpg",
  },
  {
    id: "shirley-jacob",
    name: "Shirley Jacob",
    role: "Board of Director",
    bio: "Shirley is a committed community volunteer who brings enthusiasm and dedication to Vanitha's outreach programs and fundraising efforts.",
    image: "/images/leaders/shirley-jacob.jpg",
  },
  {
    id: "smitha-verma",
    name: "Smitha Verma",
    role: "Board of Director",
    bio: "Smitha contributes her professional expertise and community spirit to support Vanitha's mission of providing help for the helpless and education for all.",
    image: "/images/leaders/smitha-varma.jpg",
  },
  {
    id: "miji-mathew",
    name: "Miji Mathew",
    role: "Board of Director",
    bio: "Miji is an enthusiastic volunteer and board member who actively participates in Vanitha's community events and charitable programs.",
    image: "",
  },
  {
    id: "vibha-jayan",
    name: "Vibha Jayan",
    role: "Board of Director",
    bio: "Vibha brings her passion for community service and women's empowerment to Vanitha's board, helping shape programs that create lasting impact.",
    image: "/images/leaders/vibha-jayan.jpg",
  },
];

export const advisoryBoard: TeamMember[] = [
  {
    id: "dr-meera-rao",
    name: "Dr. Meera Rao",
    role: "Health Programs Advisor",
    bio: "Dr. Rao guides our health initiatives, ensuring our programs meet the highest standards of care and reach those most in need.",
    image: "/images/team/health-advisor.webp",
  },
  {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    role: "Education Programs Advisor",
    bio: "Rajesh brings expertise in educational program design and helps shape our scholarship and learning initiatives.",
    image: "/images/team/education-advisor.webp",
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
