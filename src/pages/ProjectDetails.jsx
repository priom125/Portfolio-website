import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Code, Lightbulb, AlertTriangle, Rocket } from "lucide-react";

const projectsData = {
  1: {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    description: "A complete e-commerce solution with shopping cart functionality, secure payment integration using Stripe, comprehensive admin dashboard for inventory management, and user authentication. The platform supports multiple payment methods and includes real-time order tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe", "Tailwind CSS", "JWT"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    challenges: [
      "Implementing secure payment gateway integration with proper error handling",
      "Managing complex state for shopping cart across multiple pages",
      "Optimizing database queries for large product catalogs",
      "Ensuring mobile responsiveness for all checkout flows",
    ],
    improvements: [
      "Add AI-powered product recommendations based on user behavior",
      "Implement real-time inventory sync with warehouse systems",
      "Add multi-language support for international customers",
      "Integrate with more payment gateways like PayPal and Apple Pay",
    ],
  },
  2: {
    id: 2,
    title: "Task Management App",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop",
    description: "A collaborative task management application that enables teams to organize, track, and manage projects efficiently. Features include real-time updates, drag-and-drop task organization, team collaboration tools, and deadline tracking with notifications.",
    technologies: ["React", "Tailwind CSS", "Firebase", "Framer Motion", "React DnD"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    challenges: [
      "Implementing real-time synchronization across multiple users",
      "Creating smooth drag-and-drop functionality for task reordering",
      "Managing complex nested data structures for projects and subtasks",
      "Handling offline mode and data synchronization",
    ],
    improvements: [
      "Add Gantt chart view for project timeline visualization",
      "Implement AI-assisted task prioritization",
      "Add integration with calendar apps like Google Calendar",
      "Create mobile apps for iOS and Android",
    ],
  },
  3: {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop",
    description: "A modern, responsive portfolio website designed to showcase projects and skills. Built with performance and accessibility in mind, featuring smooth animations, dark/light mode, and optimized for all devices. The site includes sections for projects, skills, experience, and contact information.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "React Router", "Vite"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    challenges: [
      "Creating smooth scroll-based animations without impacting performance",
      "Ensuring consistent design across different screen sizes",
      "Implementing accessible navigation for keyboard and screen readers",
      "Optimizing images and assets for fast loading times",
    ],
    improvements: [
      "Add a blog section with CMS integration",
      "Implement dark/light mode toggle",
      "Add multilingual support",
      "Create an admin panel for easy content updates",
    ],
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </motion.header>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-16"
      >
        <div className="aspect-video max-h-[500px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Category & Title */}
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            {project.title}
          </h1>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <ExternalLink size={18} />
              Live Preview
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <Github size={18} />
              View Code
            </a>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4 flex items-center gap-3">
              <Lightbulb className="text-primary" size={24} />
              About This Project
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4 flex items-center gap-3">
              <Code className="text-primary" size={24} />
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-card border border-border text-foreground font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4 flex items-center gap-3">
              <AlertTriangle className="text-primary" size={24} />
              Challenges Faced
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-medium">
                    {index + 1}
                  </span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4 flex items-center gap-3">
              <Rocket className="text-primary" size={24} />
              Future Improvements
            </h2>
            <ul className="space-y-3">
              {project.improvements.map((improvement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-medium">
                    {index + 1}
                  </span>
                  {improvement}
                </li>
              ))}
            </ul>
          </div>

          {/* Back Link */}
          <div className="pt-8 border-t border-border">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <ArrowLeft size={18} />
              Back to all projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
