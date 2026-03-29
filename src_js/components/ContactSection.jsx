import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
const ContactSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:kampalletej@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
        window.open(mailtoLink);
    };
    const contactLinks = [
        { icon: Mail, label: "kampalletej@gmail.com", href: "mailto:kampalletej@gmail.com" },
        { icon: Phone, label: "+91 8309264043", href: "tel:+918309264043" },
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yagnatejeswar-reddy/" },
        { icon: Github, label: "GitHub", href: "https://github.com/tej53" },
    ];
    return (<section id="contact" className="section-padding" ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Let's work together</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-4">
            {contactLinks.map((c) => (<a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <c.icon size={18} className="text-primary"/>
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {c.label}
                </span>
              </a>))}
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="glass rounded-2xl p-8 space-y-5">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Name</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your name"/>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="your@email.com"/>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
              <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell me about your project..."/>
            </div>
            <Button variant="gradient" size="lg" type="submit" className="w-full">
              <Send size={16}/> Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>);
};
export default ContactSection;
