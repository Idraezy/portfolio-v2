"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const texts = [
  "Website Developer",
  "Blockchain Developer",
  "Web Designer",
  "Graphics Designer",
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
                     "
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 0.08, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ color: "#0096C7" }}
        >
          {texts[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}