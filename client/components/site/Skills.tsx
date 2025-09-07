import { motion } from "framer-motion";
import { Code2, Boxes, Server, Database, Wrench } from "lucide-react";

const groups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["C", "C++", "Java", "Python", "JavaScript", "PHP"],
  },
  {
    title: "Frontend",
    icon: Boxes,
    items: ["ReactJS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "Laravel"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["AWS EC2", "Git/GitHub/GitLab", "Trello", "Jira", "Postman", "Figma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section scroll-mt-2">
      <div className="mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Skills</h2>
        <p className="mt-2 text-muted-foreground">
          A toolkit for building robust web applications
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="rounded-xl border bg-card p-5 hover:shadow-glow transition-shadow"
          >
            <div className="flex items-center gap-3">
              <g.icon className="size-5 text-primary" />
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-md border px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
