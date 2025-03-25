import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Settings, User, HelpCircle } from 'lucide-react';
import 'tailwindcss/tailwind.css';
import Logo from '../img/Logo.png';
import PageWrapper from './PageWrapper';

export default function ExoplanetExploration() {
  const navigate = useNavigate();

  const secondaryNav = [
    { icon: User, label: 'Perfil', path: '/perfil' },
    { icon: Settings, label: 'Ajustes', path: '/settings' },
    { icon: HelpCircle, label: 'Ayuda', path: '/ayuda' },
  ];

  return (
      <PageWrapper>

      <div className="z-10 text-center space-y-8 px-4 w-full">
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

      {/* GitHub Repo Link - bottom right corner, discreet */}
      <div className="fixed bottom-4 right-4">
        <a
          href="https://github.com/diegomarzaa/ExoFind-space-apps-challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white opacity-60 hover:opacity-100 transition-opacity duration-300 text-sm flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.5.8 1.5.6 1.5 2.2 1.1 2.7.9.1-.4.3-.8.5-1-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.1 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.5.2 2.7.1 3 .8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.3.3.5.7.5 1.4v2.1c0 .3.2.7.8.6A10.5 10.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
          </svg>
          <span>GitHub</span>
        </a>

        <a
            href="https://www.linkedin.com/in/diegomarza/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-60 hover:opacity-100 transition-opacity duration-300 text-sm flex items-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zm7.5-17h4.7v2.3h.1c.7-1.3 2.5-2.6 5.2-2.6 5.6 0 6.6 3.7 6.6 8.5V24h-5v-7.3c0-1.7 0-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.6V24h-5V7z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

      </div>

      {/* Estilos extra para animaciones (si se requieren) */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s infinite; }
      `}</style>
    </PageWrapper>
  );
}
