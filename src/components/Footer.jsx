import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="py-12 border-t border-border"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-serif font-bold text-gradient mb-2 inline-block">
            Portfolio
          </a>
          <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-start gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" /> © {new Date().getFullYear()}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default Footer;
