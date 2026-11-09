export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  category: string;
  rating: number;
  initials: string;
}

export interface TeamMember {
  name: string;
  role: string;
  tag: string;
  image: string;
}

export interface IndustryPortfolio {
  id: string;
  title: string;
  categoryTag: string;
  description: string;
  clientCallout: string;
  slideImage: string;
  pageNumber: number;
}

export interface UnmatchedSolution {
  title: string;
  description: string;
}

export const PORTFOLIO_HEADER = {
  company: "AxoylDigital",
  title: "AXOYL MARKETING AND PR AGENCY",
  portfolioTag: "Marketing Portfolio 2026",
  tagline: "Unmatched Marketing Solutions at Axoyl Digital",
  intro:
    "We specialize in providing top-tier services to elevate your online presence and brand identity. Our expertise spans across a variety of areas.",
  phone: "+92 349 2976505",
  email: "axoyldigital@gmail.com",
  instagram: "axoyldigital",
};

// Page 2: Unmatched Marketing Solutions at Axoyl Digital
export const UNMATCHED_SOLUTIONS: UnmatchedSolution[] = [
  {
    title: "Branding & Creative Design",
    description:
      "Crafting unique, visually compelling brand identities that resonate with your audience.",
  },
  {
    title: "Social Media & Content Management",
    description:
      "Engaging and optimized content strategies that amplify your brand's voice across platforms.",
  },
  {
    title: "Performance Marketing & Digital Growth",
    description:
      "Data-driven strategies that deliver measurable results and sustainable business growth.",
  },
  {
    title: "Influencer Marketing & Talent Management",
    description:
      "Building strategic partnerships with influencers to enhance your brand's credibility and reach.",
  },
];

// Page 3: WE DEAL IN
export const WE_DEAL_IN = [
  {
    id: "smm",
    title: "SOCIAL MEDIA MANAGEMENT (SMM)",
    primary: true,
    desc: "End-to-end social channel management, content planning, and daily feed growth.",
  },
  {
    id: "content-creation",
    title: "CONTENT CREATION",
    primary: true,
    desc: "Scroll-stopping short-form reels, graphics, and high-retention video assets.",
  },
  {
    id: "campaigns",
    title: "SOCIAL MEDIA CAMPAIGNS",
    primary: true,
    desc: "Targeted viral campaign rollouts engineered for maximum brand resonance.",
  },
  {
    id: "engagement",
    title: "AUDIENCE ENGAGEMENT",
    primary: true,
    desc: "Community nurturing, active comment moderation, and DM conversation flows.",
  },
  {
    id: "influencer",
    title: "INFLUENCER MARKETING",
    primary: false,
    desc: "Onboarding and campaign management with curated creator rosters.",
  },
  {
    id: "analytics",
    title: "ANALYTICS AND REPORTING",
    primary: false,
    desc: "Data-driven before/after performance metrics and strategic monthly reviews.",
  },
  {
    id: "corporate-branding",
    title: "CORPORATE BRANDING",
    primary: false,
    desc: "Cohesive visual identity systems, typography, and brand guideline decks.",
  },
  {
    id: "personal-branding",
    title: "PERSONAL BRANDING",
    primary: false,
    desc: "Executive founder presence and authority building across social channels.",
  },
];

