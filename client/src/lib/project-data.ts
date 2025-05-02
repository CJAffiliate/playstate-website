export interface Project {
  name: string;
  tag: string;
  objective: string;   // The problem/challenge
  action: string;      // What we did to solve it
  outcome: string;     // The results
  fileNumber: string;
  status: string;
  image: string;       // Project card image
  screenImage?: string; // Phone mockup screenshot 
  description?: string; // Shortened description for previews
  reversed?: boolean;  // For alternating layouts
  timestamp?: string;  // For file timestamp
  priority?: string;   // For priority indicator
}

export const projects: Project[] = [
  {
    name: "TradeIQ",
    tag: "Funnel & Website Development",
    objective: "TradeIQ had developed cutting-edge AI-powered trading analysis software—but needed a way to attract early users and prove market demand. With £250,000 in funding on the line, they came to us needing more than just a site—they needed customer acquisition infrastructure.",
    action: "We designed and developed a sleek, high-conversion landing page and lead funnel system, focused on educating visitors, validating interest, and capturing high-intent users for a waitlist. We crafted the flow to position the product as exclusive and investment-worthy, with strategic copy, sharp UI, and lead magnets.",
    outcome: "The waitlist grew large enough to validate demand and secure their full £250,000 in funding. With that traction, they launched the first public version of their app and now have an active, growing user base.",
    description: "Helped secure £250,000 in funding by designing a high-conversion funnel and waitlist system for an AI-powered trading app.",
    fileNumber: "FILE 01",
    status: "FILE COMPLETE",
    image: "tradeiq-app.jpg",
    screenImage: "/tradeiq-screenshot.jpg",
    reversed: false,
    timestamp: "Updated: 05.24.25",
    priority: "HIGH"
  },
  {
    name: "GREENHOMEPATH",
    tag: "Lead Generation",
    objective: "GreenHomePath needed to generate qualified leads for home energy improvement services, specifically targeting homeowners looking to save on energy bills through heat pump installations.",
    action: "We built a comprehensive lead-gen system focused on capturing high-intent homeowners. This included a landing page optimized for conversion, Facebook and Instagram ad campaigns, and a qualification funnel to ensure quality leads for HVAC companies.",
    outcome: "The campaign delivered over 10,000 leads across all active campaigns, with a 22% higher conversion rate than industry standard. Cost per lead was 31% below target, with 68% of leads qualifying for next steps.",
    description: "Built a lead-gen system for a pay-per-lead affiliate brand in the green energy space. Targeted cost-conscious homeowners via Facebook & Instagram ads.",
    fileNumber: "FILE 04",
    status: "FILE ACTIVE",
    image: "greenhomepath.jpg",
    screenImage: "/assets/greenhomepath.jpg",
    reversed: true,
    timestamp: "Updated: 05.02.25",
    priority: "HIGH"
  },
  {
    name: "FRESHDRIP",
    tag: "Ad Creative",
    objective: "Needed standout creative for TikTok ad campaign with limited budget that would capture attention in a saturated coffee subscription market.",
    action: "Delivered 3 distinct ad sets with scroll-stopping hooks, UGC-style content, and custom voiceover that highlighted the unique brewing technology.",
    outcome: "Achieved 2x ROAS in week 1, with CPM 23% lower than industry average and CTR 3.7x higher than previous campaign.",
    description: "Created high-performing TikTok ad creative that achieved 2x ROAS in first week for specialty coffee subscription service.",
    fileNumber: "FILE 02",
    status: "FILE COMPLETE",
    image: "coffee-subscription.jpg",
    screenImage: "/coffee-ad-screenshot.jpg",
    reversed: false,
    timestamp: "Updated: 04.12.25",
    priority: "MEDIUM"
  },
  {
    name: "GROWGURU",
    tag: "Email Campaign",
    objective: "Low open rates (12%) on their nurture sequence was causing sales pipeline issues and poor lead qualification for their B2B SaaS product.",
    action: "Redesigned entire email flow with stronger subject lines, personalized content blocks, and sequenced value-building that addressed specific pain points.",
    outcome: "Open rates increased by 42%, click-through improved by 27%, and sales calls from email nurture doubled within 3 weeks of implementation.",
    description: "Redesigned email nurture sequence that doubled sales calls and increased open rates by 42% for B2B SaaS platform.",
    fileNumber: "FILE 03",
    status: "FILE COMPLETE",
    image: "email-campaign.jpg",
    screenImage: "/email-screenshot.jpg",
    reversed: true,
    timestamp: "Updated: 03.01.25",
    priority: "HIGH"
  }
];
