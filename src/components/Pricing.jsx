import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$499",
    period: "per project",
    features: [
      "1 Page Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "3 Revisions",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$999",
    period: "per project",
    features: [
      "5 Page Website",
      "Responsive Design",
      "Advanced SEO",
      "CMS Integration",
      "Unlimited Revisions",
      "Priority Support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$2499",
    period: "per project",
    features: [
      "Unlimited Pages",
      "Custom Development",
      "E-commerce Features",
      "Performance Optimization",
      "Dedicated Manager",
      "24/7 Support",
    ],
    featured: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title mb-12">
          My <span className="text-gradient">Pricing</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 rounded-2xl border ${
                plan.featured
                  ? "bg-primary/10 border-primary"
                  : "bg-card border-border"
              } card-hover`}
            >
              <h3 className="font-serif text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <Check size={18} className="text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
