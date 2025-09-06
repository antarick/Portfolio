import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const resumeUrl = "https://cdn.builder.io/o/assets%2F13e4ac3fb51f402398bc916f1280a140%2F0f296d2b72064c288679c29887927aa7?alt=media&token=eaf36571-61f2-4cad-975a-58e1db1a4d3c&apiKey=13e4ac3fb51f402398bc916f1280a140";

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
      <a className="sr-only focus:not-sr-only" href="#main">Skip to content</a>
      <div className="container mx-auto container-px h-16 flex items-center justify-between">
        <button onClick={() => onNav("home")} className="font-display text-lg font-bold tracking-tight focus:outline-none focus:ring-2 focus:ring-primary rounded">
          <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">Syed Ibrahim</span>
        </button>
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <button key={n.id} onClick={() => onNav(n.id)} className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 rounded px-2 py-1">
              {n.label}
            </button>
          ))}
          <a href="#contact" onClick={(e)=>{e.preventDefault();onNav("contact");}} className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary">
            Hire Me
          </a>
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md border border-input hover:bg-accent/60">Resume</a>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="h-10 w-10 rounded-md border border-border flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background" role="dialog" aria-modal="true">
          <div className="container mx-auto container-px py-3 grid gap-2">
            {nav.map((n) => (
              <button key={n.id} onClick={() => onNav(n.id)} className="text-left py-2 text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded">
                {n.label}
              </button>
            ))}
            <button onClick={() => onNav("contact")} className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              Hire Me
            </button>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium">Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}
