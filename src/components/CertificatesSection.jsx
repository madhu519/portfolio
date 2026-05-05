import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "Fundamentals of Network Communication",
    issuer: "Coursera",
    date: "2025",
    link: "https://drive.google.com/file/d/1Ubx78Nx-lkzYWTL4H3OKw5Fss3RATYoG/view?usp=drivesdk",
    color: "blue"
  },
  {
    title: "Machine Learning Fundamentals",
    issuer: "Oracle",
    date: "2025",
    link: "https://drive.google.com/file/d/1yKswhYeS7ppfjTcNin0juxytg1RBU4T_/view?usp=sharing",
    color: "purple"
  },
  {
    title: "Python for Data Science & AI",
    issuer: "Infosys Springboard",
    date: "2025",
    link: "https://drive.google.com/file/d/13Elf8XvwTOrSm-Ip2F0uqkVUPmEsQHc_/view?usp=sharing",
    color: "blue"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Oracle",
    date: "2025",
    link: "https://drive.google.com/file/d/1D2PXycwrfZLuQYdxdab0jlaIaRLBjKVT/view?usp=sharing",
    color: "accent"
  }
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-4"
          >
            Verified Achievements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold tracking-tight"
          >
            Licenses & <span className="gradient-text">Certifications</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-[1.5rem] p-6 group gradient-border-glow h-full flex flex-col relative overflow-hidden ring-1 ring-white/5 hover:ring-primary/20 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-all duration-500 shadow-inner">
                  <Award size={20} className="text-primary group-hover:glow-text" />
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-black uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">
                    <ShieldCheck size={10} className="animate-pulse" /> Verified
                  </div>
                </div>
              </div>

              <div className="mb-6 flex-1">
                <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-muted-foreground/80">
                    <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/30 transition-all">
                      <Building2 size={12} className="text-primary/70" />
                    </div>
                    <span className="text-xs font-bold text-foreground/70 group-hover:text-foreground/90 transition-colors">
                      {cert.issuer}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 text-muted-foreground/60">
                    <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center border border-white/5">
                      <Calendar size={12} className="opacity-60" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-white/5 mt-auto">
                <Button
                  variant="outline"
                  className="w-full rounded-xl py-4 text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 group/btn relative overflow-hidden bg-white/5 border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all active:scale-95"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                    <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
