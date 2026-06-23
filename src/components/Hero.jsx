import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";

const heroTitles = [
  "AI Enthusiast",
  "React Developer",
  "Future Full-Stack Engineer",
  "Hackathon Winner",
  "Problem Solver",
];

const floatingVariants = {
  float: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function Hero() {
  const [activeTitle, setActiveTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTitle((prev) => (prev + 1) % heroTitles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#020617] px-6 pb-24 pt-24 text-white scroll-mt-28 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_20%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-24 h-96 bg-[radial-gradient(circle,_rgba(14,165,233,0.08),_transparent_60%)] blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            SOHAM <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">KHEDEKAR</span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-lg text-cyan-200/90 sm:text-xl">
            <span className="rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 shadow-[0_15px_40px_rgba(6,182,212,0.1)] backdrop-blur-xl">
              {heroTitles[activeTitle]}
            </span>
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-cyan-300/70">
              <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" /> floating in deep space
            </span>
          </div>

          <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            I am a passionate student developer focused on Artificial Intelligence, Web Development, and building innovative digital solutions. I enjoy turning complex ideas into real-world applications through modern technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 hover:text-white"
            >
              View Projects
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
            >
              Contact Me
              <FiMail className="h-4 w-4" />
            </a>
            <a
              href="/assets/Soham_Khedekar_Resume.pdf"
              className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:-translate-y-1 hover:bg-slate-900/100 hover:text-white"
            >
              Download Resume
              <FiDownload className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 shadow-[0_20px_60px_rgba(6,182,212,0.16)] backdrop-blur-xl">
              <p className="text-sm text-cyan-300/80">Achievement</p>
              <p className="mt-2 text-2xl font-semibold text-white">🏆 2-Time Mumbai Hackathon Winner</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 shadow-[0_20px_60px_rgba(168,85,247,0.16)] backdrop-blur-xl">
              <p className="text-sm text-cyan-300/80">Focus</p>
              <p className="mt-2 text-2xl font-semibold text-white">AI, React & Future Full-Stack Systems</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="float"
          className="relative mx-auto w-full max-w-[420px] rounded-[2.5rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_40px_120px_rgba(6,182,212,0.18)] backdrop-blur-3xl md:max-w-[500px]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),transparent_38%)]" />
          <div className="absolute -left-10 top-6 h-28 w-28 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-2xl" />
          <div className="absolute -right-10 bottom-10 h-24 w-24 rounded-full border border-violet-300/20 bg-violet-300/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_0_80px_rgba(56,189,248,0.12)]">
            <div className="absolute inset-0 rounded-[2rem] border border-cyan-400/10" />
            <div className="absolute inset-x-8 top-8 h-1 rounded-full bg-cyan-300/20 blur-sm" />
            <div className="absolute inset-x-8 bottom-8 h-1 rounded-full bg-violet-300/20 blur-sm" />
            <div className="relative flex items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.18),transparent_55%)] blur-2xl" />
              <div className="relative flex h-[330px] w-[330px] items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950/90 shadow-[0_0_90px_rgba(56,189,248,0.24)]">
                <div className="absolute inset-0 rounded-full border border-cyan-300/10 opacity-60" />
                <div className="absolute inset-8 rounded-full border border-cyan-300/10 opacity-40" />
                <div className="absolute inset-20 rounded-full border border-violet-200/10 opacity-30" />
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full">
                  {/* REPLACE WITH YOUR ACTUAL PHOTO: src="/assets/soham.jpg" */}
                  <img
                    src="/assets/soham.jpg"
                    alt="Soham Khedekar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex justify-between gap-3 text-sm text-slate-300">
            <div className="rounded-3xl border border-cyan-400/10 bg-white/5 px-4 py-3 shadow-[0_20px_60px_rgba(6,182,212,0.12)] backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Energy Halo</p>
              <p className="mt-2 font-semibold text-white">Nebula Pulse</p>
            </div>
            <div className="rounded-3xl border border-violet-400/10 bg-white/5 px-4 py-3 shadow-[0_20px_60px_rgba(168,85,247,0.12)] backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Float Status</p>
              <p className="mt-2 font-semibold text-white">Zero Gravity</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

