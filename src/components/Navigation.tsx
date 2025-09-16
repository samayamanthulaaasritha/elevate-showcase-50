import { useState, useEffect } from "react";
import { Menu, X, Search, Settings, Home, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

interface NavigationProps {
  onSearchToggle: () => void;
}

const Navigation = ({ onSearchToggle }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav-scrolled" : "glass-nav"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-lg font-bold text-white">P</span>
            </div>
            <span className="text-xl font-display font-semibold gradient-text">
              Projects
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="animated-underline text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="animated-underline text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
            >
              <FolderOpen className="w-4 h-4" />
              Projects
            </button>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="btn-glass p-3"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card mt-2 mx-6 rounded-2xl p-6 border border-border/20">
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                <FolderOpen className="w-4 h-4" />
                <span>Projects</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;