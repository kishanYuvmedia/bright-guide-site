import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Lock, FileCheck, AlertTriangle, Scale } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Financial Governance — Umusave Capital" },
      { name: "description", content: "Your capital, protected by rigorous financial governance. Segregated accounts, retail protections, and global regulatory standards." },
    ],
  }),
  component: GovernancePage,
});

function GovernancePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Financial Governance"
        title="Your Capital, Protected by Rigorous Financial Governance."
        subtitle="Financial governance is paramount to Umusave. We implement structured, thorough discipline designed to protect client interests at every stage of the investment lifecycle."
      />

      <section className="container mx-auto px-6 py-24 grid lg:grid-cols-3 gap-8">
        {[
          { icon: ShieldCheck, t: "Locally & Globally Regulated", d: "All products and services adhere to well-established global and local regulatory standards." },
          { icon: Lock, t: "Ring-Fenced Client Accounts", d: "Client funds are held in segregated accounts, legally and operationally separated from Umusave's own balance sheet." },
          { icon: FileCheck, t: "Digital KYC", d: "Modern, paperless onboarding through a state-of-the-art investment platform with straightforward, quick account opening." },
        ].map((i) => (
          <div key={i.t} className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
            <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center">
              <i.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-2xl text-primary">{i.t}</h3>
            <p className="mt-3 text-foreground/70 leading-relaxed">{i.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-surface">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
              Retail Investor Protections
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Built-in safeguards for every investor.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { icon: AlertTriangle, t: "No Leverage on Retail Accounts", d: "All positions are fully funded — there is no margin or leverage on retail accounts." },
              { icon: Scale, t: "Capped Derivative Exposure", d: "Futures and Options exposure limited to a maximum of 10% of total portfolio value, reflecting the higher risk profile of derivative instruments." },
              { icon: Lock, t: "Segregated Custody", d: "Client funds are held in ring-fenced accounts protected against business volatility." },
              { icon: ShieldCheck, t: "AI Risk Monitoring", d: "Continuous portfolio monitoring with proactive alerts and volatility-sensitive position guidance." },
            ].map((i) => (
              <div key={i.t} className="flex gap-5 bg-card rounded-2xl p-7 border border-border/60">
                <span className="h-12 w-12 rounded-full bg-secondary grid place-items-center text-primary flex-shrink-0">
                  <i.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-primary">{i.t}</h3>
                  <p className="mt-2 text-foreground/75 leading-relaxed">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
