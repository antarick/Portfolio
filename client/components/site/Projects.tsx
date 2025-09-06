import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Lightbox } from "./Lightbox";

type Project = {
  title: string;
  description: string;
  image: string;
  images?: string[];
  links: { live?: string; repo?: string };
  stack: string[];
  slug: string;
  features?: string[];
};

const projects: Project[] = [
  {
    title: "BuildSphere",
    description: "A subscription-based platform for managing building operations including finance, HR, analytics, rentals and maintenance.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"],
    links: { live: "#", repo: "#" },
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    slug: "buildsphere",
    features: [
      "Resident app for bookings and service requests",
      "Real-time alerts for rentals and subscriptions",
      "Analytics and automation for operational efficiency",
      "Role-based access for admins and maintenance teams",
    ],
  },
  {
    title: "Mood Cookbook",
    description: "An AI-powered recipe recommender that suggests meals based on user mood, preferences and pantry items.",
    image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1200&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1200&auto=format&fit=crop"],
    links: { live: "#", repo: "#" },
    stack: ["React", "Node.js", "OpenAI", "Firebase"],
    slug: "mood-cookbook",
    features: [
      "Mood-based recipe generation with AI backend",
      "Dynamic filtering and personalized recommendations",
      "Responsive UI built with React and Tailwind",
      "Deployed on AWS EC2 with GitHub Actions CI/CD",
    ],
  },
  {
    title: "Echo Desk",
    description: "A real-time chat platform featuring messaging, private rooms and role-based access controls.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"],
    links: { live: "#", repo: "#" },
    stack: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    slug: "echo-desk",
    features: [
      "Direct messaging, group chats and private room access",
      "Typing indicators and read receipts",
      "JWT-based authentication and message persistence",
      "Optimized for low-latency real-time interactions",
    ],
  },
  {
    title: "RentX",
    description: "A rental management backend for landlords to list properties, manage bookings and rental payments.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"],
    links: { live: "#", repo: "#" },
    stack: ["Node.js", "Express", "MySQL", "Stripe"],
    slug: "rentx",
    features: [
      "Stripe integration for secure payments",
      "Auto-generated PDF contracts for tenants",
      "Tenant verification and rental history logs",
      "Booking management with notifications",
    ],
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const [light, setLight] = useState<string | null>(null);
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group overflow-hidden rounded-xl border bg-card hover:shadow-glow transition-shadow"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" onClick={() => setLight(p.image)} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg"><Link to={`/projects/${p.slug}`} className="hover:underline">{p.title}</Link></h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="inline-flex rounded-md border px-2.5 py-1 text-xs text-muted-foreground">{s}</span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          {p.links.live && (
            <a href={p.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              Live <ExternalLink className="size-4" />
            </a>
          )}
          {p.links.repo && (
            <a href={p.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
              Code <Github className="size-4" />
            </a>
          )}
        </div>
      </div>
      {light && <Lightbox src={light} alt={p.title} onClose={() => setLight(null)} />}
    </motion.article>
  );
}

export { projects };

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
