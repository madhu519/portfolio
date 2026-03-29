import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import resumePdf from "@/assets/CV_202602131154490194_12316442 (1).pdf";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },

  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        scrolled ? "neo-blur py-3 border-white/5" : "py-6 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-title text-2xl font-black tracking-widest glow-text flex items-baseline"
        >
          <span className="gradient-text">MB</span>
          <span className="text-primary text-3xl opacity-80 animate-pulse">_</span>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((l, i) => (
            <motion.li 
              key={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <a
            href={resumePdf}
            download="MadhuBobbili_CV.pdf"
            className="group inline-flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
          >
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
            Resume
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden neo-blur mt-4 mx-4 rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            >
              <ul className="flex flex-col p-6 gap-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-muted-foreground hover:text-primary transition-all"
                    >
                      <span className="font-medium">{l.label}</span>
                      <X size={14} className="rotate-45 opacity-20" />
                    </a>
                  </li>
                ))}
                <li className="mt-4 pt-4 border-t border-white/5">
                  <a
                    href={resumePdf}
                    download="MadhuBobbili_CV.pdf"
                    className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-primary text-primary-foreground font-bold"
                  >
                    <Download size={18} /> Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
