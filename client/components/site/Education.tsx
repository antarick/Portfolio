import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section scroll-mt-2">
      <div className="mb-8 text-center sm:text-left">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">
          Education
        </h2>
        <p className="mt-2 text-muted-foreground">
          My academic background and learning journey
        </p>
      </div>

      <div className="relative">
        {/* Timeline vertical line (desktop only) */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />

        <div className="space-y-8">
          {/* Item 1 */}
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

            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="size-4 text-primary" />
              <span className="font-medium">
                COMSATS University Islamabad, Lahore Campus
              </span>
            </div>
            <h3 className="mt-2 font-semibold text-lg">
              BS Software Engineering
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              2020 – 2024
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border bg-card/80 backdrop-blur-md shadow-lg p-6 sm:ml-10"
          >
            <div className="absolute -left-[11px] top-6 hidden sm:flex items-center justify-center">
              <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-fuchsia-500 to-primary shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="size-4 text-primary" />
              <span className="font-medium">
                Government Islamia College Civil Lines Lahore
              </span>
            </div>
            <h3 className="mt-2 font-semibold text-lg">
              Intermediate in Computer Science
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              2018 – 2020
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
