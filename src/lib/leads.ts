import { site } from "@/data/site";

export interface LeadInput {
  name?: string;
  email: string;
  message?: string;
  source: string;
  consent: boolean;
}

export type LeadResult =
  | { ok: true; mode: "live" }
  | { ok: true; mode: "demo" }
  | { ok: false; error: string };

export const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

/**
 * Integration point for email / CRM providers.
 * Set NEXT_PUBLIC_LEADS_ENDPOINT to a URL that accepts this JSON via POST
 * (e.g. a serverless function that forwards to your provider).
 * With no endpoint configured nothing is stored or sent, and we say so ("demo" mode).
 */
export async function submitLead(lead: LeadInput): Promise<LeadResult> {
  if (!site.leadsEndpoint) {
    await new Promise((r) => setTimeout(r, 450));
    return { ok: true, mode: "demo" };
  }
  try {
    const res = await fetch(site.leadsEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) return { ok: false, error: "We couldn't save your details. Please try again shortly." };
    return { ok: true, mode: "live" };
  } catch {
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}
