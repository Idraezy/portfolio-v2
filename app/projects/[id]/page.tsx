"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Clock,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Star,
  Zap,
  Globe,
  Code2,
  Loader2,
} from "lucide-react";

// ─── Project Data ─────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.",
    overview:
      "This project is a comprehensive e-commerce solution built with modern web technologies. It features a responsive storefront, product catalog with filtering, a fully functional shopping cart, secure payment integration, and a powerful admin dashboard for inventory and order management. The UI was first prototyped in Figma before being implemented with pixel-perfect accuracy.",
    technologies: ["Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    image: "/project1.jpg",
    screenshots: ["/project1.jpg"],
    liveUrl: "https://dali-m2rk.vercel.app/",
    githubUrl: "https://github.com/Idraezy/dali",
    role: "Frontend Developer (Solo)",
    status: "live",
    keyHighlights: [
      "Designed and implemented a full storefront with product listings and filtering",
      "Built a dynamic shopping cart with persistent state using localStorage",
      "Integrated payment gateway for seamless checkout experience",
      "Created a responsive admin dashboard for managing products and orders",
      "Achieved smooth page transitions and micro-interactions with Framer Motion",
    ],
  },
  {
    id: 2,
    title: "Gym Platform",
    description:
      "A modern fitness and gym platform focused on premium UI/UX, responsive layouts, animated interactions, and engaging user experience.",
    overview:
      "City De Fitness is a modern fitness brand platform designed to deliver an immersive, high-energy experience. The project focuses heavily on premium UI/UX design with bold typography, dark themes, and fluid animations to represent the energy of a gym community. This project is currently under active development.",
    technologies: ["Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    category: "Frontend",
    image: "/project9.jpg",
    screenshots: ["/project9.jpg"],
    liveUrl: "#",
    githubUrl: "https://github.com/Idraezy/city-de-fitness",
    role: "Frontend Developer (Solo)",
    status: "pending",
    keyHighlights: [
      "Designed immersive hero section with parallax scrolling effects",
      "Built class schedule and trainer profile components",
      "Implemented animated counters and progress indicators",
      "Created mobile-first responsive layout for all screen sizes",
    ],
  },
  {
    id: 3,
    title: "NFT Marketplace",
    description:
      "Decentralized marketplace for trading NFTs with smart contract integration and wallet connectivity.",
    overview:
      "A full-stack decentralised NFT marketplace built end-to-end. The system includes multiple Solidity smart contracts (NFTCollectionFactory, NFTCollection ERC-721, and Marketplace contracts) deployed on the Sepolia testnet. Users can create collections, mint NFTs, set assets for fixed-price sales or auctions, and interact with the marketplace through a wallet-connected React/Vite frontend. A custom Node.js/Express/MongoDB backend indexes listener to contract events and stores indexed marketplace data for fast querying, while NFT metadata and assets are stored on IPFS via Pinata.",
    technologies: ["Figma", "React", "TypeScript", "Tailwind CSS", "Solidity", "Framer Motion"],
    category: "Blockchain",
    image: "/project2.jpg",
    screenshots: ["/project2.jpg"],
    liveUrl: "https://my-nft-marketplace-j1gh.vercel.app/",
    githubUrl: "https://github.com/Kaksie-codes/my-nft-marketplace",
    role: "Full-Stack Web3 Developer (Solo)",
    status: "pending",
    keyHighlights: [
      "Designed and implemented three Solidity contracts: NFTCollectionFactory, NFTCollection (ERC-721), and Marketplace",
      "Enabled users to deploy new NFT collections directly from the dApp via the factory contract",
      "Implemented fixed-price listings, auctions, and cross-collection trading with role-based permissions",
      "Built custom on-chain event indexer (Node.js + Express + MongoDB) to sync decentralised events with off-chain queries",
      "Integrated wallet connectivity using Hardhat/Ethers, WalletConnect, Wagmi, and Viem",
      "Stored NFT metadata and assets on IPFS via Pinata",
      "Deployed frontend on Vercel and backend on Render",
    ],
  },
  {
    id: 4,
    title: "ATS Pro - Resume & ATS Checker",
    description:
      "A frontend application that analyzes resumes against job descriptions and provides intelligent suggestions.",
    overview:
      "ATSify is a smart resume analysis tool that helps job seekers optimize their resumes against specific job descriptions. The app parses uploaded resumes, compares them with the target job description, and provides a detailed match score with actionable improvement suggestions. All processing happens client-side, ensuring complete privacy.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "LocalStorage"],
    category: "Frontend",
    image: "/project5.jpg",
    screenshots: ["/project5.jpg"],
    liveUrl: "https://at-sify.vercel.app/",
    githubUrl: "https://github.com/Idraezy/ATSify",
    role: "Frontend Developer (Solo)",
    status: "live",
    keyHighlights: [
      "Built resume parser that extracts skills, experience, and keywords from uploaded documents",
      "Implemented ATS scoring algorithm comparing resume content against job descriptions",
      "Created detailed feedback UI with keyword gap analysis and improvement tips",
      "Persisted analysis history using LocalStorage for returning users",
      "Designed clean, professional UI to match the serious nature of job applications",
    ],
  },
  {
    id: 5,
    title: "ApplyNow Admission Portal",
    description:
      "A multi-step university admission platform developed during my FlexiSAF internship.",
    overview:
      "ApplyNow is a comprehensive university admission portal developed during my FlexiSAF internship. The system guides applicants through a structured multi-step form capturing personal, academic, and guardian information. An admin dashboard enables university staff to review, filter, and manage submitted applications efficiently. The project simulates a real-world institutional workflow.",
    technologies: ["React", "Tailwind CSS", "JSON Server", "Axios", "React Router"],
    category: "Frontend",
    image: "/project11.jpeg",
    screenshots: ["/project11.jpeg"],
    liveUrl: "https://applynow-admissions-portal.vercel.app/",
    githubUrl: "https://github.com/Idraezy/applynow-admissions-portal",
    role: "Frontend Developer — FlexiSAF Internship",
    status: "live",
    keyHighlights: [
      "Built multi-step application form with validation at each step",
      "Implemented admin dashboard with filtering and status management",
      "Used JSON Server as a mock REST API for full CRUD operations",
      "Managed routing and protected admin routes with React Router",
      "Designed accessible, form-heavy UI with clear user guidance",
    ],
  },
  {
    id: 6,
    title: "WhatsApp Bot",
    description:
      "A WhatsApp-inspired messaging interface with AI-ready architecture and future agent integrations.",
    overview:
      "This project is a WhatsApp-inspired messaging interface built with a focus on fast UI interactions and an AI-ready architecture designed for future agent integrations. The interface replicates the familiar chat experience while laying groundwork for intelligent auto-responses and workflow automations. Currently under active development.",
    technologies: ["Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    category: "Frontend",
    image: "/project12.jpg",
    screenshots: ["/project12.jpg"],
    liveUrl: "https://whatsapp-bot411.vercel.app/",
    githubUrl: "https://github.com/Idraezy/Whatsapp-bot",
    role: "Frontend Developer (Solo)",
    status: "pending",
    keyHighlights: [
      "Replicated WhatsApp UI with real-time styled conversations",
      "Designed AI-ready message handling architecture",
      "Implemented animated chat bubbles and typing indicators",
      "Built conversation state management for multi-thread support",
    ],
  },
  {
    id: 7,
    title: "NextVest - Investment Platform",
    description:
      "A modern investment platform with real-time market data, investment tracking, and blockchain-powered architecture.",
    overview:
      "NextVest is a modern digital investment platform that combines traditional finance UI with blockchain-powered infrastructure. The platform features real-time market data feeds, portfolio tracking, investment analytics, and a scalable Solidity backend for on-chain transaction processing. Currently under active development.",
    technologies: ["Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React", "Solidity", "Supabase"],
    category: "Blockchain",
    image: "/project10.jpg",
    screenshots: ["/project10.jpg"],
    liveUrl: "https://nex-vest-alpha.vercel.app/",
    githubUrl: "https://github.com/Idraezy/NexVest",
    role: "Full-Stack Web3 Developer (Solo)",
    status: "pending",
    keyHighlights: [
      "Designed investment dashboard with portfolio performance charts",
      "Integrated Supabase for user authentication and data persistence",
      "Built Solidity smart contracts for on-chain investment processing",
      "Implemented real-time market data visualization with Recharts",
      "Created responsive, data-dense layout optimized for financial UX",
    ],
  },
  {
    id: 8,
    title: "Landing Page Generator",
    description:
      "AI-powered landing page generator with real-time preview and customizable themes.",
    overview:
      "The Landing Page Generator is an AI-powered tool that allows users to create professional landing pages in seconds. Users input their business details, select a style, and the tool generates a complete, customizable landing page with real-time preview. Templates are fully editable and exportable.",
    technologies: ["Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    image: "/project6.jpg",
    screenshots: ["/project6.jpg"],
    liveUrl: "https://landing-page-generator-taupe.vercel.app/",
    githubUrl: "https://github.com/Idraezy/Landing-Page-Generator",
    role: "Frontend Developer (Solo)",
    status: "live",
    keyHighlights: [
      "Built template engine with multiple customizable themes",
      "Implemented real-time live preview as users edit content",
      "Created theme switcher with color palette customization",
      "Designed intuitive form-based content input flow",
      "Added export functionality for generated pages",
    ],
  },
  {
    id: 9,
    title: "Smart Invoice",
    description:
      "A web application for creating, managing, and exporting professional invoices.",
    overview:
      "Smart Invoice is a streamlined invoicing tool designed for freelancers and small businesses. Users can create professional invoices, add line items, apply taxes and discounts, and export to PDF — all from a clean, intuitive interface built with Next.js.",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    category: "Frontend",
    image: "/project7.jpg",
    screenshots: ["/project7.jpg"],
    liveUrl: "https://smart-invoice-eta.vercel.app/",
    githubUrl: "https://github.com/Idraezy/SmartInvoice",
    role: "Frontend Developer (Solo)",
    status: "live",
    keyHighlights: [
      "Built dynamic invoice builder with line item management",
      "Implemented PDF export for professional invoice delivery",
      "Added tax, discount, and subtotal calculation logic",
      "Designed print-friendly invoice layout matching real-world formats",
      "Created invoice preview modal for pre-export review",
    ],
  },
  {
    id: 10,
    title: "ClientPilot",
    description:
      "A lightweight client management dashboard for freelancers and small businesses.",
    overview:
      "ClientPilot is a minimal but powerful client management tool built for freelancers and independent professionals. It provides a centralized dashboard to track clients, project statuses, deadlines, and notes — replacing messy spreadsheets with a clean, purpose-built interface.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    image: "/project8.jpg",
    screenshots: ["/project8.jpg"],
    liveUrl: "https://client-pilot-mini-app.vercel.app/",
    githubUrl: "https://github.com/Idraezy/client-pilot",
    role: "Frontend Developer (Solo)",
    status: "live",
    keyHighlights: [
      "Built client CRUD interface with status tracking (Active, Pending, Completed)",
      "Implemented notes and contact management per client record",
      "Designed kanban-inspired status board for project visibility",
      "Added search and filter functionality for quick client lookup",
      "Used Framer Motion for smooth list transitions and modals",
    ],
  },
  {
    id: 11,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team features.",
    overview:
      "A task and productivity management application built with vanilla web technologies as a demonstration of fundamental front-end skills. The project showcases DOM manipulation, CSS animations, and JavaScript logic without relying on frameworks.",
    technologies: ["Figma", "HTML", "Vanilla CSS", "Vanilla JavaScript"],
    category: "Design",
    image: "/project4.jpg",
    screenshots: ["/project4.jpg"],
    liveUrl: "https://idraezy.github.io/profile-card/",
    githubUrl: "https://idraezy.github.io/profile-card/",
    role: "Frontend Developer (Solo)",
    status: "live",
    keyHighlights: [
      "Built entirely with vanilla HTML, CSS, and JavaScript — no frameworks",
      "Implemented drag-and-drop task reordering",
      "Designed clean, accessible UI with Figma-first approach",
      "Added task categorization with color-coded labels",
    ],
  },
  {
    id: 12,
    title: "Brand Identity Design",
    description:
      "Complete brand identity package including logo, color palette, and marketing materials.",
    overview:
      "A comprehensive brand identity design project covering logo design, typography selection, color system definition, and marketing collateral. The full brand package was developed in Figma and implemented as a static web showcase.",
    technologies: ["Figma", "HTML", "Vanilla CSS", "Vanilla JavaScript"],
    category: "Design",
    image: "/project3.jpg",
    screenshots: ["/project3.jpg"],
    liveUrl: "#",
    githubUrl: undefined,
    role: "UI/UX Designer (Solo)",
    status: "live",
    keyHighlights: [
      "Designed complete logo suite (primary, secondary, icon variants)",
      "Defined brand color palette with accessibility contrast ratios",
      "Created typography hierarchy and usage guidelines",
      "Produced marketing material templates in Figma",
    ],
  },
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="relative max-w-5xl w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className="w-full rounded-2xl shadow-2xl object-contain max-h-[80vh]"
          />
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 p-2 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition-colors shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 text-white rounded-full hover:bg-orange-400 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 text-white rounded-full hover:bg-orange-400 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
          <p className="text-center text-gray-400 text-sm mt-3">
            {currentIndex + 1} / {images.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Tech Badge ───────────────────────────────────────────────────────────────

const techColors: Record<string, string> = {
  Solidity: "bg-purple-500/20 text-purple-300 border-purple-500/40",
  "Tailwind CSS": "bg-sky-500/20 text-sky-300 border-sky-500/40",
  TypeScript: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  React: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
  Figma: "bg-pink-500/20 text-pink-300 border-pink-500/40",
  Supabase: "bg-green-500/20 text-green-300 border-green-500/40",
  "Next.js": "bg-gray-400/20 text-gray-200 border-gray-400/40",
};

function TechBadge({ tech }: { tech: string }) {
  const colorClass =
    techColors[tech] ?? "bg-orange-400/20 text-orange-300 border-orange-400/40";
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${colorClass}`}>
      {tech}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) {
    return (
      <div className="min-h-screen bg-[#011C2A] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-xl mb-4">Project not found.</p>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-orange-400 text-white rounded-full font-semibold hover:bg-orange-500 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const isPending = project.status === "pending";
  const screenshots = project.screenshots ?? [project.image];

  return (
    <section className="min-h-screen bg-[#011C2A] text-gray-300 pt-24 pb-20">
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={screenshots}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) =>
              i !== null ? (i - 1 + screenshots.length) % screenshots.length : 0
            )
          }
          onNext={() =>
            setLightboxIndex((i) =>
              i !== null ? (i + 1) % screenshots.length : 0
            )
          }
        />
      )}

      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-14 xl:mx-20 max-w-6xl">

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to projects
        </motion.button>

        {/* Title Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-start gap-4 mb-6"
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {project.title}
              </h1>
              {isPending ? (
                <span className="flex items-center gap-1.5 px-3 py-1 bg-yellow-500/15 border border-yellow-500/40 text-yellow-400 rounded-full text-xs font-bold uppercase tracking-wide">
                  <Clock className="w-3.5 h-3.5" />
                  In Progress
                </span>
              ) : (
                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/15 border border-green-500/40 text-green-400 rounded-full text-xs font-bold uppercase tracking-wide">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Live
                </span>
              )}
              <span className="px-3 py-1 bg-orange-400 text-white rounded-full text-xs font-bold uppercase tracking-wide">
                {project.category}
              </span>
            </div>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {project.liveUrl && project.liveUrl !== "#" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-orange-400 text-white rounded-full font-semibold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-400/20 text-sm"
            >
              <Globe className="w-4 h-4" />
              View Live
            </a>
          ) : (
            <span className="flex items-center gap-2 px-5 py-2.5 bg-orange-400/20 text-orange-400/60 rounded-full font-semibold text-sm cursor-not-allowed border border-orange-400/20">
              <Globe className="w-4 h-4" />
              Live Demo — Coming Soon
            </span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border-2 border-orange-400 text-orange-400 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 text-sm"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
        </motion.div>

        {/* Meta Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 p-5 rounded-2xl bg-[#012b40] border border-orange-400/10"
        >
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-semibold">Role</p>
            <p className="text-sm text-gray-300 font-medium">{project.role}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-semibold">Status</p>
            <p className={`text-sm font-semibold flex items-center gap-2 ${isPending ? "text-yellow-400" : "text-green-400"}`}>
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  In Development
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Deployed
                </>
              )}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-semibold">Category</p>
            <p className="text-sm text-orange-400 font-medium">{project.category}</p>
          </div>
        </motion.div>

        {/* Pending Banner */}
        {isPending && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 p-5 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 flex items-start gap-4"
          >
            <div className="p-2.5 bg-yellow-500/20 rounded-xl mt-0.5">
              <Clock className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-yellow-400 font-bold text-base mb-1">
                🚧 Project Under Development
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                This project is currently in active development. The features and screenshots shown reflect
                the current state of progress. Check back soon or watch the GitHub repo for updates.
              </p>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10">

            {/* Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-orange-400" />
                Screenshots
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {screenshots.map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setLightboxIndex(i)}
                    className="relative group overflow-hidden rounded-xl cursor-zoom-in border border-orange-400/10 bg-[#012b40]"
                  >
                    <img
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-semibold bg-black/60 px-3 py-1.5 rounded-full">
                        Click to expand
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-orange-400" />
                Overview
              </h2>
              <div className="p-6 rounded-2xl bg-[#012b40] border border-orange-400/10">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {project.overview}
                </p>
              </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-orange-400" />
                Key Highlights
              </h2>
              <div className="space-y-3">
                {project.keyHighlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.4 + i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#012b40] border border-orange-400/10 hover:border-orange-400/30 transition-colors"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-orange-400/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3 h-3 text-orange-400" />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-[#012b40] border border-orange-400/10"
            >
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-orange-400" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <TechBadge key={i} tech={tech} />
                ))}
              </div>
            </motion.div>

            {/* More Projects */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl bg-[#012b40] border border-orange-400/10"
            >
              <h3 className="text-base font-bold text-white mb-4">More Projects</h3>
              <div className="space-y-3">
                {projects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((p) => (
                    <button
                      key={p.id}
                      onClick={() => router.push(`/projects/${p.id}`)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#011C2A] transition-colors group text-left"
                    >
                      <div className="w-12 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors truncate">
                          {p.title}
                        </p>
                        <p className="text-xs text-gray-500">{p.category}</p>
                      </div>
                    </button>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="mt-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}