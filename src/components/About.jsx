import { motion } from "framer-motion";

const aboutVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#020617] py-24 px-6 text-white sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12),transparent_50%)] blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={aboutVariants} className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300/70">About Me</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">I build futuristic AI systems that feel weightless.</h2>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            I am Soham Khedekar, a passionate student developer currently studying at Bhausaheb Vartak Polytechnic. My journey began at Swami Vivekanand International School, where I developed a strong interest in technology, innovation, and problem-solving.
          </p>
          <p className="mt-4 text-lg leading-9 text-slate-300">
            Today, I focus on Artificial Intelligence, React Development, and modern web technologies. As a 2-Time Mumbai Hackathon Winner, I enjoy transforming complex ideas into practical digital solutions while continuously expanding my knowledge in AI and Full-Stack Development.
          </p>
          <p className="mt-4 text-lg leading-9 text-slate-300">
            My goal is to become an elite AI Engineer and Full-Stack Developer capable of building impactful technologies for the future.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: "Academic Foundation", description: "Developed curiosity for technology, science, and problem-solving." },
            { title: "Hackathon Excellence", description: "2-Time Mumbai Hackathon Winner with rapid prototyping experience." },
            { title: "Future Focus", description: "Turning complex AI ideas into practical, product-ready solutions." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_25px_80px_rgba(6,182,212,0.16)] backdrop-blur-3xl"
            >
              <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-20 w-20 rounded-full bg-violet-400/10 blur-3xl" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
