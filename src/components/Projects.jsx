import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projectItems = [
  {
    title: "Satark AI",
    category: "AI",
    description: "Next-generation AI-powered project focused on smart predictive solutions.",
    tags: ["AI", "Predictive", "ML"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-Commerce Website",
    category: "Web",
    description: "High-performance React shopping platform with modern UI and state management.",
    tags: ["React", "Web", "Commerce"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Chat Application",
    category: "AI",
    description: "Conversational LLM-inspired interface built with modern frontend technologies.",
    tags: ["AI", "Chat", "UX"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portfolio Website",
    category: "Web",
    description: "Personal digital identity showcasing modern frontend architecture.",
    tags: ["React", "Portfolio", "Design"],
    image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "AI", "Web"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () => projectItems.filter((project) => activeCategory === "All" || project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="projects" className="relative overflow-hidden bg-[#020617] py-24 px-6 text-white sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_45%)] blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300/70">Featured Projects</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">Floating AI and Web experiences.</h2>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            Explore the projects that showcase my ability to build intelligent interfaces, real-time experiences, and modern full-stack solutions.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm transition duration-300 ${
                activeCategory === category
                  ? "border-cyan-400/60 bg-cyan-400/15 text-cyan-200"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/30 hover:text-cyan-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: index * 0.1 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-[0_35px_100px_rgba(6,182,212,0.12)] backdrop-blur-3xl"
            >
              <div className="relative h-56 overflow-hidden rounded-t-[2rem]">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200">
                  {project.category}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 transition duration-300 hover:bg-cyan-400/15">
                    <FiGithub className="h-4 w-4" /> GitHub
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 transition duration-300 hover:bg-cyan-400/15">
                    <FiExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

