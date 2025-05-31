import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { GitBranch, Github, Share2, Users2 } from "lucide-react";

const iconMap = {
  Github: Github,
  GitBranch: GitBranch,
  Share2: Share2,
  Users2: Users2,
};

const FeaturesCard = ({ title, description, icon }) => {
  const IconComponent = iconMap[icon];
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="h-full" // Add this to ensure equal height
    >
      <Card className="relative overflow-hidden group border border-border/50 dark:bg-secondary/50 h-full flex flex-col">
        <CardHeader className="space-y-1 flex-shrink-0">
          <motion.div
            className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
          </motion.div>
          <h3 className="text-xl font-semibold text-foreground line-clamp-1">{title}</h3>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform" />
      </Card>
    </motion.div>
  );
};

export default FeaturesCard;