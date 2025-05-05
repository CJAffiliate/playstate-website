import type { ContactSubmission, Subscription } from "@shared/schema";

const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbwheqDSye2NFn5UsdWPeCH-3L_rLV8d_7HHW6QS1ChDOslQBVf-RdM3Hi2v-CgSzxUO/exec';

export interface IStorage {
  // Contact submission methods
  createContactSubmission(submission: {
    name: string;
    email: string;
    business: string | null;
    message: string;
    type: 'contact' | 'work-request';
    projectType?: string;
    budget?: string;
    createdAt: Date;
  }): Promise<ContactSubmission>;
  
  // Subscription methods
  getSubscriptionByEmail(email: string): Promise<Subscription | undefined>;
  createSubscription(subscription: {
    email: string;
    createdAt: Date;
  }): Promise<Subscription>;
}

export class GoogleSheetsStorage implements IStorage {
  async createContactSubmission(submission: {
    name: string;
    email: string;
    business: string | null;
    message: string;
    type: 'contact' | 'work-request';
    projectType?: string;
    budget?: string;
    createdAt: Date;
  }): Promise<ContactSubmission> {
    const rowData = [
      submission.createdAt.toISOString(), // Timestamp
      submission.name,
      submission.email,
      submission.projectType || '',
      submission.budget || '',
      submission.message
    ];

    await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [rowData]
      }),
      mode: 'no-cors' // Required for Google Apps Script
    });

    return {
      id: Date.now(), // Generate a temporary ID
      ...submission,
      processed: false
    };
  }
  
  async getSubscriptionByEmail(email: string): Promise<Subscription | undefined> {
    // Since we're using Google Apps Script, we can't easily query the sheet
    // This is a limitation of the current setup
    return undefined;
  }
  
  async createSubscription(subscription: {
    email: string;
    createdAt: Date;
  }): Promise<Subscription> {
    const rowData = [
      subscription.createdAt.toISOString(), // Timestamp
      subscription.email,
      'false' // unsubscribed
    ];

    await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [rowData]
      }),
      mode: 'no-cors' // Required for Google Apps Script
    });

    return {
      id: Date.now(), // Generate a temporary ID
      ...subscription,
      unsubscribed: false
    };
  }
}

export const storage = new GoogleSheetsStorage();
