export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  features?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  timeline: string;
  satisfaction: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  banner: string;
  logo: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
  brandLogo: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  category?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: string[];
  cta: string;
}

export const servicesData: Service[] = [
  {
    id: "1",
    slug: "web-development",
    number: "1",
    title: "Web Development",
    description: "Build high-performance, responsive websites and web applications engineered for speed, conversion, and unforgettable user experiences.",
    tags: ["Custom Websites", "React & Next.js", "Full-Stack Dev"],
    image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54cbe744e8daf778bfadd5_Service_08.avif",
    features: ["Modern Jamstack Architecture", "Responsive & Mobile-First", "Performance & Core Web Vitals Optimization"]
  },
  {
    id: "2",
    slug: "lead-generation",
    number: "2",
    title: "Lead Generation",
    description: "Generate qualified leads using strategic campaigns, optimized landing pages, and audience-focused marketing solutions.",
    tags: ["Landing Pages", "Lead Forms", "Campaign Optimization"],
    image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54cbd0b2d9486b37488a64_Service_07.avif",
    features: ["High-converting funnels", "A/B landing page testing", "Automated CRM integration"]
  },
  {
    id: "3",
    slug: "content-marketing",
    number: "3",
    title: "Content Marketing",
    description: "Create valuable content that attracts audiences, builds trust, improves engagement, and supports sustainable business growth.",
    tags: ["Blog Writing", "Content Planning", "Audience Value"],
    image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a5484ba4c8fb6e8690b1872_Service_06.avif",
    features: ["Editorial calendar management", "SEO-driven articles", "Multimedia storytelling"]
  },
  {
    id: "4",
    slug: "seo-optimization",
    number: "4",
    title: "SEO Optimization",
    description: "Enhance your organic discoverability, improve technical search health, and drive high-intent qualified search traffic.",
    tags: ["Technical Audit", "Keyword Strategy", "Backlink Building"],
    image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54cbe744e8daf778bfadd5_Service_08.avif",
    features: ["Core Web Vitals tuning", "On-page keyword mapping", "High-authority outreach"]
  },
  {
    id: "5",
    slug: "paid-advertising",
    number: "5",
    title: "Paid Advertising",
    description: "Design and manage high-ROI PPC campaigns across Google, Meta, LinkedIn, and programmatic channels.",
    tags: ["PPC Ads", "Audience Retargeting", "Budget Optimization"],
    image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54cbd0b2d9486b37488a64_Service_07.avif",
    features: ["Creative ad variations", "Real-time bidding management", "Comprehensive ROAS reporting"]
  },
  {
    id: "6",
    slug: "brand-strategy",
    number: "6",
    title: "Brand Strategy",
    description: "Position your business with unforgettable visual and messaging identity that commands attention and loyalty.",
    tags: ["Brand Voice", "Visual Identity", "Positioning"],
    image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a5484ba4c8fb6e8690b1872_Service_06.avif",
    features: ["Brand guidelines booklet", "Typography & color system", "Competitive positioning analysis"]
  }
];

export const projectsData: Project[] = [
  {
    id: "1",
    slug: "social-activation",
    title: "Social Activation",
    summary: "Built a social-first campaign that increased audience reach, improved engagement quality, and turned brand interactions into measurable interest across multiple digital touchpoints.",
    timeline: "Oct 2025-Aug 2025",
    satisfaction: "100% Satisfaction",
    author: {
      name: "James Foster",
      role: "Product Manager",
      avatar: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a4ba33d7f9eb91c1f2d4900_Project_Author_01.jpg"
    },
    banner: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54c0ce0da076af38bfb544_Project_Banner_01.avif",
    logo: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/69e613cc3b9e7ea522ef8774_Project_Logo_01.svg"
  },
  {
    id: "2",
    slug: "ppc-ad-strategy",
    title: "PPC Ad Strategy",
    summary: "Refined paid search targeting, ad structure, and landing page alignment to lower wasted spend, improve click quality, and deliver stronger conversion performance.",
    timeline: "Nov 2025-Jan 2026",
    satisfaction: "80% Satisfaction",
    author: {
      name: "Ethan Sullivan",
      role: "Business Owner",
      avatar: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a4ba358c0f664cd3da16f13_Project_Author_02.jpg"
    },
    banner: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54c0e3e6d9004d4dc464ac_Project_Banner_02.avif",
    logo: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/69e614d3aa537530b09ef9ee_Project_Logo_02.svg"
  },
  {
    id: "3",
    slug: "content-expansion",
    title: "Content Expansion",
    summary: "Expanded content coverage with topic-focused pages that strengthened organic visibility, answered user intent better, and created a clearer path from discovery to action.",
    timeline: "Jan 2026-Mar 2026",
    satisfaction: "99% Satisfaction",
    author: {
      name: "Amelia Foster",
      role: "Startup Founder",
      avatar: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a4ba373d3823e4b88212c81_Project_Author_03.jpg"
    },
    banner: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54c0f53b2a0e4eb47dda6b_Project_Banner_03.avif",
    logo: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a4ba29d9160988294edccfb_Project_Logo_03.svg"
  }
];

