import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Narayanganj College",
    period: "2020 - 2022",
    description: "Graduated with honors. Focused on software engineering and web development.",
  },

];

const experience = [
  // {
  //   title: "Full Stack Developer",
  //   company: "Tech Solutions Inc.",
  //   period: "2022 - Present",
  //   description: "Developing and maintaining web applications using React, Node.js, and MongoDB. Leading a team of 3 developers on client projects.",
  // },
  // {
  //   title: "Frontend Developer Intern",
  //   company: "Digital Agency",
  //   period: "2021 - 2022",
  //   description: "Built responsive websites and implemented UI designs using React and Tailwind CSS. Collaborated with designers and backend developers.",
  // },
  {
    experience: "Currently working as a Freelance Web Developer",
    company: "Self-Employed",
    period: "2025 - Present",
    description: "Building custom websites and web applications for clients using modern web technologies. Focused on delivering high-quality user experiences.",
  }
];

const TimelineItem = ({ item, index, isInView, icon: Icon, type }) => (
  <motion.div
    initial={{ opacity: 0, x: type === "education" ? -30 : 30 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: index * 0.2 }}
    className="relative pl-8 pb-8 border-l-2 border-border last:border-transparent last:pb-0"
  >
    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
      <Icon size={14} className="text-primary-foreground" />
    </div>
    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
        {item.period}
      </span>
      <h3 className="text-lg font-semibold text-foreground mb-1">
        {item.degree || item.title}
      </h3>
      <p className="text-primary font-medium text-sm mb-2">
        {item.institution || item.company}
      </p>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  </motion.div>
);

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" size={28} />
              Education
            </h3>
            <div>
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  index={index}
                  isInView={isInView}
                  icon={GraduationCap}
                  type="education"
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3">
              <Briefcase className="text-primary" size={28} />
              Experience
            </h3>
            <div>
              {experience.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  index={index}
                  isInView={isInView}
                  icon={Briefcase}
                  type="experience"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
