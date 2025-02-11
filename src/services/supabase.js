import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yjihvuiazkpmgiukkdly.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqaWh2dWlhemtwbWdpdWtrZGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyOTAzNDAsImV4cCI6MjA1NDg2NjM0MH0.HWEe31altmViCX8jeZTY3MwA-7cm2aWS2xrKSCd58mU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
