"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import { Whatsapp, Instagram } from "iconsax-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/idaraetimm" },
  { icon: Whatsapp, href: "https://wa.me/2347045256955" },
  { icon: Twitter, href: "https://twitter.com/Idara_etimm" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/etimidaraubong" },
  { icon: Instagram, href: "https://instagram.com/idaraetimm" },
  { icon: Github, href: "https://github.com/Idraezy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#011C2A] w-full py-8 flex flex-col items-center justify-center">
      {/* Social Icons */}
      <motion.div
        className="flex gap-6 justify-center items-center mb-4"
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
              y: [0, -10, 0],
              opacity: 1,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1.2,
              delay: i * 0.2,
            }}
            whileHover={{
              scale: 1.25,
              y: -15,
            }}
            className="text-gray-400 hover:text-orange-400 cursor-pointer"
          >
            <social.icon size={25} variant="Linear" color="currentColor" />
          </motion.a>
        ))}
      </motion.div>

      {/* Copyright */}
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Idara Etim. All rights reserved.
      </p>
    </footer>
  );
}
