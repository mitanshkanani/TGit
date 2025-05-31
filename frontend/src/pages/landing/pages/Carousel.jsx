import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
    title: "Git Workflow"
  },
  {
    url: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
    title: "Code Management"
  },
  {
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Version Control"
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <motion.div 
      className="relative w-full max-w-4xl mx-auto h-[400px] rounded-xl overflow-hidden"
      onHoverStart={() => setIsAutoPlaying(false)}
      onHoverEnd={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/50 hover:bg-background/75 backdrop-blur-sm"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/50 hover:bg-background/75 backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </Button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-primary/50'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Carousel;