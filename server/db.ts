import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Simple logging implementation for development
const devPool = {
  query: async (sql: string, params?: any[]) => {
    console.log('Database operation:', sql, params);
    return { rows: [] };
  }
};

// Use dev pool for local development
export const pool = devPool as any;
export const db = drizzle(pool, { schema });