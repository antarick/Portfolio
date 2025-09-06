import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section scroll-mt-24">
      <div className="mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">
          Education
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border bg-card p-5"
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GraduationCap className="size-4" />
          <span>COMSATS University Islamabad, Lahore Campus</span>
        </div>
        <h3 className="mt-2 font-semibold">BS Software Engineering</h3>
      </motion.div>
    </section>
  );
}
