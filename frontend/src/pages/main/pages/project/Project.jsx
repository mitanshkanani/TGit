import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewProjectForm from "../../components/NewProjectForm";
import projectData from "../../components/ProjectData.json";

const Project = () => {
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [deadlineSort, setDeadlineSort] = useState("all");
  const navigate = useNavigate();

  const filteredProjects = projectData.projects
    .filter((project) => {
      if (statusFilter === "all") return true;
      return project.status === statusFilter;
    })
    .sort((a, b) => {
      if (deadlineSort === "nearest") {
        return new Date(a.deadline) - new Date(b.deadline);
      }
      if (deadlineSort === "latest") {
        return new Date(b.deadline) - new Date(a.deadline);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">My Projects</h1>
          <button
            onClick={() => setShowNewProjectForm(true)}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-200"
          >
            New Project
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <select
            className="border-2 rounded-lg px-4 py-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>

          <select
            className="border-2 rounded-lg px-4 py-2"
            value={deadlineSort}
            onChange={(e) => setDeadlineSort(e.target.value)}
          >
            <option value="all">Default Sort</option>
            <option value="nearest">Nearest Deadline</option>
            <option value="latest">Latest Deadline</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group border-2 border-black/10 rounded-xl p-6 hover:border-black transition-all duration-200 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-black">
                  {project.name}
                </h2>
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-black">{project.stars}</span>
                </div>
              </div>
              <p className="mt-3 text-gray-600">{project.description}</p>
              <div className="mt-4 space-y-2">
                <span className="inline-block border border-black rounded-full px-3 py-1 text-sm text-black">
                  {project.tech}
                </span>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-sm ${
                      project.status === "completed"
                        ? "text-green-600"
                        : "text-orange-600"
                    }`}
                  >
                    {project.status.charAt(0).toUpperCase() +
                      project.status.slice(1)}
                  </span>
                  <span className="text-sm text-gray-600">
                    Due: {new Date(project.deadline).toLocaleDateString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-black rounded-full h-2"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <NewProjectForm
          isOpen={showNewProjectForm}
          onClose={() => setShowNewProjectForm(false)}
        />
      </div>
    </div>
  );
};

export default Project;
