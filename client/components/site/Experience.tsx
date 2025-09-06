import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section scroll-mt-24">
      <div className="mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Experience</h2>
        <p className="mt-2 text-muted-foreground">Where I've applied my skills in the real world</p>
      </div>
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative border-l pl-6">
        <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-primary" />
        <div className="rounded-xl border bg-card p-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="size-4" />
            <span>Cyberappx Software House</span>
            <span>•</span>
            <span>Sep ’24 – Jul ’25</span>
          </div>
          <h3 className="mt-2 font-semibold">Web Developer Intern</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Built and maintained MERN stack features with attention to performance and accessibility.</li>
            <li>Collaborated with designers and product teams to deliver pixel-perfect UIs with reusable components.</li>
            <li>Implemented RESTful APIs, auth flows, and real-time features using Socket.io.</li>
            <li>Wrote clean, testable code and participated in code reviews to ensure quality.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
