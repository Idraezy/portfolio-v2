"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Clock, MapPin, Send } from "lucide-react";

function Contact() {
  const text1 = "Prepared to turn your ideas into reality?";
  const text2 = "I'm here to help.";

  // Open mail client
  const contactMe = () => {
    window.location.href = "mailto:idraesynoks@gmail.com";
  };

  // Social links
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Idraezy",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.Linkedin.com/in/etimidaraubong",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/Idara_etimm",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20 bg-[#011C2A] pt-24 pb-16">
      {/* Heading 1 */}
      <motion.p
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-400 mt-5"
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
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-400"
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

      {/* Email Display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mb-6 flex items-center gap-2 text-orange-400 font-semibold text-sm sm:text-base"
      >
        <Mail className="w-5 h-5" />
        <a href="mailto:idraezynoks@gmail.com" className="hover:underline">
          idraezynoks@gmail.com
        </a>
      </motion.div>

      {/* Response Time & Availability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="mb-8 space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
          <Clock className="w-4 h-4 text-orange-400" />
          <span>I typically respond within 24 hours</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
          <MapPin className="w-4 h-4 text-orange-400" />
          <span>GMT+1 • Available for freelance projects</span>
        </div>
      </motion.div>

      {/* Contact Button */}
      <motion.button
        onClick={contactMe}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#001D2A] rounded-full border-2 border-orange-400 text-orange-400 
                   hover:bg-orange-400 hover:text-white px-8 py-4 text-lg sm:text-xl font-semibold
                   transition-all mb-12 flex items-center gap-2 shadow-lg hover:shadow-orange-400/50 cursor-pointer"
      >
        <Send className="w-5 h-5" />
        <span>Send Message</span>
      </motion.button>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-gray-400 text-sm mb-4">Or connect with me on</p>
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.9 + index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full border-2 border-orange-400/30 text-gray-400 ${social.color} transition-all duration-300 hover:border-orange-400`}
              title={social.name}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </motion.div>

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