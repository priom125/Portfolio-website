import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Heart, Gamepad2, Coffee } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code, title: "Clean Code", description: "Writing maintainable and scalable code" },
    { icon: Heart, title: "Passionate", description: "Love building innovative solutions" },
    { icon: Gamepad2, title: "Gaming", description: "Enjoy video games in free time" },
    { icon: Coffee, title: "Coffee Lover", description: "Fueled by caffeine and creativity" },
  ];

  return (
    <section id="about" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title mb-4">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Hello! I'm a passionate <span className="text-primary font-medium">Full Stack Web Developer</span> with a deep love for creating elegant, user-centric digital experiences. My journey in programming began during my college years when I built my first website, and I've been hooked ever since.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">My Programming Journey:</span> I started learning HTML and CSS, then progressed to JavaScript and React. Over the years, I've expanded my skills to include backend technologies like Node.js, Express, and MongoDB. I believe in continuous learning and staying updated with the latest technologies.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">What I Enjoy:</span> I thrive on solving complex problems and turning ideas into reality. I particularly enjoy working on projects that challenge me to think outside the box. Whether it's building responsive web applications, optimizing performance, or creating intuitive user interfaces, I find satisfaction in every aspect of development.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Beyond Coding:</span> When I'm not coding, you'll find me playing video games, exploring new places, or diving into a good book. I also enjoy playing cricket on weekends and believe that maintaining a healthy work-life balance is crucial for creativity and productivity.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm always excited to collaborate on interesting projects and connect with fellow developers. Feel free to reach out!
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
