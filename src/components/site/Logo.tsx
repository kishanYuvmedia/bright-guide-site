import logo from "@/assets/umusave-logo.asset.json";
import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={logo.url}
        alt="Umusave Capital"
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-semibold tracking-wide ${
            variant === "light" ? "text-background" : "text-primary"
          }`}
        >
          UMUSAVE
        </span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-gold mt-0.5">
          Capital Ltd
        </span>
      </span>
    </Link>
  );
}
