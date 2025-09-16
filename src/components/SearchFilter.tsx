import { useState } from "react";
import { Search, X, Filter, ArrowLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SearchFilterProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
  categories: string[];
  activeCategory: string;
}

const SearchFilter = ({
  isOpen,
  onClose,
  onSearch,
  onFilter,
  categories,
  activeCategory,
}: SearchFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value === "") {
      setHasSearched(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setHasSearched(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      handleSearch();
    }
  };

  const handleBack = () => {
    setSearchQuery("");
    onSearch("");
    setHasSearched(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Search Panel */}
      <div className="relative w-full max-w-2xl mx-4 glass-card p-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold gradient-text">Search & Filter Projects</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search projects by name, technology, or description..."
            className="w-full pl-12 pr-20 py-4 bg-muted/20 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
            autoFocus
          />
          {searchQuery.trim() && !hasSearched && (
            <button
              onClick={handleSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Search
            </button>
          )}
        </div>

        {/* Back to All Projects */}
        {hasSearched && (
          <div className="mb-6">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </button>
          </div>
        )}

        {/* Category Filters with ScrollArea */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span>Filter by category:</span>
          </div>
          
          <ScrollArea className="h-[180px] pr-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onFilter("")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === ""
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "glass hover:bg-muted/20"
                }`}
              >
                All Projects
              </button>
              
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onFilter(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "glass hover:bg-muted/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 pt-6 border-t border-border/20">
          <div className="text-sm text-muted-foreground mb-3">Quick actions:</div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSearchChange("React")}
              className="px-3 py-1.5 text-xs bg-muted/20 hover:bg-muted/30 rounded-md transition-colors"
            >
              React Projects
            </button>
            <button
              onClick={() => handleSearchChange("E-commerce")}
              className="px-3 py-1.5 text-xs bg-muted/20 hover:bg-muted/30 rounded-md transition-colors"
            >
              E-commerce
            </button>
            <button
              onClick={() => handleSearchChange("AI")}
              className="px-3 py-1.5 text-xs bg-muted/20 hover:bg-muted/30 rounded-md transition-colors"
            >
              AI & ML
            </button>
            <button
              onClick={() => handleSearchChange("Mobile")}
              className="px-3 py-1.5 text-xs bg-muted/20 hover:bg-muted/30 rounded-md transition-colors"
            >
              Mobile Apps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;