import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import * as countryData from "country-flag-icons/unicode";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

const skillOptions = [
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Vue.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "DevOps",
  "Machine Learning",
  "Data Science",
  "Blockchain",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
];

const countries = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "IN", name: "India" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "CN", name: "China" },
  { code: "BR", name: "Brazil" },
  { code: "RU", name: "Russia" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "KR", name: "South Korea" },
  { code: "NL", name: "Netherlands" },
];

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullname: "",
    dob: new Date(),
    country: "",
    profilePic: null,
    skills: [],
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // Your API call here
      console.log("Form submitted:", formData);
      // Simulate successful registration
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSkillSelect = (value) => {
    if (!formData.skills.includes(value)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value],
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePic: file });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-extrabold text-gray-900"
          >
            Join TGit Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-lg text-gray-600"
          >
            Create your account and start collaborating
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture Section */}
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="h-32 w-32 rounded-full overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center border-2 border-gray-200">
                  {formData.profilePic ? (
                    <img
                      src={URL.createObjectURL(formData.profilePic)}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl text-gray-400 group-hover:text-gray-500 transition-colors">
                      +
                    </span>
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer transform transition-transform hover:scale-110 border border-gray-200">
                  <input
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </label>
              </motion.div>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Username
                </label>
                <Input
                  type="text"
                  required
                  className="mt-1 border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                    setErrors({ ...errors, username: "" });
                  }}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <Input
                  type="email"
                  required
                  className="mt-1 border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setErrors({ ...errors, email: "" });
                  }}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Full Name
                </label>
                <Input
                  type="text"
                  required
                  className="mt-1"
                  value={formData.fullname}
                  onChange={(e) =>
                    setFormData({ ...formData, fullname: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 block">
                  Date of Birth
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal border-gray-300",
                        !formData.dob && "text-gray-500"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-900" />
                      {formData.dob
                        ? format(formData.dob, "PPP")
                        : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.dob}
                      onSelect={(date) =>
                        setFormData({ ...formData, dob: date })
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Country
                </label>
                <Select
                  value={formData.country}
                  onValueChange={(value) =>
                    setFormData({ ...formData, country: value })
                  }
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <span className="flex items-center">
                          {countryData[country.code]} {country.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <Input
                  type="password"
                  required
                  className="mt-1 border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                    setErrors({ ...errors, password: "" });
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  required
                  className="mt-1 border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    });
                    setErrors({ ...errors, confirmPassword: "" });
                  }}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Skills
                </label>
                <Select onValueChange={handleSkillSelect}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select skills" />
                  </SelectTrigger>
                  <SelectContent>
                    {skillOptions.map((skill) => (
                      <SelectItem key={skill} value={skill}>
                        {skill}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-900 border border-gray-200"
                    >
                      {skill}
                      <button
                        type="button"
                        className="ml-1 text-gray-600 hover:text-gray-900"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            skills: formData.skills.filter((s) => s !== skill),
                          })
                        }
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gray-900 hover:bg-black text-white transition-all duration-200 transform hover:scale-[1.02]"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Creating account...</span>
                </div>
              ) : (
                "Create Account"
              )}
            </Button>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-gray-900 hover:text-black transition-colors duration-200"
              >
                Login here
              </Link>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
