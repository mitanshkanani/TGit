import React from "react";
import ProjectApplyCard from "../../components/ProjectApplyCard";
import projectData from "../../components/ProjectApplyData.json";
import { Toaster } from "sonner";

const Start = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black">Explore Projects</h1>
            <p className="text-gray-600 mt-2">
              Discover what others are building
            </p>
          </div>
          <div className="flex space-x-4">
            <select className="px-4 py-2 border-2 border-black rounded-full text-sm hover:bg-black hover:text-white transition-colors duration-200">
              <option>All Categories</option>
              <option>Web Development</option>
              <option>Mobile Apps</option>
              <option>AI/ML</option>
              <option>Finance</option>
            </select>
            <select className="px-4 py-2 border-2 border-black rounded-full text-sm hover:bg-black hover:text-white transition-colors duration-200">
              <option>Most Recent</option>
              <option>Most Stars</option>
              <option>Most Active</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.projects.map((project) => (
            <ProjectApplyCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Start;
