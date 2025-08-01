"use client"
import React, { useState, useEffect } from 'react';

export default function FinalProject() {
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
          Final Project
        </h1>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRx1Ihz7mpKOKwGAyFVAyGBZnNNo70vITUZbzB4MDK_an-N7wSYYeFAJcLaPiMNnncnllL7fuE_zOFB/pubembed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </section>
    </main>
  );
}