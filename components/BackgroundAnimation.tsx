"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const texts = [
  "Full Stack Developer",
  "React & Next.js Developer",
  "Node.js Developer",
  "Blockchain Developer",
];

export default function BackgroundAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 5000); // change text every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center overflow-hidden pointer-events-none z-0">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          className="absolute text-4xl font-extrabold select-none whitespace-nowrap 
                     sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[18rem]
                     bg-gradient-to-r from-orange-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent
                     "
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 0.05, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}

        >
          {texts[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}