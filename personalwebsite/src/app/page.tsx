"use client"
import { AnimatePresence, motion } from "motion/react";
import ThreeScene from "@/customComponents/threeScene";
import Loading from "@/customComponents/loading";
import React, { useState,useEffect } from "react";
import Experiences from "@/customComponents/experience";
import Projects from "@/customComponents/projects";
import { pre } from "framer-motion/client";


export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [followPos, setFollowPos] = useState({x: 0, y: 0});

  useEffect(() => {
    function handleMouseMove(e:MouseEvent) {
      setFollowPos({x: e.pageX, y: e.pageY});
    }
    
    // Add event listener to the window
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []); // E
  function handleLoadingEnd() {
    setShowMainContent(true);
  }

  
  return (
    
    <div className="flex flex-col justify-center items-center font-mono">
    <div 
        style={{
          top:`${followPos.y}px`,
          left:`${followPos.x}px`, 
          transform: 'translate(-50%, -50%)', 
          transition:"all", 
          transitionDuration:"0.01s",
          pointerEvents: "none",
          zIndex: 50
        }} 
        className="rounded-full absolute h-3 w-3 bg-orange-200" 
      />
      <div 
        style={{
          top:`${followPos.y}px`,
          left:`${followPos.x}px`, 
          transform: 'translate(-50%, -50%)', 
          transition:"all", 
          transitionDuration:"0.013s",
          pointerEvents: "none",
          zIndex: 50
        }} 
        className="rounded-full absolute h-3 w-3 bg-orange-400" 
      />
      <div 
        style={{
          top:`${followPos.y}px`,
          left:`${followPos.x}px`, 
          transform: 'translate(-50%, -50%)', 
          transition:"all", 
          transitionDuration:"0.016s",
          pointerEvents: "none",
          zIndex: 50
        }} 
        className="rounded-full absolute h-3 w-3 bg-orange-600" 
      />  
     <AnimatePresence>
      {!showMainContent &&(<Loading callback={handleLoadingEnd}/>)}
    </AnimatePresence>
    {showMainContent && (
      <div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale:1 }} 
        transition={{ duration: 0.7 }} 
        className="flex flex-col md:flex-row justify-center items-center p-8 bg-gray-900 rounded-lg shadow-lg"
      >
        <section className="flex flex-col md:flex-row justify-center items-center h-screen px-6">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <p className="text-5xl font-bold text-white mb-4">Hello Everyone!</p>
            <p className="text-3xl text-gray-300 leading-relaxed">
              I am <span className="text-orange-400 font-semibold">Tej Gumaste</span>,  
              a junior studying computer science, passionate about writing impactful code.
            </p>
          </div>
          <img 
            src="ProfilePic.jpeg" 
            alt="Profile Picture" 
            className="w-2/5 max-w-xs md:max-w-md rounded-3xl shadow-lg border-4 border-gray-700 mt-6 md:mt-0"
          />
        </section>
      </motion.div>
    

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
