import { Lightbox } from "./Lightbox";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import type { Project } from "./Projects";
import { motion } from "framer-motion";

const decorative =
  "https://cdn.builder.io/api/v1/image/assets%2F13e4ac3fb51f402398bc916f1280a140%2Fcec243fcbef14136b34d1b1fb2e989c5?format=webp&width=800";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [light, setLight] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    // Prevent background scrolling while modal is open (works on iOS)
    const prevOverflow = document.body.style.overflow;
    const prevPosition = document.body.style.position;
    const prevTop = document.body.style.top;
    const scrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.position = prevPosition;
      document.body.style.top = prevTop;
      // restore scroll position
      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  useEffect(() => {
    const el = dialogRef.current;
    const first = el?.querySelector<HTMLElement>("button, a, input, textarea");
    first?.focus();
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/65 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
        initial={{ y: 30, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        style={{ WebkitOverflowScrolling: "touch" }}
        className="relative w-full max-w-5xl rounded-2xl bg-card border p-0 overflow-auto max-h-[92vh] shadow-2xl"
      >
        {/* Top visual */}
        <div className="relative h-56 md:h-72 lg:h-56 bg-gradient-to-r from-primary/10 to-fuchsia-10">
          <img
            src={project.image || decorative}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/70 border p-2 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <X className="size-5" />
          </button>

          <div className="absolute left-6 bottom-6 z-20 text-white">
            <span className="text-sm font-medium bg-black/30 px-2 py-1 rounded-md">
              Case Study
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold leading-tight">
              {project.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/85">
              {project.description}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 p-6">
          {/* Left: details */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h3 className="text-lg font-semibold">Gallery</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                {(project.images ?? [project.image]).map((img) => (
                  <motion.button
                    key={img}
                    onClick={() => setLight(img)}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg overflow-hidden border bg-card p-0 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <img
                      src={img}
                      alt={project.title}
                      className="w-full h-44 object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Features</h3>
              <ul className="mt-3 grid gap-2 list-disc pl-5 text-muted-foreground">
                {(project.features ?? []).map((f) => (
                  <li key={f} className="bg-muted/5 p-2 rounded-md">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-fuchsia-500 px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:brightness-105 transition"
              >
                Get in touch
              </a>

              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent/30 transition"
                >
                  Visit Live <ExternalLink className="size-4" />
                </a>
              )}

              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent/20 transition"
                >
                  View Code <Github className="size-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right: aside */}
          <aside className="rounded-xl border bg-card p-4 sticky top-6 h-fit">
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Tech Stack
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full bg-muted/10 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Project Details
                </h4>
                <div className="mt-2 text-sm text-muted-foreground grid gap-1">
                  <div>
                    <strong>Role:</strong> MERN Stack Developer
                  </div>
                  <div>
                    <strong>Duration:</strong> Sep '24 – Jul '25
                  </div>
                  <div>
                    <strong>Type:</strong>{" "}
                    {project.stack.includes("OpenAI") ? "AI" : "Web App"}
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={decorative}
                  alt="decor"
                  className="mt-2 rounded-md opacity-15"
                />
              </div>
            </div>
          </aside>
        </div>

        {light && (
          <Lightbox
            src={light}
            alt={project.title}
            onClose={() => setLight(null)}
          />
        )}
      </motion.div>
    </div>
  );
}
