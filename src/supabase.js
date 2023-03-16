import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yojgjjrqerybmzzpvybo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvamdqanJxZXJ5Ym16enB2eWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5NTg1OTksImV4cCI6MTk5NDUzNDU5OX0.2aQlZCtn0unUIjljdoqjpF_-q_wzTKN48FHkeORlTQI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
