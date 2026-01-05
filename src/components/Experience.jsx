import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "Front-end Developer",
    place: "Harvard University",
    period: "2012 - 2016",
    icon: GraduationCap,
  },
  {
    type: "work",
    title: "Full Stack Developer",
    place: "Google Inc.",
    period: "2016 - 2019",
    icon: Briefcase,
  },
  {
    type: "work",
    title: "Web Designer",
    place: "Apple Inc.",
    period: "2019 - 2022",
    icon: Briefcase,
  },
  {
    type: "work",
    title: "Lead UX Designer",
    place: "Dropbox Inc.",
    period: "2022 - Present",
    icon: Briefcase,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title mb-12">
          Education & <span className="text-gradient">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex gap-4 items-start p-4 rounded-xl bg-card border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                <item.icon size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.place}</p>
              </div>
              <span className="text-muted-foreground text-sm">{item.period}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
