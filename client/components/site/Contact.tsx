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
      <div>
        <motion.form initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={submit} className="rounded-xl border bg-card p-6 space-y-4 max-w-2xl">
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
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required rows={6} className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="Tell me about your project" />
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">Send Message</button>
            <a href="mailto:syedmu729@gmail.com" className="text-sm text-muted-foreground hover:underline">Or email me directly at syedmu729@gmail.com</a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
