"use client"
import { AnimatePresence, motion } from "motion/react";
import ThreeScene from "@/customComponents/threeScene";
import Loading from "@/customComponents/loading";
import React, { useState, useEffect } from "react";
import Experiences from "@/customComponents/experience";
import Projects from "@/customComponents/projects";
import HeroSection from "@/customComponents/heroSection";


export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [followPos, setFollowPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setFollowPos({ x: e.pageX, y: e.pageY });
    }

    window.addEventListener('mousemove', handleMouseMove);


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  function handleLoadingEnd() {
    setShowMainContent(true);
  }


  return (

    <div style={{ cursor: "none" }} className="flex flex-col justify-center items-center font-mono">
      <div
        style={{
          top: `${followPos.y}px`,
          left: `${followPos.x}px`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: "none",
          zIndex: 50
        }}
        className="rounded-full absolute h-3 w-3 bg-orange-200"
      />
      <div
        style={{
          top: `${followPos.y}px`,
          left: `${followPos.x}px`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: "none",
          zIndex: 49
        }}
        className="rounded-full absolute h-4 w-4 bg-orange-400"
      />
      <div
        style={{
          top: `${followPos.y}px`,
          left: `${followPos.x}px`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: "none",
          zIndex: 48
        }}
        className="rounded-full absolute h-5 w-5 bg-orange-600"
      />
      <AnimatePresence>
        {!showMainContent && (<Loading callback={handleLoadingEnd} />)}
      </AnimatePresence>
      {showMainContent && (
        <div className="bg-gradient-to-br from-gray-900 to-black">

          <HeroSection />

          <motion.div
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.75 }}
            className="flex flex-col items-start w-full p-4"
          >
            <Experiences />
          </motion.div>


          <Projects />
        </div>


      )}

    </div>
  );
}
