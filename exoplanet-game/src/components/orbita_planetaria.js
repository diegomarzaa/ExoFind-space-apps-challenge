"use client";

import { motion } from "framer-motion";
import React from "react";

// Sun Component for Reusability
const Sun = ({ className }) => (
  <div
    className={`w-12 h-12 bg-yellow-400 rounded-full ${className}`}
    style={{
      boxShadow: "0 0 20px 10px rgba(255, 223, 0, 0.5)",
      position: "absolute",
    }}
  />
);

// Star Component for Background Stars
const Star = ({ size, top, left, delay, duration, opacity }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{
      width: size,
      height: size,
      top: top + "%",
      left: left + "%",
      opacity: opacity,
    }}
    animate={{ opacity: [opacity, 1, opacity] }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  />
);

export default function BrilloOrbital() {
  const ORBIT_DURATION = 3; // Duration for one full orbit in seconds

  // Generate an array of stars with random properties
  const stars = Array.from({ length: 100 }).map((_, index) => ({
    id: index,
    size: Math.random() * 2 + 1, // Size between 1px and 3px
    top: Math.random() * 100, // Percentage for top position
    left: Math.random() * 100, // Percentage for left position
    delay: Math.random() * ORBIT_DURATION, // Random delay for animation
    duration: Math.random() * 5 + 5, // Duration between 5s and 10s
    opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
  }));

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative">
        {/* Título */}
        <motion.h1
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: -50, opacity: 1 }}
          transition={{ duration: 1, ease: 'backOut' }}
          className="text-5xl md:text-6xl font-extrabold text-white"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Tránsito
        </motion.h1>

      {/* Starry Background */}
      {stars.map((star) => (
        <Star
          key={star.id}
          size={star.size}
          top={star.top}
          left={star.left}
          delay={star.delay}
          duration={star.duration}
          opacity={star.opacity}
        />
      ))}

      {/* Telescope POV Simulation */}
      <div className="relative w-96 h-96">
        {/* Outer Frame of Telescope */}
        <div className="w-full h-full rounded-full border-4 border-gray-800 bg-transparent flex items-center justify-center shadow-2xl">
          {/* Inner Viewfinder */}
          <div className="w-5/6 h-5/6 rounded-full bg-black bg-opacity-50 overflow-hidden">
            {/* Planetary System Container */}
            <div className="relative w-full h-full">
              {/* Eclipse Sun Positioned on Orbit Path */}
              <Sun className="top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

              {/* Other Suns Positioned Off Orbit Path */}
              <Sun className="absolute top-1/4 left-1/4 transform translate-x-1/2 translate-y-1/2" />
              <Sun className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2" />
              <Sun className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2" />

              {/* Rotating Container for Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: ORBIT_DURATION,
                  ease: "linear",
                }}
                className="absolute inset-0"
                style={{ transformOrigin: "50% 50%" }}
              >
                {/* Planet */}
                <motion.div
                  className="absolute top-1/4 right-0 w-9 h-9 bg-blue-400 rounded-full shadow-lg z-40"
                  // Initial Position
                  style={{
                    transform: "translate(50%, -50%)",
                  }}
                  // Animate Opacity and Scale for Eclipse Effect
                  animate={{
                    opacity: [0.01, 0.01, 0.7, 0.01, 0.01],
                    scale: [1.8, 1.8, 1.8, 1.8, 1.8],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: ORBIT_DURATION,
                    ease: "linear",
                    times: [0, 0.75, 0.8, 0.85, 1], // Synchronize with eclipse sun passage
                  }}
                />
              </motion.div>

              {/* Optional Orbit Path Visually */}
              <div className="absolute inset-0 rounded-full border border-dashed border-indigo-700 opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}