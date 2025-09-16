import { useState, useEffect } from "react";
import { Plus, ArrowLeft, Save, Trash2, Edit3, Eye, ExternalLink, Github, X, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { projects as initialProjects, type Project } from "@/data/projects";

const AdminDashboard = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [inlineEditingId, setInlineEditingId] = useState<number | null>(null);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const [formData, setFormData] = useState<{
    teamNumber: number;
    teamLead: string;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    status: "completed" | "in-progress" | "upcoming";
    liveUrl: string;
    githubUrl: string;
    image: string;
  }>({
    teamNumber: 0,
    teamLead: "",
    title: "",
    description: "",
    category: "",
    technologies: [] as string[],
    status: "completed" as const,
    liveUrl: "",
    githubUrl: "",
    image: ""
  });

  const resetForm = () => {
    setFormData({
      teamNumber: 0,
      teamLead: "",
      title: "",
      description: "",
      category: "",
      technologies: [],
      status: "completed",
      liveUrl: "",
      githubUrl: "",
      image: ""
    });
    setShowAddForm(false);
    setEditingProject(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProject) {
      // Update existing project
      setProjects(prev => prev.map(p => 
        p.id === editingProject.id 
          ? { ...formData, id: editingProject.id }
          : p
      ));
    } else {
      // Add new project
      const newProject: Project = {
        ...formData,
        id: Math.max(...projects.map(p => p.id)) + 1
      };
      setProjects(prev => [...prev, newProject]);
    }
    
    resetForm();
  };

  const handleEdit = (project: Project) => {
    setFormData({
      teamNumber: project.teamNumber,
      teamLead: project.teamLead,
      title: project.title,
      description: project.description,
      category: project.category,
      technologies: project.technologies,
      status: project.status,
      liveUrl: project.liveUrl || "",
      githubUrl: project.githubUrl || "",
      image: project.image
    });
    setEditingProject(project);
    setShowAddForm(true);
  };

  const handleInlineEdit = (project: Project) => {
    setInlineEditingId(project.id);
    setFormData({
      teamNumber: project.teamNumber,
      teamLead: project.teamLead,
      title: project.title,
      description: project.description,
      category: project.category,
      technologies: project.technologies,
      status: project.status,
      liveUrl: project.liveUrl || "",
      githubUrl: project.githubUrl || "",
      image: project.image
    });
  };

  const handleInlineSave = () => {
    if (inlineEditingId) {
      setProjects(prev => prev.map(p => 
        p.id === inlineEditingId 
          ? { ...formData, id: inlineEditingId }
          : p
      ));
      setInlineEditingId(null);
    }
  };

  const handleInlineCancel = () => {
    setInlineEditingId(null);
    resetForm();
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleTechnologiesChange = (value: string) => {
    const techs = value.split(',').map(tech => tech.trim()).filter(Boolean);
    setFormData(prev => ({ ...prev, technologies: techs }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="glass-nav">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Portfolio</span>
              </Link>
            </div>
            
            <h1 className="text-xl font-display font-semibold gradient-text">
              Admin Dashboard
            </h1>

            <button
              onClick={() => setShowAddForm(true)}
              className="btn-premium flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Project</span>
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="glass-card overflow-hidden group hover:shadow-lg transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-primary flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">
                    {project.teamNumber}
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                    project.status === "completed" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                    project.status === "in-progress" ? "bg-blue-500/20 text-blue-400 border-blue-500/30" :
                    "bg-amber-500/20 text-amber-400 border-amber-500/30"
                  }`}>
                    {project.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors"
                      title="View Live"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors"
                      title="View Source"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {inlineEditingId === project.id ? (
                  /* Inline Editing Mode */
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        value={formData.teamNumber}
                        onChange={(e) => setFormData(prev => ({ ...prev, teamNumber: Number(e.target.value) }))}
                        className="text-sm px-2 py-1 bg-input border border-border rounded"
                        placeholder="Team #"
                      />
                      <input
                        type="text"
                        value={formData.teamLead}
                        onChange={(e) => setFormData(prev => ({ ...prev, teamLead: e.target.value }))}
                        className="text-sm px-2 py-1 bg-input border border-border rounded"
                        placeholder="Team Lead"
                      />
                    </div>
                    
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full text-lg font-semibold px-2 py-1 bg-input border border-border rounded"
                      placeholder="Project Title"
                    />
                    
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full text-sm px-2 py-1 bg-input border border-border rounded resize-none"
                      rows={3}
                      placeholder="Description"
                    />
                    
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={formData.category}
                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                        className="text-sm px-2 py-1 bg-input border border-border rounded"
                        placeholder="Category"
                      />
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
                        className="text-sm px-2 py-1 bg-input border border-border rounded"
                      >
                        <option value="completed">Completed</option>
                        <option value="in-progress">In Progress</option>
                        <option value="upcoming">Upcoming</option>
                      </select>
                    </div>

                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                      className="w-full text-sm px-2 py-1 bg-input border border-border rounded"
                      placeholder="Image URL"
                    />
                    
                    <div className="grid grid-cols-1 gap-2">
                      <input
                        type="url"
                        value={formData.liveUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, liveUrl: e.target.value }))}
                        className="text-sm px-2 py-1 bg-input border border-border rounded"
                        placeholder="Live URL"
                      />
                      <input
                        type="url"
                        value={formData.githubUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
                        className="text-sm px-2 py-1 bg-input border border-border rounded"
                        placeholder="GitHub URL"
                      />
                    </div>
                    
                    <input
                      type="text"
                      value={formData.technologies.join(', ')}
                      onChange={(e) => handleTechnologiesChange(e.target.value)}
                      className="w-full text-sm px-2 py-1 bg-input border border-border rounded"
                      placeholder="Technologies (comma-separated)"
                    />
                    
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={handleInlineCancel}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        title="Cancel"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleInlineSave}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        title="Save Changes"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Display Mode */
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-primary">
                        Team {project.teamNumber}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.teamLead}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 line-clamp-1">{project.title}</h3>
                    
                    <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-md mb-3">
                      {project.category}
                    </span>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-muted/20 text-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-muted/20 text-muted-foreground rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border/20">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setPreviewProject(project)}
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          title="Preview"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleInlineEdit(project)}
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          title="Quick Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(project)}
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          title="Full Edit"
                        >
                          <Save className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add/Edit Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={resetForm} />
            
            <div className="relative glass-card max-w-2xl w-full m-6 max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">
                  {editingProject ? "Edit Project" : "Add New Project"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Team Number</label>
                      <input
                        type="number"
                        value={formData.teamNumber}
                        onChange={(e) => setFormData(prev => ({ ...prev, teamNumber: Number(e.target.value) }))}
                        className="w-full px-3 py-2 bg-input border border-border rounded-lg"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Team Lead</label>
                      <input
                        type="text"
                        value={formData.teamLead}
                        onChange={(e) => setFormData(prev => ({ ...prev, teamLead: e.target.value }))}
                        className="w-full px-3 py-2 bg-input border border-border rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Project Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg h-24"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Category</label>
                      <input
                        type="text"
                        value={formData.category}
                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full px-3 py-2 bg-input border border-border rounded-lg"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Status</label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
                        className="w-full px-3 py-2 bg-input border border-border rounded-lg"
                      >
                        <option value="completed">Completed</option>
                        <option value="in-progress">In Progress</option>
                        <option value="upcoming">Upcoming</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Technologies (comma-separated)</label>
                    <input
                      type="text"
                      value={formData.technologies.join(', ')}
                      onChange={(e) => handleTechnologiesChange(e.target.value)}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg"
                      placeholder="React, TypeScript, Node.js"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Project Image URL</label>
                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg"
                      placeholder="/src/assets/project-example.jpg"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Live URL (optional)</label>
                      <input
                        type="url"
                        value={formData.liveUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, liveUrl: e.target.value }))}
                        className="w-full px-3 py-2 bg-input border border-border rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">GitHub URL (optional)</label>
                      <input
                        type="url"
                        value={formData.githubUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
                        className="w-full px-3 py-2 bg-input border border-border rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-premium"
                    >
                      {editingProject ? "Update Project" : "Add Project"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Preview Modal */}
        {previewProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setPreviewProject(null)} />
            
            <div className="relative glass-card max-w-4xl w-full m-6 max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Preview Header */}
                <div className="p-6 border-b border-border/20">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Project Preview</h2>
                    <button
                      onClick={() => setPreviewProject(null)}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Preview Content */}
                <div className="p-6">
                  {/* Project Image */}
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                    <img
                      src={previewProject.image}
                      alt={previewProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                        previewProject.status === "completed" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                        previewProject.status === "in-progress" ? "bg-blue-500/20 text-blue-400 border-blue-500/30" :
                        "bg-amber-500/20 text-amber-400 border-amber-500/30"
                      }`}>
                        {previewProject.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-primary font-medium">Team {previewProject.teamNumber}</span>
                        <span className="text-sm text-muted-foreground ml-3">{previewProject.teamLead}</span>
                      </div>
                      <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md">
                        {previewProject.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold">{previewProject.title}</h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {previewProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {previewProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-muted/20 text-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {(previewProject.liveUrl || previewProject.githubUrl) && (
                      <div className="flex space-x-4 pt-4">
                        {previewProject.liveUrl && (
                          <a
                            href={previewProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-premium flex items-center space-x-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>View Live</span>
                          </a>
                        )}
                        {previewProject.githubUrl && (
                          <a
                            href={previewProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost flex items-center space-x-2"
                          >
                            <Github className="w-4 h-4" />
                            <span>View Source</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;