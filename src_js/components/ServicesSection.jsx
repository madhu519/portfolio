import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Layers, Palette, Server, Database } from "lucide-react";
const services = [
    {
        icon: Globe,
        title: "Web Development",
        desc: "Building responsive and dynamic websites using modern frameworks.",
    },
    {
        icon: Layers,
        title: "Full-Stack Development",
        desc: "Complete end-to-end application development using the MERN stack.",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        desc: "Designing clean, user-friendly, and intuitive interfaces.",
    },
    {
        icon: Server,
        title: "API Development",
        desc: "Creating RESTful APIs using Node.js and Express.js.",
    },
    {
        icon: Database,
        title: "Database Design",
        desc: "Designing and managing structured and NoSQL databases using MySQL and MongoDB.",
    },
];
const ServicesSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (<section id="services" className="section-padding" ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Services</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">What I offer</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (<motion.div key={s.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }} className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300" style={{ borderColor: "hsl(var(--glass-border))" }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={22} className="text-primary"/>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>))}
        </div>
      </div>
    </section>);
};
export default ServicesSection;
