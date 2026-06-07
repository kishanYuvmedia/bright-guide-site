import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ShieldCheck, Lock, Cpu, Sprout, Check, ChevronDown,
  PieChart, Filter, TrendingUp, Globe, Star, Search,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import heroImg from "@/assets/Managed-Accounts.png";
import sectorETFs from "@/assets/image/Sector-Specific-ETFs.png";
import preScreened from "@/assets/image/Pre-Screened-Investment-Baskets.jpg";
import thematic from "@/assets/image/Futuristic-growth-and-innovation-landscape.png";
import followStrategies from "@/assets/image/Follow-the-Strategies-of-the-World's-Greatest-Investment-Managers.jpg";
import individualSeeking from "@/assets/image/Individual-Investors-Seeking.png";
import registrationSteps from "@/assets/image/From Registration to a Managed-Portfolio-in-Four-Simple-Steps.png";

export const Route = createFileRoute("/managed-accounts")({
  head: () => ({
    meta: [
      { title: "Managed Accounts — Umusave Capital" },
      { name: "description", content: "Invest smarter with expertly curated portfolios — sector-specific ETFs and pre-screened investment baskets from world-class managers." },
    ],
  }),
  component: ManagedAccountsPage,
});

const trustItems = [
  { icon: ShieldCheck, label: "Locally & Globally Regulated" },
  { icon: Lock, label: "Segregated Client Accounts" },
  { icon: Cpu, label: "AI-Monitored Risk" },
  { icon: Sprout, label: "Founded in Rwanda" },
];

const highlights = [
  {
    icon: PieChart,
    title: "Sector-Specific ETFs",
    desc: "Focused exposure to the global sectors that matter most — without the need to pick individual stocks.",
  },
  {
    icon: Filter,
    title: "Pre-Screened Baskets",
    desc: "Investment selections researched, filtered, and approved by world-leading fund managers before they reach your portfolio.",
  },
  {
    icon: TrendingUp,
    title: "High-Growth Themes",
    desc: "Access to tomorrow's fastest-growing industries — from Artificial Intelligence to Clean Energy — through professionally managed thematic portfolios.",
  },
];

const features = [
  {
    icon: PieChart,
    title: "Sector-Specific ETFs",
    desc: "Gain focused, cost-efficient exposure to the world's highest-conviction global sectors — from technology and energy to financials and healthcare — through rigorously selected Exchange-Traded Funds. Each ETF in our portfolios is chosen for its quality, liquidity, and long-term growth potential.",
  },
  {
    icon: Filter,
    title: "Pre-Screened Investment Baskets",
    desc: "Our investment baskets are not assembled at random. Each basket is sourced from the research and selection processes of world-leading fund managers, then reviewed by our team before being made available to clients. You benefit from institutional-grade due diligence — without having to conduct it yourself.",
  },
  {
    icon: Star,
    title: "High-Growth Thematic Investing",
    desc: "The most transformative industries of our time are also some of the most rewarding investment opportunities. Through our thematic portfolios, you can align your capital with the sectors shaping the global economy.",
    tags: ["Artificial Intelligence", "Fintech", "Infrastructure", "Health-tech", "Clean Energy"],
  },
];

const uspPointers = [
  {
    icon: Globe,
    title: "Institutional Access",
    desc: "Investment strategies previously reserved for large institutions — now open to individual investors in Africa.",
  },
  {
    icon: Search,
    title: "Rigorous Screening",
    desc: "Every product in our Managed Account range is reviewed and pre-approved before it reaches your portfolio.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Oversight",
    desc: "Your portfolio is actively monitored, rebalanced when needed, and supported by AI-driven risk management around the clock.",
  },
];

const processSteps = [
  { title: "Open Account", desc: "Register online in minutes — our fully digital, paperless onboarding is fast and straightforward." },
  { title: "Complete KYC", desc: "Verify your identity securely through our digital compliance process to activate your account." },
  { title: "Choose Portfolio", desc: "Select the Managed Account portfolio that matches your investment goals, risk appetite, and preferred themes." },
  { title: "Track Growth", desc: "Monitor your professionally managed portfolio in real time through your personalised Umusave dashboard." },
];

