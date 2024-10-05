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

export default function PlanetarySystem() {
  const ORBIT_DURATION = 8; // Duration for one full orbit in seconds

  return (
    <div className="w-full h-screen bg-gradient-to-b from-indigo-900 to-black flex items-center justify-center overflow-hidden">
      {/* Central Holder for Suns and Orbit */}
      <div className="relative w-80 h-80 rounded-full flex items-center justify-center">
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
              times: [0, 0.75, 0.8, 0.95, 1], // Synchronize with eclipse sun passage
            }}
          />
        </motion.div>

        {/* Orbit Path (Optional Visual Aid) */}
        {/* <div className="absolute inset-0 rounded-full border border-dashed border-indigo-700" /> */}
      </div>
    </div>
  );
}
