import React, { useState, useMemo } from "react";
import ProjectApplyCard from "../../components/ProjectApplyCard";
import projectData from "../../components/ProjectApplyData.json";
import { Toaster } from "sonner";

const Start = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("recent");

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = [...projectData.projects];

    // Apply category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "recent":
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "stars":
        filtered.sort((a, b) => b.stars - a.stars);
        break;
      case "active":
        filtered = filtered.filter((project) => project.status === "Active");
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black">Explore Projects</h1>
            <p className="text-gray-600 mt-2">
              {filteredAndSortedProjects.length} projects available
            </p>
          </div>
          <div className="flex space-x-4">
            <select
              className="px-4 py-2 border-2 border-black rounded-full text-sm hover:bg-black hover:text-white transition-colors duration-200"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All Categories</option>
              {projectData.categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              className="px-4 py-2 border-2 border-black rounded-full text-sm hover:bg-black hover:text-white transition-colors duration-200"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="recent">Most Recent</option>
              <option value="stars">Most Stars</option>
              <option value="active">Active Projects</option>
            </select>
          </div>
        </div>

        {filteredAndSortedProjects.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl text-gray-600">
              No projects found for the selected category
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProjects.map((project) => (
              <ProjectApplyCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Start;
