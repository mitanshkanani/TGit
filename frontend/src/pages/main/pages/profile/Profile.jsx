import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <div className="h-48 bg-black rounded-xl"></div>
          <div className="absolute -bottom-16 left-8">
            <img
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
              src="https://api.dicebear.com/6.x/initials/svg?seed=JD"
              alt="Profile"
            />
          </div>
        </div>
        <div className="px-8 pt-16">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-black">John Doe</h1>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
            <button className="px-6 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-200">
              Edit Profile
            </button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="border-2 border-black rounded-xl p-6 text-center hover:bg-black hover:text-white transition-all duration-200">
              <div className="text-3xl font-bold">24</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="border-2 border-black rounded-xl p-6 text-center hover:bg-black hover:text-white transition-all duration-200">
              <div className="text-3xl font-bold">142</div>
              <div className="text-sm">Contributions</div>
            </div>
            <div className="border-2 border-black rounded-xl p-6 text-center hover:bg-black hover:text-white transition-all duration-200">
              <div className="text-3xl font-bold">8</div>
              <div className="text-sm">Teams</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
