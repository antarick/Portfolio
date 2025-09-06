import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-3 gap-10 items-start"
      >
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            About Me
          </h2>
          <p className="mt-3 text-muted-foreground">
            COMSATS University Islamabad, Lahore Campus
          </p>
        </div>
        <div className="lg:col-span-2 space-y-4">
          <p className="text-muted-foreground">
            MERN Stack Developer and BS Software Engineering graduate with a
            solid foundation in object-oriented programming, data structures,
            and backend development. Proficient in JavaScript, Node.js,
            Express.js, React, and MongoDB, with hands-on experience in
            designing RESTful APIs, optimizing performance, and deploying
            applications on AWS with CI/CD pipelines.
          </p>
          <p className="text-muted-foreground">
            Committed to writing clean, maintainable code and contributing
            effectively within agile, collaborative teams. I enjoy building
            scalable systems, designing component-driven UIs, and improving
            developer workflows through automation and best practices.
          </p>
          <div className="mt-2 text-sm text-muted-foreground">
            <strong>Education:</strong> BS Software Engineering, COMSATS
            University Islamabad – Lahore Campus (GPA: 3.17)
            <br />
            <strong>Experience:</strong> Web Developer Intern at Cyberappx
            Software House (Sep '24 – Jul '25)
          </div>
        </div>
      </motion.div>
    </section>
  );
}
