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
        { icon: Github, href: "https://github.com/tej53" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/yagnatejeswar-reddy/" },
        { icon: Mail, href: "mailto:kampalletej@gmail.com" },
    ];
    return (<footer className="border-t border-border py-12 px-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="font-display text-xl font-bold gradient-text">
            YR.
          </a>

          <ul className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (<li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>))}
          </ul>

          <div className="flex items-center gap-4">
            {socials.map((s) => (<a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200">
                <s.icon size={16}/>
              </a>))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Yagnatejeswar Reddy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>);
};
export default Footer;
