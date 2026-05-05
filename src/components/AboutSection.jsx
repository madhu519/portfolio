import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, lazy, Suspense } from "react";
import { GraduationCap, Target, Award, Code2, MapPin, Calendar } from "lucide-react";

const SectionDecorator = lazy(() => import("./3d/SectionDecorator"));

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      grade: "CGPA: 6.59",
      duration: "Aug 2023 – Present"
    },
    {
      institution: "Sri Chaitanya Junior College",
      location: "Vizag, Andhra Pradesh",
      degree: "Intermediate",
      grade: "Percentage: 94.2%",
      duration: "June 2022 – May 2023"
    },
    {
      institution: "Ravindra Bharathi School",
      location: "Pathapatnam, Andhra Pradesh",
      degree: "Matriculation",
      grade: "CGPA: 98.0",
      duration: "June 2020 – April 2021"
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      {/* 3D Context */}
      <Suspense fallback={null}>
        <SectionDecorator variant="left" />
      </Suspense>

      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-3">
              Background
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Academic <span className="gradient-text">Excellence</span> & Goals
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Building a strong foundation through comprehensive computer science studies
              and technical achievements across multiple institutions.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Education List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 glass-card rounded-3xl p-8 md:p-10 group gradient-border-glow h-full"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-12">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group/item">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-1 text-foreground group-hover/item:text-primary transition-colors">
                        {edu.institution}
                      </h4>
                      <div className="flex items-center gap-2 text-primary/80 font-semibold mb-2 text-sm uppercase tracking-wide">
                        {edu.degree}
                      </div>
                      <p className="text-muted-foreground text-sm flex items-center gap-2">
                        <MapPin size={14} className="opacity-50" /> {edu.location}
                      </p>
                    </div>
                    <div className="md:text-right flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground bg-white/5 border border-white/5 px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                        <Calendar size={12} /> {edu.duration}
                      </div>
                      <span className="text-sm font-bold text-accent px-4 py-1.5 rounded-lg bg-accent/5 border border-accent/10 glow-text">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Career Goal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 glass-card rounded-3xl p-8 md:p-10 group gradient-border-glow h-fit"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Target size={32} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Career Goal</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-8">
                Focused on building intelligent AI systems, mastering deep learning architectures,
                and creating impactful solutions using Python and modern ML frameworks.
              </p>

              <div className="w-full space-y-4 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground justify-center">
                  <Award size={14} className="text-primary" /> AI & ML Focus
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground justify-center">
                  <Code2 size={14} className="text-accent" /> Python & Deep Learning
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
