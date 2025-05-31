import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, MapPin, Mail, Flag, Edit2 } from "lucide-react";
import EditProfile from "../../components/EditProfile";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    username: "johndoe",
    email: "john@example.com",
    fullname: "John Doe",
    dob: new Date("1990-01-01"),
    country: "US",
    skills: ["React", "Node.js", "TypeScript", "Python"],
    stats: {
      projects: 24,
      contributions: 142,
      teams: 8,
      followers: 156,
      following: 89
    }
  });

  const handleUpdateProfile = async (updatedData) => {
    try {
      // API call to update profile would go here
      setUser(updatedData);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Profile Header */}
        <div className="relative mb-16">
          <div className="h-80 bg-black rounded-[30px] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
            
            {/* Profile Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center space-y-6">
              <img
                className="w-40 h-40 rounded-full border-4 border-white/90 shadow-xl hover:scale-105 transition-transform duration-300 ease-out"
                src="https://api.dicebear.com/6.x/initials/svg?seed=JD"
                alt="Profile"
              />
              <div>
                <h1 className="text-6xl font-bold text-white drop-shadow-sm tracking-tight">{user.fullname}</h1>
                <p className="text-2xl text-gray-200 mt-2 font-light">@{user.username}</p>
              </div>
            </div>
          </div>
          
          <button 
            className="absolute top-6 right-6 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
            onClick={() => setIsEditing(true)}
          >
            <Edit2 size={16} />
            Edit Profile
          </button>
        </div>

        {/* Remove extra top margin since we don't need it anymore */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - User Info */}
          <div className="space-y-6">
            {/* Basic Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Basic Info</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Mail size={18} />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <CalendarIcon size={18} />
                  <span>{format(user.dob, "MMMM d, yyyy")}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Flag size={18} />
                  <span>{user.country}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin size={18} />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column - Stats & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.entries(user.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-200"
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* Activity Timeline */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Recent Activity</h2>
              <div className="space-y-4">
                {/* Add your activity timeline items here */}
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p>Contributed to Project XYZ</p>
                  <span className="text-sm text-gray-400">2 hours ago</span>
                </div>
                {/* Add more activity items */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isEditing && (
        <EditProfile
          user={user}
          onClose={() => setIsEditing(false)}
          onUpdate={handleUpdateProfile}
        />
      )}
    </div>
  );
};

export default Profile;
