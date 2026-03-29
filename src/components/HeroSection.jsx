import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Typewriter from "./Typewriter";
import profileImg from "@/assets/profile.png";

const HeroScene = lazy(() => import("./3d/HeroScene"));

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding overflow-hidden"
    >
      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Gradient background blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center pt-20">
        {/* Name & Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/50 bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_hsl(var(--primary)_/_0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-primary"></span>
            </span>
            System Online / Available for Hire
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-wider">
            Hi, I'm <br />
            <span className="font-title text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#e066ff] drop-shadow-[0_0_5px_rgba(0,229,255,0.4)] inline-block py-1 tracking-wider">Madhu Bobbili</span>
          </h1>

          <div className="h-10 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl text-foreground font-semibold">
              <Typewriter
                texts={[
                  "AI Enthusiast",
                  "Machine Learning Engineer",
                  "Deep Learning Practitioner",
                  "NLP & Computer Vision"
                ]}
              />
            </h2>
          </div>
        </motion.div>

        {/* Centered Profile Content (Standalone) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex justify-center items-center w-full mb-20"
        >
          <div className="relative group w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">

            {/* Outer Glow Diffuse */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-[80px] opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />

            {/* Orbital Ring 1 (30 deg tilt) */}
            <div className="absolute inset-[-25%] pointer-events-none z-0" style={{ transform: 'perspective(1000px) rotateX(70deg) rotateY(30deg)', transformStyle: 'preserve-3d' }}>
              <motion.div
                className="w-full h-full rounded-full border border-primary/30 border-t-primary/80"
                animate={{ rotateZ: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#00e5ff] absolute top-[-1.5px] left-1/2 -translate-x-1/2" />
              </motion.div>
            </div>

            {/* Orbital Ring 2 (-60 deg tilt) */}
            <div className="absolute inset-[-15%] pointer-events-none z-20" style={{ transform: 'perspective(1000px) rotateX(65deg) rotateY(-60deg)', transformStyle: 'preserve-3d' }}>
              <motion.div
                className="w-full h-full rounded-full border border-accent/20 border-b-accent/80"
                animate={{ rotateZ: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_15px_#e066ff] absolute bottom-[-1px] left-1/2 -translate-x-1/2" />
              </motion.div>
            </div>

            {/* Orbital Ring 3 (Flat Equator) */}
            <div className="absolute inset-[-8%] pointer-events-none z-0" style={{ transform: 'perspective(1000px) rotateX(55deg) rotateY(10deg)', transformStyle: 'preserve-3d' }}>
              <motion.div
                className="w-full h-full rounded-full border border-white/5 border-l-white/40"
                animate={{ rotateZ: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#ffffff] absolute left-[-1px] top-1/2 -translate-y-1/2" />
              </motion.div>
            </div>

            {/* Profile Image Core */}
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-primary via-accent to-primary shadow-[0_0_30px_hsl(190_100%_50%_/_0.3)] z-10 animate-float-slow">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-background">
                <img
                  src={profileImg}
                  alt="Madhu Bobbili - AI Enthusiast"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter group-hover:contrast-110"
                />
                {/* Overlay shine & scan line */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none mix-blend-overlay" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary/40 shadow-[0_0_15px_hsl(var(--primary))] animate-[scan_3s_linear_infinite]" />
              </div>
            </div>

          </div>
        </motion.div>

        {/* Action Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-5 z-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent blur-md opacity-40 group-hover:opacity-100 transition duration-500"></div>
            <a href="#projects" className="sci-fi-button flex items-center justify-center gap-2 px-8 py-3 text-sm h-12 bg-background relative z-10 w-full md:w-auto">
              Initialize Projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto"
          >
            <a href="#contact" className="sci-fi-button border-primary/40 text-foreground flex items-center justify-center gap-2 px-8 py-3 text-sm h-12 bg-background/50 backdrop-blur-md w-full md:w-auto">
              <Mail size={18} className="text-primary" /> Transmit Message
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 hidden md:block"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <ArrowDown size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