// Pages 5 - 11: Exact Industry Portfolios from PDF
export const INDUSTRY_PORTFOLIOS: IndustryPortfolio[] = [
  {
    id: "restaurants",
    title: "RESTURANTS PORTFOLIO",
    categoryTag: "Hospitality & Dining",
    description:
      "We manage 360 marketing services and PR for restaurants to fill their tables with customers.",
    clientCallout: "Fill tables with customers through 360° marketing & PR",
    slideImage: "/work/slide_5.png",
    pageNumber: 5,
  },
  {
    id: "events-catering",
    title: "EVENTS AND CATERING",
    categoryTag: "Luxury Events",
    description:
      "We helped Event and catering business to grow their brand through content planning, posting, and engagement-driven SMM. We manages the big names in catering like HESTIA HARLOW.",
    clientCallout: "HESTIA HARLOW (Luxury Event & Catering)",
    slideImage: "/work/slide_6.png",
    pageNumber: 6,
  },
  {
    id: "it-software",
    title: "IT & SOFTWARE BUSINESS",
    categoryTag: "Tech & SaaS",
    description:
      "We build and support software solutions for businesses, streamlining operations and helping teams work smarter with reliable technology.",
    clientCallout: "Streamlining operations & reliable B2B authority",
    slideImage: "/work/slide_7.png",
    pageNumber: 7,
  },
  {
    id: "skincare-organic",
    title: "SKINCARE BEAUTY AND ORGANIC BRAND",
    categoryTag: "Beauty & Wellness",
    description:
      "We manage skincare, beauty, and organic brands' content channels end-to-end, creating consistent content and a strong brand presence to boost reach, engagement, and customer loyalty.",
    clientCallout: "ER Organics · End-to-end consistent channel presence",
    slideImage: "/work/slide_8.png",
    pageNumber: 8,
  },
  {
    id: "service-businesses",
    title: "SERVICE BUSINESSES",
    categoryTag: "Consulting & Travel",
    description:
      "We manage content channels for service-based businesses like travel agencies, consultancy firms, and more, creating impactful content and a cohesive brand image to drive visibility, engagement, and client inquiries.",
    clientCallout: "Driving visibility, engagement, and client inquiries",
    slideImage: "/work/slide_9.png",
    pageNumber: 9,
  },
  {
    id: "aesthetic-clinics",
    title: "AESTHETIC CLINICS",
    categoryTag: "Medical & Aesthetics",
    description:
      "We specialize in managing social media for aesthetic clinics, creating visually stunning and engaging content that strengthens brand presence. We have worked with brands like AurSkin & Sarivaa Aesthetics.",
    clientCallout: "AurSkin & Sarivaa Aesthetics",
    slideImage: "/work/slide_10.png",
    pageNumber: 10,
  },
  {
    id: "personal-branding",
    title: "PERSONAL BRANDING IN ACCOUNTS",
    categoryTag: "Founder Authority",
    description:
      "Strategic thought-leadership, personal narrative development, and executive profile management to turn founders and leaders into recognized industry voices.",
    clientCallout: "Executive personal branding & founder authority",
    slideImage: "/work/slide_11.png",
    pageNumber: 11,
  },
];

// Pages 12 - 15: Influencer Marketing
export const INFLUENCER_SECTION = {
  title: "Influencer Marketing Campaigns We Managed",
  subtitle: "Influencer Onboarding and Account Management",
  description:
    "We handle influencer onboarding and account management, creating tailored strategies to boost engagement. While we've showcased a few here, we have a wider list available upon request.",
  roster: [
    { country: "Pakistan", flag: "🇵🇰", detail: "Influencer Roster Pakistan" },
    { country: "USA", flag: "🇺🇸", detail: "Influencer Roster USA" },
    { country: "UAE", flag: "🇦🇪", detail: "Influencer Roster UAE" },
  ],
  slides: ["/work/slide_12.png", "/work/slide_13.png", "/work/slide_14.png", "/work/slide_15.png"],
};

// Page 16: Engagements & Community Management
export const ENGAGEMENT_SECTION = {
  title: "Engagements and Community Management",
  description:
    "Active DM communication, comment moderation, brand voice alignment, and organic audience nurturing that converts passive viewers into engaged brand champions.",
  slide: "/work/slide_16.png",
};

// Page 17: Exact Reel Metrics from Portfolio
export const REELS_METRICS = [
  { views: "147k views", label: "Skincare & Organic Viral Reel", highlight: "147k views" },
  { views: "144k views", label: "Events & Luxury Catering Reel", highlight: "144k views" },
  { views: "91k views", label: "Culinary & Dining Feature", highlight: "91k views" },
  { views: "23k views", label: "Aesthetic Treatment Reel", highlight: "23k views" },
  { views: "10k views", label: "Brand Story & Authority Video", highlight: "10k views" },
];

