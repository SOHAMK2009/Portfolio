import { motion } from "framer-motion";

function Learning() {
  return (
    <section id="learning" className="relative overflow-hidden bg-[#020617] py-24 px-6 text-white sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_45%)] blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300/70">Learning</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">Elite Forum Internship & real-time learning.</h2>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            I am actively learning through an Elite Forum Internship, where I collaborate on AI-driven systems, fast prototyping, and next-gen frontend experiences.
          </p>
          <p className="mt-4 text-lg leading-9 text-slate-300">
            This internship sharpened my skills in React, Python, and cloud-based AI tooling while exposing me to rigorous product design and collaborative engineering workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "AI Systems", description: "Building intelligent models with practical applications." },
            { title: "Real-World Projects", description: "Delivering polished frontend experiences under mentorship." },
            { title: "Collaborative Engineering", description: "Working with teams to solve problems quickly and cleanly." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_80px_rgba(56,189,248,0.14)] backdrop-blur-3xl"
            >
              <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learning;
