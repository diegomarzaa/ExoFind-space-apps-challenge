import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Settings, User, HelpCircle, Volume2 } from 'lucide-react';
import 'tailwindcss/tailwind.css';
import Logo from '../img/Logo.png';

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


export default function ExoplanetExploration() {
  const navigate = useNavigate();

  const secondaryNav = [
    { icon: User, label: 'Perfil', path: '/perfil' },
    // { icon: Trophy, label: 'Logros', path: '/perfil#logros' }, // si querés que lleve a una sección dentro
    { icon: Settings, label: 'Ajustes', path: '/ajustes' },
    { icon: HelpCircle, label: 'Ayuda', path: '/ayuda' },
    { icon: Volume2, label: 'Sonido', path: '/sonido' },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2811&q=80')] bg-cover bg-center">
      {/* Estrellas*/}
      <Starfield count={300} glow={false} />
      <Starfield count={100} glow={true} />

      {/* Overlay oscuro*/}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black"
      />

      <div className="z-10 text-center space-y-8 px-4 w-full max-w-6xl">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8"
        >
          <img
            src={Logo}
            alt="Logo Exploración de Exoplanetas"
            width={320}
            height={320}
            className="mx-auto"
          />
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: -35, opacity: 1 }}
          transition={{ duration: 1, ease: 'backOut', delay: 0.3 }}
          className="text-6xl md:text-8xl font-extrabold text-white mb-12"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            textShadow: '0 0 20px rgba(255,255,255,0.8)',
          }}
        >
          EXOFIND
        </motion.h1>

        {/* Botón "jugar" */}
        <motion.div
          initial={{ scale: 1.2}}
          animate={{ scale: [1.2, 1.3, 1.2]}}
          transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: 'mirror' }}
        >
          <button
            onClick={() => navigate('/niveles')}
            className="text-5xl font-bold py-6 px-24 bg-transparent border-4 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full tracking-widest shadow-2xl"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            JUGAR
          </button>
        </motion.div>

        {/* Íconos de navegación secundarios */}
        <div className="flex justify-center space-x-16 mt-12">
          {secondaryNav.map((item, index) => (
          <motion.div
              key={item.label}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center"
          >
              <button
              className="group flex flex-col items-center"
              onClick={() => navigate(item.path)}
              >
              <item.icon className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="mt-2 text-white text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
              </span>
              </button>
          </motion.div>
          ))}
        </div>
      </div>

      {/* Estilos extra para animaciones (si se requieren) */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s infinite; }
      `}</style>
    </div>
  );
}
