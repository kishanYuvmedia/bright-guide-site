import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import contactImg from "@/assets/about.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Umusave Capital" },
      { name: "description", content: "Speak with our team. Based in Kigali, Rwanda. We typically respond within one business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img src={contactImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-6 py-16 lg:py-24 relative">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-balance max-w-4xl">
            Speak with Our Team
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl text-balance">
            Whether you are an individual investor, a business or simply curious — our team is ready to help you take the first step.
          </p>
          <div className="mt-10 h-px w-32 bg-gold" />
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {[
            { icon: MapPin, t: "Visit Us", d: "Kigali, Rwanda" },
            { icon: Phone, t: "Call Us", d: "+250 785 400 590" },
            { icon: Mail, t: "Email Us", d: "hello@umusavecapital.com" },
            { icon: Clock, t: "Response Time", d: "We typically reply within one business day." },
          ].map((i) => (
            <div key={i.t} className="bg-card rounded-2xl p-6 shadow-soft border border-border/60 flex gap-4">
              <span className="h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center flex-shrink-0">
                <i.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-xl text-primary">{i.t}</p>
                <p className="text-foreground/75 mt-1">{i.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3 bg-card rounded-3xl p-10 shadow-elegant border border-border/60">
          {sent ? (
            <div className="text-center py-16">
              <h2 className="font-display text-3xl text-primary">Thank you.</h2>
              <p className="mt-4 text-foreground/75">
                Your message has been received. Our team will be in touch within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <h2 className="font-display text-3xl text-primary">Get in Touch with Our Team</h2>
              <p className="text-foreground/70">Tell us about your investment goals.</p>
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <input required placeholder="Your full name" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <input required type="email" placeholder="Your email address" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input placeholder="Your phone number" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
                <input placeholder="Subject" className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
              </div>
              <textarea required rows={6} placeholder="Tell us a little more..." className="w-full rounded-xl bg-background border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold/50" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground font-medium hover:bg-primary/90 transition shadow-soft">
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                For urgent enquiries, please call us directly at +250 785 400 590.
              </p>
            </form>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
