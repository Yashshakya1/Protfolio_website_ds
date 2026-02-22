import { useEffect, useRef } from "react";
import { motion, useAnimation, easeInOut } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import profilePic from "../assets/8EB47BB6-5923-4470-B65C-8B111252B9D6_1_105_c.jpeg";
export default function Hero() {
  const controls = useAnimation();
  const particlesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animated typing effect sequence
    const sequence = async () => {
      await controls.start({ opacity: 1 });
    };
    sequence();

    // Floating particles animation
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 2 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      
      particlesRef.current.appendChild(particle);
      // const particlesRef = useRef<HTMLDivElement | null>(null);
      
      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, [controls]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut
    }
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 20px rgba(187, 197, 214, 0.3)",
      "0 0 40px rgba(31, 187, 23, 0.5)",
      "0 0 20px rgba(143, 195, 47, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easeInOut // use the imported easing function
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.div 
              animate={glowAnimation}
              className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-orange-400 via-yellow-500 to-green-500 rounded-full flex items-center justify-center relative"
            >
              <motion.span 
                // animate={floatingAnimation}
                className="text-5xl font-bold text-white drop-shadow-lg"
              >
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-full" />
              </motion.span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-dashed border-white/30"
              ></motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-6xl sm:text-7xl lg:text-9xl font-light mb-6"
            >
              <motion.span 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="block text-white drop-shadow-xl"
              >
                Yash Shakya
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="block font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-red-600 bg-clip-text text-transparent mt-4"
              >
                Data Scientist
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
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
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl blur-xl"
            ></motion.div>
            <p className="relative text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                Transforming complex data into actionable insights through machine learning,
                statistical analysis, and compelling data visualization. Let's unlock the power of your data together.
              </motion.span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-full text-xl font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
                <span className="relative flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  View My Work
                </span>
              </Button>
            </motion.div>
            
            <div className="flex items-center gap-6">
              {[
                { icon: Mail, href: "mailto:yashshakya787@gmail.com", delay: 2.8 },
                { icon: Linkedin, href: "https://www.linkedin.com/in/yash-shakya-71bab72b5/?originalSubdomain=in", delay: 3.0 },
                { icon: Github, href: "https://github.com/Yashshakya1", delay: 3.2 }
              ].map(({ icon: Icon, href, delay }, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20, rotate: -180 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  href={href}
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            onClick={scrollToNext}
            className="group relative"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-6 hover:bg-white/10 rounded-full transition-colors duration-300 backdrop-blur-sm border border-white/10"
            >
              <ArrowDown className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}