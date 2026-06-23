import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#020617] py-24 px-6 text-white sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.12),transparent_50%)] blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300/70">Contact</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">Let&apos;s build the future together.</h2>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            I&apos;m available for AI, React, and full-stack collaborations. Reach out for project discussions, mentorship, or futuristic product partnerships.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_35px_100px_rgba(6,182,212,0.14)] backdrop-blur-3xl"
          >
            <div className="grid gap-6">
              <label className="space-y-3 text-sm text-slate-300">
                <span>Name</span>
                <input type="text" placeholder="Your Name" className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20" />
              </label>
              <label className="space-y-3 text-sm text-slate-300">
                <span>Email</span>
                <input type="email" placeholder="you@example.com" className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20" />
              </label>
              <label className="space-y-3 text-sm text-slate-300">
                <span>Message</span>
                <textarea rows="5" placeholder="Tell me about your project..." className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"></textarea>
              </label>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-cyan-400/15 px-6 py-4 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/25">
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_35px_100px_rgba(168,85,247,0.14)] backdrop-blur-3xl"
          >
            <div className="rounded-[2rem] border border-cyan-400/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Email</p>
              <a href="mailto:sohamkhedekar5@gmail.com" className="mt-4 block text-lg font-semibold text-white hover:text-cyan-200">
                sohamkhedekar5@gmail.com
              </a>
            </div>
            <div className="grid gap-4">
              {[
                { label: "GitHub", icon: FiGithub, href: "https://github.com/" },
                { label: "LinkedIn", icon: FiLinkedin, href: "https://linkedin.com/" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 text-white transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  <span>{item.label}</span>
                  <item.icon className="h-5 w-5 text-cyan-200" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
