import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://izbziivdfptdnnnkjcxs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6YnppaXZkZnB0ZG5ubmtqY3hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxOTM4MDYsImV4cCI6MjA3NDc2OTgwNn0.Do1BsRpEpIBzbgADGqvmfeDBsSDyrNo9U_4k9J-MI2A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
