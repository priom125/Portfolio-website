import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Sidebar = () => {
  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-[280px] bg-sidebar border-r border-sidebar-border hidden lg:flex flex-col items-center py-10 px-6 z-50"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 mb-6"
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-serif font-semibold text-foreground mb-1"
        >
          Drake
        </motion.h2>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-sm text-muted-foreground mb-4"
        >
          Webflow Designer & Developer
        </motion.p>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 text-muted-foreground text-sm mb-2"
        >
          <Mail size={14} />
          <span>hello@drake.dev</span>
        </motion.div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="flex items-center gap-2 text-muted-foreground text-sm mb-6"
        >
          <MapPin size={14} />
          <span>San Francisco, CA</span>
        </motion.div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-3 mb-8"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <social.icon size={16} />
            </a>
          ))}
        </motion.div>

        <motion.a
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55 }}
          href="#contact"
          className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
        >
          Hire Me!
        </motion.a>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-auto text-xs text-muted-foreground"
      >
        © 2025 Drake. All rights reserved.
      </motion.p>
    </motion.aside>
  );
};

export default Sidebar;
