"use client";

import { motion } from "framer-motion";

function Contact() {
  const text1 = "Prepared to turn your ideas into reality?";
  const text2 = "I'm here to help.";

  // Open mail client
  const contactMe = () => {
    window.location.href = "mailto:idraesynoks@gmail.com";
  };

  return (
    <section className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20 bg-[#011C2A] ">
      {/* Heading 1 */}
      <motion.p
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-400 mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {text1.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>

      {/* Heading 2 */}
      <motion.p
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {text2.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>

      {/* Contact Button */}
      <motion.button
        onClick={contactMe}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="bg-[#001D2A] rounded-full border-2 border-orange-400 text-orange-400 
                   hover:bg-orange-400 hover:text-white px-8 py-4 text-xl font-semibold
                   transition-all mb-16"
      >
        Contact Me
      </motion.button>

      {/* Bottom Gradient Separator */}
      <div className="bg-[#011C2A] px-4 sm:px-6 lg:px-8 w-full">
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

export default Contact;
