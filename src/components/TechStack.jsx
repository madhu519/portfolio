import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Express", icon: "🚀" },
  { name: "Tailwind", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "Java", icon: "☕" },
  { name: "Git", icon: "📜" },
];

const TechStack = () => {
  return (
    <div className="py-20 border-y border-white/5 bg-white/[0.01] relative overflow-hidden group">
      {/* Decorative gradient edges */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="container relative z-20">
        <div className="flex flex-col items-center gap-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/60"
          >
            Core Technology Stack
          </motion.p>
          
          <div className="w-full relative">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center gap-16 whitespace-nowrap min-w-max"
            >
              {/* Duplicate contents for seamless loop */}
              {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group/tech cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/tech:scale-110 group-hover/tech:border-primary/30 transition-all duration-500 shadow-inner">
                    <span className="text-2xl grayscale group-hover/tech:grayscale-0 transition-all duration-500 drop-shadow-lg">
                      {tech.icon}
                    </span>
                  </div>
                  <span className="text-base font-bold text-muted-foreground/60 group-hover/tech:text-foreground transition-all duration-500 tracking-tight">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

