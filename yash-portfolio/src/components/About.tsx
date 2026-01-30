
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Clock, Brain, Target, Lightbulb } from "lucide-react";

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const stats = [
    { icon: Brain, label: "ML Models Built", value: "25+", color: "from-purple-500 to-pink-500" },
    { icon: Users, label: "Projects Completed", value: "15+", color: "from-blue-500 to-cyan-500" },
    { icon: Target, label: "Accuracy Achieved", value: "95%+", color: "from-green-500 to-emerald-500" },
    { icon: Lightbulb, label: "Data Insights", value: "∞", color: "from-orange-500 to-red-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 rounded-full blur-xl"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                  "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                  "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -inset-4 rounded-3xl blur-2xl"
            />
            
            <h2 className="relative text-6xl lg:text-7xl font-light mb-8 text-white">
              About <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
              {[
                "As a data scientist, I am driven by a curiosity for uncovering the stories hidden within data. My expertise lies in applying rigorous statistical methods and machine learning techniques to solve real-world problems.",
                "With a strong foundation in Python and its data-centric libraries, I specialize in building predictive models, performing in-depth exploratory data analysis, and developing natural language processing solutions. I am passionate about transforming raw data into clear, impactful business intelligence.",
                "I thrive in collaborative environments and am always eager to tackle new challenges that push the boundaries of data science. Let's connect and explore how data can drive our success."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-slate-700/50 transition-all duration-300"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 20px 60px rgba(59, 130, 246, 0.2)",
                    "0 20px 60px rgba(147, 51, 234, 0.3)",
                    "0 20px 60px rgba(59, 130, 246, 0.2)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src="src/assets/8EB47BB6-5923-4470-B65C-8B111252B9D6_1_105_c.jpeg"
                  alt="Portrait of Yash Shakya"
                  className="w-full h-full object-cover filter group-hover:contrast-110 group-hover:brightness-110 transition-all duration-500"
                />
              </motion.div>
              
              {/* Floating Data Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  className={`absolute w-3 h-3 bg-gradient-to-r ${stats[i % 4]?.color} rounded-full blur-sm`}
                  style={{
                    top: `${20 + i * 12}%`,
                    left: `${10 + (i % 2) * 80}%`
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-32"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" 
              }}
              className="text-center group relative"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
              >
                <stat.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-3"
              >
                {stat.value}
              </motion.div>
              
              <div className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">
                {stat.label}
              </div>
              
              {/* Hover Effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}