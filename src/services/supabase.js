import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gpfzdytcwgoudmnuooje.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZnpkeXRjd2dvdWRtbnVvb2plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMTgyMjMsImV4cCI6MjA1MjY5NDIyM30.r8R7PQzL8cEw1GPyb1Wg_esHHSlVexfDKdVf944BRiw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
