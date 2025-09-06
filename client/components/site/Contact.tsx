import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.open(`mailto:syedmu729@gmail.com?subject=${encodeURIComponent("Portfolio Inquiry")}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="section scroll-mt-24">
      <div className="mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Contact</h2>
        <p className="mt-2 text-muted-foreground">Let's build something great together</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.form initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={submit} className="rounded-xl border bg-card p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} required className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required rows={5} className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="Tell me about your project" />
          </div>
          <button type="submit" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">Send Message</button>
        </motion.form>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border bg-card p-6">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="size-4" />
              <a href="mailto:syedmu729@gmail.com" className="hover:underline">syedmu729@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="size-4" />
              <a href="tel:+923244905451" className="hover:underline">+92 324 4905451</a>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Linkedin className="size-4" />
              <a target="_blank" href="https://www.linkedin.com/in/" className="hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Github className="size-4" />
              <a target="_blank" href="https://github.com/" className="hover:underline">GitHub</a>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <a href="https://cdn.builder.io/o/assets%2F13e4ac3fb51f402398bc916f1280a140%2F0f296d2b72064c288679c29887927aa7?alt=media&token=eaf36571-61f2-4cad-975a-58e1db1a4d3c&apiKey=13e4ac3fb51f402398bc916f1280a140" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Download Resume</a>
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm">View LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
