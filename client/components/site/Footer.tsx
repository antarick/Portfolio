import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          {/* Left: copyright */}
          <p className="text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Syed Muhammad Ibrahim
          </p>

          {/* Right: links - icons only for small screens */}
          <div className="flex items-center gap-4">
            <a href="mailto:syedmu729@gmail.com" aria-label="Email">
              <Mail className="size-4 text-muted-foreground hover:text-primary" />
            </a>
            <a href="tel:+923244905451" aria-label="Phone">
              <Phone className="size-4 text-muted-foreground hover:text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/NxSYED-ux" target="_blank" aria-label="LinkedIn">
              <Linkedin className="size-4 text-muted-foreground hover:text-primary" />
            </a>
            <a href="https://github.com/NxSYED-ux" target="_blank" aria-label="GitHub">
              <Github className="size-4 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
