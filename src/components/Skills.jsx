import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Figma", percentage: 92, icon: "🎨" },
  { name: "Framer", percentage: 85, icon: "⚡" },
  { name: "Webflow", percentage: 95, icon: "🌊" },
  { name: "WordPress", percentage: 84, icon: "📝" },
  { name: "React", percentage: 90, icon: "⚛️" },
  { name: "Tailwind", percentage: 78, icon: "🎯" },
];

const CircularProgress = ({ percentage, icon, name, delay, isInView }) => {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r="45"
            stroke="hsl(var(--border))"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="56"
            cy="56"
            r="45"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl">
          {icon}
        </div>
      </div>
      <span className="mt-3 font-medium text-foreground">{name}</span>
      <span className="text-sm text-primary">{percentage}%</span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title mb-12">
          My <span className="text-gradient">Advantages</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <CircularProgress
              key={skill.name}
              {...skill}
              delay={index * 0.1}
              isInView={isInView}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
