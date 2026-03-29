import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target } from "lucide-react";
const AboutSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (<section id="about" className="section-padding" ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Get to know me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-primary"/>
              </div>
              <h3 className="font-display text-xl font-semibold">Education</h3>
            </div>
            <p className="text-foreground font-medium mb-1">B.Tech in Computer Science Engineering</p>
            <p className="text-muted-foreground mb-1">Lovely Professional University</p>
            <p className="text-muted-foreground text-sm">Expected Graduation: 2027</p>
            <div className="mt-4 inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              Fresher
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Target size={20} className="text-accent"/>
              </div>
              <h3 className="font-display text-xl font-semibold">Career Objective</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Focused on building real-world applications, improving problem-solving skills, and growing as a professional full stack developer. Passionate about creating scalable solutions that make a difference and constantly learning new technologies to stay ahead.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);
};
export default AboutSection;
