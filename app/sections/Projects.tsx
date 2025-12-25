"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ExternalLink, Github, Filter, Search, Code2, ArrowUp, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.",
    technologies: ["Figma","React", "TypeScript", "Tailwind CSS", "Framer-motion"],
    category: "Frontend",
    image: "/project1.jpg",
    liveUrl: "https://dali-m2rk.vercel.app/",
    githubUrl: "https://github.com/Idraezy/dali"
  },
  {
    id: 2,
    title: "ATS Pro - Resume & ATS Checker",
    description: "A frontend application that analyzes resumes against job descriptions and provides intelligent suggestions.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "LocalStorage"],
    category: "Frontend",
    image: "/project5.jpg",
    liveUrl: "https://at-sify.vercel.app/",
    githubUrl: "https://github.com/Idraezy/ATSify",
  },
  {
    id: 3,
    title: "Landing Page Generator",
    description: "AI-powered landing page generator with real-time preview and customizable themes.",
    technologies: ["Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    image: "/project6.jpg",
    liveUrl: "https://landing-page-generator-taupe.vercel.app/",
    githubUrl: "https://github.com/Idraezy/Landing-Page-Generator"
  },
  {id: 7,
  title: "Smart Invoice",
  description: "A web application for creating, managing, and exporting professional invoices.",
  technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
  category: "Frontend",
  image: "/project7.jpg",
  liveUrl: "https://smart-invoice-eta.vercel.app/",
  githubUrl: "https://github.com/Idraezy/SmartInvoice"

  },
  {
    id: 4,
    title: "NFT Marketplace",
    description: "Decentralized marketplace for trading NFTs with smart contract integration and wallet connectivity.",
    technologies: ["Figma", "React","Typescript","Tailwind CSS", "Solidity", "Framer-motion"],
    category: "Blockchain",
    image: "/project2.jpg",
    liveUrl: "https://nft-marketplace-22.vercel.app/",
    githubUrl: "https://github.com/Idraezy/NFT-MARKETPLACE-22"
  },
  {
    id: 5,
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, color palette, and marketing materials.",
    technologies: ["Figma", "HTML", "Vanilla CSS", "Vanilla JavaScript"],
    category: "Design",
    image: "/project3.jpg",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    technologies: ["Figma", "HTML", "Vanilla CSS", "Vanilla JavaScript"],
    category: "Design",
    image: "/project4.jpg",
    liveUrl: "https://idraezy.github.io/profile-card/",
    githubUrl: "https://idraezy.github.io/profile-card/"
  },
  
    
  
];

const categories = ["All", "Frontend", "Blockchain", "Design"];

const techDescriptions: Record<string, string> = {
  "Figma": "UI/UX Design Tool",
  "React": "JavaScript Library",
  "TypeScript": "Typed JavaScript",
  "Tailwind CSS": "Utility-First CSS",
  "Framer Motion": "Animation Library",
  "Solidity": "Smart Contract Language",
  "HTML": "Markup Language",
  "Vanilla CSS": "Pure CSS",
  "Vanilla JavaScript": "Pure JavaScript",
  "LocalStorage": "Browser Storage"
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

 const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

  return (
    <section id="projects" className="min-h-screen bg-lightBg dark:bg-[#011C2A] text-lightText dark:text-darkText transition-colors duration-300 pt-24 md:pt-28 lg:pt-32 pb-16">
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-14 xl:mx-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:text-orange-400">
              My Projects
            </h1>
            <Code2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-400" />
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-400 font-semibold text-center">
            A collection of my recent work in Frontend development, Blockchain, and Design.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 flex justify-end w-full"
        >
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full dark:bg-[#012b40] border-2 border-gray-200 dark:border-orange-400/30 dark:text-gray-400 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            <span className="text-xs sm:text-sm font-semibold dark:text-gray-400">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 border-2 ${
                  selectedCategory === category
                    ? 'bg-orange-400 text-white border-orange-400 cursor-pointer'
                    : 'bg-transparent border-[#111827] dark:text-orange-400 hover:bg-orange-400 hover:text-white hover:border-orange-400 dark:hover:text-white cursor-pointer'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 flex items-center gap-2 text-sm dark:text-gray-400"
        >
          <Layers className="w-4 h-4 text-orange-400" />
          <span>Showing <span className="font-bold text-orange-400">{filteredProjects.length}</span> of <span className="font-bold">{projects.length}</span> projects</span>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
          key={`${selectedCategory}-${searchQuery}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white dark:bg-[#012b40] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(251, 146, 60, 0.3), transparent)',
                  filter: 'blur(10px)',
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Pulse Effect on Hover */}
                <motion.div
                  className="absolute inset-0 border-4 border-orange-400 rounded-lg opacity-0"
                  whileHover={{
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 relative z-10">
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-black dark:text-orange-400 mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <motion.span 
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(251, 146, 60, 0.3)'
                      }}
                      className="relative group/tech px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold bg-orange-100 dark:bg-orange-400/20 text-orange-600 dark:text-orange-400 rounded-full cursor-default"
                      title={techDescriptions[tech] || tech}
                    >
                      {tech}
                      {/* Tooltip */}
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-900 text-white rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                        {techDescriptions[tech] || tech}
                      </span>
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <motion.a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(251, 146, 60, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-400 text-white rounded-full font-semibold hover:bg-orange-500 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" /> 
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-[#111827] dark:border-orange-400 text-black dark:text-orange-400 rounded-full font-semibold hover:bg-orange-400 dark:hover:text-white hover:text-white hover:border-orange-400 transition-all duration-300 text-xs sm:text-sm"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" /> 
                      <span>Code</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Category Badge */}
              <motion.div 
                className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-orange-400 text-white text-xs font-bold rounded-full shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {project.category}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20"
          >
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Idraezy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-400 dark:text-orange-400 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-orange-400 text-white rounded-full shadow-lg hover:bg-orange-500 transition-colors duration-300 z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bottom Gradient Separator */}
      <div className="bg-lightBg dark:bg-[#011C2A] px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        />
      </div>
    </section>
  );
}