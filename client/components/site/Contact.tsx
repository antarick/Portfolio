import { motion } from "framer-motion";
import { useState } from "react";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiGithub, SiJavascript } from "react-icons/si";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = encodeURIComponent(
      `${message}\n\nRegards,\n${name}\n${email}`
    );

    window.open(
      `mailto:syedmu729@gmail.com?subject=${encodeURIComponent(
        "Portfolio Inquiry"
      )}&body=${body}`,
      "_blank"
    );
  };


  return (
    <section id="contact" className="section scroll-mt-2">
      <div className="flex-start mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">
          Contact
        </h2>
        <p className="mt-2 text-muted-foreground">
          Let's build something great together
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side: Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="rounded-xl border bg-card p-6 sm:p-8 space-y-4 shadow-lg"
        >
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
              placeholder="Tell me about your project"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        {/* Right side: Tech Icons Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden lg:grid grid-cols-2 gap-6 text-6xl text-muted-foreground/70 place-items-center"
        >
          <SiReact className="mb-4 col-span-2  hover:text-cyan-400 transition" />
          <SiNodedotjs className="mb-2 hover:text-green-500 transition" />
          <SiMongodb className="mb-2 hover:text-emerald-500 transition" />
          <SiTailwindcss className="mt-2 hover:text-sky-400 transition" />
          <SiJavascript className="mt-2 hover:text-yellow-400 transition-colors" />
          <SiGithub className="mt-4 col-span-2 transition hover:text-gray-900 dark:hover:text-white" />
        </motion.div>
      </div>
    </section>
  );
}
