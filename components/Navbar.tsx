"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Menu, X } from "lucide-react";

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState("");
  const [tagline, setTagline] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTimeAndTagline = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes.toString().padStart(2, "0");

      setCurrentTime(`${displayHours}:${displayMinutes} ${ampm}`);

      if (hours >= 0 && hours < 4) {
        setTagline("Building Tomorrow");
      } else {
        setTagline("Currently Building");
      }
    };

    updateTimeAndTagline();
    const interval = setInterval(updateTimeAndTagline, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#011C2A] py-4 sticky top-0 z-50 shadow-lg border-b border-gray-800"
    >
      <div className="max-w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Profile Image + Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-3 z-10"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <img
              src="/prof.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            
            {/* Animated Green Dot */}
            <div className="absolute top-0 right-0 w-3 h-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full rounded-full bg-green-400 border-2 border-[#011C2A] shadow-lg"
              />
              <motion.div
                animate={{ scale: [1, 2, 2], opacity: [0.7, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full rounded-full bg-green-400"
              />
            </div>
          </div>

          <div className="leading-tight ">
            <h1 className="text-sm sm:text-sm font-bold flex justify-center text-orange-400">
              Idraezy
            </h1>
            <p className="text-xs text-gray-400">{tagline}</p>
          </div>
        </motion.div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative px-4 py-2 text-sm lg:text-base font-semibold transition-colors"
            >
              <span
                className={`relative z-10 ${
                  activeSection === item.id
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                {item.name}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-orange-400/10 rounded-lg border border-orange-400/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right: Current Time */}
        <div className="hidden sm:block text-xs lg:text-sm font-extrabold text-gray-300">
          <span className="text-orange-400">{currentTime}</span> GMT+1
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-orange-400 transition-colors p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <LayoutDashboard size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#011C2A] border-t border-gray-800"
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                activeSection === item.id
                  ? "bg-orange-400/10 text-orange-400 border border-orange-400/30"
                  : "text-gray-300 hover:bg-gray-800 hover:text-orange-400"
              }`}
            >
              {item.name}
            </a>
          ))}
          
          {/* Time in mobile menu */}
          <div className="sm:hidden px-4 py-3 text-sm font-extrabold text-gray-300 border-t border-gray-800 mt-2 pt-4">
            <span className="text-orange-400">{currentTime}</span> GMT+1
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}