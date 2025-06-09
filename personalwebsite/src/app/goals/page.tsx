"use client"
import React, { useState, useEffect } from 'react';

export default function Goals() {
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
        <h1 className="text-5xl font-bold text-orange-400 text-center mb-6">
          Goals / Learning Objectives
        </h1>
      </section>
    </main>
  );
}