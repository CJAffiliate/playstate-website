// Types for contact submissions
export type ContactSubmission = {
  id: number;
  name: string;
  email: string;
  business: string | null;
  message: string;
  type: 'contact' | 'work-request';
  projectType: string | null;
  budget: string | null;
  createdAt: Date;
  processed: boolean;
};

// Types for subscriptions
export type Subscription = {
  id: number;
  email: string;
  createdAt: Date;
  unsubscribed: boolean;
}; 