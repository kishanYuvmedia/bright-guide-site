import { createFileRoute, Link } from "@tanstack/react-router";
import { Sprout, Globe2, Users, TrendingUp, ArrowRight } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import hero3 from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Umusave Capital" },
      { name: "description", content: "Founded in Rwanda. Built for Africa. Open to the world. Discover Umusave Capital's mission, impact and story." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Umusave Capital"
        title="Rooted in Legacy. Built for Growth."
        subtitle="An emerging international financial services firm dedicated to giving residents of sub-Saharan Africa direct, regulated access to global investment markets."
      />

      <section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Our Story</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">The Umusave Tree</h2>
          <p className="mt-6 text-foreground/75 text-lg leading-relaxed">
            Founded in Rwanda, Umusave Capital is an emerging financial services platform
            focused on expanding African access to global investment opportunities. We aim
            to reduce the barriers that have historically limited access to international
            markets, diversified portfolios and institutional-quality investment products
            across the continent.
          </p>
          <p className="mt-5 text-foreground/75 text-lg leading-relaxed">
            The Umusave tree — the fig tree — symbolises strength, longevity, resilience and
            deep roots that endure through generations. We chose the name because it reflects
            our belief that wealth should be built the same way: patiently, sustainably and
            with a long-term vision that extends beyond one lifetime.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
          <img src={hero3} alt="Umusave team" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-24 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Our Mission</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl max-w-4xl mx-auto text-balance">
            "To give African investors the same access, tools and opportunities available in
            the world's most developed financial markets."
          </h2>
          <div className="mt-10 h-px w-32 bg-gold mx-auto" />
          <p className="mt-10 text-primary-foreground/85 max-w-2xl mx-auto text-lg">
            Delivering financial literacy, global access and meaningful financial inclusion
            across Rwanda, Zambia and Tanzania.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Impact Driven</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-3xl">
          Building generational wealth, one investor at a time.
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Globe2, t: "Global Market Access", d: "Expanding access to global financial markets for African investors." },
            { icon: Users, t: "Financial Literacy", d: "Increasing financial literacy across Africa, with strong focus on empowering women in finance." },
            { icon: TrendingUp, t: "Foreign Currency Investments", d: "Providing access to foreign currency-denominated investments and global wealth-building." },
            { icon: Sprout, t: "Intergenerational Prosperity", d: "Supporting long-term wealth creation, financial inclusion and intergenerational prosperity." },
            { icon: Users, t: "Women-Led Leadership", d: "Proudly co-founded and majority owned by women, championing representation in African fintech." },
            { icon: Globe2, t: "Trusted African Platform", d: "Building a trusted African platform connecting local capital to global opportunities." },
          ].map((i) => (
            <div key={i.t} className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
              <div className="h-12 w-12 rounded-full gradient-gold grid place-items-center text-gold-foreground">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-primary">{i.t}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground hover:bg-primary/90 transition shadow-soft"
          >
            Join the Movement <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
