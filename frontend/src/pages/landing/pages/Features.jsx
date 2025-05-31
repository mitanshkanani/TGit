import React from 'react';
import FeaturesCard from '../components/FeaturesCard';
import { motion } from 'framer-motion';

const featuresData = [
  {
    title: "Smart Git Integration",
    description: "Seamlessly integrate with Git repositories and manage your workflow efficiently.",
    icon: "Github"
  },
  {
    title: "Branch Management",   // Shortened title for consistency
    description: "Visualize and manage Git branches with an intuitive interface. Create, merge, and delete branches with ease.",
    icon: "GitBranch"
  },
  {
    title: "Automated Workflows",
    description: "Automate your development workflow with custom actions and triggers.",
    icon: "Share2"
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time with live updates and notifications.",
    icon: "Users2"
  }
];

const Features = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12" // Increased gap
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {featuresData.map((feature, index) => (
        <FeaturesCard
          key={index}
          {...feature}
        />
      ))}
    </motion.div>
  );
};

export default Features;