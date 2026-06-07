import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Briefcase, LineChart, Building2, Check } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import aboutHero from "@/assets/product.png";
import productImg from "@/assets/product.png";
import InternationalBrokingImg from "@/assets/International-Broking.png";
import managedAccountsImg from "@/assets/Managed-Accounts.png";
import discretionaryInvestmentsImg from "@/assets/Discretionary-Investments.png";
import corporateInvestmentsImg from "@/assets/corporate-investments.png";
export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Umusave Capital" },
      { name: "description", content: "International Broking, Managed Accounts, Discretionary Investments and Corporate & Enterprise solutions." },
    ],
  }),
  component: ProductsPage,
});

const services = [
  {
    icon: Briefcase,
    img: InternationalBrokingImg,
    to: "/international-broking",
    title: "International Broking",
    headline: "Access the World's Largest Financial Markets.",
    desc: "Direct access to G7 equity markets — covering stocks, commodities, bonds, currencies, futures and options. Now available locally in Rwanda, Zambia and Tanzania through a regulated platform.",
    points: [
      "Equities — company shares listed on G7 exchanges",
      "Commodities — gold, oil, agricultural futures",
      "Bonds — government and corporate debt instruments",
      "Currencies — foreign exchange trading",
      "Futures & Options — derivative contracts (risk restrictions apply for retail clients)",
    ],
    audience: "First-time investors and experienced retail traders seeking access to international equity and derivatives markets.",
  },
  {
    icon: LineChart,
    img: managedAccountsImg,
    to: "/managed-accounts",
    title: "Managed Accounts",
    headline: "Invest Alongside the World's Best Fund Managers.",
    desc: "Sector-specific ETFs, structured and specialised products. Pre-screened investment baskets from top-tier global investment managers — an exclusive access point previously unavailable to retail investors in the region.",
    points: [
      "Sector-specific ETFs across global themes",
      "Structured and specialised investment products",
      "Pre-screened baskets curated by top-tier managers",
      "Hands-off, diversified exposure to global growth",
    ],
    audience: "Individual investors seeking diversified exposure to global growth themes, with portfolios built and managed by professional teams.",
  },
  {
    icon: TrendingUp,
    img: discretionaryInvestmentsImg,
    to: "/discretionary-investments",
    title: "Discretionary Investments",
    headline: "Institutional-Grade Investment Intelligence. Now Accessible to You.",
    desc: "A specialised investment platform deploying capital into high-conviction opportunities — cyclical compounders, growth-stage companies, and hybrid allocation strategies — powered by a proprietary AI algorithm with human-led risk control.",
    points: [
      "Cyclical Compounders — established businesses with predictable, repeating earnings cycles",
      "Growth-Stage Companies — high-potential firms at an inflection point",
      "Hybrid Exposure Allocation — dynamic blend calibrated for risk-adjusted, market-leading returns",
      "Proprietary AI algorithm with human-led oversight",
    ],
    audience: "Investors seeking sophisticated, technology-driven exposure to global high-conviction opportunities.",
    disclaimer:
      "Past performance is not a guarantee of future results. All investments carry risk, including the possible loss of principal. Umusave Capital's AI-driven tools are designed to optimise decision-making but do not eliminate market risk.",
  },
  {
    icon: Building2,
    img: corporateInvestmentsImg,
    to: undefined,
    title: "Corporate & Enterprise Investments",
    headline: "Make Your Business Capital Work Harder — Safely.",
    desc: "Safe and creditworthy instruments to grow business capital. Offering both liquidity and capital appreciation, Umusave becomes a reliable financial and investment management partner — a fractional CIO for your treasury.",
    points: [
      "Capital preservation with steady, measured growth",
      "Liquidity and creditworthy instruments only",
      "Fractional CIO partnership for treasury management",
      "Ring-fenced client accounts, segregated from Umusave's balance sheet",
    ],
    audience: "SMEs, growing companies and enterprise businesses in Rwanda, Zambia and Tanzania with surplus capital. Also relevant to NGOs and institutional entities seeking compliant, low-risk capital management.",
  },
];

function ProductsPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img src={aboutHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-6 py-16 lg:py-24 relative">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            Core Offerings
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-balance max-w-4xl">
            Four Powerful Ways to Grow Your Wealth
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl text-balance">
            From first-time retail investors to corporate treasuries — Umusave Capital operates across four core investment and wealth management verticals.
          </p>
          <div className="mt-10 h-px w-32 bg-gold" />
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 space-y-32">
        {services.map((s, i) => (
          <article
            key={s.title}
            id={s.title.toLowerCase().replace(/[^a-z]+/g, "-")}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[5/4]">
              <img src={s.img} alt={s.title} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-12 w-12 rounded-full gradient-gold grid place-items-center text-gold-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
                  0{i + 1} · {s.title}
                </p>
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl text-balance text-primary">
                {s.headline}
              </h2>
              <p className="mt-5 text-foreground/75 text-lg leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-foreground/80">
                    <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 p-5 rounded-2xl bg-secondary border border-border/70">
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Who It's For</p>
                <p className="mt-2 text-foreground/80">{s.audience}</p>
              </div>
              {s.disclaimer && (
                <p className="mt-5 text-xs text-muted-foreground italic leading-relaxed">
                  {s.disclaimer}
                </p>
              )}
              {s.to && (
                <Link
                  to={s.to}
                  className="mt-6 inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Find the right product for your goals.</h2>
          <p className="mt-5 text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Our team will guide you through onboarding and help you choose the right strategy.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-gold-foreground font-semibold hover:opacity-90 transition shadow-elegant"
          >
            Speak with an Advisor <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
