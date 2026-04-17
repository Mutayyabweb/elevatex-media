import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "seo",
    slug: "search-engine-optimization",
    title: "Search Engine Optimization (SEO)",
    category: "seo",
    icon: "Search",
    shortDesc:
      "Rank higher on Google and drive qualified organic traffic to your website.",
    longDesc:
      "Our comprehensive SEO strategy combines technical excellence, content depth, and authoritative link building to sustainably grow your organic visibility. We don't chase algorithms — we build the kind of quality that search engines reward long-term.",
    benefits: [
      "Increased organic traffic and visibility",
      "Higher quality leads at lower cost",
      "Long-term sustainable growth",
      "Improved brand authority",
      "Better user experience",
      "Competitive edge in your market",
    ],
    process: [
      {
        step: "Technical Audit",
        description: "Deep crawl and analysis of your site's technical health.",
      },
      {
        step: "Keyword Research",
        description: "Discover high-value keywords your audience searches for.",
      },
      {
        step: "On-Page Optimization",
        description:
          "Optimize content, meta tags, headers, and internal links.",
      },
      {
        step: "Content Strategy",
        description: "Build topic authority with expertly crafted content.",
      },
      {
        step: "Link Building",
        description: "Earn high-quality backlinks from authoritative sources.",
      },
      {
        step: "Reporting & Refinement",
        description: "Monthly reports with actionable insights.",
      },
    ],
    relatedServices: [
      "local-seo",
      "content-marketing",
      "page-speed-optimization",
    ],
  },
  {
    id: "local-seo",
    slug: "local-seo",
    title: "Local SEO",
    category: "seo",
    icon: "MapPin",
    shortDesc:
      "Dominate local search results and get found by customers near you.",
    longDesc:
      "Local SEO connects your business with customers searching for your products and services in your area. We optimize your Google Business Profile, build local citations, and create geo-targeted content to drive foot traffic and local leads.",
    benefits: [
      "Top placement in local map pack",
      "More calls and direction requests",
      "Increased foot traffic",
      "Stronger community presence",
      "Better conversion from local searchers",
    ],
    process: [
      {
        step: "GBP Optimization",
        description: "Complete Google Business Profile setup and optimization.",
      },
      {
        step: "Citation Building",
        description: "Consistent NAP data across 50+ directories.",
      },
      {
        step: "Local Content",
        description: "Location-specific pages and blog content.",
      },
      {
        step: "Review Management",
        description: "Strategy to earn and respond to reviews.",
      },
      {
        step: "Local Link Building",
        description: "Partnerships with local organizations and media.",
      },
    ],
    relatedServices: ["seo", "online-review-management", "web-design"],
  },
  {
    id: "enterprise-seo",
    slug: "enterprise-seo",
    title: "Enterprise SEO",
    category: "seo",
    icon: "Building2",
    shortDesc:
      "Scalable SEO solutions for large organizations with complex websites.",
    longDesc:
      "Enterprise SEO demands a different approach — one that accounts for large-scale content, complex site architectures, and cross-departmental coordination. We deliver strategic programs that scale with your organization.",
    benefits: [
      "Scalable SEO across thousands of pages",
      "Advanced technical SEO implementation",
      "Cross-team coordination and governance",
      "Custom reporting dashboards",
      "International and multi-language SEO",
    ],
    process: [
      {
        step: "Site Architecture Review",
        description: "Audit your site's structure for SEO scalability.",
      },
      {
        step: "Priority Mapping",
        description: "Identify the highest-impact pages and opportunities.",
      },
      {
        step: "Content Governance",
        description: "Establish processes for SEO-friendly content creation.",
      },
      {
        step: "Technical Implementation",
        description:
          "Fix crawlability, indexation, and schema issues at scale.",
      },
      {
        step: "Executive Reporting",
        description: "C-suite dashboards showing ROI and growth.",
      },
    ],
    relatedServices: ["seo", "content-marketing", "cro"],
  },
  {
    id: "ppc",
    slug: "pay-per-click-advertising",
    title: "Pay-Per-Click Advertising (PPC)",
    category: "ppc",
    icon: "MousePointer",
    shortDesc:
      "Drive immediate qualified traffic with expertly managed paid search campaigns.",
    longDesc:
      "Our PPC management delivers maximum ROI from Google Ads, Bing, and beyond. We craft campaigns that capture intent, convert browsers into buyers, and scale efficiently as your business grows.",
    benefits: [
      "Immediate traffic and lead generation",
      "Precise targeting by location, device, and audience",
      "Full transparency into spend and performance",
      "Continuous optimization for lower CPC",
      "Scalable budget control",
    ],
    process: [
      {
        step: "Account Audit",
        description: "Review existing campaigns for waste and opportunity.",
      },
      {
        step: "Strategy Development",
        description: "Build a campaign structure aligned to your goals.",
      },
      {
        step: "Ad Creation",
        description: "Write compelling, high-converting ad copy.",
      },
      {
        step: "Landing Page Optimization",
        description: "Ensure landing pages convert paid traffic.",
      },
      {
        step: "Bid Management",
        description: "Smart bidding to maximize conversions at target CPA.",
      },
      {
        step: "Performance Reporting",
        description: "Weekly and monthly performance summaries.",
      },
    ],
    relatedServices: [
      "social-media-advertising",
      "cro",
      "programmatic-advertising",
    ],
  },
  {
    id: "social-media-management",
    slug: "social-media-management",
    title: "Social Media Management",
    category: "social",
    icon: "Share2",
    shortDesc:
      "Build your brand and engage your audience across all social platforms.",
    longDesc:
      "We create, schedule, and manage social media content that builds authentic connections with your audience. From strategy to execution, our team handles everything so you can focus on running your business.",
    benefits: [
      "Consistent brand presence on all platforms",
      "Higher engagement and follower growth",
      "Community building and brand loyalty",
      "Reputation management",
      "Time savings for your team",
    ],
    process: [
      {
        step: "Social Audit",
        description:
          "Review current channels for performance and opportunities.",
      },
      {
        step: "Strategy Creation",
        description: "Define voice, goals, and content pillars.",
      },
      {
        step: "Content Calendar",
        description: "Plan 30 days of content in advance.",
      },
      {
        step: "Content Production",
        description: "Create graphics, captions, and video scripts.",
      },
      {
        step: "Engagement Management",
        description: "Respond to comments, messages, and mentions.",
      },
      {
        step: "Monthly Reporting",
        description: "Track growth, reach, and engagement metrics.",
      },
    ],
    relatedServices: [
      "social-media-advertising",
      "content-marketing",
      "online-review-management",
    ],
  },
  {
    id: "social-media-advertising",
    slug: "social-media-advertising",
    title: "Social Media Advertising",
    category: "social",
    icon: "Megaphone",
    shortDesc:
      "Reach your exact audience with precision-targeted paid social campaigns.",
    longDesc:
      "We run high-performing paid social campaigns on Facebook, Instagram, LinkedIn, TikTok, and more. With advanced audience targeting and creative testing, we consistently deliver cost-efficient leads and sales.",
    benefits: [
      "Hyper-precise audience targeting",
      "Creative A/B testing for optimal performance",
      "Full-funnel campaign strategies",
      "Retargeting to warm audiences",
      "Detailed ROI attribution",
    ],
    process: [
      {
        step: "Audience Research",
        description: "Build detailed buyer personas and custom audiences.",
      },
      {
        step: "Campaign Architecture",
        description: "Structure campaigns by funnel stage and objective.",
      },
      {
        step: "Creative Development",
        description: "Design scroll-stopping ads in multiple formats.",
      },
      {
        step: "Launch & Monitor",
        description: "Go live and optimize in real time.",
      },
      {
        step: "Scale Winners",
        description: "Increase budget on top performers.",
      },
    ],
    relatedServices: ["ppc", "social-media-management", "content-marketing"],
  },
  {
    id: "content-marketing",
    slug: "content-marketing",
    title: "Content Marketing",
    category: "content",
    icon: "FileText",
    shortDesc:
      "Attract, engage, and convert your audience with strategic, high-quality content.",
    longDesc:
      "Content marketing is the foundation of digital authority. Our team of writers, strategists, and SEO experts creates content that ranks, resonates, and drives real business results.",
    benefits: [
      "Increased organic search visibility",
      "Thought leadership and brand authority",
      "Higher quality inbound leads",
      "Supports every stage of the buyer journey",
      "Long-term compounding ROI",
    ],
    process: [
      {
        step: "Content Audit",
        description: "Evaluate existing content for gaps and opportunities.",
      },
      {
        step: "Topic Research",
        description: "Identify high-value topics your audience cares about.",
      },
      {
        step: "Content Creation",
        description: "Expert writers craft long-form, optimized content.",
      },
      {
        step: "Publishing & Promotion",
        description: "Distribute content across owned and earned channels.",
      },
      {
        step: "Performance Analysis",
        description: "Track rankings, traffic, and conversions from content.",
      },
    ],
    relatedServices: ["seo", "email-marketing", "social-media-management"],
  },
  {
    id: "email-marketing",
    slug: "email-marketing",
    title: "Email Marketing",
    category: "content",
    icon: "Mail",
    shortDesc:
      "Nurture leads and retain customers with personalized, results-driven email campaigns.",
    longDesc:
      "Email remains the highest-ROI digital marketing channel. We build automated nurture sequences, promotional campaigns, and newsletters that keep your audience engaged and your revenue growing.",
    benefits: [
      "Highest ROI of any digital channel",
      "Automated lead nurturing sequences",
      "Personalized customer journeys",
      "Re-engagement of dormant customers",
      "Measurable open, click, and conversion rates",
    ],
    process: [
      {
        step: "List Segmentation",
        description: "Organize your list for targeted, relevant messaging.",
      },
      {
        step: "Strategy Development",
        description: "Plan campaigns aligned to your sales cycle.",
      },
      {
        step: "Email Design",
        description: "Craft visually compelling, mobile-friendly emails.",
      },
      {
        step: "Automation Setup",
        description: "Build drip sequences and trigger-based flows.",
      },
      {
        step: "Testing & Optimization",
        description: "A/B test subject lines, content, and CTAs.",
      },
    ],
    relatedServices: ["content-marketing", "cro", "social-media-management"],
  },
  {
    id: "web-design",
    slug: "web-design",
    title: "Web Design & Development",
    category: "web",
    icon: "Monitor",
    shortDesc:
      "Beautiful, conversion-optimized websites that represent your brand and drive growth.",
    longDesc:
      "We design and build websites that look stunning and perform exceptionally. From custom designs to full development, every site we create is fast, accessible, mobile-first, and built to convert visitors into customers.",
    benefits: [
      "Modern, professional brand presence",
      "Mobile-first responsive design",
      "Optimized for conversions from day one",
      "Fast load times and technical excellence",
      "SEO-friendly architecture",
    ],
    process: [
      {
        step: "Discovery & Strategy",
        description: "Understand your business goals and target audience.",
      },
      {
        step: "UX & Wireframing",
        description: "Map out user journeys and page structures.",
      },
      {
        step: "Visual Design",
        description: "Create stunning, on-brand visual designs.",
      },
      {
        step: "Development",
        description: "Build with clean, performant, accessible code.",
      },
      {
        step: "Launch & Support",
        description: "Deploy and provide ongoing maintenance.",
      },
    ],
    relatedServices: ["cro", "page-speed-optimization", "ada-compliance"],
  },
  {
    id: "website-redesign",
    slug: "website-redesign",
    title: "Website Redesign",
    category: "web",
    icon: "RefreshCw",
    shortDesc:
      "Transform your outdated website into a modern, high-performing digital asset.",
    longDesc:
      "Is your website hurting your brand? We redesign websites from the ground up — modernizing design, improving performance, and fixing the conversion barriers that are costing you leads and sales.",
    benefits: [
      "Modern design that builds trust",
      "Improved conversion rates",
      "Better mobile experience",
      "Faster page load times",
      "Stronger SEO foundation",
    ],
    process: [
      {
        step: "Current Site Audit",
        description: "Identify performance and design problems.",
      },
      {
        step: "Competitor Analysis",
        description: "Research what's working in your industry.",
      },
      {
        step: "Redesign Strategy",
        description: "Plan the new architecture and user flows.",
      },
      {
        step: "Design & Build",
        description: "Create the new site with fresh design and code.",
      },
      {
        step: "Migration & Launch",
        description: "Carefully migrate and launch with zero downtime.",
      },
    ],
    relatedServices: ["web-design", "cro", "seo"],
  },
  {
    id: "cro",
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization (CRO)",
    category: "optimization",
    icon: "TrendingUp",
    shortDesc:
      "Turn more visitors into customers by optimizing every step of your conversion funnel.",
    longDesc:
      "CRO is about making the traffic you already have work harder. Through data-driven testing, UX improvements, and behavioral analysis, we systematically improve your website's ability to convert.",
    benefits: [
      "More revenue from existing traffic",
      "Data-backed design decisions",
      "Reduced bounce rates",
      "Higher average order value",
      "Better ROI on all marketing spend",
    ],
    process: [
      {
        step: "Conversion Audit",
        description: "Analyze funnels, heatmaps, and user recordings.",
      },
      {
        step: "Hypothesis Development",
        description: "Form hypotheses based on data and best practices.",
      },
      {
        step: "A/B Testing",
        description: "Run controlled experiments on pages and elements.",
      },
      {
        step: "User Research",
        description: "Gather qualitative insights through surveys and testing.",
      },
      {
        step: "Implementation",
        description: "Roll out winning variations site-wide.",
      },
    ],
    relatedServices: ["web-design", "ppc", "page-speed-optimization"],
  },
  {
    id: "amazon-optimization",
    slug: "amazon-optimization",
    title: "Amazon Optimization",
    category: "optimization",
    icon: "ShoppingCart",
    shortDesc:
      "Maximize visibility and sales on the world's largest e-commerce marketplace.",
    longDesc:
      "Amazon is a massive opportunity — and a fiercely competitive one. We optimize listings, manage Amazon PPC, and employ proven strategies to help your products rank and convert on the platform.",
    benefits: [
      "Higher Amazon search rankings",
      "Improved conversion on product pages",
      "Optimized Amazon PPC campaigns",
      "Enhanced brand content and storefronts",
      "Review generation strategies",
    ],
    process: [
      {
        step: "Listing Audit",
        description: "Review current listings for optimization gaps.",
      },
      {
        step: "Keyword Research",
        description:
          "Find the terms Amazon shoppers use to find your products.",
      },
      {
        step: "Listing Optimization",
        description: "Rewrite titles, bullets, and descriptions.",
      },
      {
        step: "A+ Content",
        description: "Create rich brand content for higher conversions.",
      },
      {
        step: "PPC Management",
        description: "Launch and manage Sponsored Products campaigns.",
      },
    ],
    relatedServices: ["ppc", "content-marketing", "cro"],
  },
  {
    id: "ada-compliance",
    slug: "ada-compliance",
    title: "ADA Compliance",
    category: "web",
    icon: "Shield",
    shortDesc:
      "Make your website accessible to all users and protect your business from legal risk.",
    longDesc:
      "ADA-compliant websites are both a legal requirement and the right thing to do. We audit your site, identify accessibility barriers, and implement fixes that make your digital presence inclusive for everyone.",
    benefits: [
      "Reduced legal and compliance risk",
      "Broader audience reach",
      "Improved user experience for all",
      "Better SEO from accessibility improvements",
      "Ongoing compliance monitoring",
    ],
    process: [
      {
        step: "Accessibility Audit",
        description: "Test against WCAG 2.1 AA standards.",
      },
      {
        step: "Issue Prioritization",
        description: "Rank issues by severity and impact.",
      },
      {
        step: "Remediation",
        description: "Fix issues with code and content changes.",
      },
      {
        step: "Testing & Validation",
        description: "Verify fixes with assistive technology testing.",
      },
      {
        step: "Ongoing Monitoring",
        description: "Continuous scanning for new accessibility issues.",
      },
    ],
    relatedServices: [
      "web-design",
      "website-redesign",
      "page-speed-optimization",
    ],
  },
  {
    id: "page-speed-optimization",
    slug: "page-speed-optimization",
    title: "Page Speed Optimization",
    category: "optimization",
    icon: "Zap",
    shortDesc:
      "Make your website blazing fast to improve rankings, experience, and conversions.",
    longDesc:
      "Page speed is a Google ranking factor and a direct driver of conversion rates. Every second counts — we diagnose and fix performance bottlenecks to deliver sub-second load times.",
    benefits: [
      "Higher Google Page Experience scores",
      "Improved Core Web Vitals",
      "Lower bounce rates",
      "Better mobile performance",
      "Increased conversions from faster UX",
    ],
    process: [
      {
        step: "Performance Audit",
        description: "Measure Core Web Vitals and identify bottlenecks.",
      },
      {
        step: "Image Optimization",
        description: "Compress and convert images to modern formats.",
      },
      {
        step: "Code Optimization",
        description: "Minify, defer, and eliminate render-blocking resources.",
      },
      {
        step: "Caching & CDN",
        description: "Implement caching strategies and content delivery.",
      },
      {
        step: "Verification",
        description: "Confirm improvements with before/after benchmarks.",
      },
    ],
    relatedServices: ["web-design", "seo", "cro"],
  },
  {
    id: "web-maintenance",
    slug: "web-maintenance",
    title: "Web Maintenance",
    category: "web",
    icon: "Settings",
    shortDesc:
      "Keep your website secure, updated, and running smoothly with expert maintenance plans.",
    longDesc:
      "Your website needs regular care to stay secure, fast, and effective. Our maintenance plans cover software updates, backups, security monitoring, performance checks, and content updates — everything your site needs to thrive.",
    benefits: [
      "Always-on security monitoring",
      "Regular software and plugin updates",
      "Automated daily backups",
      "Uptime monitoring and alerts",
      "Priority support from our team",
    ],
    process: [
      {
        step: "Maintenance Audit",
        description: "Assess current state and create an action plan.",
      },
      {
        step: "Baseline Setup",
        description: "Install monitoring, backup, and security tools.",
      },
      {
        step: "Regular Updates",
        description: "Apply updates weekly to maintain security.",
      },
      {
        step: "Monthly Checks",
        description: "Performance, security, and content review.",
      },
      {
        step: "Reporting",
        description: "Monthly maintenance report with all activity logged.",
      },
    ],
    relatedServices: [
      "web-design",
      "page-speed-optimization",
      "ada-compliance",
    ],
  },
  {
    id: "programmatic-advertising",
    slug: "programmatic-advertising",
    title: "Programmatic Advertising",
    category: "advertising",
    icon: "Radio",
    shortDesc:
      "Reach your audience at scale with data-driven, automated display advertising.",
    longDesc:
      "Programmatic advertising uses AI and real-time bidding to deliver your ads to the right person at the right moment across millions of websites, apps, and devices — at scale and efficiency no manual buying can match.",
    benefits: [
      "Massive reach across the web",
      "Precise audience targeting",
      "Real-time optimization",
      "Transparent campaign reporting",
      "Brand safety controls",
    ],
    process: [
      {
        step: "Audience Planning",
        description: "Define target audiences using data and intent signals.",
      },
      {
        step: "Creative Strategy",
        description: "Develop banner, video, and native ad creatives.",
      },
      {
        step: "Platform Setup",
        description: "Configure DSP campaigns and targeting parameters.",
      },
      {
        step: "Launch & Optimize",
        description: "Monitor performance and optimize in real time.",
      },
      {
        step: "Attribution Reporting",
        description: "Track view-through and click-through conversions.",
      },
    ],
    relatedServices: ["ppc", "social-media-advertising", "content-marketing"],
  },
  {
    id: "voice-search-optimization",
    slug: "voice-search-optimization",
    title: "Voice Search Optimization",
    category: "seo",
    icon: "Mic",
    shortDesc:
      "Optimize your content to appear in voice search results and virtual assistant answers.",
    longDesc:
      "Millions of searches happen through Alexa, Siri, and Google Assistant every day. We optimize your site to answer conversational queries and capture this fast-growing search channel.",
    benefits: [
      "Featured snippet and position zero rankings",
      "Optimized for conversational queries",
      "Local voice search dominance",
      "Schema markup implementation",
      "FAQ and structured content strategy",
    ],
    process: [
      {
        step: "Voice Query Research",
        description: "Identify how your audience uses voice search.",
      },
      {
        step: "Content Optimization",
        description: "Rewrite content to answer conversational questions.",
      },
      {
        step: "Schema Implementation",
        description: "Add structured data for voice-friendly snippets.",
      },
      {
        step: "Local Optimization",
        description: "Optimize for near me and local voice queries.",
      },
      {
        step: "Performance Tracking",
        description: "Monitor featured snippet and ranking performance.",
      },
    ],
    relatedServices: ["seo", "local-seo", "content-marketing"],
  },
  {
    id: "online-review-management",
    slug: "online-review-management",
    title: "Online Review Management",
    category: "optimization",
    icon: "Star",
    shortDesc:
      "Build a powerful reputation online and turn reviews into a competitive advantage.",
    longDesc:
      "Your online reputation directly impacts search rankings and buyer decisions. We help you earn more positive reviews, respond professionally to all feedback, and manage your reputation across Google, Yelp, and industry platforms.",
    benefits: [
      "More positive reviews on key platforms",
      "Professional responses to all reviews",
      "Improved local SEO from review signals",
      "Damage control for negative reviews",
      "Competitive reputation advantage",
    ],
    process: [
      {
        step: "Reputation Audit",
        description: "Assess your current reviews and sentiment.",
      },
      {
        step: "Review Generation",
        description: "Implement campaigns to earn more reviews.",
      },
      {
        step: "Monitoring Setup",
        description: "Get alerted to every new review across platforms.",
      },
      {
        step: "Response Management",
        description: "Craft professional responses to all reviews.",
      },
      {
        step: "Reporting",
        description: "Monthly reputation score and trend reports.",
      },
    ],
    relatedServices: [
      "local-seo",
      "social-media-management",
      "content-marketing",
    ],
  },
];

export const servicesByCategory = {
  seo: services.filter((s) => s.category === "seo"),
  ppc: services.filter((s) => s.category === "ppc"),
  social: services.filter((s) => s.category === "social"),
  content: services.filter((s) => s.category === "content"),
  web: services.filter((s) => s.category === "web"),
  optimization: services.filter((s) => s.category === "optimization"),
  advertising: services.filter((s) => s.category === "advertising"),
};

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
