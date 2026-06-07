import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ShieldCheck, Lock, Cpu, Sprout, Check, ChevronDown,
  Brain, Users, RefreshCw, Repeat, Rocket, Layers, TrendingUp,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import heroImg from "@/assets/Discretionary-Investments.png";

export const Route = createFileRoute("/discretionary-investments")({
  head: () => ({
    meta: [
      { title: "Discretionary Investments — Umusave Capital" },
      { name: "description", content: "AI-powered, human-guided investment intelligence — institutional-grade portfolio management for African investors." },
    ],
  }),
  component: DiscretionaryPage,
});

const trustItems = [
  { icon: ShieldCheck, label: "Locally & Globally Regulated" },
  { icon: Lock, label: "Segregated Client Accounts" },
  { icon: Cpu, label: "AI-Monitored Risk" },
  { icon: Sprout, label: "Founded in Rwanda" },
];

const highlights = [
  {
    icon: Brain,
    title: "AI-Powered Engine",
    desc: "A proprietary algorithm continuously scans global markets, identifying high-conviction opportunities with precision and speed that human analysis alone cannot match.",
  },
  {
    icon: Users,
    title: "Human-Led Risk Control",
    desc: "Experienced investment professionals retain full oversight of every allocation decision — ensuring technology enhances, rather than replaces, expert judgement.",
  },
  {
    icon: RefreshCw,
    title: "Dynamic Repositioning",
    desc: "The portfolio adapts continuously to evolving market conditions, rebalancing exposure to protect capital and capture emerging opportunities in real time.",
  },
];

const aiCapabilities = [
  {
    icon: TrendingUp,
    title: "Identifies Entry Opportunities",
    desc: "The algorithm continuously analyses global market data to identify optimal entry points — capturing value before the broader market reacts.",
  },
  {
    icon: Repeat,
    title: "Optimises Market Timing",
    desc: "By processing vast quantities of real-time market signals, the engine determines the most advantageous timing for each investment decision — reducing the impact of emotional or reactive trading.",
  },
  {
    icon: RefreshCw,
    title: "Dynamic Portfolio Repositioning",
    desc: "As market conditions evolve, the algorithm dynamically adjusts portfolio allocations — rotating exposure across asset classes, sectors, and geographies to maintain optimal risk-adjusted positioning at all times.",
  },
];

const strategyLayers = [
  {
    icon: Repeat,
    title: "Cyclical Compounders",
    desc: "Investments in established, high-quality businesses with predictable, repeating earnings cycles. These are companies with proven track records of compounding value across economic cycles — providing portfolio stability and consistent long-term growth without excessive volatility.",
  },
  {
    icon: Rocket,
    title: "Growth-Stage Companies",
    desc: "Targeted allocation to high-potential companies at a critical inflection point in their development — where the combination of proven business models and accelerating growth creates the conditions for exceptional capital appreciation. These positions are carefully sized and risk-controlled within the overall portfolio.",
  },
  {
    icon: Layers,
    title: "Hybrid Exposure Allocation",
    desc: "A dynamic blend of instruments — spanning equities, fixed income, and alternative exposures — calibrated by the AI algorithm and human oversight to deliver risk-adjusted, market-leading returns across varying market environments. This layer acts as the portfolio's balancing mechanism, adapting as conditions evolve.",
  },
];

const audienceProfiles = [
  {
    icon: Users,
    title: "Sophisticated Retail Investors",
    desc: "You understand that markets reward patience, strategy, and discipline. You are looking for a professionally managed portfolio that goes beyond standard ETFs or index funds — one that actively seeks out high-conviction opportunities and manages risk with genuine sophistication. Umusave Capital's Discretionary platform is built precisely for you.",
    points: [
      "Access to AI-powered, actively managed investment strategies",
      "Exposure to cyclical compounders and high-potential growth-stage companies",
      "Full portfolio transparency through your personalised Umusave dashboard",
    ],
  },
  {
    icon: Users,
    title: "High-Net-Worth Individuals",
    desc: "For individuals with significant capital seeking institutional-grade management, rigorous risk control, and the performance potential that sophisticated multi-layer strategies can deliver — Umusave Capital's Discretionary platform provides a credible, regulated, and technology-driven solution designed to work as hard as your ambitions demand.",
    points: [
      "Institutional-quality portfolio construction and active management",
      "Human-led risk oversight at every stage of the investment process",
      "Segregated, ring-fenced capital with full regulatory protection",
    ],
  },
];

