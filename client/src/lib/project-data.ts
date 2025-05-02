export interface Project {
  name: string;
  tag: string;
  problem: string;
  solution: string;
  result: string;
  fileNumber: string;
  status: string;
  image?: string;
}

export const projects: Project[] = [
  {
    name: "Trade AI",
    tag: "Landing Page",
    problem: "Users bouncing on a confusing homepage.",
    solution: "Rebuilt landing page with a conversion-first layout.",
    result: "+19% trial signups.",
    fileNumber: "FILE 01",
    status: "FILE COMPLETE",
    image: "@assets/tradeiq-app.jpg"
  },
  {
    name: "FreshDrip",
    tag: "Ad Creative",
    problem: "Needed standout visuals for TikTok ads.",
    solution: "Delivered 3 ad sets with hooks and UGC voiceover.",
    result: "2x ROAS in week 1.",
    fileNumber: "FILE 02",
    status: "FILE COMPLETE",
    image: "@assets/tradeiq-app.jpg"
  },
  {
    name: "GrowGuru",
    tag: "Email Campaign",
    problem: "Low open rates on nurture sequence.",
    solution: "Redesigned email flow with stronger hooks.",
    result: "+42% open rate increase.",
    fileNumber: "FILE 03",
    status: "FILE COMPLETE",
    image: "@assets/tradeiq-app.jpg"
  },
  {
    name: "LaunchX",
    tag: "Full Rebrand",
    problem: "Brand identity didn't match product quality.",
    solution: "Complete visual overhaul and positioning.",
    result: "Conversion up 27%.",
    fileNumber: "FILE 04",
    status: "FILE COMPLETE",
    image: "@assets/tradeiq-app.jpg"
  },
  {
    name: "PeakFit",
    tag: "Landing Page",
    problem: "High traffic but poor signup conversion.",
    solution: "Simplified signup flow and strengthened value props.",
    result: "68% more memberships.",
    fileNumber: "FILE 05",
    status: "FILE COMPLETE",
    image: "@assets/tradeiq-app.jpg"
  },
  {
    name: "NomadWork",
    tag: "Ad Creative",
    problem: "High CPM but poor click-through rate.",
    solution: "Created video ads highlighting user testimonials.",
    result: "CTR improved by 2.3x.",
    fileNumber: "FILE 06",
    status: "FILE COMPLETE",
    image: "/assets/projects/nomadwork.jpg"
  },
  {
    name: "EcoBox",
    tag: "Full Rebrand",
    problem: "Premium product with budget-looking branding.",
    solution: "Premium visual identity and packaging redesign.",
    result: "Enabled 15% price increase.",
    fileNumber: "FILE 07",
    status: "FILE COMPLETE",
    image: "/assets/projects/ecobox.jpg"
  },
  {
    name: "MindfulMe",
    tag: "Email Campaign",
    problem: "Free trial users not converting to paid.",
    solution: "New email sequence focusing on core benefits.",
    result: "Trial-to-paid up 32%.",
    fileNumber: "FILE 08",
    status: "FILE COMPLETE",
    image: "/assets/projects/mindfulme.jpg"
  }
];