export const reviewsData: Review[] = [
  {
    id: "1",
    name: "Isabella Rossi",
    role: "Client Success Manager",
    company: "AlphaTech",
    quote: "“Professional service with consistent business growth and lasting impact.”",
    rating: 5,
    avatar: "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/6a38d53e67e1a475fac17bd6_Review_01.avif",
    brandLogo: "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/6a38efc44cd0bca6dffd9ce4_Brand_Logo_01.svg"
  },
  {
    id: "2",
    name: "Daniel Carter",
    role: "Founder",
    company: "BrightSide Co.",
    quote: "“Reliable agency with impressive marketing performance and measurable growth.”",
    rating: 5,
    avatar: "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/6a38d53efbf903a6ea0966c7_Review_02.avif",
    brandLogo: "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/6a38efc45ecae467064469e9_Brand_Logo_02.svg"
  },
  {
    id: "3",
    name: "Sophia Romano",
    role: "CEO",
    company: "Elevate Marketing",
    quote: "“Amazing team with outstanding creative results and strong brand-focused strategy.”",
    rating: 5,
    avatar: "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/6a38d53e7328f22b3915880b_Review_03.avif",
    brandLogo: "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/6a38efc497e893376e725db8_Brand_Logo_03.svg"
  },
  {
    id: "4",
    name: "Luca Moretti",
    role: "Founder",
    company: "BrandForge Studio",
    quote: "“Professional, creative, and results-driven — exactly what our brand truly needed most.”",
    rating: 5,
    avatar: "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/6a38d53ec7ceaf29c1af807b_Review_04.avif",
    brandLogo: "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/6a38efc4b7db63f46342d73f_Brand_Logo_04.svg"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    subtitle: "Built for Growing Brands Worldwide",
    description: "Designed for startups seeking consistent growth and online visibility online.",
    monthlyPrice: 299,
    yearlyPrice: 2299,
    features: [
      "Manage 2 Social Platforms",
      "Monthly Performance Reports",
      "Basic SEO Optimization",
      "Email Support",
      "Content Planning",
      "Basic Branding Kit",
      "Audience Growth Strategy"
    ],
    cta: "Choose Plan"
  },
  {
    id: "advanced",
    name: "Advanced Plan",
    subtitle: "Built for Growing Companies",
    description: "Built for growing companies seeking stronger brands and sustainable growth.",
    monthlyPrice: 599,
    yearlyPrice: 5599,
    popular: true,
    features: [
      "Manage unlimited social platforms",
      "Daily analytics & strategy insights",
      "Dedicated account manager",
      "Full branding & design suite",
      "Multiple campaign designs monthly",
      "Monthly campaign design updates",
      "Website & UI/UX support"
    ],
    cta: "Choose Plan"
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "1",
    slug: "creating-high-converting-landing-pages-for-businesses",
    title: "Creating High-Converting Landing Pages for Businesses",
    date: "July 5, 2026",
    author: {
      name: "Nathan Walker",
      avatar: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a49eb9aea04f502e03fc5a2_Blog_Author_12.jpg"
    },
    image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/69e9eeded15718b03b4c65d4_Blog_Bg_01.jpg",
    category: "Design & CRO"
  },
  {
    id: "2",
    slug: "email-marketing-best-practices-for-higher-engagement",
    title: "Email Marketing Best Practices for Higher Engagement",
    date: "July 5, 2026",
    author: {
      name: "Claire Morgan",
      avatar: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a49eb68d0e0f799d7ae57ab_Blog_Author_11.jpg"
    },
    image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/69e9eeded15718b03b4c65d4_Blog_Bg_01.jpg",
    category: "Email Marketing"
  },
  {
    id: "3",
    slug: "social-media-trends-in-2026-for-modern-brands",
    title: "Social Media Trends in 2026 for Modern Brands",
    date: "April 23, 2026",
    author: {
      name: "Olivia Turner",
      avatar: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/69e9eee9df7f2e453d190b27_Blog_Author_01.jpg"
    },
    image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/69e9eeded15718b03b4c65d4_Blog_Bg_01.jpg",
    category: "Social Strategy"
  }
];

export const brandLogos = [
  "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e32f84f90390185c5d93cb_Brand-Logo-1.svg",
  "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e32f84dcbe25eb7353b702_Brand-Logo-2.svg",
  "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e32f8436d5dea6bafa52e0_Brand-Logo-3.svg",
  "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e32f84049a06a51fa9227c_Brand-Logo-4.svg",
  "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e32f840f096bb95b98e379_Brand-Logo-5.svg",
  "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e32f84f63ac5ac24c28449_Brand-Logo-6.svg",
  "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e32f84fe8b0c9288fd5f99_Brand-Logo-7.svg",
  "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e32f84679e909edc1f40e9_Brand-Logo-8.svg"
];

export const capabilities = [
  "Advertising",
  "Analytics",
  "Optimization",
  "Performance",
  "Creative",
  "Campaigns",
  "Strategy",
  "Branding"
];

