import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Learning", href: "#learning" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const navVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + window.innerHeight / 3;
      const currentLink = navLinks
        .map((link) => {
          const section = document.querySelector(link.href);
          if (!section) return null;
          return {
            id: link.href.replace("#", ""),
            top: section.offsetTop,
          };
        })
        .filter(Boolean)
        .reverse()
        .find((section) => offset >= section.top);

      setActiveLink(currentLink ? currentLink.id : "home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed inset-x-4 top-6 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/50 px-4 py-3 shadow-[0_30px_80px_rgba(6,182,212,0.15)] backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 ring-1 ring-cyan-300/20 shadow-[0_0_24px_rgba(56,189,248,0.16)]">
          <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.7)] animate-pulse"></div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.45em] text-cyan-300/70">
            Soham Khedekar
          </p></div>
      </div>

      <div className="hidden items-center gap-2 md:flex">
        {navLinks.map((link) => {
          const isActive = activeLink === link.href.replace("#", "");
          return (
            <button
              key={link.href}
              type="button"
              onClick={() => handleLinkClick(link.href)}
              className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                isActive
                  ? "bg-cyan-400/15 text-cyan-200 shadow-[0_0_25px_rgba(56,189,248,0.18)]"
                  : "text-slate-300 hover:text-cyan-200 hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-cyan-200 shadow-[0_10px_30px_rgba(6,182,212,0.18)] transition hover:bg-slate-900"
      >
        {menuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute inset-x-4 top-full mt-3 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-[0_30px_80px_rgba(6,182,212,0.18)] backdrop-blur-xl md:hidden"
      >
        <div className="space-y-2">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition duration-300 ${
                  isActive
                    ? "bg-cyan-400/12 text-cyan-200"
                    : "text-slate-300 hover:bg-white/5 hover:text-cyan-200"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;

