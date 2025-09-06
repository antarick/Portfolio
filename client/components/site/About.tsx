import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section scroll-mt-24">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-3 gap-10 items-start">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">About Me</h2>
          <p className="mt-3 text-muted-foreground">COMSATS University Islamabad, Lahore Campus</p>
        </div>
        <div className="lg:col-span-2 space-y-4">
          <p className="text-muted-foreground">
            I'm a MERN Stack Developer passionate about building performant, accessible, and maintainable digital products. I love writing clean, testable code and collaborating with teams to turn ideas into impactful user experiences.
          </p>
          <p className="text-muted-foreground">
            I graduated with a BS in Software Engineering from COMSATS University, where I honed my foundations in computer science, algorithms, and modern web development.
          </p>
          <p className="text-muted-foreground">
            My toolkit spans React, Node.js, Express, MongoDB, and modern tooling. I enjoy system design, component architecture, and bringing delightful micro-interactions to life.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
