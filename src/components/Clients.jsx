import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  { name: "Google", logo: "G" },
  { name: "Apple", logo: "🍎" },
  { name: "Microsoft", logo: "M" },
  { name: "Amazon", logo: "A" },
  { name: "Meta", logo: "⬡" },
  { name: "Netflix", logo: "N" },
];

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="w-24 h-16 rounded-lg bg-card border border-border flex items-center justify-center text-2xl font-bold text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer"
            >
              {client.logo}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Clients;
