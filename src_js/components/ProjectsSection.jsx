import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
const projects = [
    {
        title: "LocalEats",
        desc: "A campus-based food ordering platform that allows students to order food from stalls inside LPU campus.",
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        features: ["User authentication", "Real-time order placement", "Dashboard for stall management"],
    },
    {
        title: "Car Rental Application",
        desc: "A car rental booking platform that allows users to select cars and book them for specific dates.",
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        features: ["Date-based booking system", "Car availability tracking", "User management system"],
    },
];
const ProjectsSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (<section id="projects" className="section-padding" ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (<motion.div key={p.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }} className="glass rounded-2xl overflow-hidden group">
              {/* Gradient header */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500"/>
                <span className="font-display text-2xl font-bold text-foreground/80 relative z-10">{p.title}</span>
              </div>

              <div className="p-8">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (<span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {t}
                    </span>))}
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-6">
                  {p.features.map((f) => (<li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"/>
                      {f}
                    </li>))}
                </ul>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/tej53" target="_blank" rel="noopener noreferrer">
                      <Github size={14}/> GitHub
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink size={14}/> Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>))}
        </div>
      </div>
    </section>);
};
export default ProjectsSection;
