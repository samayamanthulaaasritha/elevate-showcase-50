import { ExternalLink, Github, User } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "in-progress":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "upcoming":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "upcoming":
        return "Upcoming";
      default:
        return status;
    }
  };

  const handleCardClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  return (
    <div
      className={`project-card group fade-in-up stagger-${(index % 4) + 1} cursor-pointer`}
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling!.classList.remove('hidden');
          }}
        />
        <div className="hidden w-full h-48 bg-gradient-primary flex items-center justify-center">
          <div className="text-white text-4xl font-bold">
            {project.teamNumber}
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {project.liveUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, '_blank');
              }}
              className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors"
              aria-label="View live project"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </button>
          )}
          {project.githubUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, '_blank');
              }}
              className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors"
              aria-label="View source code"
            >
              <Github className="w-4 h-4 text-white" />
            </button>
          )}
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(
              project.status
            )}`}
          >
            {getStatusText(project.status)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="text-sm text-primary font-medium mb-2 uppercase tracking-wide">
          {project.category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs bg-muted/20 text-muted-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-muted/20 text-muted-foreground rounded-md">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/10">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>Team {project.teamNumber}</span>
          </div>
          <div className="text-xs">
            Lead: {project.teamLead}
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;