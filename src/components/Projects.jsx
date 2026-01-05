import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import loanlinkImage from "../assets/loanlink.png"; // Replace with actual image path
import localeats from "../assets/localeats.png"; // Replace with actual image path
const projects = [
  {
    id: 1,
    title: "LoanLink - Loan Management System",
    category: "Full Stack",
    image: loanlinkImage,
    description: "A complete loan management solution with cart, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://chipper-pie-9d8c5d.netlify.app/",
    githubLink: "https://github.com/priom125/LoanLink",
  },
  {
     id: 2,
    title: "LocalEats - food sharing App",
    category: "Full Stack",
    image: localeats,
    description: "A collaborative food sharing application that enables users to organize, track, and manage food sharing efficiently. Features include real-time updates, drag-and-drop  food reviews.",
    technologies: ["React", "Tailwind CSS", "Firebase", "Framer Motion", "express js", "mongoDB"],
    liveLink: "https://localeatsnj.netlify.app/",
    githubLink: "https://github.com/priom125/Assignment-10",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    description: "A modern, responsive portfolio website showcasing projects and skills.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    liveLink: "https://magnificent-gecko-afbbd0.netlify.app/",
    githubLink: "https://github.com/priom125/Portfolio-website",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here are some of my recent projects. Each project is built with care and attention to detail.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View More Button */}
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                >
                  <Eye size={16} />
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
