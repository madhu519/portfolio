import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-5 bg-transparent"}`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold gradient-text">
          YR.
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (<li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                {l.label}
              </a>
            </li>))}
        </ul>

        <a href="/resume.pdf" download className="hidden md:inline-flex text-sm font-medium px-5 py-2 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-foreground">
          Resume
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden glass mt-2 mx-4 rounded-xl p-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((l) => (<li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>))}
            </ul>
          </motion.div>)}
      </AnimatePresence>
    </nav>);
};
export default Navbar;
