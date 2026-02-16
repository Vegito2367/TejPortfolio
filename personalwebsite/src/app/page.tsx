"use client";
import { ProjectItem } from "@/customComponents/projectItem";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useSpring, useMotionValue } from "motion/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Home() {
  // Cursor Logic - Using Springs for smooth trailing effect
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const router = useRouter();
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

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleHover = (e) => {
      const target = e.target.closest("a, button, .hover-target");
      setIsHovering(!!target);
    };

    window.addEventListener("mouseover", handleHover);
    return () => window.removeEventListener("mouseover", handleHover);
  }, []);

  return (
    <div
      style={{ cursor: "none" }}
      className="flex flex-col justify-center items-center font-mono"
    >
      <motion.div
        style={{ translateX: x1, translateY: y1 }}
        className={`fixed top-0 left-0 h-2 w-2 ${isHovering ? "bg-blue-200" : "bg-orange-200"} rounded-full pointer-events-none z-50 mix-blend-difference`}
      />
      <motion.div
        style={{ translateX: x2, translateY: y2 }}
        className={`fixed top-0 left-0 h-4 w-4 border ${isHovering ? "border-blue-400/50" : "border-orange-400/50"} rounded-full pointer-events-none z-40 -ml-1 -mt-1`}
      />
      <motion.div
        style={{ translateX: x3, translateY: y3 }}
        className={`fixed top-0 left-0 h-8 w-8 ${isHovering ? "bg-blue-600/10" : "bg-orange-600/10"} rounded-full pointer-events-none z-30 blur-sm -ml-3 -mt-3`}
      />

      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 space-y-6"
        >
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
            <Link
              href="https://github.com/Vegito2367"
              target="_blank"
              className="hover:text-orange-400 transition-colors cursor-none"
            >
              github.com/Vegito2367
            </Link>
            <span>•</span>
            <Link
              href="https://x.com/TejG17"
              target="_blank"
              className="hover:text-orange-400 transition-colors cursor-none"
            >
              x.com/TejG17
            </Link>

            <span>•</span>
            <Link
              href="https://www.linkedin.com/in/tej-gumaste/"
              target="_blank"
              className="hover:text-orange-400 transition-colors cursor-none"
            >
              linkedin/tej-gumaste/
            </Link>
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
            <div className="relative group">
              <div className="absolute -left-[39px] top-1 h-4 w-4 rounded-full border-2 border-neutral-800 bg-neutral-950 group-hover:border-orange-500 transition-colors" />
              <h4 className="text-xl font-semibold text-neutral-100 group-hover:text-orange-400 transition-colors">
                Software Engineering Intern
              </h4>
              <p className="text-sm text-neutral-500 mb-2">
                Summer 2025 • Gemini Exchange • NYC
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Built a wire payment rail system with a new banking partner,
                implementing the wire return feature. The project is expected to
                earn the company{" "}
                <span className="text-orange-400">$4M/year</span>.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -left-[39px] top-1 h-4 w-4 rounded-full border-2 border-neutral-800 bg-neutral-950 group-hover:border-orange-500 transition-colors" />
              <h4 className="text-xl font-semibold text-neutral-100 transition-colors">
                Research Engineer
              </h4>
              <p className="text-sm text-neutral-500 mb-2">Blakemore Lab KU</p>
              <p className="text-neutral-400 leading-relaxed">
                Co-authored{" "}
                <a
                  href="https://github.com/Vegito2367/PyCIFTer"
                  className="text-orange-400 underline decoration-orange-500/30 hover:decoration-orange-500"
                >
                  PyCIFTer
                </a>{" "}
                with Professor James Blakemore and Fynn Cooper. A program that
                parses crystallographic information files (CIFs) for inorganic
                crystal structures.
              </p>
              <Link
                href="https://www.mdpi.com/1420-3049/31/1/18"
                target="_blank"
                className="group mt-2 inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-neutral-400 hover:border-orange-300/50 transition-all"
              >
                <span>
                  Published:{" "}
                  <span className="text-orange-300 hover:underline">
                    Molecules Journal
                  </span>
                </span>
                <svg
                  className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Featured Projects
          </h3>

          <p
            onClick={() => {
              router.push("/projects");
            }}
            className="text-xl mb-8 text-neutral-400 font-light hover:text-orange-400 hover:cursor-pointer"
          >
            Full List of Projects
          </p>
          {/* Changed from Grid to Timeline Layout to match Experience */}
          <div className="space-y-12 pl-8 ml-3 relative bg-grid-small-neutral-900/20">
            <ProjectItem
              title="TejCICD"
              tag="In Progress"
              desc="Building a custom CICD action for this portfolio website utilizing GitHub webhooks."
              link="https://github.com/CustomCICD"
            />

            <ProjectItem
              title="LookSmith"
              link="https://github.com/Vegito2367/LookSmith"
              tag="HackHarvard 2025"
              desc="Assistive 3D modelling system. Builds 3D shapes using facial expressions via MediaPipe/OpenCV and Godot."
            />

            <ProjectItem
              title="EirAI"
              link="https://github.com/Vegito2367/EirAI"
              tag="HackKU 2025"
              desc="Medical tool that records visits, generates SOAP notes, and predicts insurance billing codes with confidence scores."
              hackwin={true}
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
