import Background from '../img/background.avif';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Capa de estrellas: puede activarse el glow para estrellas de primer plano
function Starfield({ count = 300, glow = false }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () =>
      Array.from({ length: count }, () => {
        // Si es capa con glow, generamos estrellas algo más grandes
        const size = Math.random() * (glow ? 6 : 4) + 1;
        return {
          x: Math.random() * 100,
          y: Math.random() * 100,
          size,
          // Aumentamos la opacidad para las estrellas con glow
          opacity: Math.random() * (glow ? 0.3 : 0.4) + (glow ? 0.7 : 0.5),
          twinkleSpeed: Math.random() * 1.5 + 0.5, // faster twinkle
          delay: Math.random() * 2,
        };
      });
    setStars(generateStars());
  }, [count, glow]);

  return (
    <>
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className={`absolute bg-white rounded-full ${glow ? "shadow-xl" : ""}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: glow ? `0 0 ${star.size * 4}px ${star.size}px rgba(255, 255, 255, 0.8)` : 'none',
          }}
          
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, star.opacity, 0.3] }}
          transition={{
            duration: star.twinkleSpeed,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
}


export default function PageWrapper({ children, scrollable = false}) {
  return (
    <div
      className="fixed inset-0 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Starfield layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Starfield count={300} glow={false} />
        <Starfield count={100} glow={true} />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10 pointer-events-none" />

      {/* Actual content */}
      <div
        className={`relative z-20 w-full ${
            scrollable ? 'h-full overflow-y-auto py-8 px-4' : 'h-full flex items-center justify-center'
        }`}
      >
        <div className="w-full max-w-5xl mx-auto">{children}</div>
      </div>
    </div>
  );
}

