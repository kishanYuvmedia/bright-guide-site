import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, TrendingUp, CircleDollarSign, FileText, ArrowLeftRight, ChartCandlestick,
  User, Briefcase, ShieldCheck, Lock, Cpu, Sprout, Check, ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import heroImg from "@/assets/International-Broking.png";

export const Route = createFileRoute("/international-broking")({
  head: () => ({
    meta: [
      { title: "International Broking — Umusave Capital" },
      { name: "description", content: "Trade global stocks, bonds & commodities from Africa through a single regulated broking account." },
    ],
  }),
  component: InternationalBrokingPage,
});

const trustItems = [
  { icon: ShieldCheck, label: "Locally & Globally Regulated" },
  { icon: Lock, label: "Segregated Client Accounts" },
  { icon: Cpu, label: "AI-Monitored Risk" },
  { icon: Sprout, label: "Founded in Rwanda" },
];

const highlights = [
  {
    icon: TrendingUp,
    title: "Global Access",
    desc: "Trade equities, bonds, commodities, currencies, futures, and options across G7 markets — all from a single regulated account.",
  },
  {
    icon: ShieldCheck,
    title: "Regulated Platform",
    desc: "Umusave Capital is locally and globally regulated, ensuring your capital and trades are protected at every step.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Risk",
    desc: "Every retail account is monitored in real time by our AI-driven risk engine, keeping your portfolio protected around the clock.",
  },
];

const assetClasses = [
  {
    icon: TrendingUp,
    title: "Company Shares",
    desc: "Buy and sell shares of leading companies listed on G7 exchanges — including the NYSE, London Stock Exchange, Frankfurt, and Tokyo — and participate directly in global corporate growth.",
  },
  {
    icon: CircleDollarSign,
    title: "Real-World Assets",
    desc: "Gain exposure to physical commodities including gold, crude oil, and agricultural futures — a proven tool for diversification and inflation protection.",
  },
  {
    icon: FileText,
    title: "Stable Income Instruments",
    desc: "Access government and corporate debt instruments from G7 economies — offering predictable income streams and a lower-risk complement to equity exposure.",
  },
  {
    icon: ArrowLeftRight,
    title: "Foreign Exchange Markets",
    desc: "Trade major and emerging market currency pairs on the world's most liquid market — with tight spreads and real-time execution through our broking platform.",
  },
  {
    icon: ChartCandlestick,
    title: "Advanced Derivatives",
    desc: "Access derivative contracts for portfolio hedging or strategic market exposure. Futures and Options carry a higher level of risk and are subject to specific eligibility criteria for retail clients.",
    risk: "Retail clients: Futures & Options exposure is capped at 10% of total portfolio value. Professional client status required for full derivatives access.",
  },
];

const audienceProfiles = [
  {
    icon: User,
    title: "Retail Investors & First-Time Global Traders",
    desc: "If you have been investing locally and are ready to diversify into global markets — or if you are taking your first step into financial markets altogether — Umusave Capital provides a safe, regulated, and straightforward entry point. We believe global financial markets should be accessible to every African investor, regardless of prior experience.",
    points: [
      "Diversify beyond local markets into G7 equities, bonds, and commodities",
      "Invest with confidence backed by AI risk monitoring on every account",
      "No leverage permitted — your capital is never exposed beyond what you invest",
    ],
  },
  {
    icon: Briefcase,
    title: "Experienced Professionals & Institutional-Grade Traders",
    desc: "For seasoned investors and financial professionals seeking direct market access, advanced trading tools, and leverage capabilities — Umusave Capital offers a professional-grade broking environment with the infrastructure to match your ambitions. Professional client status is subject to KYC approval and capitalisation confirmation.",
    points: [
      "Access to leverage up to 1:100 upon professional KYC approval",
      "Full derivatives access including futures and options without portfolio caps",
      "Advanced trading tools and real-time market data on a single platform",
    ],
  },
];

const processSteps = [
  { icon: User, title: "Open Account", desc: "Register online in minutes — our paperless onboarding process is fully digital from start to finish." },
  { icon: ShieldCheck, title: "Complete KYC", desc: "Verify your identity through our secure digital compliance system to activate your account." },
  { icon: CircleDollarSign, title: "Fund Account", desc: "Deposit funds in local currency or USD and your account will be ready to trade immediately upon clearance." },
  { icon: TrendingUp, title: "Start Trading", desc: "Access global markets in real time through your Umusave broking dashboard — trade equities, bonds, commodities, and more." },
];

const faqs = [
  {
    q: "What markets can I access through Umusave International Broking?",
    a: "You can access equities, bonds, commodities, currencies, futures, and options across G7 markets — including the United States, United Kingdom, Germany, France, Japan, Canada, and Italy.",
  },
  {
    q: "Do I need prior trading experience to open an account?",
    a: "No. Umusave Capital serves both first-time investors and experienced professionals. Our onboarding process includes guidance to help you understand the products available and choose the right approach for your goals.",
  },
  {
    q: "Is leverage available on my broking account?",
    a: "Leverage is not available to retail clients. It is available exclusively to professional-grade clients upon completion of KYC verification and capitalisation confirmation, with access up to 1:100.",
  },
  {
    q: "How are my funds protected?",
    a: "All client funds are held in segregated accounts, legally and operationally separated from Umusave Capital's own balance sheet. The platform is locally and globally regulated, and all retail accounts are monitored in real time by our AI-driven risk engine.",
  },
  {
    q: "Can I trade in my local currency?",
    a: "Yes. You can fund your account in local currency or USD. Our platform supports deposits from Rwanda, Zambia, and Tanzania through local payment methods.",
  },
];

function InternationalBrokingPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <SiteShell>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-6 py-16 lg:py-24 relative">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            International Broking
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-balance max-w-4xl">
            Trade Global Stocks, Bonds & Commodities from Africa
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl text-balance">
            Buy and sell equities, bonds, commodities, currencies, futures, and options across G7 markets — through a single regulated broking account, available right here in Rwanda, Zambia, and Tanzania.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-gold-foreground font-semibold hover:opacity-90 transition shadow-elegant"
            >
              Open Your Broking Account <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 font-medium hover:bg-primary-foreground/10 transition"
            >
              Speak to an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Regulation Strip */}
      <section className="bg-background border-b border-border/60">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {trustItems.map((i) => (
              <div key={i.label} className="flex items-center gap-3">
                <i.icon className="h-5 w-5 text-gold shrink-0" />
                <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">What Is International Broking</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            Trade Global Markets Without Leaving Africa
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            International Broking through Umusave Capital gives you direct access to the world's most liquid and established financial markets. Whether you are building long-term wealth through equities, diversifying into commodities, or seeking income through bonds — our platform puts the full breadth of global financial markets in your hands. Backed by AI-driven risk tools and a fully regulated infrastructure, you can trade with confidence and clarity.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-primary">{h.title}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Asset Classes Section */}
      <section className="bg-surface">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">What You Can Trade</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              Every Major Asset Class. One Powerful Platform.
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              From company shares to government bonds, from gold to foreign currencies — Umusave Capital gives you access to the full spectrum of global financial instruments through a single, regulated broking account.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assetClasses.map((a) => (
              <div key={a.title} className="bg-card rounded-2xl p-8 shadow-soft border border-border/60 flex flex-col">
                <div className="h-12 w-12 rounded-full gradient-gold grid place-items-center text-gold-foreground">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-primary">{a.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed flex-1">{a.desc}</p>
                {a.risk && (
                  <p className="mt-4 text-xs text-muted-foreground italic leading-relaxed border-t border-border/60 pt-4">
                    {a.risk}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Who We Serve</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            Built for Every Stage of Your Investment Journey
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Whether you are investing for the first time or you are a seasoned market professional, Umusave Capital has a broking solution designed around your goals, experience level, and risk appetite.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {audienceProfiles.map((p) => (
            <div key={p.title} className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
              <div className="h-12 w-12 rounded-full bg-secondary text-primary grid place-items-center">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-primary">{p.title}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{p.desc}</p>
              <ul className="mt-5 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-foreground/75">
                    <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Governance & Risk Framework */}
      <section className="bg-surface">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">How We Protect You</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              A Framework Built on Transparency and Responsibility
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              At Umusave Capital, regulation is not a formality — it is a foundation. Our governance framework is designed to ensure every client trades within a structure that is transparent, fair, and appropriate for their experience and risk profile.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-primary">Retail Client Protections</h3>
              <ul className="mt-5 space-y-3">
                <li className="flex gap-3 text-foreground/75">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>No leverage permitted on retail broking accounts</span>
                </li>
                <li className="flex gap-3 text-foreground/75">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>Futures & Options exposure capped at 10% of total portfolio value</span>
                </li>
                <li className="flex gap-3 text-foreground/75">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>AI-driven risk monitoring active on all accounts at all times</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-primary">Professional Client Permissions</h3>
              <ul className="mt-5 space-y-3">
                <li className="flex gap-3 text-foreground/75">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>Access to leverage up to 1:100 subject to KYC and capitalisation approval</span>
                </li>
                <li className="flex gap-3 text-foreground/75">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>Full access to futures, options, and advanced derivative instruments</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-xs text-muted-foreground italic leading-relaxed text-center">
            Investment products carry risk. Past performance is not indicative of future results. Please read our Risk Disclosure Statement before trading.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Getting Started</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            From Registration to Your First Trade in Four Steps
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Opening a Umusave International Broking account is fully digital, straightforward, and designed to get you trading as quickly as possible. Here is how it works.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-4 gap-6">
          {processSteps.map((s, i) => (
            <div key={s.title} className="relative bg-card rounded-2xl p-7 shadow-soft border border-border/60">
              <span className="absolute -top-4 left-7 h-9 w-9 rounded-full gradient-gold text-gold-foreground grid place-items-center font-semibold text-sm shadow-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="h-10 w-10 rounded-full bg-secondary text-primary grid place-items-center mt-2">
                <s.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-display text-xl text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-balance max-w-3xl mx-auto">
            Ready to Trade the World's Biggest Markets?
          </h2>
          <p className="mt-5 text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Open your Umusave International Broking account today — fully digital, regulated, and built for African investors.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-gold-foreground font-semibold hover:opacity-90 transition shadow-elegant"
            >
              Open Your Broking Account <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 font-medium hover:bg-primary-foreground/10 transition"
            >
              Speak to an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl text-balance">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-foreground/70 text-lg max-w-2xl mx-auto">
              We have answered the most common questions about International Broking at Umusave Capital to help you get started with clarity and confidence. If your question is not covered here, our team is ready to help.
            </p>
          </div>
          <div className="mt-14 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-card rounded-2xl border border-border/60 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === f.q ? null : f.q)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display text-lg text-primary pr-4">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gold shrink-0 transition-transform ${
                      openFaq === f.q ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === f.q && (
                  <div className="px-6 pb-6 text-foreground/75 leading-relaxed border-t border-border/60 pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-foreground/70">
              Have more questions?{" "}
              <Link to="/contact" className="text-gold font-semibold hover:underline">
                Contact our team here →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
