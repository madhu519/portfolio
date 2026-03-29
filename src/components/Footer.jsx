import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/madhu519" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bobbili-madhu-592362342/",
    },
    { icon: Mail, href: "mailto:madhubobbili72@gmail.com" },
  ];

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#home"
            className="font-title text-2xl font-black gradient-text glow-text tracking-widest flex items-baseline"
          >
            MB<span className="text-primary text-3xl opacity-80 animate-pulse ml-1">_</span>
          </a>

          <ul className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Madhu Bobbili. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
