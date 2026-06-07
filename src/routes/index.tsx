import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import {
  ShieldCheck, Lock, Cpu, Sprout, ArrowRight, Check, Globe2,
  Briefcase, LineChart, Building2, Star, Headphones, Users, TrendingUp,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import sBroking from "@/assets/service-broking.jpg";
import sManaged from "@/assets/service-managed.jpg";
import sDiscretionary from "@/assets/service-discretionary.jpg";
import sCorporate from "@/assets/service-corporate.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Umusave Capital — Your Gateway to Global Markets" },
      { name: "description", content: "Direct, regulated access to global financial markets from Rwanda, Zambia and Tanzania. Invest globally. Grow confidently." },
    ],
  }),
  component: HomePage,
});

const slides = [
  { img: hero1, alt: "African business professional reviewing an investment portfolio" },
  { img: hero2, alt: "Aerial view of a modern African city skyline" },
  { img: hero3, alt: "Diverse professionals collaborating in a boardroom" },
];

const trustItems = [
  { icon: ShieldCheck, label: "Locally & Globally Regulated" },
  { icon: Lock, label: "Segregated Client Accounts" },
  { icon: Cpu, label: "AI-Monitored Risk" },
  { icon: Sprout, label: "Founded in Rwanda" },
];

const services = [
  {
    img: sBroking,
    title: "International Broking",
    desc: "Access stocks, bonds, commodities, currencies, futures and options across G7 markets — from right here in Africa.",
    to: "/products" as const,
  },
  {
    img: sManaged,
    title: "Managed Accounts",
    desc: "Invest in expertly curated ETFs and pre-screened baskets built by the world's top fund managers.",
    to: "/products" as const,
  },
  {
    img: sDiscretionary,
    title: "Discretionary Investments",
    desc: "Our AI-powered platform identifies high-conviction opportunities and dynamically manages your portfolio.",
    to: "/products" as const,
  },
  {
    img: sCorporate,
    title: "Corporate & Enterprise",
    desc: "Grow business capital safely with creditworthy instruments — gain a trusted fractional CIO as your partner.",
    to: "/products" as const,
  },
];

const steps = [
  { title: "Create Account", desc: "Register online in minutes with our fully digital, paperless onboarding." },
  { title: "Complete KYC", desc: "Quick, secure verification through our digital compliance system." },
  { title: "Choose Investment", desc: "Select your asset class — equities, ETFs, bonds or commodities." },
  { title: "Select Strategy", desc: "Self-directed, managed, discretionary or corporate — your call." },
  { title: "Track Performance", desc: "Monitor your portfolio in real time on your Umusave dashboard." },
];

const stats = [
  { icon: Briefcase, value: "500+", label: "Projects Successful" },
  { icon: Users, value: "1,200+", label: "Happy Clients" },
  { icon: Headphones, value: "24/7", label: "Team Support" },
  { icon: Globe2, value: "30+", label: "Markets Accessible" },
];

const faqs = [
  {
    q: "Who can open an account with Umusave Capital?",
    a: "Umusave Capital is open to individuals, families and businesses based in Rwanda, Zambia and Tanzania. Both retail and professional investors are welcome, subject to KYC verification.",
  },
  {
    q: "What markets and asset classes can I invest in?",
    a: "Through our International Broking service, you can access equities, bonds, commodities, currencies, futures and options across G7 markets including the US, UK, Germany, Japan and more.",
  },
  {
    q: "Is my money safe with Umusave Capital?",
    a: "Yes. All client funds are held in segregated, ring-fenced accounts that are legally and operationally separated from Umusave's own balance sheet. The platform is locally and globally regulated.",
  },
  {
    q: "Do I need investment experience to get started?",
    a: "Not at all. Our Managed Accounts and Discretionary Investment products are designed for investors at all levels. Onboarding includes guidance to help you choose the right product.",
  },
  {
    q: "How do I open an account?",
    a: "The process is fully digital and paperless. Register online, complete your KYC, fund your account, and begin investing — all from your phone or computer.",
  },
];

function ProductCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const t = setInterval(() => api.scrollNext(), 3000);
    return () => clearInterval(t);
  }, [api]);

  return (
    <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="mt-14">
      <CarouselContent>
        {services.map((s) => (
          <CarouselItem key={s.title} className="basis-1/2 md:basis-1/3">
            <Link
              to={s.to}
              className="group block overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant transition h-full"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl text-primary">{s.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                  Explore {s.title} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function HomePage() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[640px] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.img}
              alt={s.alt}
              className="h-full w-full object-cover animate-slow-zoom"
              {...(i === 0 ? {} : { loading: "lazy" as const })}
            />
            <div className="absolute inset-0 gradient-hero" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 text-primary-foreground">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold animate-fade-up">
              Global Investing · African Roots
            </p>
            <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl text-balance animate-fade-up">
              Your Gateway to <em className="text-gold not-italic">Global Markets</em>
            </h1>
            <p className="mt-7 text-lg md:text-xl max-w-2xl text-primary-foreground/90 animate-fade-up">
              Umusave Capital gives individuals, families and businesses across Africa
              direct access to the world's leading financial markets. Invest globally.
              Grow confidently. Start right here in Rwanda.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-gold-foreground font-semibold hover:opacity-90 shadow-elegant transition"
              >
                Start Investing Today <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 font-medium hover:bg-primary-foreground/10 transition"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === slide ? "w-10 bg-gold" : "w-5 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((t) => (
            <div key={t.label} className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary grid place-items-center text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-foreground/85">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img src={hero3} alt="The Umusave team" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-card rounded-2xl shadow-soft p-6 max-w-[16rem]">
            <p className="text-gold font-semibold text-3xl font-display">Est. Rwanda</p>
            <p className="text-sm text-muted-foreground mt-2">Proudly co-founded and majority owned by women.</p>
          </div>
        </div>
        <div>
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">About Us</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            Deeply Rooted in Africa. <span className="text-gold">Connected to the World.</span>
          </h2>
          <p className="mt-6 text-foreground/75 text-lg leading-relaxed">
            Umusave Capital is an emerging financial services platform on a mission to remove
            the barriers that have long limited African investors from accessing global
            markets. We bring institutional-quality investment products, technology-driven
            tools and expert guidance directly to individuals, families and businesses across
            the continent.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Regulated access to G7 markets — stocks, bonds, ETFs, commodities and more",
              "Serving retail investors, professionals and corporate clients across Rwanda, Zambia and Tanzania",
            ].map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-1 h-6 w-6 rounded-full bg-primary text-primary-foreground grid place-items-center flex-shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-primary-foreground hover:bg-primary/90 transition"
          >
            Discover Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-20 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="h-8 w-8 mx-auto text-gold" />
              <p className="mt-4 font-display text-5xl md:text-6xl text-gold">{s.value}</p>
              <p className="mt-2 text-sm tracking-wide uppercase text-primary-foreground/75">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">What We Offer</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            Four Powerful Ways to Grow Your Wealth
          </h2>
        </div>
        <ProductCarousel />
      </section>

      {/* Process */}
      <section className="bg-surface">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">How It Works</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              Start Your Global Investment Journey in Five Simple Steps
            </h2>
            <p className="mt-5 text-foreground/70 text-lg">
              Opening your Umusave account is straightforward, fully digital and designed to
              get you investing as quickly as possible.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative bg-card rounded-2xl p-7 shadow-soft border border-border/60"
              >
                <span className="absolute -top-4 left-7 h-9 w-9 rounded-full gradient-gold text-gold-foreground grid place-items-center font-semibold text-sm shadow-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-primary mt-3">{s.title}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">What Our Clients Say</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Trusted by Investors Across Africa</h2>
        </div>
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-card rounded-3xl p-10 shadow-soft relative">
            <span className="absolute -top-6 left-10 text-9xl font-display text-gold/30 leading-none">"</span>
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold" />
              ))}
            </div>
            <p className="mt-6 text-xl md:text-2xl font-display text-foreground/90 leading-relaxed">
              Umusave opened a door I didn't think existed for me. I can now invest in global
              markets from Kigali — with full confidence that my capital is protected and
              professionally managed.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={testimonial1}
                alt="Amara K."
                className="h-14 w-14 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-primary">Amara K.</p>
                <p className="text-sm text-muted-foreground">Entrepreneur, Kigali</p>
              </div>
            </div>
          </div>
          <div className="bg-primary text-primary-foreground rounded-3xl p-10 flex flex-col justify-between">
            <div>
              <TrendingUp className="h-10 w-10 text-gold" />
              <h3 className="mt-6 font-display text-3xl">Ready to start your journey?</h3>
              <p className="mt-4 text-primary-foreground/80">
                Join the growing community of African investors building wealth on the global
                stage.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-gold-foreground font-semibold hover:opacity-90 transition w-fit"
            >
              Open an Account <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact + FAQ */}
      <section id="contact" className="bg-surface">
        <div className="container mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Get in Touch</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Speak with Our Team</h2>
            <p className="mt-5 text-foreground/70 text-lg">
              Whether you are an individual investor, a business, or simply curious — our team
              is ready to help you take the first step.
            </p>
            <form
              className="mt-10 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you — we'll be in touch within one business day.");
              }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input required placeholder="Your full name" className="w-full rounded-xl bg-card border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <input required type="email" placeholder="Your email address" className="w-full rounded-xl bg-card border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input placeholder="Your phone number" className="w-full rounded-xl bg-card border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <input placeholder="How can we help you?" className="w-full rounded-xl bg-card border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
              </div>
              <textarea required rows={5} placeholder="Tell us a little more..." className="w-full rounded-xl bg-card border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground font-medium hover:bg-primary/90 transition shadow-soft">
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                We typically respond within one business day. For urgent enquiries, please call us directly.
              </p>
            </form>
          </div>

          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">FAQs</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-5 text-foreground/70 text-lg">
              We have answered the questions our clients ask most often to help you invest with
              clarity and confidence.
            </p>
            <div className="mt-10 space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-card rounded-2xl border border-border p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold text-primary">
                    {f.q}
                    <span className="ml-4 h-7 w-7 rounded-full bg-secondary grid place-items-center text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-foreground/75 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-foreground/70">
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
