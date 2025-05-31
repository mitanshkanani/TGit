import React from "react";
import { motion } from "framer-motion";
import LandingNavbar from "./components/LandingNavbar";
import { Button } from "@/components/ui/button";
import Carousel from "./pages/Carousel";
import Features from "./pages/Features";
import Footer from "./components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <LandingNavbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Transform Your Git Experience
                <motion.span
                  className="text-primary"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                >
                  .
                </motion.span>
              </motion.h1>

              <motion.p
                className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Streamline your Git workflow with powerful tools and intuitive
                interface. Built for developers who want to focus on what
                matters most.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button size="lg" className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 text-foreground border-border hover:bg-accent hover:text-accent-foreground"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="flex-1"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-full h-[400px] bg-gradient-to-tr from-primary/10 to-primary/5 dark:from-primary/20 dark:to-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Hero Image Placeholder</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      <section className="bg-secondary/50 dark:bg-secondary/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground text-center mb-4">
              Powerful Features
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Everything you need to manage your Git workflow efficiently
            </p>
          </motion.div>
          
          <Carousel />
          
          <div className="mt-24">
            <Features />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
