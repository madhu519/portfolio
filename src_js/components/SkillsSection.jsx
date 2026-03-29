import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const skills = {
    Frontend: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React.js", icon: "⚛️" },
    ],
    Backend: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
    ],
    Database: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" },
    ],
    Programming: [
        { name: "Java", icon: "☕" },
        { name: "MERN Stack", icon: "📦" },
    ],
};
const SkillsSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (<section id="skills" className="section-padding" ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">My Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Technologies I work with</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], catIdx) => (<motion.div key={category} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: catIdx * 0.1 + 0.2 }} className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-sm text-primary uppercase tracking-wider mb-5">
                {category}
              </h3>
              <div className="space-y-3">
                {items.map((skill) => (<div key={skill.name} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-200 group">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>))}
              </div>
            </motion.div>))}
        </div>
      </div>
    </section>);
};
export default SkillsSection;
