import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/governance", label: "Governance" },
  { to: "/technology", label: "Technology" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="hidden lg:block bg-primary text-primary-foreground/90 text-xs">
        <div className="container mx-auto px-6 flex justify-between py-2">
          <span className="tracking-wide">Kigali, Rwanda &nbsp;·&nbsp; Rooted in Africa, Connecting to the World</span>
          <div className="flex gap-6">
            <a href="tel:+250785400590" className="hover:text-gold transition-colors">+250 785 400 590</a>
            <a href="mailto:hello@umusavecapital.com" className="hover:text-gold transition-colors">hello@umusavecapital.com</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Logo />
        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative [&.active]:text-primary [&.active]:after:content-[''] [&.active]:after:absolute [&.active]:after:-bottom-2 [&.active]:after:left-0 [&.active]:after:right-0 [&.active]:after:h-px [&.active]:after:bg-gold"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-soft"
          >
            <Phone className="h-4 w-4" /> Start Investing
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/80 hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
