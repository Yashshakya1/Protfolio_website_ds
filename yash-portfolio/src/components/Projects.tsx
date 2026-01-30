
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, Code, Zap } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Predictive Churn Model",
      description: "Developed a machine learning model to predict customer churn, enabling proactive retention strategies with 94% accuracy.",
      fullDescription: "Built an end-to-end machine learning pipeline using Python, Pandas, and Scikit-learn to predict customer churn. Implemented feature engineering, model selection, and hyperparameter tuning to achieve 94% accuracy. The model processes customer behavior data and transaction patterns to identify at-risk customers 30 days in advance.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop",
      tags: ["Machine Learning", "Python", "Pandas", "Scikit-learn"],
      github: "https://github.com/Yashshakya1",
      live: "#",
      color: "from-blue-500 to-cyan-500",
      metrics: { accuracy: "94%", features: "25+", dataset: "50k rows" }
    },
    {
      id: 2,
      title: "Sentiment Analysis Engine",
      description: "Built an NLP-powered engine to analyze customer feedback sentiment from various sources with real-time processing.",
      fullDescription: "Developed a comprehensive sentiment analysis system using Natural Language Processing techniques. The engine processes text data from multiple sources including social media, reviews, and customer feedback to provide real-time sentiment scores and trends analysis.",
      image: "https://images.unsplash.com/photo-1557838923-a1e9a4e2a6a9?w=800&h=600&fit=crop",
      tags: ["NLP", "Python", "Seaborn", "Text Processing"],
      github: "https://github.com/Yashshakya1",
      live: "#",
      color: "from-purple-500 to-pink-500",
      metrics: { accuracy: "89%", languages: "3", sources: "5+" }
    },
    {
      id: 3,
      title: "Interactive Sales Dashboard",
      description: "Designed and implemented a dynamic dashboard using SQL and Python to visualize sales trends and KPIs.",
      fullDescription: "Created an interactive business intelligence dashboard that connects to multiple data sources and provides real-time insights into sales performance, customer behavior, and market trends. Features advanced filtering, drill-down capabilities, and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Data Visualization", "SQL", "Matplotlib", "BI"],
      github: "https://github.com/Yashshakya1",
      live: "#",
      color: "from-green-500 to-emerald-500",
      metrics: { kpis: "15+", updates: "Real-time", users: "50+" }
    },
    {
      id: 4,
      title: "Market Basket Analysis",
      description: "A data mining project to discover associations between products using SQL and Python libraries for retail optimization.",
      fullDescription: "Implemented association rule mining algorithms to identify purchasing patterns and product relationships. The analysis revealed key insights for cross-selling strategies and inventory optimization, resulting in 15% increase in average order value.",
      image: "https://images.unsplash.com/photo-1580674287405-80cd238c7b8b?w=800&h=600&fit=crop",
      tags: ["SQL", "NumPy", "Pandas", "Association Rules"],
      github: "https://github.com/Yashshakya1",
      live: "#",
      color: "from-orange-500 to-red-500",
      metrics: { rules: "500+", confidence: "85%", lift: "3.2x" }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2 
            className="text-6xl lg:text-7xl font-light mb-8 text-white"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Selected <span className="font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of my data science projects spanning machine learning, NLP, 
            and business intelligence solutions that drive real-world impact.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <motion.div 
                className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500"
                animate={{
                  boxShadow: hoveredProject === project.id 
                    ? "0 25px 50px rgba(0, 0, 0, 0.3)" 
                    : "0 10px 30px rgba(0, 0, 0, 0.2)"
                }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay with metrics */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6"
                  >
                    <div className="flex gap-4 text-white text-sm">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <motion.div
                          key={key}
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-center"
                        >
                          <div className="font-bold text-lg">{value}</div>
                          <div className="text-xs capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: tagIndex * 0.1 }}
                        className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white text-sm rounded-full shadow-lg`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 backdrop-blur-sm"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className={`flex items-center gap-2 bg-gradient-to-r ${project.color} hover:shadow-lg hover:shadow-blue-500/25 border-0`}
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-slate-800 text-gray-200 rounded-3xl overflow-hidden border border-white/20"
            >
              <div className="aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {selectedProject.fullDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 bg-gradient-to-r ${selectedProject.color} text-white text-sm rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setSelectedProject(null)} className="bg-transparent border-gray-500 text-gray-200 hover:bg-gray-700 hover:text-white">
                    Close
                  </Button>
                  <Button asChild className={`bg-gradient-to-r ${selectedProject.color}`}>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}