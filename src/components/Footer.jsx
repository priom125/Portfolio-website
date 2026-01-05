import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="py-8 border-t border-border text-center"
    >
      <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
        Made with <Heart size={14} className="text-primary fill-primary" /> by Drake © 2025
      </p>
    </motion.footer>
  );
};

export default Footer;
