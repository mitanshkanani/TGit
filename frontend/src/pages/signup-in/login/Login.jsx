import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Loader2, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // Your login API call here
      console.log("Login attempt:", formData);
      // Simulate successful login
      setTimeout(() => {
        navigate("/main/");
      }, 1500);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-gray-700" />
        )}
      </Button>

      <Particles
        className="absolute inset-0"
        quantity={100}
        size={0.4}
        color={theme === "dark" ? "#ffffff" : "#000000"}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight"
          >
            Welcome Back
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-lg text-gray-600 dark:text-gray-300"
          >
            Sign in to continue to TGit
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6 border border-gray-200 dark:border-gray-700"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900 dark:text-gray-300 block">
                Email
              </label>
              <Input
                type="email"
                required
                className="block w-full transition-all duration-200 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-300 focus:border-gray-900 dark:focus:border-gray-300"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors({ ...errors, email: "" });
                }}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900 dark:text-gray-300 block">
                Password
              </label>
              <Input
                type="password"
                required
                className="block w-full transition-all duration-200 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-300 focus:border-gray-900 dark:focus:border-gray-300"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  setErrors({ ...errors, password: "" });
                }}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gray-900 hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-white transition-all duration-200 transform hover:scale-[1.02]"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              Register here
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
