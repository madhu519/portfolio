import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Cpu, Zap, Settings, AlertCircle, Rocket, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const sections = [
    { title: "Overview", icon: Zap, content: project.overview, type: "text" },
    { title: "Features", icon: CheckCircle2, content: project.detailedFeatures, type: "list" },
    { title: "Tech Stack", icon: Cpu, content: project.detailedTech, type: "list" },
    { title: "How It Works", icon: Settings, content: project.howItWorks, type: "list" },
    { title: "Challenges Faced", icon: AlertCircle, content: project.challenges, type: "list" },
    { title: "Future Improvements", icon: Rocket, content: project.futureImprovements, type: "list" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row"
          >
            {/* Left Sidebar - Project Banner & Basic Info */}
            <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 p-8 flex flex-col bg-white/[0.02]">
              <div className="h-48 rounded-3xl overflow-hidden mb-6 relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <h2 className="text-3xl font-black mb-4 tracking-tight">
                {project.title}
              </h2>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                {project.desc}
              </p>

              <div className="space-y-4">
                <Button className="w-full rounded-2xl py-6 font-bold gap-2" asChild>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <Rocket size={18} /> Launch Live Demo
                  </a>
                </Button>
                <Button variant="outline" className="w-full rounded-2xl py-6 font-bold gap-2 bg-white/5 border-white/10" asChild>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Layers size={18} /> View Source Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Side - Detailed Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all z-10"
              >
                <X size={20} />
              </button>

              <div className="space-y-12">
                {sections.map((section, idx) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="relative"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <section.icon size={20} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight">{section.title}</h3>
                    </div>

                    {section.type === "text" ? (
                      <p className="text-muted-foreground leading-relaxed pl-14">
                        {section.content}
                      </p>
                    ) : (
                      <div className="grid sm:grid-cols-2 gap-4 pl-14">
                        {section.content.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all group">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 group-hover:bg-primary transition-colors" />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
