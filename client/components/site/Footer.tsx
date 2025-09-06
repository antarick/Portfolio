import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="section py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Syed Muhammad Ibrahim. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="mailto:syedmu729@gmail.com" className="h-10 w-10 rounded-md border flex items-center justify-center hover:bg-accent/60" aria-label="Email">
              <Mail className="size-5" />
            </a>
            <a href="https://www.linkedin.com/in/" target="_blank" className="h-10 w-10 rounded-md border flex items-center justify-center hover:bg-accent/60" aria-label="LinkedIn">
              <Linkedin className="size-5" />
            </a>
            <a href="https://github.com/" target="_blank" className="h-10 w-10 rounded-md border flex items-center justify-center hover:bg-accent/60" aria-label="GitHub">
              <Github className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
