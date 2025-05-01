export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  highlight: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    title: "CEO",
    company: "Trade AI",
    quote: "The PLAYSTATE team completely transformed our landing page. Their understanding of conversion optimization is incredible. We saw immediate results — nearly 20% increase in trial signups within weeks.",
    highlight: "Their understanding of conversion optimization is incredible. We saw immediate results.",
    rating: 5
  },
  {
    name: "Marco Reyes",
    title: "Marketing Director",
    company: "FreshDrip",
    quote: "Working with PLAYSTATE was a game-changer for our TikTok strategy. Their ad creatives stood out in the crowded feed and doubled our ROAS in just the first week. Incredible ROI.",
    highlight: "Their ad creatives stood out in the crowded feed and doubled our ROAS in just the first week.",
    rating: 4.5
  },
  {
    name: "Alex Chen",
    title: "Founder",
    company: "GrowGuru",
    quote: "Our email open rates skyrocketed after PLAYSTATE revamped our nurture sequence. Not only do they understand design, but they truly get marketing psychology and conversion triggers.",
    highlight: "They truly get marketing psychology and conversion triggers.",
    rating: 5
  }
];
