import React from "react";
import { toast } from "sonner";

const ProjectApplyCard = ({ project }) => {
  const handleApply = () => {
    toast.success(`Applied to ${project.name}`, {
      description: "The project owner will be notified of your interest.",
      duration: 3000,
    });
  };

  return (
    <div className="group border-2 border-black/10 rounded-xl p-6 hover:border-black transition-all duration-200 flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-black">{project.name}</h2>
          <p className="text-sm text-gray-500 mt-1">by {project.author}</p>
        </div>
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
      <p className="mt-3 text-gray-600 flex-grow">{project.description}</p>
      <div className="mt-4 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="inline-block border border-black rounded-full px-3 py-1 text-xs text-black"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{project.difficulty}</span>
          <span className="text-gray-500">Team: {project.teamSize}</span>
          <span className="text-gray-500">{project.category}</span>
        </div>
        <button
          onClick={handleApply}
          className="w-full py-2 mt-2 border-2 border-black rounded-full text-black hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          </svg>
          <span>Apply Now</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectApplyCard;
