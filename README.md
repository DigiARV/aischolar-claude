# AI Scholar

Marketing + course-discovery website for AI Scholar. Design language: light, playful and tactile (chunky outlined cards, hard offset shadows, highlighter headlines, pastel tiles, tilted ribbons) with interactive sections: course carousel, wishlist builder, path quiz, learning-style toggle, AI-prompt lab, founder flip card. Next.js (App Router) · TypeScript · Tailwind CSS v4. No animation or UI libraries.

## Run

```bash
npm install
cp .env.example .env.local   # optional; every value may stay blank
npm run dev                  # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

## Structure

- `src/data/*` – all editable content: `courses.ts`, `categories.ts`, `paths.ts`, `faqs.ts`, `resources.ts`, `instructors.ts`, `site.ts`.
- `src/components/courses/CourseCard.tsx` – reusable card; add a course by adding an object to `courses.ts` (page, sitemap, filters and paths pick it up).
- `src/components/home/*` – homepage sections. `src/components/forms/LeadForm.tsx` – shared validated form.
- `src/lib/leads.ts` – **integration point** for email/CRM. Set `NEXT_PUBLIC_LEADS_ENDPOINT` to a POST endpoint; with none set, forms run in labelled demo mode and store nothing.

## Honesty rules built in

Prices, durations, ratings, counts and testimonials are not invented: unset prices read "Pricing to be announced"; courses are "Waitlist open" / "Coming soon" until `status: "published"` with an `enrolUrl`. Empty social/contact/WhatsApp values are hidden, not faked. Legal pages are marked placeholders.

## Before launch

See "Launch blockers" in the project hand-off: real policies, portrait + verified credentials, lead endpoint, payments/LMS, domain (`NEXT_PUBLIC_SITE_URL`).
