"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Portfolio() {
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
  return (
    <main className="min-h-screen bg-gray-950 text-white font-mono px-6 py-10">
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
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-orange-400 text-center mb-8">
          LA&amp;S 490 Internship Exploration
        </h1>

        <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800">
          <h2 className="text-3xl font-bold mb-2">Tej Gumaste</h2>
          <p className="text-xl text-gray-300 mb-4">Intern at Gemini Exchange</p>
          <img
            src="/geminibanner.jpg"
            alt="Internship Thematic Visual"
            className="rounded-lg w-full max-h-[300px] object-cover shadow-md border border-gray-700"
          />
        </div>

        <nav className="mt-12 flex flex-col gap-6">
          <Link href="/goals" className="text-orange-400 text-2xl hover:underline">
            Goals / Learning Objectives
          </Link>
          <Link href="/finalproject" className="text-orange-400 text-2xl hover:underline">
            Final Project
          </Link>
        </nav>
      </section>
    </main>
  );
} 