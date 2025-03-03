"use client"
import { AnimatePresence, motion } from "motion/react";
import ThreeScene from "@/customComponents/threeScene";
import Loading from "@/customComponents/loading";
import { useState } from "react";


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

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="flex flex-row justify-center items-center roboto-mono mx-28 border-2 border-blue-300">
        <section className="flex flex-row justify-center items-center p-4 h-screen">
          <div className="w-4/6">
          <p className="text-4xl">Hello Everyone!</p>
          <p className="text-3xl">I am Tej Gumaste, a junior studying computer science interested in impactful coding</p>
          </div>
          <img src="ProfilePic.jpeg" alt="Profile Picture" className="w-1/3 rounded-3xl" />
        </section>
      </motion.div>
      </>
      
    )}
      
    </div>
  );
}
