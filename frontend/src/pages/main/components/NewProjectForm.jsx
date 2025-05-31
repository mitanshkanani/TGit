import React, { useState } from "react";

const NewProjectForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    techStack: [],
    hoursPerWeek: "",
    totalVacancies: "",
    privacy: "public",
    tempTech: "",
  });

  const handleAddTech = () => {
    if (formData.tempTech && !formData.techStack.includes(formData.tempTech)) {
      setFormData({
        ...formData,
        techStack: [...formData.techStack, formData.tempTech],
        tempTech: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center overflow-y-auto py-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl mx-4 shadow-xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Create New Project ✨
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Project Name */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">Project Name</label>
            <input
              type="text"
              className="w-full p-3 border-2 rounded-xl focus:border-black focus:ring-0 transition-colors"
              placeholder="Enter project name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">Description</label>
            <textarea
              className="w-full p-3 border-2 rounded-xl focus:border-black focus:ring-0 transition-colors"
              rows="4"
              placeholder="What's your project about?"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">Tech Stack</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-3 border-2 rounded-xl focus:border-black focus:ring-0"
                placeholder="Add technology"
                value={formData.tempTech}
                onChange={(e) =>
                  setFormData({ ...formData, tempTech: e.target.value })
                }
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), handleAddTech())
                }
              />
              <button
                type="button"
                onClick={handleAddTech}
                className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium flex items-center group"
                >
                  {tech}
                  <button
                    type="button"
                    className="ml-2 text-gray-400 hover:text-red-500"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        techStack: formData.techStack.filter(
                          (_, i) => i !== index
                        ),
                      })
                    }
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Hours per Week */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Hours per Week
              </label>
              <input
                type="number"
                min="1"
                max="168"
                className="w-full p-3 border-2 rounded-xl focus:border-black focus:ring-0"
                placeholder="Expected hours"
                value={formData.hoursPerWeek}
                onChange={(e) =>
                  setFormData({ ...formData, hoursPerWeek: e.target.value })
                }
              />
            </div>

            {/* Total Vacancies */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Total Vacancies
              </label>
              <input
                type="number"
                min="1"
                className="w-full p-3 border-2 rounded-xl focus:border-black focus:ring-0"
                placeholder="Number of positions"
                value={formData.totalVacancies}
                onChange={(e) =>
                  setFormData({ ...formData, totalVacancies: e.target.value })
                }
              />
            </div>
          </div>

          {/* Privacy Setting */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">
              Privacy Setting
            </label>
            <div className="flex gap-4">
              {["public", "private"].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="privacy"
                    value={option}
                    checked={formData.privacy === option}
                    onChange={(e) =>
                      setFormData({ ...formData, privacy: e.target.value })
                    }
                    className="text-black focus:ring-0"
                  />
                  <span className="capitalize">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 border-2 border-black rounded-xl hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2.5 bg-black text-white rounded-xl hover:bg-gray-800"
            >
              Create Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjectForm;
