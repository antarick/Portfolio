import { Lightbox } from "./Lightbox";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project } from "./Projects";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [light, setLight] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div role="dialog" aria-modal="true" className="relative w-full max-w-4xl rounded-2xl bg-card border p-6 overflow-auto max-h-[90vh]">
        <button aria-label="Close" onClick={onClose} className="absolute right-4 top-4 rounded-md border p-2">✕</button>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold">{project.title}</h2>
            <p className="mt-2 text-muted-foreground">{project.description}</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {(project.images ?? [project.image]).map((img) => (
                <div key={img} className="rounded-lg overflow-hidden border bg-card cursor-zoom-in" onClick={() => setLight(img)}>
                  <img src={img} alt={project.title} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Features</h3>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                {(project.features ?? []).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="rounded-xl border bg-card p-4">
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Stack</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="inline-flex items-center rounded-md border px-2 py-1 text-xs text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-2 flex flex-col gap-2">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Visit Live <ExternalLink className="size-4" /></a>
                )}
                {project.links.repo && (
                  <a href={project.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm">View Code <Github className="size-4" /></a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {light && <Lightbox src={light} alt={project.title} onClose={() => setLight(null)} />}
      </div>
    </div>
  );
}
