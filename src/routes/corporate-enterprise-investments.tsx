import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ShieldCheck, Lock, Cpu, Sprout, Check, ChevronDown,
  Briefcase, TrendingUp, PiggyBank, Building2, Users, Handshake,
  FileText, BarChart3, Search,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import heroImg from "@/assets/corporate-investments.png";
import serviceImg from "@/assets/service-corporate.jpg";

export const Route = createFileRoute("/corporate-enterprise-investments")({
  head: () => ({
    meta: [
      { title: "Corporate & Enterprise Investments — Umusave Capital" },
      { name: "description", content: "Grow your business capital safely and strategically with Umusave Capital's fractional CIO model — bespoke portfolios of creditworthy instruments for SMEs, enterprises, and institutions." },
    ],
  }),
  component: CorporatePage,
});

const trustItems = [
  { icon: ShieldCheck, label: "Locally & Globally Regulated" },
  { icon: Lock, label: "Segregated Client Accounts" },
  { icon: Cpu, label: "AI-Monitored Risk" },
  { icon: Sprout, label: "Founded in Rwanda" },
];

const highlights = [
  {
    icon: Handshake,
    title: "Expert Investment Partner",
    desc: "Institutional-grade investment management for your business capital — without the cost or complexity of an in-house investment team.",
  },
  {
    icon: PiggyBank,
    title: "Capital Preservation Focus",
    desc: "Portfolios built around creditworthy, low-risk instruments designed to protect your business capital while generating steady, reliable yield.",
  },
  {
    icon: ShieldCheck,
    title: "Fiduciary Commitment",
    desc: "Umusave Capital acts as a fiduciary at all times — meaning every investment decision we make is guided solely by your organisation's best financial interests.",
  },
];

const features = [
  {
    icon: FileText,
    title: "Government & Corporate Bonds",
    desc: "Bespoke portfolios of G7 government bonds, investment-grade corporate debt, and money market funds — carefully constructed to deliver capital preservation alongside steady, reliable yield. These instruments represent some of the most creditworthy and liquid investment vehicles available in global financial markets, providing your business with a dependable foundation for treasury management.",
  },
  {
    icon: TrendingUp,
    title: "Liquidity & Growth",
    desc: "Your business capital should be accessible when you need it and growing when you do not. Our Corporate portfolios are structured to balance meaningful liquidity — ensuring funds are available for operational requirements — with instruments that deliver capital appreciation over time. We calibrate this balance specifically to your organisation's cash flow profile and investment horizon.",
  },
  {
    icon: Lock,
    title: "Ring-Fenced Client Accounts",
    desc: "Your organisation's funds are held in dedicated, segregated accounts that are legally and operationally separated from Umusave Capital's own balance sheet. This ring-fencing structure ensures that your business capital is fully protected against any operational or financial volatility within Umusave Capital itself — in full alignment with the latest regulatory policy and client protection standards.",
    disclaimer: "Client funds are held in legally and operationally segregated accounts, separated from Umusave Capital's own balance sheet at all times.",
  },
];

const uspPointers = [
  {
    icon: Briefcase,
    title: "No In-House Expertise Required",
    desc: "We bring the investment management infrastructure your business needs — so your team can remain focused on core operations.",
  },
  {
    icon: ShieldCheck,
    title: "Regulated Investment Partner",
    desc: "Umusave Capital is locally and globally regulated — providing your organisation with a credible, compliant, and accountable investment management partner.",
  },
  {
    icon: Handshake,
    title: "Fiduciary Commitment",
    desc: "Every decision we make on your behalf is guided solely by your organisation's best financial interests — without conflict, without compromise.",
  },
];

const profiles = [
  {
    image: null,
    title: "SMEs, Growing Companies & Enterprise Businesses",
    desc: "Whether you are a small or medium-sized enterprise with a growing treasury balance, or a larger business seeking a more disciplined approach to capital deployment — Umusave Capital provides a bespoke, professionally managed investment solution that works around your operational cash flow requirements and growth objectives.",
    points: [
      "Surplus treasury capital deployed into creditworthy, yield-generating instruments",
      "Portfolios structured around your liquidity requirements and investment horizon",
      "Full regulatory protection with ring-fenced, segregated client accounts",
    ],
  },
  {
    image: null,
    title: "NGOs & Institutional Entities",
    desc: "Non-governmental organisations, foundations, and institutional entities have a responsibility to manage their capital responsibly, compliantly, and transparently. Umusave Capital provides a low-risk, regulation-aligned capital management solution — giving NGOs and institutions a credible investment partner that upholds the same standards of governance and accountability that their stakeholders demand.",
    points: [
      "Low-risk, compliant capital management aligned with institutional governance requirements",
      "Full transparency and reporting — with real-time portfolio visibility at all times",
      "A fiduciary investment partner accountable to your organisation's financial interests",
    ],
  },
];

