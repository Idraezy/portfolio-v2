"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import Image from 'next/image';

// Place all images inside the public/images folder for Next.js
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.",
    technologies: ["Figma","React", "TypeScript", "Tailwind CSS", "Framer-motion"],
    category: "Frontend",
    image: "/images/project1.jpg",
    liveUrl: "https://dali-m2rk.vercel.app/",
    githubUrl: "https://github.com/Idraezy/dali"
  },
  {
    id: 2,
    title: "ATS Pro - Resume & ATS Checker",
    description: "A frontend application that analyzes resumes against job descriptions and provides intelligent suggestions.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "LocalStorage"],
    category: "Frontend",
    image: "/images/project5.jpg",
    liveUrl: "https://at-sify.vercel.app/",
    githubUrl: "https://github.com/Idraezy/ATSify",
  },
  {
    id: 3,
    title: "Landing Page Generator",
    description: "AI-powered landing page generator with real-time preview and customizable themes.",
    technologies: ["Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    image: "/images/project6.jpg",
    liveUrl: "https://landing-page-generator-taupe.vercel.app/",
    githubUrl: "https://github.com/Idraezy/Landing-Page-Generator"
  },
  {
    id: 4,
    title: "NFT Marketplace",
    description: "Decentralized marketplace for trading NFTs with smart contract integration and wallet connectivity.",
    technologies: ["Figma", "React","Typescript","Tailwind CSS", "Solidity", "Framer-motion"],
    category: "Blockchain",
    image: "/images/project2.jpg",
    liveUrl: "https://nft-marketplace-22.vercel.app/",
    githubUrl: "https://github.com/Idraezy/NFT-MARKETPLACE-22"
  },
  {
    id: 5,
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, color palette, and marketing materials.",
    technologies: ["Figma", "HTML", "Vanilla CSS", "Vanilla JavaScript"],
    category: "Design",
    image: "/images/project3.jpg",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    technologies: ["Figma", "HTML", "Vanilla CSS", "Vanilla JavaScript"],
    category: "Design",
    image: "/images/project4.jpg",
    liveUrl: "https://idraezy.github.io/profile-card/",
    githubUrl: "https://idraezy.github.io/profile-card/"
  },
];

const categories = ["All", "Frontend", "Blockchain", "Design"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="min-h-screen bg-lightBg dark:bg-[#011C2A] text-lightText dark:text-darkText transition-colors duration-300 pt-24 md:pt-28 lg:pt-32 pb-16">
      <div className="mx-6 sm:mx-10 md:mx-14 lg:mx-20">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-orange-400 mb-4">My Projects</h1>
          <p className="text-base sm:text-lg md:text-xl text-black dark:text-white font-semibold">
            A collection of my recent work in Frontend development, Blockchain, and Design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-semibold text-black dark:text-white">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-400 text-white border-2 border-orange-400'
                    : 'bg-transparent border-2 border-[#111827] dark:border-orange-400 text-black dark:text-orange-400 hover:bg-orange-400 hover:text-white hover:border-orange-400 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="group relative bg-white dark:bg-[#012b40] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-orange-400 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-xs font-semibold bg-orange-100 dark:bg-orange-400/20 text-orange-600 dark:text-orange-400 rounded-full">{tech}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-orange-400 text-white rounded-full font-semibold hover:bg-orange-500 transition-colors duration-300 text-sm">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border-2 border-[#111827] dark:border-orange-400 text-black dark:text-orange-400 rounded-full font-semibold hover:bg-orange-400 dark:hover:text-white hover:text-white hover:border-orange-400 transition-all duration-300 text-sm">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-orange-400 text-white text-xs font-bold rounded-full shadow-lg">{project.category}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-gray-400">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
