import { createClient } from "@supabase/supabase-js/dist/index.cjs";

export const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_ANON_KEY
);