const processSteps = [
  { title: "Initial Consultation", desc: "Speak with our corporate advisory team to discuss your organisation's capital management objectives, liquidity requirements, and risk parameters." },
  { title: "KYC & Onboarding", desc: "Complete our streamlined digital KYC and corporate onboarding process — fully compliant with local and international regulatory requirements." },
  { title: "Deploy Capital", desc: "Your bespoke portfolio is constructed and capital is deployed into carefully selected, creditworthy instruments aligned with your stated objectives." },
  { title: "Monitor Returns", desc: "Access full real-time visibility of your corporate portfolio through your dedicated Umusave dashboard — with regular performance reporting from your advisory team." },
];

const faqs = [
  {
    q: "What is the fractional CIO model and how does it work?",
    a: "The fractional CIO model means that Umusave Capital acts as your organisation's Chief Investment Officer — on a professional, outsourced basis. We take responsibility for the strategic management of your surplus business capital, constructing and overseeing bespoke investment portfolios while your leadership team remains focused on core operations. You retain full visibility and control at all times.",
  },
  {
    q: "What types of instruments are used in Corporate portfolios?",
    a: "Corporate & Enterprise portfolios at Umusave Capital are built around G7 government bonds, investment-grade corporate debt, money market funds, and other creditworthy, liquid instruments selected to balance capital preservation with steady yield and appropriate capital appreciation over time.",
  },
  {
    q: "Is our business capital protected if something happens to Umusave Capital?",
    a: "Yes. All client funds — including corporate and institutional capital — are held in legally and operationally ring-fenced, segregated accounts, completely separated from Umusave Capital's own balance sheet. Your capital is protected against any operational or financial volatility within Umusave Capital at all times.",
  },
  {
    q: "Is this service available to NGOs and non-profit organisations?",
    a: "Yes. Umusave Capital's Corporate & Enterprise Investment solutions are specifically designed to serve NGOs, foundations, and institutional entities — providing a low-risk, compliant, and transparent capital management solution aligned with institutional governance requirements.",
  },
  {
    q: "What is the minimum capital threshold for a Corporate Investment account?",
    a: "Minimum thresholds vary depending on the specific portfolio and instruments involved. Please contact our corporate advisory team directly for a confidential discussion about your organisation's requirements.",
  },
];

