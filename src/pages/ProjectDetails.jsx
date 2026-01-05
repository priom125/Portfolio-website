import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Code, Lightbulb, AlertTriangle, Rocket } from "lucide-react";
import loanlinkImage from "../assets/loanlink1.png"; // Replace with actual image path
import localeats from "../assets/localeats.png"; // Replace with actual image path
const projectsData = {
 1: {
    id: 1,
    title: "LoanLink - Loan Management System",
    category: "Full Stack",
    image: loanlinkImage,
    description: "A complete loan management solution with repayment tracking, Stripe payment integration, and an administrative approval dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    liveLink: "https://chipper-pie-9d8c5d.netlify.app/",
    githubLink: "https://github.com/priom125/LoanLink",
    challenges: [
      "Designing a secure server-side logic to prevent tampering with loan interest rates and repayment amounts during the checkout process.",
      "Implementing complex role-based access control (RBAC) to separate applicant views from the administrative management dashboard.",
      "Managing the asynchronous lifecycle of Stripe webhooks to ensure MongoDB is accurately updated only after successful payment confirmation.",
      "Developing a multi-step loan application form that preserves state and validates user data at every stage of the funnel."
    ],
    improvements: [
      "Integrate an automated credit scoring algorithm to provide instant loan eligibility feedback to users.",
      "Develop a PDF generation service using PDFKit to allow users to download formal loan agreements and payment statements.",
      "Implement automated email/SMS reminders for upcoming repayment deadlines using Cron jobs and SendGrid.",
      "Add a data visualization suite using Recharts to help admins track total disbursed capital and repayment trends."
    ],
  },
  2: {
    id: 2,
    title: "LocalEats - Food Sharing App",
    category: "Full Stack",
    image: localeats,
    description: "A community-driven platform enabling users to reduce waste by sharing surplus food. Features real-time availability tracking and interactive donor reviews.",
    technologies: ["React", "Tailwind CSS", "Firebase", "Framer Motion", "Express.js", "MongoDB"],
    liveLink: "https://localeatsnj.netlify.app/",
    githubLink: "https://github.com/priom125/Assignment-10",
    challenges: [
      "Synchronizing real-time food availability status across clients to ensure items are marked as 'claimed' instantly, preventing multiple users from arriving for the same item.",
      "Building a complex filtering system in the backend to query MongoDB for food items based on expiration dates and dietary categories.",
      "Optimizing image delivery for food listings to ensure fast page loads without sacrificing the visual appeal of shared meals.",
      "Creating a smooth, accessible UI for food posting and reviewing using Framer Motion for high-quality interactions."
    ],
    improvements: [
      "Incorporate the Google Maps API to provide a 'Near Me' map view for locating available food in the user's immediate vicinity.",
      "Develop an in-app messaging system using Socket.io to allow donors and recipients to coordinate pickups securely.",
      "Implement a 'Trust & Safety' badge system based on user reviews and successful food sharing history.",
      "Add a 'Watchlist' feature that notifies users via push notifications when a specific food category becomes available nearby."
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
        className="pt-16 flex justify-center"
      >
        <div className="aspect-video max-h-[500px] overflow-hidden max-w-4xl w-full">
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
