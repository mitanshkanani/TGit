import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black tracking-tight hover:text-gray-600">
              DevHub
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="max-w-lg w-full relative">
              <input
                type="text"
                placeholder="Search repositories..."
                className="w-full px-4 py-2 rounded-full border-2 border-black/10 focus:border-black transition-all duration-200 placeholder:text-gray-400"
              />
              <svg
                className="w-5 h-5 absolute right-3 top-2.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="/main/"
              className="text-black hover:text-gray-600 font-medium"
            >
              Home
            </a>
            <a
              href="/main/project"
              className="text-black hover:text-gray-600 font-medium"
            >
              Projects
            </a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-black/10 py-1">
                  <a
                    href="/main/profile"
                    className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white"
                  >
                    Profile
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
