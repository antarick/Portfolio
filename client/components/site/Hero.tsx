import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative section pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-gradient-to-tr from-primary/25 to-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/25 to-primary/20 blur-3xl animate-float" />
      </div>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Hello, I'm</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Syed Muhammad Ibrahim
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-primary font-semibold">MERN Stack Developer</p>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            I build fast, scalable, and delightful web applications with clean code and a focus on user experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
              View My Work <ArrowRight className="size-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold hover:bg-accent/60 transition">
              Hire Me
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="relative mx-auto aspect-square max-w-sm rounded-2xl border bg-gradient-to-br from-background to-secondary p-2">
            <div className="absolute inset-0 rounded-2xl [mask-image:radial-gradient(40%_40%_at_50%_50%,black,transparent)] bg-[radial-gradient(closest-side,theme(colors.primary.DEFAULT)/.15,transparent_80%)]" />
            <div className="relative h-full w-full rounded-xl bg-[linear-gradient(110deg,rgba(255,255,255,.08),rgba(255,255,255,0)_40%),linear-gradient(110deg,rgba(255,255,255,0),rgba(255,255,255,.06)_60%)] bg-[length:200%_100%] animate-shimmer flex items-center justify-center">
              <span className="text-center px-6 text-sm text-muted-foreground">Crafting modern web experiences with React, Node.js, and MongoDB.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
