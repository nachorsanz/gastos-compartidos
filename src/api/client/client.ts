import { createClient } from '@supabase/supabase-js';
const API_KEY = process.env.VITE_API_SUPABASE_KEY as string;
const API_URL = process.env.VITE_API_SUPABASE_URL as string;
// Create a single supabase client for interacting with your database
export const supabase = createClient(API_URL, API_KEY);
