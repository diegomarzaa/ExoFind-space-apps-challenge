
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, User, Trophy, HelpCircle, Volume2 } from 'lucide-react';
import { FaRocket } from 'react-icons/fa'; // Adding a rocket icon for extra flair
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

export default function ExoplanetExploration() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 300 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 2 + 1,
      }));
    };
    setStars(generateStars());
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2811&q=80')] bg-cover bg-center">
      {/* Starfield Background with Twinkling Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{ opacity: [0.3, star.opacity, 0.3] }}
          transition={{
            duration: star.twinkleSpeed,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="z-10 text-center space-y-12 px-4">
        {/* Title with Enhanced Animation */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'backOut' }}
          className="text-6xl md:text-8xl font-extrabold text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-12"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Exoplanet Exploration
        </motion.h1>

        {/* Rocket Icon Animation */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <FaRocket className="text-white animate-bounce-slow" size={50} />
        </motion.div>

        {/* Main Action Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button
            className="relative text-4xl font-bold py-5 px-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-500 transition-all duration-500 rounded-full shadow-lg transform hover:scale-105"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            LAUNCH
            {/* Glowing Effect */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 blur-xl"></span>
          </button>
        </motion.div>

        {/* Navigation Icons */}
        <div className="flex justify-center space-x-16 mt-12">
          {[
            { icon: User, label: 'Perfil' },
            { icon: Trophy, label: 'Logros' },
            { icon: Settings, label: 'Ajustes' },
            { icon: HelpCircle, label: 'Ayuda' },
            { icon: Volume2, label: 'Sonido' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <button className="group flex flex-col items-center">
                <item.icon className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="mt-2 text-white text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Styles for Glowing Effects and Animations */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #7f00ff, #e100ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
      `}</style>
    </div>
  );
}
