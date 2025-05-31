import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const LandingNavbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b border-border/40 bg-background/80 dark:bg-background/50 backdrop-blur-xl fixed w-full z-50"
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
              <span className="ml-2 text-xl font-bold text-foreground">TGit</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Button 
              variant="ghost" 
              className="text-foreground hover:bg-secondary"
              asChild
            >
              <a href="/login">Login</a>
            </Button>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="/register">Sign Up</a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  >
                    {theme === "light" ? (
                      <Moon className="w-5 h-5" />
                    ) : (
                      <Sun className="w-5 h-5" />
                    )}
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-foreground hover:bg-secondary w-full"
                    asChild
                  >
                    <a href="/login">Login</a>
                  </Button>
                  <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                    asChild
                  >
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
