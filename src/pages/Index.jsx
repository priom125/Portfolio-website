import Sidebar from "../components/Sidebar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Specializations from "../components/Specializations.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Clients from "../components/Clients.jsx";
import Pricing from "../components/Pricing.jsx";
import Footer from "../components/Footer.jsx";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 lg:ml-[280px]">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
          <Hero />
          <About />
          <Experience />
          <Specializations />
          <Skills />
          <Projects />
          <Testimonials />
          <Clients />
          <Pricing />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
