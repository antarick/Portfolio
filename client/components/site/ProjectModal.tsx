import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import type { Project } from "./Projects";
import { motion } from "framer-motion";

export function ProjectModal({
                               project,
                               onClose,
                             }: {
  project: Project | null;
  onClose: () => void;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const images = project?.images ?? (project?.image ? [project.image] : []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        lightboxOpen ? setLightboxOpen(false) : onClose();
      }
      if (lightboxOpen && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
        const direction = e.key === "ArrowRight" ? 1 : -1;
        setActiveImage(
          (prev) => (prev + direction + images.length) % images.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, lightboxOpen, images.length]);

  const openLightbox = (index: number) => {
    if (images.length > 0) {
      setActiveImage(index);
      setLightboxOpen(true);
    }
  };

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-full h-full sm:h-auto sm:max-w-4xl sm:max-h-[90vh]
                   bg-background rounded-none sm:rounded-xl shadow-xl
                   overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-40 sm:h-48 md:h-55 bg-gradient-to-r from-primary/15 via-purple-500/10 to-fuchsia-500/10">
          {images.length > 0 && (
            <img
              src={images[activeImage]}
              alt={project.title}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openLightbox(activeImage)}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 size-10 rounded-full bg-background/80 border border-border backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>

          <div className="absolute bottom-4 left-4 sm:left-6 text-white">
            <span className="inline-block text-xs font-medium bg-primary/90 px-3 py-1.5 rounded-full mb-2">
              Case Study
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {project.title}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-white/90 max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>

        {/* Content area */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                      >
                        <div className="mt-1 size-2 rounded-full bg-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Tech Stack */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-col gap-3">
                {project.links.live && (
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Visit Live Site <ExternalLink className="size-4" />
                  </motion.a>
                )}

                {project.links.repo && (
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium hover:bg-accent transition-colors"
                  >
                    View Code <Github className="size-4" />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-4xl max-h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[activeImage]}
                alt={project.title}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImage(
                        (activeImage - 1 + images.length) % images.length
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/50 text-white flex items-center justify-center"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() =>
                      setActiveImage((activeImage + 1) % images.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/50 text-white flex items-center justify-center"
                  >
                    ›
                  </button>
                </>
              )}

              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 size-10 rounded-full bg-black/50 text-white flex items-center justify-center"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
