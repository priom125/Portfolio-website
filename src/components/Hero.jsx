import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "182+", label: "Projects Completed" },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
          Say Hi from{" "}
          <span className="text-gradient">Drake,</span>
          <br />
          Webflow Designer
          <br />
          and Developer
        </h1>

        <p className="text-muted-foreground text-lg max-w-lg mb-8">
          I design and develop experiences that make people's lives simpler through Web and Mobile apps.
        </p>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all mb-16"
        >
          <ArrowDown size={24} />
        </motion.a>

        <div className="flex gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
