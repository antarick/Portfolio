import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

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
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/50 border-b border-border/60">
      <div className="container mx-auto container-px h-16 flex items-center justify-between">
        <button onClick={() => onNav("home")} className="font-display text-lg font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">Syed Ibrahim</span>
        </button>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <button key={n.id} onClick={() => onNav(n.id)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {n.label}
            </button>
          ))}
          <a href="#contact" onClick={(e)=>{e.preventDefault();onNav("contact");}} className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-opacity">
            Hire Me
          </a>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button aria-label="Open menu" onClick={() => setOpen((o) => !o)} className="h-10 w-10 rounded-md border border-border flex items-center justify-center">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container mx-auto container-px py-3 grid gap-2">
            {nav.map((n) => (
              <button key={n.id} onClick={() => onNav(n.id)} className="text-left py-2 text-sm text-muted-foreground hover:text-foreground">
                {n.label}
              </button>
            ))}
            <button onClick={() => onNav("contact")} className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
