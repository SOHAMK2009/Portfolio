import { motion } from "framer-motion";

const learningCards = [
  "Artificial Intelligence",
  "Machine Learning",
  "React.js",
  "JavaScript",
  "Python",
  "C Programming",
  "Git & GitHub",
  "API Integration",
  "UI/UX Design",
];

const skillBars = [
  { name: "HTML5/CSS3", value: 95 },
  { name: "JavaScript", value: 90 },
  { name: "React.js", value: 85 },
  { name: "Python", value: 80 },
  { name: "C Programming", value: 75 },
  { name: "GitHub", value: 85 },
  { name: "AI Tools", value: 80 },
];

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#020617] py-24 px-6 text-white sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12),transparent_50%)] blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300/70">What I&apos;m learning</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">Focus areas levitating in zero gravity.</h2>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            These are the strategic technologies and tools I am mastering today to build AI-enabled full-stack systems of tomorrow.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningCards.map((card, index) => (
            <motion.div
              key={card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-center shadow-[0_25px_70px_rgba(6,182,212,0.12)] backdrop-blur-3xl"
            >
              <div className="absolute inset-x-12 top-4 h-1 rounded-full bg-cyan-400/10 blur-sm" />
              <div className="mt-12 text-lg font-semibold text-white">{card}</div>
              <div className="mt-6 h-12 w-12 mx-auto rounded-full border border-cyan-400/20 bg-cyan-300/10 shadow-[0_0_45px_rgba(56,189,248,0.2)]" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {skillBars.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(168,85,247,0.12)] backdrop-blur-3xl"
            >
              <div className="flex items-center justify-between gap-4 text-white">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-cyan-200">{skill.value}%</span>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
