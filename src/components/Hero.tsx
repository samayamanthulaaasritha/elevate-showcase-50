import { ArrowDown, Github } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 fade-in-up">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              <span className="gradient-text">KIET WOMENS 2ND YEARS</span>
              <br />
              <span className="text-foreground">PROJECTS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed stagger-1 fade-in-up">
              Showcasing innovative web applications developed by talented second-year students.
              <br />
              <span className="text-primary font-medium">Learning, creating, and building amazing projects together.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-12 stagger-2 fade-in-up">
            <button
              onClick={scrollToProjects}
              className="btn-premium group"
            >
              View Our Work
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center stagger-3 fade-in-up">
            <a
              href="https://github.com/samayamanthulaaasritha/elevate-showcase-50"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-primary/10 transition-all duration-300 group"
              aria-label="GitHub Repository"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mt-16 stagger-4 fade-in-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text font-display">20+</div>
              <div className="text-sm md:text-base text-muted-foreground mt-1">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text font-display">98%</div>
              <div className="text-sm md:text-base text-muted-foreground mt-1">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToProjects}
          className="p-3 glass rounded-full hover:bg-primary/10 transition-all duration-300"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;