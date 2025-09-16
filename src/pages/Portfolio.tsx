import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectGrid, { useProjectCategories } from "@/components/ProjectGrid";
import SearchFilter from "@/components/SearchFilter";
import LoadingAnimation from "@/components/LoadingAnimation";

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = useProjectCategories();

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (category: string) => {
    setActiveCategory(category);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearchToggle={toggleSearch} />
      
      <main>
        <Hero />
        <ProjectGrid searchQuery={searchQuery} activeCategory={activeCategory} />
      </main>

      {/* Enhanced Footer */}
      <footer className="py-16 border-t border-border/20 bg-gradient-to-br from-background via-background to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <span className="text-lg font-bold text-white">P</span>
                </div>
                <span className="text-xl font-display font-semibold gradient-text">Projects</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Showcasing innovative web applications developed by talented second-year students at KIET.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>KIET Group of Institutions</p>
                <p>Computer Science Department</p>
                <p>Second Year Projects</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 KIET Projects. Crafted with passion by talented students.
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Made with ❤️ by KIET Students</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Search Filter Modal */}
      <SearchFilter
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearch}
        onFilter={handleFilter}
        categories={categories}
        activeCategory={activeCategory}
      />
    </div>
  );
};

export default Portfolio;