const faqs = [
  {
    q: "What is a Managed Account and how is it different from self-directed investing?",
    a: "A Managed Account is a professionally curated portfolio where investment decisions are made on your behalf by experienced fund managers. Unlike self-directed investing, you do not need to select or monitor individual securities — the portfolio is built, managed, and rebalanced by professionals.",
  },
  {
    q: "What types of products are included in a Managed Account?",
    a: "Managed Accounts at Umusave Capital include sector-specific ETFs, pre-screened investment baskets sourced from top-tier global fund managers, and thematic portfolios aligned with high-growth global sectors such as Artificial Intelligence, Fintech, Infrastructure, Health-tech, and Clean Energy.",
  },
  {
    q: "Do I have control over my Managed Account portfolio?",
    a: "Yes. While day-to-day investment decisions are handled by professional managers, you retain full visibility of your portfolio at all times through your Umusave dashboard. You also choose the portfolio that aligns with your goals and risk appetite at the outset.",
  },
  {
    q: "Is there a minimum investment amount?",
    a: "Minimum investment thresholds will vary by portfolio type. Please contact our team or speak to an advisor for current details specific to your preferred Managed Account.",
  },
  {
    q: "How is my capital protected in a Managed Account?",
    a: "All client funds are held in segregated accounts, legally separated from Umusave Capital's own balance sheet. The platform is locally and globally regulated, and all portfolios are monitored continuously by our AI-driven risk management system.",
  },
];

function ManagedAccountsPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <SiteShell>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-6 py-16 lg:py-24 relative">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            Managed Accounts
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-balance max-w-4xl">
            Invest Smarter with Expertly Curated Portfolios
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl text-balance">
            Gain access to sector-specific ETFs and pre-screened investment baskets — assembled and managed by the world's top-tier global investment managers, now available to you right here in Africa.
          </p>
          <p className="mt-4 text-base text-primary-foreground/75 max-w-2xl">
            Managed Accounts through Umusave Capital take the complexity out of global investing. You choose your growth ambition — we handle the rest, with professional portfolio management, AI-driven oversight, and full regulatory protection.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-gold-foreground font-semibold hover:opacity-90 transition shadow-elegant"
            >
              Open a Managed Account <ArrowRight className="h-4 w-4" />
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
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">What Are Managed Accounts</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              Professional Portfolio Management, Built Around You
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              A Managed Account at Umusave Capital gives you access to a professionally constructed, actively overseen investment portfolio — without requiring you to research, select, or monitor individual securities yourself. Your capital is allocated across high-quality ETFs and pre-screened investment baskets, built by some of the world's most respected fund managers. Whether your goal is long-term wealth building, capital preservation, or thematic exposure to global growth sectors, our Managed Accounts deliver institutional-grade investment quality in a simple, accessible format.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[5/4]">
            <img src={heroImg} alt="Managed Accounts" className="h-full w-full object-cover" loading="lazy" />
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

      {/* Key Features Section */}
      <section className="bg-surface">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">What's Included</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              Three Features That Set Our Managed Accounts Apart
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Every Managed Account at Umusave Capital is built on three core investment pillars — each designed to give you the best of professional fund management without the barriers that have historically excluded African retail investors.
            </p>
          </div>
            <div className="mt-14 space-y-16">
            {features.map((f, i) => {
              const imgs = [sectorETFs, preScreened, thematic];
              return (
              <div key={f.title} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[5/4]">
                  <img src={imgs[i]} alt={f.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="h-12 w-12 rounded-full gradient-gold grid place-items-center text-gold-foreground">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-3xl md:text-4xl text-primary">{f.title}</h3>
                  <p className="mt-5 text-foreground/75 text-lg leading-relaxed">{f.desc}</p>
                  {f.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {f.tags.map((t) => (
                        <span key={t} className="text-xs bg-secondary text-foreground/80 rounded-full px-3 py-1.5 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Why Umusave Managed Accounts</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              Follow the Strategies of the World's Greatest Investment Managers
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              For decades, the investment strategies of the world's largest and most successful fund managers have been out of reach for retail investors in Africa. Umusave Capital changes that. Our Managed Accounts give you direct access to the same pre-screened, institutionally curated investment approaches that global asset managers deploy for their largest clients — now available for the first time to individual investors across Rwanda, Zambia, and Tanzania. This is not generic financial advice. This is institutional investment intelligence, placed directly in your hands.
            </p>
            <div className="mt-8 space-y-5">
              {uspPointers.map((u) => (
                <div key={u.title} className="flex gap-4">
                  <span className="h-10 w-10 rounded-full bg-secondary grid place-items-center text-primary shrink-0">
                    <u.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="font-display text-lg text-primary">{u.title}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">{u.desc}</p>
                  </div>
              </div>
            ))}
          </div>
          </div>
          <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-elegant aspect-[5/4]">
            <img src={followStrategies} alt="Follow the Strategies of the World's Greatest Investment Managers" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="bg-surface">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Who We Serve</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              Designed for Investors Who Want Growth Without the Guesswork
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Managed Accounts are built for individuals who want meaningful exposure to global growth — but prefer a professionally managed, hands-off approach over active self-directed trading.
            </p>
          </div>
          <div className="mt-14 max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl overflow-hidden shadow-soft border border-border/60">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={individualSeeking} alt="Individual Investors Seeking Hands-Off Global Exposure" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-8">
                <p className="text-gold uppercase tracking-[0.2em] text-xs font-semibold">Individual Investors Seeking Hands-Off Global Exposure</p>
                <h3 className="mt-2 font-display text-3xl text-primary">Individual Investors Seeking Hands-Off Global Exposure</h3>
                <p className="mt-4 text-foreground/75 leading-relaxed">
                  Whether you are a working professional, a business owner, or a first-time investor looking to grow your savings beyond local options — a Umusave Managed Account puts your capital to work in globally diversified, professionally managed portfolios. You define your investment goals. Our managers and technology do the rest.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex gap-3 text-foreground/75">
                    <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>No need to research, select, or monitor individual securities yourself</span>
                  </li>
                  <li className="flex gap-3 text-foreground/75">
                    <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>Access to diversified global growth themes including AI, Fintech, and Clean Energy</span>
                  </li>
                  <li className="flex gap-3 text-foreground/75">
                    <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>Full regulatory protection, segregated accounts, and AI-monitored risk management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Getting Started</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            From Registration to a Managed Portfolio in Four Simple Steps
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Getting started with a Umusave Managed Account is fully digital and designed to be straightforward — from your initial registration through to your first professionally managed investment.
          </p>
        </div>
        <div className="mt-14 rounded-3xl overflow-hidden shadow-elegant aspect-[5/2] mb-12">
          <img src={registrationSteps} alt="From Registration to a Managed Portfolio in Four Simple Steps" className="h-full w-full object-cover" loading="lazy" />
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
            Let the World's Best Managers Work for Your Wealth
          </h2>
          <p className="mt-5 text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Open a Umusave Managed Account today — professionally curated, globally diversified, and built for African investors.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-gold-foreground font-semibold hover:opacity-90 transition shadow-elegant"
            >
              Open a Managed Account <ArrowRight className="h-4 w-4" />
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
              We have answered the most common questions about Managed Accounts at Umusave Capital to help you invest with clarity and confidence. If your question is not covered here, our team is always ready to help.
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

      {/* Contact Form */}
      <section className="bg-surface">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl p-10 shadow-elegant border border-border/60">
              <h2 className="font-display text-3xl text-primary">Get in Touch with Our Team</h2>
              <p className="mt-2 text-foreground/70">
                Whether you are ready to open a Managed Account or simply want to learn more — our team is here to help you take the first step.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 space-y-4"
              >
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