// Page 20: Exact Testimonials Word-For-Word from Portfolio
export const EXACT_TESTIMONIALS: Testimonial[] = [
  {
    id: "er-organics",
    quote:
      "Love that and honestly, everything you mentioned shows in your work. You’ve done great for me so far, and I can tell it’s because you’ve built real consistency and positioning behind what you do.",
    author: "Ahmad Irfan",
    role: "Manager",
    company: "ER Organics",
    category: "Manager ER Organics",
    rating: 5,
    initials: "AI",
  },
  {
    id: "hestia-harlow",
    quote:
      "Working with Esha and her agency was smooth and professional. The collaboration felt like a true partnership, with high-quality content delivered on time across all platforms and feedback implemented quickly. A reliable, strategy-driven team to work with.",
    author: "Andrew Shortell",
    role: "CEO",
    company: "Hestia Harlow",
    category: "CEO Hestia Harlow",
    rating: 5,
    initials: "AS",
  },
  {
    id: "serevia-aesthetics",
    quote:
      "Amazing talent, would love to work with her again in the future! Esha really understood the needs of my brand and cared to bring more insights that helped a ton!",
    author: "Maida",
    role: "MD",
    company: "Serevia Aesthetics",
    category: "MD Serevia Aesthetics",
    rating: 5,
    initials: "M",
  },
  {
    id: "kaked-bakery",
    quote:
      "Incredible work! The attention to detail was beyond expectations. Esha really took the time to understand our vision and delivered something that exceeded our goals. Can't wait for the next project together!",
    author: "Sarah",
    role: "Founder",
    company: "Kaked Bakery",
    category: "Founder Kaked Bakery",
    rating: 5,
    initials: "S",
  },
  {
    id: "apex-solutions",
    quote:
      "Absolutely thrilled with the results! Esha's creativity and dedication to my brand were evident in every aspect of her work. She truly listens to the client and brings fresh ideas to the table. Highly recommend working with her!",
    author: "David Lee",
    role: "Founder",
    company: "Apex Solutions",
    category: "Founder of Apex Solutions",
    rating: 5,
    initials: "DL",
  },
  {
    id: "devccelator",
    quote:
      "Axoyl Digital was fantastic to work with. They brought a unique perspective to our project, which made all the difference. Their work is top-notch, and I’m excited to collaborate again in the future.",
    author: "Emily",
    role: "Creative Lead Head",
    company: "Devccelator",
    category: "Creative Lead Head Devccelator",
    rating: 5,
    initials: "E",
  },
];

// Page 22: Exact Team Members from Portfolio
export const EXACT_TEAM: TeamMember[] = [
  {
    name: "Esha",
    role: "FOUNDER & CREATIVE HEAD",
    tag: "Creative Leadership",
    image: "/team/esha-founder.jpeg",
  },
  {
    name: "Hammad",
    role: "BD MANAGER",
    tag: "Business Development",
    image: "/team/hammad-bd.jpeg",
  },
  {
    name: "Shahzad",
    role: "CREATIVE DESIGNER",
    tag: "Design & Identity",
    image: "/team/shahzad-designer.jpeg",
  },
  {
    name: "Sana",
    role: "PR MANAGER",
    tag: "PR & Media",
    image: "/team/sana-pr.jpeg",
  },
  {
    name: "Zuha",
    role: "SOCIAL MEDIA SPECIALIST",
    tag: "SMM Specialist",
    image: "/team/zuha-smm.jpeg",
  },
];

// Page 23: Contact
export const EXACT_CONTACT = {
  callout: "FEEL FREE TO REACH OUT IF YOU HAVE ANY QUERIES",
  company: "AxoylDigital",
  agencySubtitle: "Axoyl Marketing and PR Agency",
  instagram: "axoyldigital",
  phone: "+92 349 2976505",
  email: "axoyldigital@gmail.com",
};

export const AGENCY_INFO = {
  name: "Axoyl Digital",
  shortName: "Axoyl",
  fullName: "AxoylDigital Marketing and PR Agency",
  tagline: "Unmatched Marketing Solutions at Axoyl Digital",
  phone: "+92 349 2976505",
  email: "axoyldigital@gmail.com",
  instagram: "axoyldigital",
  locations: ["Pakistan", "United States", "United Arab Emirates"],
};

export const FAQS = [
  {
    question: "How does Axoyl Digital prioritize Social Media Management vs Marketing?",
    answer:
      "Social Media Management (SMM) is our core primary specialty. We handle end-to-end content planning, posting, engagement-driven SMM, and viral reels production. Our secondary capabilities — corporate branding, influencer campaigns, and performance marketing — amplify that reach.",
  },
  {
    question: "Do you manage international clients outside Pakistan?",
    answer:
      "Yes! As documented in our portfolio, we manage big names in catering like HESTIA HARLOW in the USA, Sarivaa Aesthetics globally, and maintain active influencer rosters across Pakistan, the USA, and the UAE.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "Our portfolio features dedicated tracks in: 1) Restaurants & Culinary, 2) Events and Catering, 3) IT & Software Businesses, 4) Skincare, Beauty & Organic Brands, 5) Service Businesses, 6) Aesthetic Clinics, and 7) Personal Branding.",
  },
  {
    question: "How do you track and verify campaign results?",
    answer:
      "We provide comprehensive Before / After Analytics (as shown on Page 18 of our portfolio), tracking impression spikes, non-follower discoverability, reel view milestones (147k, 144k, 91k views), and direct client inquiries.",
  },
];

