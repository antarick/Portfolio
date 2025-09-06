import { useParams, Link } from "react-router-dom";
import { projects as allProjects } from "@/components/site/Projects";
import { Lightbox } from "@/components/site/Lightbox";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug);
  const [light, setLight] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="section pt-32">
        <h2 className="font-display text-2xl font-bold">Project not found</h2>
        <Link to="/" className="mt-4 inline-block text-primary">
          Return home
        </Link>
      </div>
    );
  }

  return (
    <main className="section pt-32">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="font-display text-4xl font-bold">{project.title}</h1>
          <p className="mt-3 text-muted-foreground">{project.description}</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {project.images &&
              project.images.map((img) => (
                <div
                  key={img}
                  className="rounded-lg overflow-hidden border bg-card cursor-zoom-in"
                  onClick={() => setLight(img)}
                >
                  <img
                    src={img}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
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
        <aside className="rounded-xl border bg-card p-6">
          <div className="flex flex-col gap-3">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">
                Stack
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-md border px-2 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Live <ExternalLink className="size-4" />
                </a>
              )}
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground ml-3"
                >
                  Code <Github className="size-4" />
                </a>
              )}
            </div>
          </div>
        </aside>
      </div>
      {light && <Lightbox src={light} onClose={() => setLight(null)} />}
    </main>
  );
}
