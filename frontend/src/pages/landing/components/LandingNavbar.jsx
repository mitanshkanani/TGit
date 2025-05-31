import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const LandingNavbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b bg-white/50 backdrop-blur-md fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="/logo-placeholder.svg"
                alt="Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">TGit</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" asChild>
              <a href="/login">Login</a>
            </Button>
            <Button asChild>
              <a href="/signup">Sign Up</a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-6">
                  <Button variant="ghost" asChild className="w-full">
                    <a href="/login">Login</a>
                  </Button>
                  <Button asChild className="w-full">
                    <a href="/signup">Sign Up</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default LandingNavbar;
