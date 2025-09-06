import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="section py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Syed Muhammad Ibrahim. All rights
            reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="mailto:syedmu729@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:underline"
            >
              <Mail className="size-4" />
              <span>syedmu729@gmail.com</span>
            </a>
            <a
              href="tel:+923244905451"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:underline"
            >
              <Phone className="size-4" />
              <span>+92 324 4905451</span>
            </a>
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:underline"
            >
              <Linkedin className="size-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:underline"
            >
              <Github className="size-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
