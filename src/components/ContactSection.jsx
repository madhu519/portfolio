import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Github, Send, Loader2, CheckCircle2, AlertCircle, ExternalLink, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const [form, setForm] = useState({ name: "", email: "", message: "", botCheck: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  // Clear states after delay
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const copyEmail = () => {
    navigator.clipboard.writeText("madhubobbili72@gmail.com");
    setCopied(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam Protection
    if (form.botCheck !== "") return;

    // Basic Validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("All fields are required.");
      return;
    }

    setIsSending(true);

    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          from_name: "Portfolio Inquiry",
          subject: `New Message from ${form.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        toast.success("Message sent successfully! ✅", {
          description: "Check your email (madhubobbili72@gmail.com) to see the delivery.",
          icon: <CheckCircle2 className="text-emerald-500" size={18} />,
        });
        setForm({ name: "", email: "", message: "", botCheck: "" });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      
      // If the error is likely due to a missing key, provide a helpful link
      if (ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
        toast.error("Configuration Required", {
          description: "Please add your Web3Forms Access Key to the .env file.",
          action: {
            label: "Get Key (Free)",
            onClick: () => window.open("https://web3forms.com/#export-data", "_blank"),
          },
          duration: 10000,
        });
      } else {
        toast.error("Transmission failed.", {
          description: "Wait a moment or try the direct mail links on the left.",
          icon: <AlertCircle className="text-destructive" size={18} />,
        });
      }
    } finally {
      setIsSending(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "madhubobbili72@gmail.com",
      href: "mailto:madhubobbili72@gmail.com",
      title: "Direct Email"
    },
    { 
      icon: Phone, 
      label: "+91 7396488210", 
      href: "tel:+917396488210",
      title: "Mobile Contact"
    },
    {
      icon: Linkedin,
      label: "/in/bobbili-madhu",
      href: "https://www.linkedin.com/in/bobbili-madhu-592362342/",
      title: "LinkedIn"
    },
    { 
      icon: Github, 
      label: "github.com/madhu519", 
      href: "https://github.com/madhu519",
      title: "GitHub"
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[160px] opacity-20 -z-10 animate-pulse" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-none">
                Let's <br /><span className="gradient-text glow-text">Connect</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                Have a project in mind? Reach out via the form, or use any of the channels below.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactLinks.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.icon === Mail ? `https://mail.google.com/mail/?view=cm&fs=1&to=madhubobbili72@gmail.com&su=Contact from Portfolio&body=Hi Madhu, I want to connect with you` : c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="group flex items-center gap-5 glass-card p-5 rounded-xl border border-primary/20 hover:border-primary/80 transition-all duration-300 cursor-pointer shadow-[0_0_10px_hsl(var(--primary)_/_0.1)] hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <c.icon size={22} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">{c.title}</h4>
                    <p className="text-sm font-semibold truncate">{c.label}</p>
                  </div>
                  {c.icon === Mail && (
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); copyEmail(); }}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors relative z-20"
                    >
                      {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    </button>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="glass-card rounded-2xl p-8 md:p-12 border border-primary/30 relative overflow-hidden shadow-[0_0_30px_hsl(var(--primary)_/_0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50 -z-10" />
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="text" className="hidden" value={form.botCheck} onChange={(e) => setForm({...form, botCheck: e.target.value})} />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70 ml-2">Your Name</label>
                    <input
                      type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-white/[0.03] border border-primary/20 rounded-xl px-6 py-4 text-sm focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)_/_0.3)] transition-all outline-none"
                      disabled={isSending}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70 ml-2">Your Email</label>
                    <input
                      type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="hello@example.com"
                      className="w-full bg-white/[0.03] border border-primary/20 rounded-xl px-6 py-4 text-sm focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)_/_0.3)] transition-all outline-none"
                      disabled={isSending}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70 ml-2">Mission Details</label>
                  <textarea
                    required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-white/[0.03] border border-primary/20 rounded-xl px-6 py-5 text-sm focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)_/_0.3)] transition-all outline-none resize-none"
                    disabled={isSending}
                  />
                </div>

                <div className="relative">
                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="w-full h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center gap-3 text-emerald-400 font-bold"
                      >
                        <CheckCircle2 size={24} /> Sent Successfully!
                      </motion.div>
                    ) : (
                      <motion.div key="button" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <button
                          type="submit" disabled={isSending}
                          className="sci-fi-button w-full h-16 flex items-center justify-center gap-3 active:scale-95 transition-all text-base tracking-[0.2em]"
                        >
                          {isSending ? (
                            <>
                              <Loader2 size={20} className="animate-spin" />
                              TRANSMITTING...
                            </>
                          ) : (
                            <>
                              DISPATCH MESSAGE <Send size={18} />
                            </>
                          )}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;



