import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Database,
  BrainCircuit,
  BarChart,
  Code,
  Cpu,
  MessageSquare,
  Zap,
  Star
} from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Libraries",
      skills: [
        { name: "Python 3", level: 95, description: "Advanced proficiency in Python programming" },
        { name: "Pandas", level: 90, description: "Data manipulation and analysis" },
        { name: "NumPy", level: 88, description: "Numerical computing and array operations" },
        { name: "Scikit-learn", level: 85, description: "Machine learning algorithms and tools" }
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-slate-800/80 to-blue-900/80"
    },
    {
      icon: BarChart,
      title: "Data Visualization",
      skills: [
        { name: "Matplotlib", level: 90, description: "Statistical data visualization" },
        { name: "Seaborn", level: 88, description: "Statistical data visualization" },
        { name: "Plotly", level: 75, description: "Interactive visualizations" }
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-slate-800/80 to-purple-900/80"
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      skills: [
        { name: "Regression & Classification", level: 92, description: "Predictive modeling techniques" },
        { name: "Clustering", level: 85, description: "Unsupervised learning algorithms" },
        { name: "Model Evaluation", level: 90, description: "Performance metrics and validation" },
        { name: "Feature Engineering", level: 88, description: "Data preprocessing and optimization" }
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-slate-800/80 to-green-900/80"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      skills: [
        { name: "Sentiment Analysis", level: 85, description: "Text emotion and opinion mining" },
        { name: "Text Classification", level: 82, description: "Automated text categorization" },
        { name: "Topic Modeling", level: 78, description: "Document theme extraction" },
        { name: "Tokenization", level: 90, description: "Text preprocessing and parsing" }
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "from-slate-800/80 to-orange-900/80"
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "SQL", level: 88, description: "Complex queries and database management" },
        { name: "Data Warehousing", level: 75, description: "Large-scale data storage solutions" },
        { name: "ETL Processes", level: 80, description: "Data extraction and transformation" },
        { name: "Database Management", level: 82, description: "Optimization and maintenance" }
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-slate-800/80 to-indigo-900/80"
    },
    {
      icon: Cpu,
      title: "Tools & Platforms",
      skills: [
        { name: "Jupyter Notebooks", level: 95, description: "Interactive development environment" },
        { name: "Git & GitHub", level: 85, description: "Version control and collaboration" },
        { name: "VS Code", level: 90, description: "Integrated development environment" },
        { name: "Cloud Platforms", level: 70, description: "AWS, Google Cloud basics" }
      ],
      color: "from-teal-500 to-blue-500",
      bgColor: "from-slate-800/80 to-teal-900/80"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="py-32 bg-slate-900 relative overflow-hidden">

      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
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
          className="text-center mb-20"
        >
          <motion.h2
            className="text-6xl lg:text-7xl font-light mb-8 text-white"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Skills &{" "}
            <span className="font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            A specialized toolkit for data analysis, predictive modeling, and machine learning,
            honed through practical application and continuous learning.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
              }}
              onClick={() => setSelectedCategory(category)}
              className="group relative cursor-pointer"
            >
              <motion.div
                className={`p-8 bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 relative overflow-hidden`}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 mb-8 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-xl relative`}
                  >
                    <category.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <motion.h3 className="text-2xl font-bold mb-6 text-white">
                    {category.title}
                  </motion.h3>

                  <div className="space-y-4">
                    {category.skills.slice(0, 3).map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(skill.level / 20)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-medium shadow-lg`}
                    >
                      <Zap className="w-4 h-4" />
                      View Details
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedCategory(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateX: -15 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-2xl w-full bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 text-white"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${selectedCategory.color} rounded-2xl flex items-center justify-center`}>
                      <selectedCategory.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {selectedCategory.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {selectedCategory.skills.map((skill: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                          <span
                            className={`px-3 py-1 bg-gradient-to-r ${selectedCategory.color} text-white rounded-full text-sm font-medium`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <p className="text-gray-300">{skill.description}</p>

                        <div className="mt-4">
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className={`h-full bg-gradient-to-r ${selectedCategory.color} rounded-full`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(null)}
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
