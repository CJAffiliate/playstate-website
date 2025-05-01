import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for contact forms
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, business, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required' });
      }
      
      // Store the contact submission
      const contact = await storage.createContactSubmission({
        name,
        email,
        business: business || null,
        message,
        type: 'contact',
        createdAt: new Date()
      });
      
      res.status(201).json({ 
        success: true, 
        message: 'Contact form submitted successfully',
        id: contact.id
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      res.status(500).json({ message: 'Failed to submit contact form' });
    }
  });

  app.post('/api/work-with-us', async (req, res) => {
    try {
      const { name, email, projectType, budget, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !projectType || !budget || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // Store the work request
      const workRequest = await storage.createContactSubmission({
        name,
        email,
        business: null,
        message,
        type: 'work-request',
        projectType,
        budget,
        createdAt: new Date()
      });
      
      res.status(201).json({ 
        success: true, 
        message: 'Work request submitted successfully',
        id: workRequest.id
      });
    } catch (error) {
      console.error('Error submitting work request:', error);
      res.status(500).json({ message: 'Failed to submit work request' });
    }
  });

  app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      
      // Validate email
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
      
      // Check if already subscribed
      const existingSubscription = await storage.getSubscriptionByEmail(email);
      
      if (existingSubscription) {
        return res.status(200).json({ 
          success: true, 
          message: 'Email already subscribed' 
        });
      }
      
      // Store the subscription
      const subscription = await storage.createSubscription({
        email,
        createdAt: new Date()
      });
      
      res.status(201).json({ 
        success: true, 
        message: 'Subscribed successfully',
        id: subscription.id
      });
    } catch (error) {
      console.error('Error subscribing:', error);
      res.status(500).json({ message: 'Failed to subscribe' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
