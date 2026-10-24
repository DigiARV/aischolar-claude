import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";
import { Container, Pill } from "@/components/ui/Section";
import { site } from "@/data/site";

const chat = [
  { me: false, t: "New: a prompt template for weekly planning 📝" },
  { me: true, t: "Finally, something I can actually copy 🙌" },
  { me: false, t: "Plus a 2-minute walkthrough of how to adapt it to your own work." },
];

export function Community() {
  return (
    <section id="join" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Pill>Community & updates</Pill>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-tight text-heading sm:text-5xl">Keep learning. Stay ahead. <span className="hl">Put AI to work.</span></h2>
          <p className="mt-5 max-w-lg text-body">Get early access to course launches, free guides and prompt templates. Occasional, useful emails. No spam.</p>
          <div className="chunk mt-8 max-w-md overflow-hidden rounded-card bg-white">
            <div className="flex items-center gap-3 border-b-2 border-ink bg-lav px-4 py-3">
              <span className="grid size-9 place-items-center rounded-full border-2 border-ink bg-violet text-sm font-extrabold text-white">A</span>
              <div><p className="text-sm font-extrabold text-ink">AI Scholar Community</p><p className="text-xs text-body">Example of updates we plan to share</p></div>
            </div>
            <ul className="space-y-2.5 bg-paper p-4">
              {chat.map((m) => (
                <li key={m.t} className={`max-w-[85%] rounded-2xl border-2 border-ink px-3.5 py-2 text-sm ${m.me ? "ml-auto bg-sky" : "bg-white"}`}>{m.t}</li>
              ))}
            </ul>
            <p className="border-t-2 border-ink/10 px-4 py-2 text-xs text-body">Illustrative sample. The community has not launched yet.</p>
          </div>
          {site.whatsappCommunityUrl && <div className="mt-6"><Button href={site.whatsappCommunityUrl} variant="accent">Join the WhatsApp community</Button></div>}
        </div>
        <div className="chunk rounded-[2rem] bg-white p-6 shadow-[6px_6px_0_0_var(--color-violet)] sm:p-8">
          <h3 className="mb-5 text-xl font-extrabold text-ink">Join the early-access list</h3>
          <LeadForm source="home-community" cta="Join the list" />
        </div>
      </Container>
    </section>
  );
}
