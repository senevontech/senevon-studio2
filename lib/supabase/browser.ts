"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabasePublicConfig } from "@/lib/supabase/config";

let cachedClient: SupabaseClient | null = null;

export function getSupabaseBrowserClient() {
  if (cachedClient) {
    return cachedClient;
  }

  const { url, anonKey } = getSupabasePublicConfig();
  cachedClient = createClient(url, anonKey);

  return cachedClient;
}
