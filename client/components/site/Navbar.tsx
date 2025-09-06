import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const onNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/50 border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 h-12 sm:h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />

        {/* Desktop / Tablet Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => onNav(n.id)}
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 rounded px-2 py-1"
            >
              {n.label}
            </button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile / Tablet Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-md border border-border flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden border-t border-border/60 bg-background"
          role="dialog"
          aria-modal="true"
        >
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-3 grid gap-2">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => onNav(n.id)}
                className="text-left py-2 text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => onNav("contact")}
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
