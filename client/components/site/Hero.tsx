import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 400], [0, -40]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="relative section pt-16 sm:pt-20 md:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-12 xl:px-24"
      aria-label="Hero"
    >
      {/* Background gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          style={{ y }}
          className="absolute -top-24 -left-16 h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full bg-gradient-to-tr from-primary/30 to-fuchsia-500/20 blur-3xl"
        />
        <motion.div
          style={{ y }}
          className="absolute -bottom-24 -right-16 h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full bg-gradient-to-tr from-fuchsia-500/25 to-primary/20 blur-3xl"
        />
      </div>

      {/* Content grid */}
      <div className="grid gap-12 lg:gap-16 items-center lg:grid-cols-2">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ opacity }}
        >
          <p className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
            Hello, I'm
          </p>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Syed Muhammad Ibrahim
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-primary font-semibold">
            MERN Stack Developer
          </p>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-lg sm:max-w-xl">
            I build fast, scalable, and delightful web applications with clean
            code and a focus on user experience.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="flex-1 sm:flex-none text-center inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 sm:px-5 sm:py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              View My Work <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="flex-1 sm:flex-none text-center inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 sm:px-5 sm:py-3 text-sm font-semibold hover:bg-accent/60 transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Hire Me
            </a>
            <a
              href="https://cdn.builder.io/o/assets%2F13e4ac3fb51f402398bc916f1280a140%2F0f296d2b72064c288679c29887927aa7?alt=media&token=eaf36571-61f2-4cad-975a-58e1db1a4d3c&apiKey=13e4ac3fb51f402398bc916f1280a140"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none text-center inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 sm:px-5 sm:py-3 text-sm font-medium hover:bg-accent/60"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right column - Code Editor Preview */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-last"
        >
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md rounded-2xl border bg-background shadow-xl overflow-hidden">
            {/* Top bar like an editor */}
            <div className="flex items-center gap-1 px-3 py-2 bg-muted">
              <span className="size-2 rounded-full bg-red-500" />
              <span className="size-2 rounded-full bg-yellow-500" />
              <span className="size-2 rounded-full bg-green-500" />
            </div>

            {/* Fake code content */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
              <p>
                <span className="text-primary">const</span>{" "}
                <span className="text-fuchsia-500">app</span> ={" "}
                <span className="text-blue-400">express()</span>;
              </p>
              <p>
                app.get(<span className="text-green-400">'/'</span>, (req, res){" "}
                =&gt; &#123;
              </p>
              <p className="pl-6">
                res.send(<span className="text-green-400">'Hello World'</span>);
              </p>
              <p>&#125;);</p>
              <p className="text-blue-400">app.listen(3000);</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line (desktop only) */}
      {mounted && (
        <div
          aria-hidden
          className="pointer-events-none absolute right-4 top-4 hidden md:block"
        >
          <div className="w-1 h-24 sm:h-32 rounded-full bg-gradient-to-b from-primary to-transparent opacity-60" />
        </div>
      )}
    </section>
  );
}