const processSteps = [
  { title: "Open Account", desc: "Register online in minutes — our fully digital, paperless onboarding process is secure and straightforward." },
  { title: "Complete KYC", desc: "Verify your identity and complete our suitability assessment to confirm the Discretionary platform is right for your circumstances." },
  { title: "Define Goals", desc: "Work with our team to define your investment goals, risk tolerance, and time horizon — the foundation on which your portfolio is constructed." },
  { title: "Track Returns", desc: "Monitor your AI-managed, professionally overseen portfolio in real time through your personalised Umusave dashboard." },
];

const faqs = [
  {
    q: "What makes Discretionary Investments different from a Managed Account?",
    a: "A Managed Account invests in pre-selected ETFs and investment baskets assembled by fund managers. A Discretionary Investment portfolio is actively constructed and managed using a proprietary AI algorithm combined with human oversight — targeting specific high-conviction opportunities across cyclical compounders, growth-stage companies, and hybrid instruments for potentially market-leading returns.",
  },
  {
    q: "How does the AI algorithm work?",
    a: "Our proprietary AI engine continuously analyses global market data to identify optimal entry points, time investment decisions, and dynamically reposition the portfolio as market conditions evolve. It operates across liquid global markets with a systematic macro investment approach — all subject to human-led risk control at every stage.",
  },
  {
    q: "Is Discretionary Investment suitable for first-time investors?",
    a: "This product is designed for investors with a degree of investment experience and a medium-to-long-term investment horizon. If you are newer to investing, we recommend speaking to one of our advisors to determine whether a Managed Account or Discretionary Investment is the right fit for your circumstances.",
  },
  {
    q: "What happens to my capital if markets decline significantly?",
    a: "The portfolio's Hybrid Exposure Allocation layer and the AI algorithm's dynamic repositioning are specifically designed to reduce downside exposure in volatile or declining markets. However, all investments carry risk and capital loss is possible. Our risk disclaimer above provides the full context.",
  },
  {
    q: "How do I monitor my Discretionary Investment portfolio?",
    a: "You have full real-time visibility of your portfolio through your personalised Umusave dashboard — including performance, allocation breakdown, recent activity, and risk metrics. Our team is also available to discuss your portfolio at any time.",
  },
];

function DiscretionaryPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <SiteShell>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-6 py-16 lg:py-24 relative">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            Discretionary Investments
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-balance max-w-4xl">
            Institutional-Grade Investment Intelligence. Now Accessible to You.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl text-balance">
            A specialised investment platform that deploys your capital into high-conviction opportunities — cyclical compounders, growth-stage companies, and hybrid allocation strategies — powered by a proprietary AI algorithm and guided by human-led risk control.
          </p>
          <p className="mt-4 text-base text-primary-foreground/75 max-w-2xl">
            Umusave Capital's Discretionary Investment platform combines the precision of AI-driven analysis with the judgement of experienced investment professionals — delivering a level of investment sophistication previously available only to institutional investors, now directly accessible across Africa.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-gold-foreground font-semibold hover:opacity-90 transition shadow-elegant"
            >
              Open a Discretionary Account <ArrowRight className="h-4 w-4" />
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">What Is Discretionary Investment</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              Where Advanced Technology Meets Expert Human Judgement
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Discretionary Investments at Umusave Capital represent the platform's most sophisticated investment offering. Unlike standard managed accounts or self-directed broking, our Discretionary platform deploys capital through a proprietary AI algorithm that continuously scans global markets for high-conviction opportunities — while human investment professionals retain oversight and control at every stage. The result is a portfolio management approach that combines the speed and analytical depth of machine intelligence with the strategic judgement that only experienced investors can provide.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[5/4] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <Brain className="h-24 w-24 text-primary/30" />
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
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

      {/* AI Algorithm Section */}
      <section className="bg-surface">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">The Technology Behind the Platform</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
                A Proprietary AI Engine. Built for Global Market Intelligence.
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                At the core of Umusave Capital's Discretionary Investment platform is a proprietary AI-driven investment engine — designed to operate with the analytical capacity of an institutional trading desk, deployed for individual investors across Africa. The algorithm is purpose-built for systematic macro investing across liquid global markets, giving your portfolio access to a level of market intelligence that was previously exclusive to the world's largest financial institutions.
              </p>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-elegant aspect-[5/4] bg-gradient-to-br from-gold/20 to-primary/10 flex items-center justify-center">
              <Cpu className="h-24 w-24 text-primary/30" />
            </div>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {aiCapabilities.map((a) => (
              <div key={a.title} className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
                <div className="h-12 w-12 rounded-full gradient-gold grid place-items-center text-gold-foreground">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-primary">{a.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground italic leading-relaxed text-center max-w-3xl mx-auto">
            Past performance is not a guarantee of future results. All investments carry risk, including the possible loss of principal. Umusave Capital's AI-driven tools are designed to optimise decision-making but do not eliminate market risk.
          </p>
        </div>
      </section>

      {/* Investment Strategy Section */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">How We Invest</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            Three Strategic Layers. One Integrated Portfolio.
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Umusave Capital's Discretionary Investment strategy is built around three complementary investment layers — each serving a distinct role in delivering risk-adjusted, market-leading returns across market cycles.
          </p>
        </div>
        <div className="mt-14 space-y-16">
          {strategyLayers.map((l, i) => (
            <div key={l.title} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[5/4] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <l.icon className="h-24 w-24 text-primary/30" />
              </div>
              <div>
                <div className="h-12 w-12 rounded-full gradient-gold grid place-items-center text-gold-foreground">
                  <l.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-3xl md:text-4xl text-primary">{l.title}</h3>
                <p className="mt-5 text-foreground/75 text-lg leading-relaxed">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who It Is For */}
      <section className="bg-surface">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Who We Serve</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              Built for Investors Who Demand More From Their Capital
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Discretionary Investments are designed for investors who want institutional-quality portfolio management — with the transparency, accessibility, and regulatory protection of a regulated African platform.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {audienceProfiles.map((p) => (
              <div key={p.title} className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
                <div className="h-12 w-12 rounded-full bg-secondary text-primary grid place-items-center">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mt-5">{p.title}</p>
                <h3 className="mt-1 font-display text-2xl text-primary">{p.title}</h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{p.desc}</p>
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
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-balance">
            Important Risk Information
          </h2>
          <p className="mt-6 text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Discretionary Investments involve a higher level of complexity and market exposure than standard savings or managed products. Past performance is not a guarantee of future results. All investments carry risk, including the possible loss of principal. Umusave Capital's AI-driven tools are designed to optimise investment decision-making and portfolio positioning, but do not eliminate market risk. The value of your investment may go down as well as up. You should only invest capital that you can afford to have at risk over a medium-to-long-term horizon. If you are uncertain whether this product is appropriate for your financial circumstances, please speak to one of our advisors before proceeding.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Getting Started</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            From Registration to an Actively Managed Portfolio in Four Steps
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Opening a Umusave Discretionary Investment account is fully digital, guided, and designed to match you with the right investment approach from the outset.
          </p>
        </div>
        <div className="mt-14 rounded-3xl overflow-hidden shadow-elegant aspect-[5/2] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-12">
          <Brain className="h-20 w-20 text-primary/30" />
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((s, i) => (
            <div key={s.title} className="relative bg-card rounded-2xl p-7 shadow-soft border border-border/60">
              <span className="absolute -top-4 left-7 h-9 w-9 rounded-full gradient-gold text-gold-foreground grid place-items-center font-semibold text-sm shadow-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
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
            Experience Investment Intelligence at Its Most Sophisticated
          </h2>
          <p className="mt-5 text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Open a Umusave Discretionary Investment account today — AI-powered, human-guided, and built for Africa's most ambitious investors.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-gold-foreground font-semibold hover:opacity-90 transition shadow-elegant"
            >
              Open a Discretionary Account <ArrowRight className="h-4 w-4" />
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
              We have answered the most common questions about Discretionary Investments at Umusave Capital to help you invest with confidence and clarity. If your question is not covered here, our advisory team is always ready to help.
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
                    className={`h-5 w-5 text-gold shrink-0 transition-transform ${openFaq === f.q ? "rotate-180" : ""}`}
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

      {/* Contact Form */}
      <section className="bg-surface">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl p-10 shadow-elegant border border-border/60">
              <h2 className="font-display text-3xl text-primary">Get in Touch with Our Team</h2>
              <p className="mt-2 text-foreground/70">
                Whether you are ready to open a Discretionary Investment account or want to understand if it is right for you — our advisors are here to help.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
                <input required placeholder="Your Full Name" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <input required type="email" placeholder="Your Email Address" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <input placeholder="Your Phone Number" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <input placeholder="How Can We Help You?" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <textarea required rows={5} placeholder="Tell Us a Little More..." className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground font-medium hover:bg-primary/90 transition shadow-soft">
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-6 text-xs text-muted-foreground">
                We typically respond within one business day. For urgent enquiries, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
