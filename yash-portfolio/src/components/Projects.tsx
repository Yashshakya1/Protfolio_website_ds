import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Eye } from "lucide-react";
import { Button } from "../components/ui/button";

// Type definitions
interface ProjectType {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  color: string;
  metrics: Record<string, string>;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: ProjectType[] = [
    {
  id: 1,
  title: "End-to-End Real Estate Price Prediction System",
  description: "Built a complete machine learning regression system to predict real estate prices with an interactive Streamlit UI.",
  fullDescription:
    "Developed a full end-to-end machine learning project for real estate price prediction. The project includes data preprocessing, exploratory data analysis (EDA), feature engineering, model building using regression algorithms, and performance evaluation using R², MAE, and RMSE metrics. Built an interactive user interface using Streamlit and deployed the application on Render for live access. This project demonstrates complete ML lifecycle from data to deployment.",
  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  tags: [
    "Machine Learning",
    "Python",
    "Regression",
    "Scikit-learn",
    "Streamlit",
    "Render",
    "Deployment"
  ],
  github: "https://github.com/Yashshakya1/Machine_learning_projects",
  live: "https://machine-learning-projects-1-0p38.onrender.com", // add your Render deployed link here
  color: "from-green-500 to-emerald-500",
  metrics: {
    type: "Regression Model",
    deployment: "Streamlit + Render",
    projectLevel: "End-to-End ML System"
  },
},
    {
      id: 2,
      title: "Sentiment Analysis Engine",
      description: "NLP-powered engine analyzing real-time customer sentiment.",
      fullDescription:
        "Developed an NLP engine for processing text from social media, reviews, and customer feedback. Provides real-time sentiment scoring and trend analysis.",
      image: "https://images.unsplash.com/photo-1557838923-a1e9a4e2a6a9?w=800&h=600&fit=crop",
      tags: ["NLP", "Python", "Seaborn", "Text Processing"],
      github: "https://github.com/Yashshakya1",
      live: "#",
      color: "from-purple-500 to-pink-500",
      metrics: { accuracy: "89%", languages: "3", sources: "5+" },
    },
    {
      id: 3,
      title: "Interactive Sales Dashboard",
      description: "Dynamic dashboard with real-time KPIs and trend analytics.",
      fullDescription:
        "Created a business intelligence dashboard with SQL + Python. Supports real-time filtering, drill-down, and daily automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Data Visualization", "SQL", "Matplotlib", "BI"],
      github: "https://github.com/Yashshakya1",
      live: "#",
      color: "from-green-500 to-emerald-500",
      metrics: { kpis: "15+", users: "50+", updates: "Real-time" },
    },
    {
      id: 4,
      title: "Market Basket Analysis",
      description: "Mining product associations using Python + SQL.",
      fullDescription:
        "Implemented Apriori & FP-growth algorithms to discover buying patterns, generating 500+ rules. Helped increase AOV by 15%.",
      image: "https://images.unsplash.com/photo-1580674287405-80cd238c7b8b?w=800&h=600&fit=crop",
      tags: ["SQL", "NumPy", "Pandas", "Association Rules"],
      github: "https://github.com/Yashshakya1",
      live: "#",
      color: "from-orange-500 to-red-500",
      metrics: { rules: "500+", confidence: "85%", lift: "3.2x" },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 15 },
    },
  };

  return (
    <div className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">

      {/* Background particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 80 - 40],
              y: [0, Math.random() * 80 - 40],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 12 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl lg:text-7xl font-light text-white mb-6">
            Selected{" "}
            <span className="font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A showcase of my data science projects across ML, NLP, and BI.
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {projects.map((project: ProjectType) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group"
            >
              <motion.div
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden transition-all duration-500"
                animate={{
                  boxShadow:
                    hoveredProject === project.id
                      ? "0 25px 60px rgba(0,0,0,0.4)"
                      : "0 10px 30px rgba(0,0,0,0.25)",
                }}
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Tags */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white text-sm rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-100 mb-6">{project.description}</p>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Button variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" /> Code
                      </a>
                    </Button>

                    <Button
                      onClick={() => setSelectedProject(project)}
                      className={`bg-gradient-to-r ${project.color} text-white flex items-center gap-2`}
                    >
                      <Eye className="w-4 h-4" /> View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
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
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-slate-800 text-gray-200 rounded-3xl overflow-hidden border border-white/20"
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 text-lg mb-6">
                  {selectedProject.fullDescription}
                </p>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>

                  <Button
                    asChild
                    className={`bg-gradient-to-r ${selectedProject.color}`}
                  >
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
