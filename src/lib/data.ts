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

export interface ClientCaseStudy {
  id: string;
  name: string;
  service: string;
  tagline: string;
  description: string;
  images: string[];
  video?: string;
  stat: string;
  category: string;
  location: string;
  deliverables: string[];
  metrics: { label: string; val: string }[];
  clientQuote?: string;
}

export const CLIENT_CASE_STUDIES: ClientCaseStudy[] = [
  {
    id: "hestia-harlow",
    name: "Hestia Harlow",
    service: "Social Media Management",
    tagline: "Luxury tablescapes, seasonal campaigns & chic minimalist aesthetic",
    description:
      "We gave Hestia Harlow a feed that feels like stepping into one of their gatherings: clean, minimal and quietly chic. We planned and ran their full seasonal calendar, from fall and Halloween to Thanksgiving and New Year. Each campaign was built around beautiful tablescapes, intimate events and the small details that make a moment worth sharing. We also handled their event and partner collaborations, so every season felt fresh but still unmistakably theirs.",
    images: [
      "/images/drive/hestia-harlow/hestia-1.png",
      "/images/drive/hestia-harlow/hestia-2.png",
      "/images/drive/hestia-harlow/hestia-3.jpeg",
      "/images/drive/hestia-harlow/hestia-4.jpeg",
      "/images/drive/hestia-harlow/hestia-5.jpeg",
    ],
    video: "/images/drive/hestia-harlow/hestia-video.mp4",
    stat: "Full Seasonal Calendar",
    category: "Events & Hospitality",
    location: "United States · East Coast",
    deliverables: [
      "Seasonal Campaign Planning",
      "Tablescape Art Direction",
      "Partner Collaborations & PR",
      "Editorial Feed Architecture",
    ],
    metrics: [
      { label: "MARKET", val: "United States" },
      { label: "CADENCE", val: "Seasonal Calendars" },
      { label: "AESTHETIC", val: "Quiet Luxury Chic" },
    ],
    clientQuote:
      "Working with Esha and her agency was smooth and professional. The collaboration felt like a true partnership, with high-quality content delivered on time.",
  },
  {
    id: "loomi-tikka",
    name: "Loomi Tikka",
    service: "Content Creation and Design",
    tagline: "Flavours of Bahrain at Global Village, Dubai",
    description:
      "LoomiTikka brings the flavours of Bahrain to Global Village, Dubai, and we gave it a look worth stopping for. We created everything you see on their feed: the designs, the food content and the visual identity that ties it together. We planned their Instagram and TikTok calendar, made content for their Sikka event, and produced delivery-ready visuals for Deliveroo and Careem. The result is a brand that looks as warm and bold online as the food tastes in person.",
    images: [
      "/images/drive/loomi-tikka/loomi-1.png",
      "/images/drive/loomi-tikka/loomi-2.png",
      "/images/drive/loomi-tikka/loomi-3.png",
      "/images/drive/loomi-tikka/loomi-4.png",
      "/images/drive/loomi-tikka/loomi-5.png",
      "/images/drive/loomi-tikka/loomi-6.png",
    ],
    video: "/images/drive/loomi-tikka/loomi-video.mp4",
    stat: "Global Village Dubai",
    category: "Food & Beverage",
    location: "Dubai, UAE · Global Village",
    deliverables: [
      "Food Content Production",
      "Deliveroo & Careem Visuals",
      "Sikka Event Coverage",
      "TikTok & Reels Strategy",
    ],
    metrics: [
      { label: "LOCATION", val: "Global Village Dubai" },
      { label: "CHANNELS", val: "IG, TikTok & Delivery" },
      { label: "IMPACT", val: "High Footfall & Orders" },
    ],
  },
  {
    id: "er-organics",
    name: "ER Organics",
    service: "Influencer Marketing & Social Media Management",
    tagline: "Clean skincare campaigns with top tier creators",
    description:
      "ER Organics had clean skincare worth talking about, so we got the right people talking. We ran their full influencer marketing, from picking the creators to planning the campaigns and getting the content live. That included collaborations with well-known names like Aena Khan and Amna Shehzad, alongside a wider group of creators. Alongside the influencer work, we managed their social media end to end, so every campaign had a polished, trustworthy feed to land on.",
    images: [
      "/images/drive/er-organics/er-1.jpeg",
      "/images/drive/er-organics/er-2.jpeg",
      "/images/drive/er-organics/er-3.jpeg",
      "/images/drive/er-organics/er-4.jpeg",
      "/images/drive/er-organics/er-5.jpeg",
      "/images/drive/er-organics/er-6.jpeg",
      "/images/drive/er-organics/er-7.jpeg",
    ],
    stat: "Aena Khan & Top Creators",
    category: "Skincare & Wellness",
    location: "Pakistan · Nationwide",
    deliverables: [
      "Creator Outreach & Management",
      "Celebrity Collabs (Aena Khan)",
      "End-to-End Social Planning",
      "Feed Aesthetic Architecture",
    ],
    metrics: [
      { label: "CREATORS", val: "Aena Khan & Top Roster" },
      { label: "NICHE", val: "Clean Skincare & Organic" },
      { label: "STRATEGY", val: "Influencer PR + SMM" },
    ],
    clientQuote:
      "Everything you mentioned shows in your work. You’ve done great for me so far, and I can tell it’s because you’ve built real consistency.",
  },
  {
    id: "dekco-construction",
    name: "Dekco Construction",
    service: "Social Media and Paid Ads",
    tagline: "Kansas City residential & commercial construction",
    description:
      "Deco is a construction company in Kansas City, and we built their online presence the way they build everything else: solid, clean and made to last. We managed their social media, showing off finished projects, the craft behind them and the team doing the work. We also ran their paid ad campaigns to put Deco in front of the right homeowners and businesses across the city. Want the full results? DM us for the complete case study.",
    images: [
      "/images/drive/dekco/dekco-1.jpeg",
      "/images/drive/dekco/dekco-2.jpeg",
      "/images/drive/dekco/dekco-3.jpeg",
    ],
    stat: "Kansas City Ad Reach",
    category: "Construction & Living",
    location: "Kansas City, USA",
    deliverables: [
      "Targeted Meta Ads Funnels",
      "Craftsmanship Video Spotlights",
      "Homeowner Retargeting",
      "Local Commercial Authority",
    ],
    metrics: [
      { label: "TERRITORY", val: "Kansas City, MO" },
      { label: "AUDIENCE", val: "Homeowners & Commercial" },
      { label: "TACTIC", val: "Paid Ads + Project Stories" },
    ],
  },
  {
    id: "skinsation",
    name: "Skinsation",
    service: "360° Marketing · Creative Direction · Branding · Paid Ads",
    tagline: "Premier aesthetic clinic in Sialkot",
    description:
      "Skinsession is an aesthetic clinic in Sialkot, and we’re the team behind everything people see. We handle their creative direction and branding, and we create and design their content. We also run their social media and paid ads from start to finish, all under one vision. Every post, ad and visual follows the same calm, premium look, so the clinic online feels just like the experience inside it. It’s true 360° marketing: one team, one story.",
    images: [
      "/images/drive/skinsation/skinsation-1.png",
      "/images/drive/skinsation/skinsation-2.png",
      "/images/drive/skinsation/skinsation-3.png",
      "/images/drive/skinsation/skinsation-4.png",
      "/images/drive/skinsation/skinsation-5.jpeg",
      "/images/drive/skinsation/skinsation-6.jpeg",
      "/images/drive/skinsation/skinsation-7.png",
    ],
    video: "/images/drive/skinsation/skinsation-video.mp4",
    stat: "360° Clinic Presence",
    category: "Aesthetic Clinic",
    location: "Sialkot, Pakistan",
    deliverables: [
      "Calm Luxury Brand Identity",
      "Doctor & Treatment Reels",
      "Compliance-Aware Meta Ads",
      "360° Full Campaign Handling",
    ],
    metrics: [
      { label: "SECTOR", val: "Aesthetic Medicine" },
      { label: "MODEL", val: "Full 360° Growth" },
      { label: "AESTHETIC", val: "Clinical & Calm Luxury" },
    ],
    clientQuote:
      "Every post, ad and visual follows the same calm, premium look, so the clinic online feels just like the experience inside it.",
  },
  {
    id: "flyseeker",
    name: "Flyseeker",
    service: "Branding, Designing, Social Media",
    tagline: "Dubai travel agency with wanderlust-led visuals",
    description:
      "Fly Seekers is a travel agency in Dubai, and we gave them a social presence that makes people want to pack a bag. We shaped their branding, designed their visuals and ran their social media. The feed feels bright, trustworthy and full of wanderlust. Every post was made to do two jobs: show the destination, and make it easy to book with Fly Seekers.",
    images: [
      "/images/drive/flyseeker/flyseeker-1.png",
      "/images/drive/flyseeker/flyseeker-2.png",
      "/images/drive/flyseeker/flyseeker-3.png",
      "/images/drive/flyseeker/flyseeker-4.png",
    ],
    video: "/images/drive/flyseeker/flyseeker-video.mp4",
    stat: "Dubai Travel Inquiries",
    category: "Travel & Hospitality",
    location: "Dubai, United Arab Emirates",
    deliverables: [
      "Wanderlust Brand System",
      "Destination Reels & Carousels",
      "Direct Booking Inquiries Flow",
      "Ongoing Channel Management",
    ],
    metrics: [
      { label: "HUB", val: "Dubai, UAE" },
      { label: "CONVERSION", val: "Direct Travel Bookings" },
      { label: "CONTENT", val: "Destination Reels & Deals" },
    ],
  },
  {
    id: "toebeansters",
    name: "Toebeansters",
    service: "Character Design & Animation",
    tagline: "Plush toy brand brought to life with social character animation",
    description:
      "TOEBEANSTERS is a plush toy brand, and we helped bring its characters to life. We designed the characters, each with a look and personality of its own, then animated them for social media so they could move, play and win people over on screen. The result is a cast of characters that feels as soft and lovable online as the toys do in your hands.",
    images: [
      "/images/drive/toebeansters/toebeansters-1.png",
      "/images/drive/toebeansters/toebeansters-2.jpeg",
      "/images/drive/toebeansters/toebeansters-3.jpeg",
      "/images/drive/toebeansters/toebeansters-4.jpeg",
      "/images/drive/toebeansters/toebeansters-5.jpeg",
      "/images/drive/toebeansters/toebeansters-6.jpeg",
    ],
    stat: "Character Animation",
    category: "Brand Design & Toys",
    location: "Global E-Commerce Brand",
    deliverables: [
      "Original Character Concepts",
      "Short-Form 2D/3D Animation",
      "Social-First Storytelling",
      "Viral Character IP Building",
    ],
    metrics: [
      { label: "PRODUCT", val: "Plush Toys & Merchandise" },
      { label: "FORMAT", val: "Character Animation" },
      { label: "GOAL", val: "Viral Social Attachment" },
    ],
  },
  {
    id: "nsg-group",
    name: "NSG",
    service: "Paid Ads & Ad Creatives",
    tagline: "High-performance scroll-stopping ad creatives for roofing & insurance",
    description:
      "NSG works in roofing and insurance, a field where trust has to come fast. We designed their ad creatives: clear, confident visuals made to stop the scroll and get homeowners to act. Every creative was built for performance, with strong headlines, clean layouts and one simple message per ad, ready for NSG to launch across their campaigns.",
    images: [
      "/images/drive/nsg/nsg-1.png",
      "/images/drive/nsg/nsg-2.png",
      "/images/drive/nsg/nsg-3.png",
      "/images/drive/nsg/nsg-4.png",
      "/images/drive/nsg/nsg-5.png",
    ],
    stat: "High-CTR Creatives",
    category: "Performance Ads",
    location: "United States · Multi-State",
    deliverables: [
      "Scroll-Stopping Direct-Response Creatives",
      "High-CTR Visual Hooks",
      "Ad Copy & Message Hierarchy",
      "Multi-Variant Campaign Packs",
    ],
    metrics: [
      { label: "VERTICAL", val: "Roofing & Insurance" },
      { label: "FOCUS", val: "High Scroll-Stop CTR" },
      { label: "FORMAT", val: "Direct Action Ad Sets" },
    ],
  },
];

// Page 23: Contact
export const EXACT_CONTACT = {
  callout: "FEEL FREE TO REACH OUT IF YOU HAVE ANY QUERIES",
  company: "Axoyl Digital",
  agencySubtitle: "Social Media Agency · Marketing · PR",
  instagram: "axoyl.digital",
  instagramPk: "axoyldigital.pk",
  linkedin: "axoyldigital",
  phone: "+923359441111",
  whatsappNumber: "923359441111",
  email: "hello@axoyldigital.com",
  founderEmail: "hello@axoyldigital.com",
  address: "Will add soon, getting one.",
};

export const AGENCY_INFO = {
  name: "Axoyl Digital",
  shortName: "Axoyl",
  fullName: "Axoyl Digital Social Media Agency & Marketing PR",
  tagline: "Social media that builds brands people buy from.",
  phone: "+923359441111",
  whatsappNumber: "923359441111",
  email: "hello@axoyldigital.com",
  founderEmail: "hello@axoyldigital.com",
  address: "Will add soon, getting one.",
  instagram: "axoyl.digital",
  instagramPk: "axoyldigital.pk",
  linkedin: "axoyldigital",
  locations: ["Pakistan", "United Arab Emirates", "United Kingdom", "United States", "Ireland", "Australia"],
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

