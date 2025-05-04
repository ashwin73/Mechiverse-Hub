
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://filzyepjbkraucrrtwmi.supabase.co';
// Important: This should be your anon/public key from Supabase dashboard, not the secret!
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpbHp5ZXBqYmtyYXVjcnJ0d21pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNTU3NTQsImV4cCI6MjA2MDczMTc1NH0.yJFQGzo9ra22cIHxKnoWUKlHya_IYbprD7Ok60pslfc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    flowType: 'pkce',
    autoRefreshToken: true,
    detectSessionInUrl: true,
    persistSession: true
  }
});
