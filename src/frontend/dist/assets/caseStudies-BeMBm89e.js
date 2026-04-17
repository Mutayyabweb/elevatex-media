const caseStudies = [
  // eCommerce
  {
    id: "luxe-threads-seo",
    slug: "luxe-threads-ecommerce-seo",
    client: "Luxe Threads Co.",
    industry: "eCommerce",
    service: "SEO & Content Marketing",
    challenge: "An online clothing boutique was buried on page 3+ of Google for every product category, losing thousands of potential sales to larger department stores with bigger budgets.",
    solution: "We built a product-focused SEO strategy with category page optimization, long-tail buying-intent content, and a link outreach program targeting fashion publications and style influencers.",
    results: [
      { metric: "Organic Revenue Increase", value: "+250%" },
      { metric: "Keywords in Top 3", value: "87" },
      { metric: "Organic Traffic Growth", value: "+310%" },
      { metric: "Return on SEO Investment", value: "14x" }
    ],
    testimonial: {
      quote: "ElevateX took our store from invisible to a top fashion destination. Organic search is now our #1 revenue channel — it's been truly transformative.",
      author: "Priya Nair",
      title: "Founder & CEO"
    },
    image: "/assets/generated/case-luxe-threads.jpg"
  },
  {
    id: "apex-electronics",
    slug: "apex-electronics-ppc-growth",
    client: "Apex Electronics",
    industry: "eCommerce",
    service: "PPC & Google Shopping",
    challenge: "A consumer electronics retailer was burning $40K/month on Google ads with a 1.8x ROAS and couldn't understand why campaigns weren't profitable despite high click volume.",
    solution: "We overhauled the account structure, rebuilt Google Shopping feeds, eliminated wasted spend on irrelevant queries, and implemented Smart Bidding with custom conversion values.",
    results: [
      { metric: "ROAS Improvement", value: "1.8x → 6.1x" },
      { metric: "Monthly Revenue from PPC", value: "+$380K" },
      { metric: "Cost Per Acquisition", value: "-54%" },
      { metric: "Wasted Ad Spend Eliminated", value: "$22K/mo" }
    ],
    testimonial: {
      quote: "We went from losing money on paid ads to it being our most profitable channel in under 90 days. The team's technical expertise is unlike anything we've seen.",
      author: "Omar Farooq",
      title: "Head of E-Commerce"
    },
    image: "/assets/generated/case-apex-electronics.jpg"
  },
  // Healthcare
  {
    id: "brightsmile-dental",
    slug: "brightsmile-dental-local-seo",
    client: "BrightSmile Dental Group",
    industry: "Healthcare",
    service: "Local SEO & PPC",
    challenge: "A 4-location dental practice was nearly invisible in local searches and losing new patients to competitors despite offering superior services at competitive prices.",
    solution: "We optimized all Google Business Profiles, launched targeted dental PPC campaigns, implemented a review generation system, and built neighborhood-specific landing pages for each location.",
    results: [
      { metric: "New Patient Inquiries", value: "+195%" },
      { metric: "Calls from Google Maps", value: "+280%" },
      { metric: "Google Reviews Earned", value: "520+" },
      { metric: "Cost Per New Patient", value: "-48%" }
    ],
    testimonial: {
      quote: "All four of our locations have waitlists for new patients now. ElevateX made local search our most powerful acquisition channel.",
      author: "Dr. James Okafor",
      title: "Practice Owner"
    },
    image: "/assets/generated/case-brightsmile.jpg"
  },
  {
    id: "renew-med-spa",
    slug: "renew-med-spa-social-advertising",
    client: "Renew Medical Spa",
    industry: "Healthcare",
    service: "Social Media Advertising",
    challenge: "A high-end medical spa was struggling to fill appointment slots for premium treatments despite having a strong reputation, relying entirely on word-of-mouth with no digital presence.",
    solution: "We launched a comprehensive Instagram and Facebook advertising strategy using before/after content (HIPAA compliant), created a booking funnel, and implemented retargeting for website visitors.",
    results: [
      { metric: "Monthly Bookings Increase", value: "+145%" },
      { metric: "Instagram Follower Growth", value: "+8,200" },
      { metric: "Social Ad ROAS", value: "9.2x" },
      { metric: "Revenue from Social Channels", value: "$640K" }
    ],
    testimonial: {
      quote: "We went from relying on referrals to having a full calendar booked 3 weeks ahead. The social strategy ElevateX built is our growth engine now.",
      author: "Dr. Sofia Mendez",
      title: "Medical Director"
    },
    image: "/assets/generated/case-renew-spa.jpg"
  },
  // B2B
  {
    id: "cloudops-saas-content",
    slug: "cloudops-b2b-content-seo",
    client: "CloudOps Software",
    industry: "B2B",
    service: "Content Marketing & SEO",
    challenge: "A B2B SaaS company had an excellent product but was generating fewer than 20 qualified leads per month from their website despite heavy investment in product development.",
    solution: "We built a full-funnel content strategy: problem-aware blog content at the top, comparison and solution pages in the middle, and case study content at the bottom to capture high-intent buyers.",
    results: [
      { metric: "MQL Growth", value: "+340%" },
      { metric: "Organic Demo Requests", value: "+185%" },
      { metric: "Domain Authority Increase", value: "+44 pts" },
      { metric: "Content-Attributed Revenue", value: "$2.8M" }
    ],
    testimonial: {
      quote: "Content was always something we 'planned to do someday.' ElevateX made it happen and now it drives nearly half our pipeline.",
      author: "Rachel Kim",
      title: "VP of Marketing"
    },
    image: "/assets/generated/case-cloudops.jpg"
  },
  {
    id: "ironforge-industrial",
    slug: "ironforge-industrial-lead-gen",
    client: "IronForge Industrial",
    industry: "B2B",
    service: "SEO & Lead Generation",
    challenge: "An industrial equipment supplier was losing major contracts to overseas competitors with better-optimized digital presence, relying on an outdated website and no SEO strategy.",
    solution: "We modernized their website, built industry-specific landing pages for every equipment category, implemented technical SEO, and launched a B2B LinkedIn advertising campaign.",
    results: [
      { metric: "Qualified B2B Leads", value: "+220%" },
      { metric: "Average Deal Size via Web", value: "$48K" },
      { metric: "Organic Search Visibility", value: "+180%" },
      { metric: "LinkedIn Pipeline Generated", value: "$1.4M" }
    ],
    image: "/assets/generated/case-ironforge.jpg"
  },
  // Local Business
  {
    id: "carmelas-restaurant",
    slug: "carmelas-restaurant-social-media",
    client: "Carmela's Restaurant Group",
    industry: "Local Business",
    service: "Social Media Management",
    challenge: "A beloved family restaurant group was losing younger diners to trendy competitors and couldn't fill tables on weeknights despite having a loyal base of regular weekend customers.",
    solution: "We created a vibrant social media presence with behind-the-scenes content, launched weeknight promotion campaigns on Instagram and Facebook, and partnered with local food influencers.",
    results: [
      { metric: "Weeknight Revenue Increase", value: "+78%" },
      { metric: "Instagram Followers Gained", value: "+15,400" },
      { metric: "Reservations via Social", value: "1,200+/mo" },
      { metric: "User-Generated Content Posts", value: "3,800+" }
    ],
    testimonial: {
      quote: "We now have a line out the door on Tuesday nights. ElevateX didn't just grow our social — they grew our business.",
      author: "Marco Bianchi",
      title: "Owner & Executive Chef"
    },
    image: "/assets/generated/case-carmelas.jpg"
  },
  {
    id: "meridian-law-firm",
    slug: "meridian-law-firm-local-dominance",
    client: "Meridian Law Group",
    industry: "Local Business",
    service: "Local SEO & Google Ads",
    challenge: "A personal injury law firm was spending $15K/month on billboards and TV ads with zero ability to track attribution, while their Google presence was dominated by national firms.",
    solution: "We shifted the budget to hyper-targeted Google search ads for high-intent legal queries, built a local SEO program across 6 offices, and created practice-area landing pages with strong conversion elements.",
    results: [
      { metric: "Qualified Leads from Google", value: "+320%" },
      { metric: "Cost Per Lead Reduction", value: "-65%" },
      { metric: "Case Sign-Ups Increase", value: "+148%" },
      { metric: "Local Pack Rankings", value: "#1 in 5/6 markets" }
    ],
    testimonial: {
      quote: "We cut our offline ad spend by 60% and more than doubled qualified leads. Digital done right beats billboards every time.",
      author: "Jennifer Walsh",
      title: "Managing Partner"
    },
    image: "/assets/generated/case-meridian-law.jpg"
  },
  // SaaS
  {
    id: "trackflow-saas",
    slug: "trackflow-saas-growth",
    client: "TrackFlow SaaS",
    industry: "SaaS",
    service: "SEO & Product-Led Content",
    challenge: "A project management SaaS was spending heavily on paid acquisition with a CAC that made the unit economics unsustainable, needing to shift to scalable organic channels.",
    solution: "We built a product-led SEO strategy around comparison pages, template libraries, and integration guides — content that attracts buyers ready to sign up, not just readers.",
    results: [
      { metric: "Organic Signups Growth", value: "+290%" },
      { metric: "CAC Reduction (Organic)", value: "-72%" },
      { metric: "Trial-to-Paid Conversion", value: "+38%" },
      { metric: "MRR from Organic Channel", value: "$420K" }
    ],
    testimonial: {
      quote: "ElevateX cracked the code on SEO for SaaS. Our organic channel now generates more qualified signups than our entire paid budget did before.",
      author: "Alex Torres",
      title: "Head of Growth"
    },
    image: "/assets/generated/case-trackflow.jpg"
  },
  {
    id: "hirelink-saas",
    slug: "hirelink-saas-demand-gen",
    client: "HireLink Platform",
    industry: "SaaS",
    service: "Demand Generation & PPC",
    challenge: "An HR tech startup had a superior product but zero brand awareness against entrenched competitors with larger teams and budgets, struggling to generate enterprise pipeline.",
    solution: "We built a demand generation engine combining LinkedIn ads targeted at HR decision-makers, a thought leadership content program, and high-converting landing pages for each buyer persona.",
    results: [
      { metric: "Enterprise Pipeline Generated", value: "$3.2M" },
      { metric: "LinkedIn MQL Cost", value: "$48 avg" },
      { metric: "Demo Request Rate", value: "+215%" },
      { metric: "Sales Qualified Leads", value: "+168%" }
    ],
    testimonial: {
      quote: "We went from 'who is HireLink?' to closing enterprise deals with Fortune 500 companies. ElevateX built our demand engine from scratch.",
      author: "Nadia Patel",
      title: "Chief Marketing Officer"
    },
    image: "/assets/generated/case-hirelink.jpg"
  }
];
const getCaseStudyBySlug = (slug) => caseStudies.find((c) => c.slug === slug);
export {
  caseStudies as c,
  getCaseStudyBySlug as g
};
