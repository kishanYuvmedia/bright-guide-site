import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Activity, Brain, Sparkles } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import sDiscretionary from "@/assets/service-discretionary.jpg";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Umusave Capital" },
      { name: "description", content: "Powered by intelligent technology. AI risk manager, algorithmic investment engine and personalised advisory built for the modern investor." },
    ],
  }),
  component: TechPage,
});

function TechPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Platform Technology"
        title="Powered by Intelligent Technology. Built for the Modern Investor."
        subtitle="The proprietary technology underpinning Umusave Capital — forward-looking, data-driven and designed for investors who appreciate the role of intelligence in modern markets."
      />

      <section className="container mx-auto px-6 py-24 space-y-24">
        {[
          {
            icon: Activity,
            tag: "01 · AI Risk Manager",
            title: "Real-time portfolio protection.",
            desc: "Our embedded AI bot is one of the most advanced client protection tools available on the market. It continuously monitors portfolios in real time, providing proactive alerts, diversification recommendations and volatility-sensitive position guidance.",
          },
          {
            icon: Brain,
            tag: "02 · Algorithmic Investment Engine",
            title: "Intelligence that compounds.",
            desc: "For the Discretionary product, our AI algorithm identifies high-potential investment opportunities, times market entry and exit points with precision, and dynamically rebalances the portfolio in response to macroeconomic signals and market conditions.",
          },
          {
            icon: Sparkles,
            tag: "03 · Personalised Advisory",
            title: "Hybrid intelligence for professional clients.",
            desc: "A combination of AI-generated insights and human-led strategy — enabling professional clients to construct and express bespoke market views across a full range of instruments.",
          },
        ].map((s, i) => (
          <div
            key={s.tag}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[5/4] relative">
              <img src={sDiscretionary} alt={s.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-12 w-12 rounded-full gradient-gold grid place-items-center text-gold-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">{s.tag}</p>
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl text-primary">{s.title}</h2>
              <p className="mt-5 text-foreground/75 text-lg leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-20 text-center">
          <Cpu className="h-10 w-10 mx-auto text-gold" />
          <h2 className="mt-6 font-display text-4xl md:text-5xl max-w-3xl mx-auto text-balance">
            Institutional-grade intelligence. Designed for African investors.
          </h2>
        </div>
      </section>
    </SiteShell>
  );
}
