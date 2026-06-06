import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2 max-w-md">
          <div className="bg-background inline-block rounded-lg px-3 py-2">
            <Logo />
          </div>
          <p className="mt-6 text-primary-foreground/80 leading-relaxed">
            Umusave Capital is an African financial services platform connecting local
            investors to global markets. Founded in Rwanda. Built for Africa. Open to the World.
          </p>
          <div className="flex gap-3 mt-6">
            {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 grid place-items-center hover:bg-gold hover:text-gold-foreground hover:border-gold transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.2em] font-sans font-semibold">Explore</h4>
          <ul className="mt-5 space-y-3 text-primary-foreground/85">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/governance" className="hover:text-gold">Governance</Link></li>
            <li><Link to="/technology" className="hover:text-gold">Technology</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.2em] font-sans font-semibold">Contact</h4>
          <ul className="mt-5 space-y-3 text-primary-foreground/85">
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-1 text-gold" /> Kigali, Rwanda</li>
            <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-1 text-gold" /> +250 785 400 590</li>
            <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-1 text-gold" /> hello@umusavecapital.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Umusave Capital Ltd. All rights reserved.</p>
          <p>Locally & globally regulated. Investing involves risk.</p>
        </div>
      </div>
    </footer>
  );
}
