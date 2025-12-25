"use client"


import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserRound,
  Mail,
  PhoneCall,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  ShieldCheck,
  Dumbbell,
  Blend,
} from "lucide-react";

type InfoProps = {
  icon: ReactNode;
  text: string;
};

function Info({ icon, text }: InfoProps) {
  return (
    <div className="flex items-center gap-3 text-gray-400">
      <span className="text-orange-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("personal");

  const experiences = [
    {
      company: "Freelance",
      role: "Frontend Developer",
      period: "2023 – Present",
      description: "Building modern, responsive, and animated web interfaces using React.js, TypeScript, Tailwind CSS, and Framer Motion with strong focus on UX and performance.",
    },
    {
      company: "Chaindustry",
      role: "Frontend Developer (Internship)",
      period: "2023 – Present",
      description: "Worked on real-world frontend projects in a collaborative development environment.",
    },
    {
      company: "HNG",
      role: "Frontend Developer (Internship)",
      period: "2025 – Present",
      description: "Participated in an intensive internship focused on building production-ready frontend applications.",
    },
  ];

  const techStack = [
    ["HTML", "CSS", "JavaScript"],
    ["TypeScript", "React.js", "Next.js"],
    ["Tailwind CSS", "Framer Motion", ""],
  ];

  const tools = [["VS Code", "Git", "Figma"]];

  return (
    <>
      <section id="about" className="min-h-screen bg-[#011C2A] text-gray-400 px-4 sm:px-8 py-16 transition-colors duration-300">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <header className="flex justify-center items-center text-2xl font-bold sm:text-3xl md:text-3xl lg:text-4xl gap-3 mb-8">
            About Me <Blend className="text-orange-400 inline" />
          </header>
          <div className="flex justify-center gap-4 flex-wrap">
            {["personal", "experience", "skills"].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer ${activeTab === tab ? "bg-orange-400 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "personal" && (
            <motion.div key="personal" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }} className="flex justify-center w-full sm:w-auto lg:w-auto ">
                  <div className="w-64 h-64 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-gray-400">
                    <img src="/prof.jpg" alt="Idara Etim" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }} className="flex-1 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-400">Unmatched Service Quality for Over 2 Years</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">Adept at solving complex problems, writing clean and efficient code, and continuously improving performance. A collaborative team player committed to agile development practices and ongoing professional growth. Currently expanding expertise in backend and smart contract development, with strengths in graphic design and Web3 advocacy.</p>
                  <div className="space-y-3">
                    <Info icon={<UserRound />} text="Idara Ubong Etim" />
                    <Info icon={<Mail />} text="idraezynoks@gmail.com" />
                    <Info icon={<MapPin />} text="Nigeria" />
                    <Info icon={<PhoneCall />} text="+234 (0)704 525 6955" />
                    <Info icon={<GraduationCap />} text="SSCE, WASSCE, NECO" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-orange-400 font-semibold mb-2">Language Skills</h3>
                    <hr className="border-gray-600 mb-2" />
                    <p className="text-gray-400">English, Ibibio, French, Latin (Beginner)</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div key="experience" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3"><BriefcaseBusiness className="text-orange-400" />My Experience</h2>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }} className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-gray-400 ">
                  <img src="/prof.jpg" alt="Profile" className="w-full h-full object-cover" />
                </motion.div>
                <div className="flex-1 text-center lg:text-left space-y-6">
                  {experiences.map((exp, idx) => (
                    <motion.div key={idx} className="relative border-l-2 border-orange-400 pl-6 group cursor-pointer" whileHover={{ y: -2 }}>
                      <span className="absolute -left-2 top-1 w-3 h-3 bg-orange-400 rounded-full" />
                      <h4 className="font-semibold text-lg">{exp.company}</h4>
                      <p className="text-gray-400 text-sm">{exp.role}</p>
                      <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                      <motion.div className="absolute right-0 top-0" initial={{ y: 0 }} whileHover={{ y: 6 }}>
                        <Dumbbell className="text-blue-500" size={20} />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div key="skills" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-400">My Arsenal</h2>
              <div className="mb-10">
                <h3 className="text-orange-400 font-semibold mb-3">Tech Stack</h3>
                <hr className="border-gray-600 mb-4" />
                {techStack.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-4 mb-3">
                    {row.map((skill, idx) => skill && (
                      <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="flex items-center gap-2 text-sm">
                        <ShieldCheck size={18} className="text-orange-400" />{skill}
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-orange-400 font-semibold mb-3">Tools</h3>
                <hr className="border-gray-600 mb-4" />
                {tools.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-4">
                    {row.map((tool, idx) => tool && (
                      <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }} className="flex items-center gap-2 text-sm">
                        <ShieldCheck size={18} className="text-orange-400" />{tool}
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <div className="bg-[#011C2A] px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeInOut" }} className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
      </div>
    </>
  );
}