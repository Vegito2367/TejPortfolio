"use client"
import { AnimatePresence, motion } from "motion/react";
import ThreeScene from "@/customComponents/threeScene";
import Loading from "@/customComponents/loading";
import { useState } from "react";
import Experiences from "@/customComponents/experience";
import Projects from "@/customComponents/projects";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);
  function handleLoadingEnd() {
    setShowMainContent(true);
  }
  return (
    <div className="flex flex-col justify-center items-center">
    <AnimatePresence>
      {!showMainContent &&(<Loading callback={handleLoadingEnd}/>)}
    </AnimatePresence>
    {showMainContent && (
      <>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
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
        className="flex flex-col items-start w-full p-6"
      >
        <Experiences />
      </motion.div>
    

      <Projects />
    </>
    
      
    )}
      
    </div>
  );
}
