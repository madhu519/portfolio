import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Code, Lightbulb, Rocket } from "lucide-react";

const journeySteps = [
  {
    year: "2023",
    title: "The Beginning",
    desc: "Started B.Tech CSE at LPU. Built a strong foundation in programming using C++ and began exploring problem-solving and basic algorithms.",
    icon: BookOpen,
    color: "primary"
  },
  {
    year: "2024",
    title: "AI Foundations",
    desc: "Transitioned into Python and started learning core AI concepts including Machine Learning, data analysis, and libraries like NumPy, Pandas, and Matplotlib.",
    icon: Code,
    color: "accent"
  },
  {
    year: "2025",
    title: "Deep Learning & NLP",
    desc: "Focused on advanced AI topics such as Deep Learning, Neural Networks, and Natural Language Processing. Worked with frameworks like TensorFlow, PyTorch, and Hugging Face Transformers. Built AI-based projects like Fake News Detection.",
    icon: Lightbulb,
    color: "primary"
  },
  {
    year: "2026\u20132027",
    title: "Scaling AI Impact",
    desc: "Exploring real-world AI applications, system design for ML systems (MLOps), and deploying scalable AI solutions. Aiming to build impactful AI products and contribute to industry-level innovations.",
    icon: Rocket,
    color: "accent"
  }
];

const JourneySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="section-padding relative" ref={ref}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-xs font-bold text-primary tracking-[0.3em] uppercase mb-3"
          >
            My Path
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-bold"
          >
            Learning & <span className="gradient-text">Growth Journey</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-accent/50 to-transparent md:-translate-x-1/2 opacity-20" />

          <div className="space-y-12">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full md:w-auto ml-16 md:ml-0">
                  <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                    <div className={`absolute top-0 ${i % 2 === 0 ? "right-0" : "left-0"} w-32 h-32 bg-primary/5 rounded-full blur-3xl`} />
                    <span className="text-xs font-bold text-primary/60 mb-2 block tracking-widest">{step.year}</span>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary/30 md:-translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <step.icon size={16} className="text-primary" />
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
