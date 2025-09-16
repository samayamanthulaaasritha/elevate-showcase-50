import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects, getProjectCategories, type Project } from "@/data/projects";

interface ProjectGridProps {
  searchQuery: string;
  activeCategory: string;
}

const ProjectGrid = ({ searchQuery: externalSearchQuery, activeCategory }: ProjectGridProps) => {
  const [internalSearchQuery, setInternalSearchQuery] = useState("");
  const searchQuery = externalSearchQuery || internalSearchQuery;

  // Filter projects based on search query and active category
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = searchQuery === "" || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory = activeCategory === "" || 
        project.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our collection of innovative solutions crafted with precision and creativity
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={internalSearchQuery}
                onChange={(e) => setInternalSearchQuery(e.target.value)}
                placeholder="Search projects by name, technology, or description..."
                className="w-full pl-12 pr-4 py-4 bg-muted/20 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
              />
            </div>
            {internalSearchQuery && (
              <button
                onClick={() => setInternalSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
            {searchQuery && (
              <button
                onClick={() => setInternalSearchQuery("")}
                className="mt-4 text-primary hover:text-primary/80 transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
export const useProjectCategories = getProjectCategories;