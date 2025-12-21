"use client";

import { useState, useEffect } from "react";
import {
  Send,
  FileUser,
  Facebook,
  Twitter,
  Linkedin,
  // Instagram,
  Github,
} from "lucide-react";
import { Whatsapp, Instagram, } from "iconsax-react";
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

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/idaraetimm"  },
    { icon: Whatsapp, href: "https://wa.me/2347045256955" },
    { icon: Twitter, href: "https://twitter.com/Idara_etimm" },
    { icon: Linkedin, href: "https://www.Linkedin.com/in/etimidaraubong" },
    { icon: Instagram, href: "https://instagram.com/idaraetimm" },
    { icon: Github, href: "https://github.com/Idraezy" },
  ];

  return (
    <>
      <motion.section
        id="home"
        className="min-h-[72vh]  relative bg-lightBg dark:bg-[#011C2A] transition-colors duration-300 flex flex-col justify-start px-4 sm:px-6 lg:px-8 p-16 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div className="max-w-6xl  mt-20 mx-6 w-[90%] mb-18">
          {/* Greeting */}
          <motion.p
            className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold 
                       text-center lg:text-left flex justify-center lg:justify-start gap-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Hi
            <motion.span
              animate={{ rotate: [0, 15, -10, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block origin-bottom-left"
            >
              ✋
            </motion.span>
            , My Name still Remains...
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
                       text-[#001D2A] dark:text-orange-400 
                       text-center lg:text-left mt-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Idara Etim.
          </motion.h1>

          {/* Profession */}
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
                       text-gray-400 mt-4 
                       text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            I'm a {text}
            <span className="text-orange-400">{cursorVisible ? "|" : " "}</span>
          </motion.p>

          {/* Description */}
          <motion.div
            className="text-gray-400 font-medium leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl 
                       mt-6 max-w-4xl text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="mb-4">
              I'm a Frontend Developer skilled in HTML, CSS, JavaScript, React.js,
              TypeScript, Tailwind CSS, and Next.js, with a strong passion for
              building intuitive, user-focused solutions.
            </p>
            <p>
              Currently expanding expertise in backend development and smart
              contract development, with additional strengths in graphic design
              and active involvement as a Web3 Ambassador.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
      className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
>
  <motion.button
    onClick={scrollToContact}
    whileHover={{ scale: 1.05 }}
    className="border-2 border-orange-400 text-orange-400 px-4 py-2 sm:px-6 sm:py-3 
               font-semibold hover:bg-orange-400 hover:text-white 
               transition-all rounded-full flex items-center justify-center gap-2 cursor-pointer text-center"
  >
    Contact me <Send size={18} />
  </motion.button>

  <motion.a
    href="/Idara_Etim_Resume_Updated.pdf"
    target="_blank"
    rel="noopener noreferrer"
    whileHover="hover"
    className="border-2 border-orange-400 px-6 py-3 sm:px-6 sm:py-3 
               font-semibold rounded-full hover:bg-orange-400 hover:text-white 
               transition-all flex items-center justify-center gap-2 text-orange-400 text-center"
  >
    Resume
    <motion.span
      variants={{
        hover: { scale: 1.2, y: -2 },
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <FileUser className="w-5 inline ml-2 transition-transform duration-500 animate-bounce" />
    </motion.span>
  </motion.a>
  </motion.div>
</motion.div>


        {/* Social Icons at Bottom Center with animation */}
       <motion.div
  className="absolute bottom-9 left-1/2 transform -translate-x-1/2 flex gap-6 justify-center items-center"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }}
>
  {socialLinks.map((social, i) => (
    <motion.a
      key={i}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0 }}
      animate={{
        y: [0, -25, 0], // Jump height increased
        opacity: 1,
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 1.2,
        delay: i * 0.2,
        // ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.25,
        y: -30,
        // transition: { type: "spring", stiffness: 500, damping: 20 },
      }}
      className="text-white hover:text-orange-400 cursor-pointer"
    >
      <social.icon size={25} variant="Linear" color="currentColor" />
    </motion.a>
  ))}
</motion.div>

      </motion.section>

      {/* Bottom Gradient Separator */}
      
      <div className="bg-[#011C2A] px-4 sm:px-6 lg:px-8">
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
