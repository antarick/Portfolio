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
    description:
      "A subscription-based platform for managing building operations including finance, HR, analytics, rentals and maintenance.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    ],
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
    description:
      "An AI-powered recipe recommender that suggests meals based on user mood, preferences and pantry items.",
    image:
      "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1200&auto=format&fit=crop",
    ],
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
    description:
      "A real-time chat platform featuring messaging, private rooms and role-based access controls.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    ],
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
    description:
      "A rental management backend for landlords to list properties, manage bookings and rental payments.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    ],
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

import { ProjectModal } from "./ProjectModal";

function FeaturedProject({
  p,
  onOpen,
}: {
  p: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border bg-card lg:flex lg:items-stretch"
    >
      <div className="lg:w-1/2 relative h-64 lg:h-auto">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>
      <div className="p-8 lg:w-1/2 flex flex-col justify-center">
        <span className="text-sm font-medium text-primary">
          Featured Project
        </span>
        <h3 className="mt-3 text-2xl font-semibold">{p.title}</h3>
        <p className="mt-4 text-muted-foreground">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-md border px-2 py-1 text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          {p.links.live && (
            <a
              href={p.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              View Live
            </a>
          )}
          <button
            onClick={() => onOpen(p)}
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium"
          >
            Case Study
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({
  p,
  i,
  onOpen,
}: {
  p: Project;
  i: number;
  onOpen: (p: Project) => void;
}) {
  const [light, setLight] = useState<string | null>(null);
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.04 }}
      className="group relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-glow transition-shadow transform-gpu"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
          onClick={() => setLight(p.image)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />
        <div className="absolute left-4 bottom-4 right-4">
          <h4 className="text-lg font-semibold text-white line-clamp-2">
            {p.title}
          </h4>
          <p className="mt-1 text-sm text-white/90 line-clamp-2">
            {p.description}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={() => onOpen(p)}
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm"
            >
              Case Study
            </button>
            {p.links.live && (
              <a
                href={p.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {p.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-md border px-2 py-1 text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      {light && (
        <Lightbox src={light} alt={p.title} onClose={() => setLight(null)} />
      )}
    </motion.article>
  );
}

export { projects };

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const categories = ["All", "Web", "AI", "Realtime", "Payments"];
  const featured = projects[0];
  const list = projects.filter(
    (p) =>
      filter === "All" ||
      (p.stack || []).some((s) =>
        s.toLowerCase().includes(filter.toLowerCase()),
      ),
  );

  return (
    <section id="projects" className="section scroll-mt-24">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Projects
          </h2>
          <p className="mt-2 text-muted-foreground">
            Selected case studies with highlights and outcomes.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-muted/10 rounded-md p-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3 py-1 text-sm rounded ${filter === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent/40"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium"
          >
            Hire Me
          </a>
        </div>
      </div>

      <div className="mb-6">
        <FeaturedProject p={featured} onOpen={(p) => setSelected(p)} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.slice(1).map((p, i) => (
          <ProjectCard
            key={p.slug}
            p={p}
            i={i}
            onOpen={(p) => setSelected(p)}
          />
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
