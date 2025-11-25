"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useEffect } from "react";

export default function Home() {
  // Cursor Logic - Using Springs for smooth trailing effect
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const springConfig2 = { damping: 35, stiffness: 500 };
  const springConfig3 = { damping: 45, stiffness: 300 };

  const x1 = useSpring(mouseX, springConfig);
  const y1 = useSpring(mouseY, springConfig);
  const x2 = useSpring(mouseX, springConfig2);
  const y2 = useSpring(mouseY, springConfig2);
  const x3 = useSpring(mouseX, springConfig3);
  const y3 = useSpring(mouseY, springConfig3);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-mono selection:bg-orange-500/30 selection:text-orange-100 cursor-none overflow-x-hidden">
      {/* --- Custom Cursors --- */}
      <motion.div
        style={{ translateX: x1, translateY: y1 }}
        className="fixed top-0 left-0 h-2 w-2 bg-orange-200 rounded-full pointer-events-none z-50 mix-blend-difference"
      />
      <motion.div
        style={{ translateX: x2, translateY: y2 }}
        className="fixed top-0 left-0 h-4 w-4 border border-orange-400/50 rounded-full pointer-events-none z-40 -ml-1 -mt-1"
      />
      <motion.div
        style={{ translateX: x3, translateY: y3 }}
        className="fixed top-0 left-0 h-8 w-8 bg-orange-600/10 rounded-full pointer-events-none z-30 blur-sm -ml-3 -mt-3"
      />

      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        {/* --- Header Section --- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 space-y-6"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-orange-400 uppercase border border-orange-900/50 rounded-full bg-orange-950/30">
            Portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Tej{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Gumaste
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-neutral-400 font-light">
            CS & Math @ University of Kansas
          </h2>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
            <span className="hover:text-orange-400 transition-colors cursor-none">
              @Vegito2367
            </span>
            <span>•</span>
            <span className="hover:text-orange-400 transition-colors cursor-none">
              @seksierthanyou
            </span>
            <span>•</span>
            <span className="hover:text-orange-400 transition-colors cursor-none">
              @TejG17
            </span>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-400 mt-8">
            Hello, I am a 21-year-old computer science student with a fondness
            for programming. I believe that any programming language is only as
            important as the problem it solves. I plan to keep trying new things
            throughout my career.
          </p>
        </motion.section>

        {/* --- Experience Section --- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Experience
          </h3>
          <div className="space-y-12 border-l border-neutral-800 pl-8 ml-3 relative">
            {/* Job 1 */}
            <div className="relative group">
              <div className="absolute -left-[39px] top-1 h-4 w-4 rounded-full border-2 border-neutral-800 bg-neutral-950 group-hover:border-orange-500 transition-colors" />
              <h4 className="text-xl font-semibold text-neutral-100 group-hover:text-orange-400 transition-colors">
                Gemini
              </h4>
              <p className="text-sm text-neutral-500 mb-2">
                Summer 2025 • Software Engineering Intern
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Built a wire payment rail system, implementing the wire return
                feature. The project is expected to earn the company{" "}
                <span className="text-orange-400">$4M/year</span>.
              </p>
            </div>

            {/* Job 2 */}
            <div className="relative group">
              <div className="absolute -left-[39px] top-1 h-4 w-4 rounded-full border-2 border-neutral-800 bg-neutral-950 group-hover:border-orange-500 transition-colors" />
              <h4 className="text-xl font-semibold text-neutral-100 group-hover:text-orange-400 transition-colors">
                Blakemore Lab KU
              </h4>
              <p className="text-sm text-neutral-500 mb-2">Research Engineer</p>
              <p className="text-neutral-400 leading-relaxed">
                Co-authored{" "}
                <a
                  href="https://github.com/Vegito2367/PyCIFTer"
                  className="text-orange-400 underline decoration-orange-500/30 hover:decoration-orange-500"
                >
                  PyCIFTer
                </a>{" "}
                with Professor James Blakemore. A program that parses
                crystallographic information files (CIFs) for inorganic crystal
                structures.
              </p>
              <div className="mt-2 inline-block px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-orange-300">
                Peer Review in Progress: Molecules Journal
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- Projects Section --- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="LookSmith"
              link="https://github.com/Vegito2367/LookSmith"
              tag="HackHarvard 2025"
              desc="Assistive 3D modelling system. Builds 3D shapes using facial expressions via MediaPipe/OpenCV and Godot."
            />

            <ProjectCard
              title="DAIM"
              link="https://github.com/Vegito2367/DAIM"
              tag="Midwest Blockathon 2025"
              desc="Decentralized AI MarketPlace. Full-stack Web3 platform for open-source AI models using Pinata, RainbowKit, and NextJS."
            />

            <ProjectCard
              title="EirAI"
              link="https://github.com/Vegito2367/EirAI"
              tag="HackKU 2025"
              desc="Medical tool that records visits, generates SOAP notes, and predicts insurance billing codes with confidence scores."
            />

            <ProjectCard
              title="MathVenture"
              link="https://math-venture.com"
              tag="Personal"
              desc="Zetamac-inspired math engine to build mental math skills with detailed analytical reports."
            />

            <ProjectCard
              title="TejCICD"
              tag="In Progress"
              desc="Building a custom CICD action for this portfolio website utilizing GitHub webhooks."
            />
          </div>
        </motion.section>

        <footer className="mt-20 pt-8 border-t border-neutral-900 text-center text-neutral-600 text-sm">
          <p>© 2025 Tej Gumaste. Built with Next.js & Framer Motion.</p>
        </footer>
      </div>
    </div>
  );
}

// Sub-component for Project Cards (Keeps main component clean)
function ProjectCard({
  title,
  link,
  desc,
  tag,
}: {
  title: string;
  link?: string;
  desc: string;
  tag: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-6 bg-neutral-900/30 border border-neutral-800 rounded-lg hover:border-orange-500/50 hover:bg-neutral-900/60 transition-all group ${!link ? "cursor-default" : "cursor-none"}`}
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-lg font-bold text-neutral-200 group-hover:text-orange-400 transition-colors">
          {title}
        </h4>
        <span className="text-xs text-neutral-500 border border-neutral-800 px-2 py-1 rounded bg-neutral-950">
          {tag}
        </span>
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
    </a>
  );
}
