export interface Project {
  name: string;
  tag: string;
  objective: string;   // Changed from problem
  action: string;      // Changed from solution
  outcome: string;     // Changed from result
  fileNumber: string;
  status: string;
  image: string;
  reversed?: boolean;  // For alternating layouts
  timestamp?: string;  // For file timestamp
  priority?: string;   // For priority indicator
}

export const projects: Project[] = [
  {
    name: "TRADE AI",
    tag: "Landing Page",
    objective: "Potential users were bouncing within 30 seconds due to confusing value proposition and unclear UI elements on the homepage.",
    action: "Completely rebuilt the landing page with a conversion-first approach, implementing a clear value ladder and streamlined CTA placement.",
    outcome: "Increased trial signups by 19% in first month and reduced bounce rate by 37% across all devices.",
    fileNumber: "FILE 01",
    status: "FILE COMPLETE",
    image: "tradeiq-app.jpg",
    reversed: false,
    timestamp: "Updated: 05.24.25",
    priority: "HIGH"
  },
  {
    name: "FRESHDRIP",
    tag: "Ad Creative",
    objective: "Needed standout creative for TikTok ad campaign with limited budget that would capture attention in a saturated coffee subscription market.",
    action: "Delivered 3 distinct ad sets with scroll-stopping hooks, UGC-style content, and custom voiceover that highlighted the unique brewing technology.",
    outcome: "Achieved 2x ROAS in week 1, with CPM 23% lower than industry average and CTR 3.7x higher than previous campaign.",
    fileNumber: "FILE 02",
    status: "FILE COMPLETE",
    image: "coffee-subscription.jpg",
    reversed: true,
    timestamp: "Updated: 04.12.25",
    priority: "MEDIUM"
  },
  {
    name: "GROWGURU",
    tag: "Email Campaign",
    objective: "Low open rates (12%) on their nurture sequence was causing sales pipeline issues and poor lead qualification for their B2B SaaS product.",
    action: "Redesigned entire email flow with stronger subject lines, personalized content blocks, and sequenced value-building that addressed specific pain points.",
    outcome: "Open rates increased by 42%, click-through improved by 27%, and sales calls from email nurture doubled within 3 weeks of implementation.",
    fileNumber: "FILE 03",
    status: "FILE COMPLETE",
    image: "email-campaign.jpg",
    reversed: false,
    timestamp: "Updated: 03.01.25",
    priority: "HIGH"
  }
];
