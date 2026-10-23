"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { isValidEmail, submitLead } from "@/lib/leads";

interface Props {
  source: string;
  /** "dark" renders for dark backgrounds. */
  tone?: "light" | "dark";
  withMessage?: boolean;
  withName?: boolean;
  cta?: string;
  consentText?: string;
  successTitle?: string;
}

type State =
  | { s: "idle" }
  | { s: "submitting" }
  | { s: "success"; mode: "live" | "demo" }
  | { s: "error"; msg: string };

export function LeadForm({
  source,
  tone = "light",
  withMessage = false,
  withName = true,
  cta = "Notify me",
  consentText = "I agree to receive emails from AI Scholar about courses and learning resources. I can unsubscribe at any time.",
  successTitle = "You're on the list",
}: Props) {
  const id = useId();
  const [state, setState] = useState<State>({ s: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dark = tone === "dark";

  const input = `w-full rounded-xl border px-4 py-3 text-base outline-none transition focus:ring-2 focus:ring-violet/50 min-h-12 ${
    dark ? "border-white/15 bg-white/5 text-white placeholder:text-white/40" : "border-line bg-white text-heading placeholder:text-body/50"
  }`;
  const label = `mb-1.5 block text-sm font-medium ${dark ? "text-white/80" : "text-heading"}`;
  const err = `mt-1.5 text-sm ${dark ? "text-[#ff9aa8]" : "text-[#c0263f]"}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return; // honeypot
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const consent = fd.get("consent") === "on";

    const next: Record<string, string> = {};
    if (withName && !name) next.name = "Please enter your name.";
    if (!isValidEmail(email)) next.email = "Please enter a valid email address.";
    if (withMessage && message.length < 10) next.message = "Please write at least a short message.";
    if (!consent) next.consent = "Please confirm consent to continue.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setState({ s: "submitting" });
    const res = await submitLead({ name, email, message, source, consent });
    setState(res.ok ? { s: "success", mode: res.mode } : { s: "error", msg: res.error });
  }

  if (state.s === "success") {
    return (
      <div role="status" className={`rounded-2xl border p-6 ${dark ? "border-cyan/30 bg-cyan/10 text-white" : "border-violet/20 bg-violet/5 text-heading"}`}>
        <p className="text-lg font-semibold">{state.mode === "demo" ? "Form check passed (demo mode)" : successTitle}</p>
        <p className={`mt-1 text-sm ${dark ? "text-white/70" : "text-body"}`}>
          {state.mode === "demo"
            ? "This site isn't connected to an email service yet, so your details were not stored or sent. Nothing was submitted."
            : "Thanks. We'll be in touch."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-describedby={state.s === "error" ? `${id}-err` : undefined}>
      <div className="hidden" aria-hidden>
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className={withName ? "grid gap-4 sm:grid-cols-2" : ""}>
        {withName && (
          <div>
            <label htmlFor={`${id}-name`} className={label}>Name</label>
            <input id={`${id}-name`} name="name" autoComplete="name" className={input} aria-invalid={!!errors.name} aria-describedby={errors.name ? `${id}-name-e` : undefined} />
            {errors.name && <p id={`${id}-name-e`} className={err}>{errors.name}</p>}
          </div>
        )}
        <div>
          <label htmlFor={`${id}-email`} className={label}>Email</label>
          <input id={`${id}-email`} name="email" type="email" inputMode="email" autoComplete="email" className={input} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-email-e` : undefined} />
          {errors.email && <p id={`${id}-email-e`} className={err}>{errors.email}</p>}
        </div>
      </div>
      {withMessage && (
        <div>
          <label htmlFor={`${id}-msg`} className={label}>Message</label>
          <textarea id={`${id}-msg`} name="message" rows={4} className={input} aria-invalid={!!errors.message} aria-describedby={errors.message ? `${id}-msg-e` : undefined} />
          {errors.message && <p id={`${id}-msg-e`} className={err}>{errors.message}</p>}
        </div>
      )}
      <div>
        <label className={`flex items-start gap-3 text-sm leading-snug ${dark ? "text-white/70" : "text-body"}`}>
          <input type="checkbox" name="consent" className="mt-0.5 size-5 shrink-0 accent-violet" aria-invalid={!!errors.consent} />
          <span>{consentText}</span>
        </label>
        {errors.consent && <p className={err}>{errors.consent}</p>}
      </div>
      {state.s === "error" && <p id={`${id}-err`} role="alert" className={err}>{state.msg}</p>}
      <Button type="submit" disabled={state.s === "submitting"} className="w-full sm:w-auto">
        {state.s === "submitting" ? "Sending…" : cta}
      </Button>
    </form>
  );
}
