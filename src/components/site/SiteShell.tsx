import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, oklch(0.72 0.13 80 / 0.4), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.4 0.08 150 / 0.5), transparent 50%)",
      }} />
      <div className="container mx-auto px-6 py-24 lg:py-32 relative">
        {eyebrow && (
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-balance max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl text-balance">
            {subtitle}
          </p>
        )}
        <div className="mt-10 h-px w-32 bg-gold" />
      </div>
    </section>
  );
}
