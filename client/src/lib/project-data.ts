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
    objective: "TradeIQ needed a large waitlist to validate their AI product and secure £250,000 in investor funding. The app wasn't built yet.",
    action: "We designed a conversion-focused landing page and ran paid ads to rapidly grow a credible, engaged waitlist.",
    outcome: "They secured full funding and kicked off development on their AI trading platform.",
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
    objective: "They needed a way to consistently generate location-specific, high-intent leads for heat pump installations at a profitable cost.",
    action: "We built a custom lead scraper and conversion flow targeting energy-conscious homeowners by region and problem type.",
    outcome: "Collected over 10,000 profitable leads and supplied local installers with ready-to-buy prospects.",
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
