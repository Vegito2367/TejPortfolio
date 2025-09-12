"use client"
import { AnimatePresence, motion } from "motion/react";
import React, { useState, useEffect, useRef } from "react";
import Experiences from "@/customComponents/experience";
import Projects from "@/customComponents/projects";
import HeroSection from "@/customComponents/heroSection";


export default function Home() {
  const cursorRef1 = useRef<HTMLDivElement>(null);
  const cursorRef2 = useRef<HTMLDivElement>(null);
  const cursorRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (cursorRef1.current && cursorRef2.current && cursorRef3.current) {
        cursorRef1.current.style.top = `${e.pageY}px`;
        cursorRef1.current.style.left = `${e.pageX}px`;
        cursorRef2.current.style.top = `${e.pageY}px`;
        cursorRef2.current.style.left = `${e.pageX}px`;
        cursorRef3.current.style.top = `${e.pageY}px`;
        cursorRef3.current.style.left = `${e.pageX}px`;
      }
    }

    window.addEventListener('mousemove', handleMouseMove);


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);


  return (

    <div style={{ cursor: "none" }} className="flex flex-col justify-center items-center font-mono">
      <div
        ref={cursorRef1}
        style={{
          transform: 'translate(-50%, -50%)',
          pointerEvents: "none",
          zIndex: 50
        }}
        className="rounded-full absolute h-3 w-3 bg-orange-200"
      />
      <div
        ref={cursorRef2}
        style={{
          transform: 'translate(-50%, -50%)',
          pointerEvents: "none",
          zIndex: 49
        }}
        className="rounded-full absolute h-4 w-4 bg-orange-400"
      />
      <div
        ref={cursorRef3}
        style={{
          transform: 'translate(-50%, -50%)',
          pointerEvents: "none",
          zIndex: 48
        }}
        className="rounded-full absolute h-5 w-5 bg-orange-600"
      />
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
    </div>
  );
}
