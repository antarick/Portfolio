import { Lightbox } from "./Lightbox";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import type { Project } from "./Projects";
import { motion } from "framer-motion";

const decorative = "https://cdn.builder.io/api/v1/image/assets%2F13e4ac3fb51f402398bc916f1280a140%2Fcec243fcbef14136b34d1b1fb2e989c5?format=webp&width=800";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [light, setLight] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const el = dialogRef.current;
    const first = el?.querySelector<HTMLElement>("button, a, input, textarea");
    first?.focus();
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
        initial={{ y: 20, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-4xl rounded-2xl bg-card border p-6 overflow-auto max-h-[90vh] shadow-2xl"
      >
        <button aria-label="Close" onClick={onClose} className="absolute right-4 top-4 rounded-md border p-2 bg-background/60 hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary">
          <X className="size-5" />
        </button>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden border">
                <img src={project.image || decorative} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold">{project.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>

            <div className="mt-2 grid sm:grid-cols-2 gap-3">
              {(project.images ?? [project.image]).map((img) => (
                <button key={img} onClick={() => setLight(img)} className="rounded-lg overflow-hidden border bg-card p-0 focus:outline-none focus:ring-2 focus:ring-primary">
                  <img src={img} alt={project.title} className="w-full h-44 object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">Features</h3>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-1">
                {(project.features ?? []).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" onClick={(e) => { e.preventDefault(); onClose(); const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow">Get in touch</a>
              {project.links.repo && (
                <a href={project.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm">View Code <Github className="size-4" /></a>
              )}
            </div>
          </div>

          <aside className="rounded-xl border bg-card p-4 sticky top-6 h-fit">
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Stack</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="inline-flex items-center rounded-full bg-muted/10 px-3 py-1 text-xs font-medium text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>

              <div className="mt-2">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="block w-full text-center rounded-md bg-gradient-to-r from-primary to-fuchsia-500 px-4 py-2 text-sm font-semibold text-primary-foreground">Visit Live <ExternalLink className="size-4 inline-block ml-2" /></a>
                )}
                {project.links.repo && (
                  <a href={project.links.repo} target="_blank" rel="noreferrer" className="mt-2 block w-full text-center rounded-md border px-4 py-2 text-sm">View Repository <Github className="size-4 inline-block ml-2" /></a>
                )}
              </div>

              <div className="mt-3 text-xs text-muted-foreground">
                <div><strong>Role:</strong> MERN Stack Developer</div>
                <div className="mt-1"><strong>Duration:</strong> Sep '24 – Jul '25</div>
              </div>

              <img src={decorative} alt="decor" className="mt-4 rounded-md opacity-20" />
            </div>
          </aside>
        </div>

        {light && <Lightbox src={light} alt={project.title} onClose={() => setLight(null)} />}
      </motion.div>
    </div>
  );
}
