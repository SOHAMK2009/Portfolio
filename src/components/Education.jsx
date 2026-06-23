import { motion } from "framer-motion";

const educationItems = [
  {
    title: "Swami Vivekanand International School",
    tag: "School",
    description: "Built a strong academic foundation while developing curiosity for technology, innovation, science, and problem-solving.",
    date: "2015 - 2024",
  },
  {
    title: "Bhausaheb Vartak Polytechnic",
    tag: "College",
    description: "Currently pursuing technical education while expanding expertise in Artificial Intelligence, Software Development, and Modern Web Technologies.",
    date: "2024 - Present",
  },
];

function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#020617] py-24 px-6 text-white sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),transparent_50%)] blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-violet-300/70">Education Journey</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">Floating learning nodes.</h2>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            My educational journey is anchored in rigorous academic learning and real-world technical growth. I combine engineering discipline with a futuristic mindset to design intelligent systems.
          </p>
        </div>

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_35px_100px_rgba(168,85,247,0.12)] backdrop-blur-3xl"
            >
              <div className="absolute top-6 left-6 h-16 w-16 rounded-full bg-cyan-400/10 blur-2xl" />
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 text-white">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">{item.tag}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                </div>
                <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-cyan-200">{item.date}</span>
              </div>
              <p className="mt-6 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

