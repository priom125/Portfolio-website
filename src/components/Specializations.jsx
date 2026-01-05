import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Smartphone, Layers } from "lucide-react";

const specializations = [
  {
    icon: Palette,
    title: "Website Design",
    description: "I create elegant, modern designs optimized for the best user experience.",
  },
  {
    icon: Code,
    title: "Development",
    description: "I build websites that are fast, secure, and easy to maintain with modern tech.",
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    description: "I design digital products that are both beautiful and highly functional.",
  },
  {
    icon: Layers,
    title: "SEO Marketing",
    description: "I optimize websites for search engines to improve visibility and traffic.",
  },
];

const Specializations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="specializations" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title mb-12">
          My <span className="text-gradient">Specializations</span>
        </h2>

        <div className="space-y-4">
          {specializations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-6 rounded-xl bg-card border border-border card-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Specializations;
