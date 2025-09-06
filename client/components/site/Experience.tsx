import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section scroll-mt-2">
      <div className="mb-8 text-center sm:text-left">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">
          Experience
        </h2>
        <p className="mt-2 text-muted-foreground">
          Where I've applied my skills in the real world
        </p>
      </div>

      <div className="relative">
        {/* Timeline vertical line (desktop only) */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />

        <div className="space-y-8">
          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border bg-card/80 backdrop-blur-md shadow-lg p-6 sm:ml-10"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[11px] top-6 hidden sm:flex items-center justify-center">
              <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-primary to-fuchsia-500 shadow-[0_0_12px_rgba(236,72,153,0.6)]" />
            </div>

            {/* Header */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="size-4 text-primary" />
              <span className="font-medium">Cyberappx Software House</span>
              <span className="hidden sm:inline">•</span>
              <span>Sep ’24 – Jul ’25</span>
            </div>

            {/* Role */}
            <h3 className="mt-2 font-semibold text-lg">
              Web Developer Intern
            </h3>

            {/* Bullet points */}
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>
                Built and maintained MERN stack features with attention to
                performance and accessibility.
              </li>
              <li>
                Collaborated with designers and product teams to deliver
                pixel-perfect UIs with reusable components.
              </li>
              <li>
                Implemented RESTful APIs, auth flows, and real-time features
                using Socket.io.
              </li>
              <li>
                Wrote clean, testable code and participated in code reviews to
                ensure quality.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
