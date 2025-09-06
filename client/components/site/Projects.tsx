import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  links: { live?: string; repo?: string };
  stack: string[];
};

const projects: Project[] = [
  {
    title: "BuildSphere",
    description: "A building management platform enabling residents, admins, and maintenance teams to collaborate with real-time updates and analytics.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    links: { live: "#", repo: "#" },
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
  },
  {
    title: "Mood Cookbook",
    description: "AI-powered recipe recommender that suggests meals based on your mood, preferences, and pantry items.",
    image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1200&auto=format&fit=crop",
    links: { live: "#", repo: "#" },
    stack: ["React", "OpenAI", "Firebase"],
  },
  {
    title: "Echo Desk",
    description: "A real-time chat platform with typing indicators, read receipts, and secure authentication.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    links: { live: "#", repo: "#" },
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
  },
  {
    title: "RentX",
    description: "Rental management system with Stripe integration for seamless payments and property management.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    links: { live: "#", repo: "#" },
    stack: ["React", "Stripe", "Express", "MongoDB"],
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group overflow-hidden rounded-xl border bg-card hover:shadow-glow transition-shadow"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="inline-flex rounded-md border px-2.5 py-1 text-xs text-muted-foreground">{s}</span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          {p.links.live && (
            <a href={p.links.live} target="_blank" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              Live <ExternalLink className="size-4" />
            </a>
          )}
          {p.links.repo && (
            <a href={p.links.repo} target="_blank" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
              Code <Github className="size-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section scroll-mt-24">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Projects</h2>
          <p className="mt-2 text-muted-foreground">Selected work that highlights my skills and interests</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
