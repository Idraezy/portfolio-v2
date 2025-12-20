"use client";

import { useState, useEffect } from "react";
import { Send, File, Facebook, Twitter, Linkedin, Instagram, Github, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const professions = [
  "Frontend Developer",
  "Blockchain Developer (Training)",
  "Graphic Designer",
  "Technical Writer",
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing effect
  useEffect(() => {
    if (letterIndex < professions[current].length) {
      const interval = setInterval(() => {
        setText((prev) => prev + professions[current][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 100);
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setLetterIndex(0);
        setCurrent((prev) => (prev + 1) % professions.length);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, current]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Scroll to contact section
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/yourprofile", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/2347045256955", label: "WhatsApp" },
    { icon: Twitter, href: "https://twitter.com/yourprofile", label: "X (Twitter)" },
    { icon: MessageCircle, href: "https://t.me/yourprofile", label: "Telegram" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/yourprofile", label: "Instagram" },
    { icon: Github, href: "https://github.com/yourprofile", label: "GitHub" },
  ];

  return (
    <>
      <motion.section
        id="home"
        className="min-h-screen bg-lightBg dark:bg-[#011C2A] text-lightText dark:text-darkText transition-colors duration-300 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="max-w-6xl mx-auto w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {/* Greeting with waving hand */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-400 dark:text-gray-400 mb-2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hi{" "}
            <motion.span
              className="inline-block origin-bottom-left"
              animate={{ rotate: [0, 15, -10, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            >
              ✋
            </motion.span>
            , My Name still Remains...
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-orange-400 text-[#001D2A] mb-2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Idara Etim.
          </motion.h1>

          {/* Profession Typing */}
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 dark:text-gray-400 mb-6 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            I'm a {text}
            <span className="text-orange-400">{cursorVisible ? "|" : " "}</span>
          </motion.p>

          {/* Description */}
          <motion.div
            className="text-gray-400 font-medium leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="mb-4">
              I'm a Frontend Developer skilled in HTML, CSS, JavaScript, React.js,
              TypeScript, Tailwind CSS, and Next.js, with a strong passion for building 
              intuitive, user-focused solutions.
            </p>
            <p>
              Currently expanding expertise in backend development and smart
              contract development, with additional strengths in graphic design and 
              active involvement as a Web3 Ambassador.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            {/* Contact Button */}
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-orange-400 text-orange-400 
                         p-3 px-5 cursor-pointer hover:bg-orange-400 hover:text-white text-base 
                         font-semibold transform transition-all 
                         duration-300 ease-in-out flex items-center justify-center gap-2 group"
            >
              Contact me 
              <Send className="w-5 transition-transform duration-500 group-hover:translate-x-1" />
            </motion.button>

            {/* Resume Button */}
            <motion.a
              href="/Idara_Etim_Resume_Updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-[#111827] dark:border-orange-400 dark:text-orange-400 
                         hover:bg-orange-500 dark:hover:bg-orange-400 p-3 px-8 cursor-pointer font-semibold 
                         hover:text-white transform transition-all duration-300 ease-in-out flex items-center 
                         justify-center gap-2 group"
            >
              Resume
              <File className="w-5 transition-transform duration-500 group-hover:scale-110" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap gap-4 justify-start items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border-2 border-gray-600 dark:border-gray-700 
                           flex items-center justify-center text-gray-400 hover:text-orange-400 
                           hover:border-orange-400 transition-all duration-300 cursor-pointer 
                           hover:shadow-lg hover:shadow-orange-400/20"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Separator Line */}
      <div className="bg-[#011C2A] px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        />
      </div>
    </>
  );
}