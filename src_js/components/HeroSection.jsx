import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";
const HeroSection = () => {
    return (<section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"/>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px]"/>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <p className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">Yagnatejeswar Reddy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-3 font-medium">
              Full Stack Web Developer · MERN Stack Developer · CSE Student
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              I am a Computer Science student at Lovely Professional University specializing in Full Stack Web Development. I build scalable, user-friendly, and efficient web applications using modern technologies like React, Node.js, and MongoDB.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="#projects">
                  <FolderOpen size={18}/> View Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  <Mail size={18}/> Contact Me
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border glow animate-float">
                <img src={profileImg} alt="Yagnatejeswar Reddy - Full Stack Developer" className="w-full h-full object-cover"/>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent blur-2xl opacity-40"/>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground">
          <ArrowDown size={20}/>
        </motion.div>
      </div>
    </section>);
};
export default HeroSection;
