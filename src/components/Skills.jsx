import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", percentage: 90 },
      { name: "JavaScript", percentage: 85 },
      { name: "HTML/CSS", percentage: 95 },
      { name: "Tailwind CSS", percentage: 90 },
      { name: "TypeScript", percentage: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", percentage: 80 },
      { name: "Express.js", percentage: 85 },
      { name: "MongoDB", percentage: 75 },
      { name: "PostgreSQL", percentage: 70 },
      { name: "REST APIs", percentage: 85 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git/GitHub", percentage: 90 },
      { name: "VS Code", percentage: 95 },
      { name: "Figma", percentage: 70 },
      { name: "Docker", percentage: 60 },
      { name: "AWS", percentage: 55 },
    ],
  },
];

const SkillBar = ({ name, percentage, delay, isInView }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay, duration: 0.5 }}
    className="mb-4"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-foreground font-medium">{name}</span>
      <span className="text-primary font-semibold">{percentage}%</span>
    </div>
    <div className="h-3 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${percentage}%` } : {}}
        transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
      />
    </div>
  </motion.div>
);

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
        <h2 className="section-title mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here are the technologies and tools I work with on a daily basis. I'm constantly learning and expanding my skill set.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.2 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="text-xl font-serif font-semibold text-primary mb-6">
                {category.category}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={catIndex * 0.2 + skillIndex * 0.1}
                  isInView={isInView}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
