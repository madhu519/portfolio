import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, MessageSquare, BarChart3, Cloud, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Build intelligent systems using supervised and unsupervised learning techniques. Skilled in Scikit-learn, model training, evaluation, and optimization.",
    color: "primary"
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    desc: "Design and implement neural networks using TensorFlow and PyTorch for tasks like image recognition, prediction, and automation.",
    color: "accent"
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    desc: "Develop NLP solutions such as chatbots, sentiment analysis, and fake news detection using Hugging Face Transformers and LLMs.",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    desc: "Analyze and visualize data using Python libraries like Pandas, NumPy, and Matplotlib to extract meaningful insights.",
    color: "accent"
  },
  {
    icon: Cloud,
    title: "AI Model Deployment",
    desc: "Deploy AI models into real-world applications using APIs, cloud platforms, and basic MLOps practices.",
    color: "primary"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Applications",
    desc: "Build end-to-end AI applications integrating machine learning models with user-friendly interfaces.",
    color: "accent"
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10" />
      
      <div className="container">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-4">
              My Expertise
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              AI & ML <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I deliver intelligent AI solutions engineered with modern 
              frameworks and best practices in machine learning and data science.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="glass-card rounded-[2.5rem] p-10 group gradient-border-glow h-full relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className={`w-14 h-14 rounded-2xl bg-${s.color === 'primary' ? 'primary' : 'accent'}/10 flex items-center justify-center mb-8 border border-${s.color === 'primary' ? 'primary' : 'accent'}/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <s.icon size={26} className={s.color === 'primary' ? 'text-primary' : 'text-accent'} />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                {s.desc}
              </p>
              
              <div className="pt-6 border-t border-white/5 mt-auto flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">Core Offering</span>
                <ArrowRight size={18} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

