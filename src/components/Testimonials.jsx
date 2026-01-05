import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "Drake is a talented designer who delivered exactly what we needed. His attention to detail and creativity exceeded our expectations. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, Growthly",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "Working with Drake was a game-changer for our brand. He understood our vision perfectly and brought it to life with stunning designs.",
  },
  {
    name: "Emily Davis",
    role: "Founder, Creative Studio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "Exceptional work! Drake's designs are not only beautiful but also highly functional. He's our go-to designer for all projects.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title mb-12">
          Trusted by <span className="text-gradient">Hundreds of Clients</span>
        </h2>

        <div className="relative p-8 rounded-2xl bg-card border border-border">
          <Quote className="text-primary/20 w-16 h-16 absolute top-6 left-6" />
          
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
              />
              <div>
                <h4 className="font-semibold text-foreground">{testimonials[current].name}</h4>
                <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              "{testimonials[current].text}"
            </p>
          </motion.div>

          <div className="flex gap-2 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
