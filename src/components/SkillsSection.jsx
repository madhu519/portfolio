import { motion, useInView } from "framer-motion";
import { useRef, lazy, Suspense } from "react";
import { 
  Layers, Database, Code, Cpu, 
  Layout, Palette, Zap, Atom, Wind, Box,
  Server, Rocket, FastForward, Shield, Lock,
  Table, HardDrive, Cloud, Key,
  Coffee, Binary, GitBranch, Package, Terminal,
  Brain, LineChart, BarChart3, Sparkles, Bot
} from "lucide-react";

const SectionDecorator = lazy(() => import("./3d/SectionDecorator"));

const skillCategories = [
  {
    name: "Python & Libraries",
    icon: Code,
    color: "primary",
    skills: [
      { name: "Python", icon: Coffee },
      { name: "NumPy", icon: BarChart3 },
      { name: "Pandas", icon: Table },
      { name: "Matplotlib", icon: LineChart },
      { name: "Scikit-learn", icon: Sparkles }
    ]
  },
  {
    name: "Deep Learning",
    icon: Brain,
    color: "accent",
    skills: [
      { name: "TensorFlow", icon: Cpu },
      { name: "PyTorch", icon: Zap },
      { name: "Deep Learning", icon: Layers },
      { name: "NLP", icon: Bot }
    ]
  },
  {
    name: "AI & ML",
    icon: Sparkles,
    color: "primary",
    skills: [
      { name: "Machine Learning", icon: Atom },
      { name: "Hugging Face Transformers", icon: Rocket },
      { name: "Data Analysis", icon: BarChart3 }
    ]
  },
  {
    name: "Tools & Core",
    icon: Terminal,
    color: "accent",
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Jupyter Notebooks", icon: Layout },
      { name: "VS Code", icon: Package }
    ]
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />
      
      {/* 3D floating geometries */}
      <Suspense fallback={null}>
        <SectionDecorator variant="skills" />
      </Suspense>
      
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-xs font-bold text-primary tracking-[0.3em] uppercase mb-3"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight"
          >
            AI & ML <br />
            <span className="gradient-text">Technical Skills</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 + 0.2 }}
              className="glass-card rounded-3xl p-8 group gradient-border-glow h-full"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:border-${category.color}/30 transition-all duration-300`}>
                  <category.icon size={20} className={`text-${category.color}`} />
                </div>
                <h3 className="font-display font-bold text-lg tracking-tight">
                  {category.name}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all duration-200 group/skill cursor-default"
                  >
                    <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center border border-white/5 group-hover/skill:border-primary/30 group-hover/skill:glow shadow-sm">
                      <skill.icon size={16} className="text-muted-foreground group-hover/skill:text-primary transition-colors" />
                    </div>
                    <span className="text-[13px] font-medium text-muted-foreground group-hover/skill:text-foreground transition-all">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
