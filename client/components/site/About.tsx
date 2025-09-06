import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section scroll-mt-2">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-3 gap-12 items-start"
      >
        {/* Left column: heading + intro */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            About Me
          </h2>
          <p className="mt-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Graduate from COMSATS University Islamabad, Lahore Campus
          </p>
        </div>

        {/* Right column: main content */}
        <div className="lg:col-span-2 space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
          <p>
            I’m a <span className="font-semibold text-foreground">MERN Stack Developer</span>
            and BS Software Engineering graduate with a strong foundation in
            object-oriented programming, data structures, and backend
            development. Proficient in JavaScript, Node.js, Express.js, React,
            and MongoDB, with hands-on experience in designing RESTful APIs,
            optimizing performance, and deploying applications on AWS with
            CI/CD pipelines.
          </p>

          <p>
            I’m committed to writing clean, maintainable code and contributing
            effectively within agile, collaborative teams. I enjoy building
            scalable systems, designing component-driven UIs, and improving
            developer workflows through automation and best practices.
          </p>

          {/* Education & Experience block */}
          <div className="border-l-4 border-primary pl-4 space-y-2 text-sm sm:text-base">
            <p>
              <strong className="font-semibold text-foreground">
                Education:
              </strong>{" "}
              BS Software Engineering, COMSATS University Islamabad – Lahore
              Campus
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Experience:
              </strong>{" "}
              Web Developer Intern at Cyberappx Software House (Sep '24 – Jul
              '25)
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
