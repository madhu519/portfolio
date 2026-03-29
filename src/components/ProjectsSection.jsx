import { useState, useRef, lazy, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Bot, ShieldAlert, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectDetailsModal from "./ProjectDetailsModal";

const SectionDecorator = lazy(() => import("./3d/SectionDecorator"));

const projects = [
  {
    title: "NexaBot",
    desc: "AI-powered coding platform for practice, analysis, interviews, and learning.",
    overview: "NexaBot is an AI-powered coding platform designed to help users practice programming, analyze their code, and simulate real interview environments. It provides intelligent feedback and personalized learning to improve problem-solving skills.",
    detailedFeatures: [
      "AI-based coding assistant for real-time guidance",
      "Code analysis with instant feedback",
      "Mock interview simulation system",
      "Smart question recommendations",
      "Performance tracking and improvement insights"
    ],
    detailedTech: [
      "Frontend: React with Framer Motion",
      "Backend: Node.js, Express",
      "Database: Firebase / Firestore",
      "AI Integration: Groq API / LLM"
    ],
    howItWorks: [
      "User logs into the platform securely",
      "Selects a coding or interview practice mode",
      "Writes code directly in the code editor",
      "AI analyzes the input and provides feedback",
      "Performance is tracked for continuous improvement"
    ],
    challenges: [
      "Integrating high-speed AI APIs for real-time responses",
      "Handling complex code execution and performance analysis",
      "Designing a scalable backend for concurrent user sessions"
    ],
    futureImprovements: [
      "Voice-based AI interviews for realism",
      "Advanced analytics dashboard for granular tracking",
      "Extended multi-language coding support"
    ],
    tech: ["React", "Node.js", "Firebase", "Groq API", "Express"],
    github: "https://github.com/madhu519/NexaBot",
    live: "#",
    icon: Bot,
  },
  {
    title: "Fake News Detection",
    desc: "An AI-powered system designed to detect and classify fake news using Natural Language Processing.",
    overview: "Fake News Detection is an AI system that utilizes NLP and Machine Learning to distinguish between real and fake news articles, helping to combat misinformation in the digital age.",
    detailedFeatures: [
      "Real-time news classification",
      "Source verification and authenticity checking",
      "Sentiment and bias analysis",
      "Interactive dashboard for news insights",
      "Support for multiple languages and formats"
    ],
    detailedTech: [
      "Language: Python",
      "Libraries: Scikit-learn, NLTK, Pandas",
      "Models: PassiveAggressiveClassifier, TfidfVectorizer",
      "Frontend: Streamlit for interactive UI"
    ],
    howItWorks: [
      "Input a news article or its URL",
      "Preprocess the text (cleaning, stemming, stopword removal)",
      "Convert text to numerical features using TF-IDF",
      "Predict authenticity using the trained ML model",
      "Display results with confidence scores"
    ],
    challenges: [
      "Handling biased and noisy real-world data",
      "Optimizing model accuracy for various news domains",
      "Managing high-volume data during preprocessing"
    ],
    futureImprovements: [
      "Deep Learning (LSTM/BERT) integration for better context",
      "Browser extension for instant verification",
      "Real-time social media feed monitoring"
    ],
    tech: ["Python", "Scikit-learn", "NLP", "Streamlit", "Pandas"],
    github: "https://github.com/madhu519/Fake-News-Detection",
    live: "#",
    icon: ShieldAlert,
  },
  {
    title: "AI Interview Assistant",
    desc: "A mobile application designed to help job seekers practice for technical and HR interviews using AI.",
    overview: "AI Interview Assistant is a platform that uses speech-to-text and NLP to simulate real interview scenarios, providing users with feedback on their performance and suggestions for improvement.",
    detailedFeatures: [
      "Real-time speech-to-text analysis",
      "Intelligent feedback on answer quality",
      "Technical and HR interview simulators",
      "Personalized question generation based on resume",
      "Progress tracking and performance history"
    ],
    detailedTech: [
      "Frontend: React Native / Flutter",
      "AI: OpenAI API / LangChain",
      "Backend: Node.js, Firebase",
      "Speech: Google Cloud Speech-to-Text"
    ],
    howItWorks: [
      "User uploads resume and selects interview type",
      "AI generates and asks relevant questions via voice",
      "User responds naturally via voice input",
      "AI evaluates responses and provides comprehensive feedback",
      "User reviews performance and practices specific areas"
    ],
    challenges: [
      "Achieving high-accuracy speech recognition",
      "Generating contextually relevant interview responses",
      "Ensuring low-latency voice interaction"
    ],
    futureImprovements: [
      "AI-based sentiment and posture analysis via camera",
      "Expert-verified answer database integration",
      "Mock interview sessions with live AI avatars"
    ],
    tech: ["Python", "TensorFlow", "React Native", "OpenAI"],
    github: "https://github.com/madhu519/AI-Interview-Assistant",
    live: "#",
    icon: Mic,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <Suspense fallback={null}>
        <SectionDecorator variant="right" />
      </Suspense>
    
      <div className="container">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-3">
              My Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Featured <span className="gradient-text glow-text">AI & ML Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Selection of my recent work, focusing on Artificial Intelligence, 
              Machine Learning, and intelligent automation.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
              className="glass-card overflow-hidden group gradient-border-glow h-full flex flex-col rounded-xl"
            >
              {/* Clean Gradient Banner Header */}
              <div className="h-56 relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#0A0A0A] via-[#111] to-primary/10 group-hover:to-primary/20 transition-all duration-500 border-b border-white/5">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_0%,transparent_70%)]" />
                
                {/* Visual Icon */}
                <div className="relative mb-4 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p.icon size={48} className="text-primary/40 group-hover:text-primary transition-colors duration-500 relative z-10" />
                </div>

                {/* Project Title Placeholder Header */}
                <h3 className="font-display text-xl font-bold tracking-[0.1em] uppercase text-white/50 group-hover:text-white transition-colors duration-500 text-center px-6">
                  {p.title}
                </h3>
                
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                  <div className="flex gap-6">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                    >
                      <Github size={22} />
                    </a>
                    <a 
                      href={p.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 px-4 py-1.5 bg-black/50 backdrop-blur-md border border-primary/50 text-[10px] font-bold uppercase tracking-widest text-primary z-10 shadow-[0_0_10px_hsl(190_100%_50%_/_0.3)]">
                  AI / ML
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <a href={p.live} className="text-muted-foreground hover:text-primary transition-colors">
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {p.desc}
                </p>

                <div className="space-y-6 mt-auto">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/30 shadow-[0_0_5px_hsl(190_100%_50%_/_0.2)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <Github size={14} /> View Code
                    </a>
                    <button 
                      onClick={() => setSelectedProject(p)}
                      className="sci-fi-button px-4 py-2 hover:text-primary transition-colors flex items-center gap-2 group/btn2"
                    >
                      <span className="text-[10px]">DETAILS</span> <ExternalLink size={14} className="group-hover/btn2:translate-x-0.5 group-hover/btn2:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetailsModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default ProjectsSection;
