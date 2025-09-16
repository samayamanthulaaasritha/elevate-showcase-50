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

      {/* Footer */}
      <footer className="py-12 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-sm font-bold text-white">P</span>
              </div>
              <span className="font-display font-semibold gradient-text">Premium Portfolio</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Premium Portfolio. Crafted with passion.
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