function CorporatePage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <SiteShell>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-6 py-16 lg:py-24 relative">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            Corporate & Enterprise Investments
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-balance max-w-4xl">
            Grow Your Business Capital. Safely and Strategically.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-3xl text-balance">
            Umusave Capital acts as your fractional Chief Investment Officer — managing your business capital with institutional discipline, so your leadership team can remain focused on running and growing your core operations.
          </p>
          <p className="mt-4 text-base text-primary-foreground/75 max-w-3xl">
            Whether you are an SME with surplus treasury funds, a growing enterprise seeking steady capital appreciation, or an NGO requiring compliant and low-risk capital management — Umusave Capital provides a credible, regulated, and professionally managed investment solution built around your organisation's specific needs.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-gold-foreground font-semibold hover:opacity-90 transition shadow-elegant"
            >
              Speak to a Corporate Advisor <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 font-medium hover:bg-primary-foreground/10 transition"
            >
              Download Our Corporate Brochure
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

      {/* Product Overview — Fractional CIO Model */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">The Fractional CIO Model</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              Your Expert Investment Partner. Without the In-House Overhead.
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Most businesses — even highly successful ones — do not have the internal expertise, time, or infrastructure to manage surplus capital effectively. Idle treasury funds sitting in low-yield accounts represent a missed opportunity for steady, risk-controlled growth. Umusave Capital changes that. As your fractional Chief Investment Officer, we take full responsibility for the strategic deployment of your business capital — constructing bespoke, regulation-aligned portfolios of creditworthy instruments that balance capital preservation with meaningful growth. You retain full visibility and control. We deliver the expertise.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[5/4]">
            <img src={serviceImg} alt="Corporate & Enterprise Investments" className="h-full w-full object-cover" loading="lazy" />
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

      {/* Core Features Section */}
      <section className="bg-surface">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">What's Included</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              Three Core Features Designed for Business Capital Management
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Every Corporate & Enterprise Investment solution at Umusave Capital is built around three foundational pillars — each designed to give your organisation's surplus capital the professional management, regulatory protection, and growth potential it deserves.
            </p>
          </div>
          <div className="mt-14 space-y-16">
            {features.map((f, i) => (
              <div key={f.title} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[5/4] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <f.icon className="h-24 w-24 text-primary/30" />
                </div>
                <div>
                  <div className="h-12 w-12 rounded-full gradient-gold grid place-items-center text-gold-foreground">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-3xl md:text-4xl text-primary">{f.title}</h3>
                  <p className="mt-5 text-foreground/75 text-lg leading-relaxed">{f.desc}</p>
                  {f.disclaimer && (
                    <p className="mt-4 text-xs text-muted-foreground italic">{f.disclaimer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Why Umusave Capital</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              A Regulated Investment Partner Your Business Can Rely On
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Businesses that partner with Umusave Capital gain access to institutional-grade investment management without the overhead, complexity, or cost of building an in-house investment function. We bring together regulatory credibility, technology-driven oversight, and deep market expertise — and we deploy all of it exclusively in the best financial interests of your organisation. At Umusave Capital, we do not simply manage your capital. We act as your fiduciary — legally and professionally committed to placing your organisation's financial interests above all else. This commitment is not a policy statement. It is the foundation of every decision we make on your behalf.
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
          <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-elegant aspect-[5/4] bg-gradient-to-br from-gold/20 to-primary/10 flex items-center justify-center">
            <Building2 className="h-24 w-24 text-primary/30" />
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="bg-surface">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Who We Serve</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              Built for Organisations With Capital That Should Be Working Harder
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Our Corporate & Enterprise Investment solutions are designed for organisations across Rwanda, Zambia, and Tanzania with surplus capital that is currently underperforming in low-yield accounts — and leadership teams who recognise the opportunity to do better.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {profiles.map((p) => (
              <div key={p.title} className="bg-card rounded-3xl overflow-hidden shadow-soft border border-border/60">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Users className="h-20 w-20 text-primary/30" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-primary">{p.title}</h3>
                  <p className="mt-4 text-foreground/75 leading-relaxed">{p.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-foreground/75">
                        <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Getting Started</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            From Initial Consultation to Active Capital Management in Four Steps
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Our Corporate onboarding process is structured, thorough, and designed to ensure your investment solution is precisely calibrated to your organisation's requirements from day one.
          </p>
        </div>
        <div className="mt-14 rounded-3xl overflow-hidden shadow-elegant aspect-[5/2] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-12">
          <Search className="h-20 w-20 text-primary/30" />
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
            Your Business Capital Deserves Better Than a Low-Yield Account
          </h2>
          <p className="mt-5 text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Partner with Umusave Capital today — your fractional CIO for responsible, regulated, and professionally managed business capital growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-gold-foreground font-semibold hover:opacity-90 transition shadow-elegant"
            >
              Speak to a Corporate Advisor <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 font-medium hover:bg-primary-foreground/10 transition"
            >
              Learn More About Our Approach
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
              We have answered the most common questions from Finance Directors, CFOs, and business owners about Corporate & Enterprise Investments at Umusave Capital. If your question is not covered here, our corporate advisory team is ready to assist.
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
                Contact our corporate advisory team here →
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
              <h2 className="font-display text-3xl text-primary">Speak to Our Corporate Advisory Team</h2>
              <p className="mt-2 text-foreground/70">
                Tell us about your organisation's capital management requirements and a member of our corporate advisory team will be in touch within one business day.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 space-y-4"
              >
                <input required placeholder="Your Full Name" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <input placeholder="Your Organisation's Name" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <input required type="email" placeholder="Your Business Email Address" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <input placeholder="Your Direct Phone Number" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <input placeholder="How Can We Help Your Organisation?" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <textarea required rows={5} placeholder="Tell Us About Your Capital Management Requirements" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground font-medium hover:bg-primary/90 transition shadow-soft">
                  Send Enquiry <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-6 text-xs text-muted-foreground">
                All enquiries are handled with full confidentiality. We typically respond within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
