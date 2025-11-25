"use client";
import { p } from "framer-motion/client";
import { AnimatePresence, motion } from "motion/react";
import React, { useState, useEffect, useRef } from "react";

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

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{ cursor: "none" }}
      className="flex flex-col justify-center items-center font-mono"
    >
      <div
        ref={cursorRef1}
        style={{
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 50,
        }}
        className="rounded-full absolute h-3 w-3 bg-orange-200"
      />
      <div
        ref={cursorRef2}
        style={{
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 49,
        }}
        className="rounded-full absolute h-4 w-4 bg-orange-400"
      />
      <div
        ref={cursorRef3}
        style={{
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 48,
        }}
        className="rounded-full absolute h-5 w-5 bg-orange-600"
      />
      <div className="bg-gradient-to-br from-gray-800 to-black h-full w-full">
        <section className="px-20 py-20 justify-center items-center">
          <p className="text-5xl text-center my-2"> Tej Gumaste</p>
          <p className="text-gray-500 text-center">
            Computer Science & Mathematics @ University of Kansas
          </p>
          <p className="text-center my-2">
            Also known as @Vegito2367, @seksierthanyou and @TejG17
          </p>
          <p className="my-2">
            Hello I am Tej, a 21 year old computer science student with a
            fondness for programming. I have worked with lots of technologies
            and platforms over the years and I plan to keep trying new things
            throughout my career. I believe that any programming language is
            only as important as the problem it solves, so I don't really have a
            favorite language, although some languages are easier to work with
            than others.
          </p>

          <div>
            <p className="text-3xl underline">Experience</p>
            <br />
            <p>Gemini</p>
            <p>
              Interned there summer of 2025 and my project was to build a wire
              payment rail system. I implemented the wire return feature which
              was pretty fun and the project is expected to earn the company
              $4M/year
            </p>
            <br />
            <p>Research Engineer @ Blakemore Lab KU</p>
            <p>
              Worked with Professor James Blakemore and Fynn Cooper to build
              <a href="https://github.com/Vegito2367/PyCIFTer">PyCIFTer</a>.
              PyCIFTer is a program that parses crystallographic information
              files (CIFs). CIFs are the primary medium of data representation
              for inorganic crystal structures and PyCIFTer is a origin-agnostic
              way to parse CIFs and mass analyze crystal structures.
              <span className="font-bold">
                PyCIFTer is currently undergoing the peer review process to be
                published in Molecules.
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
