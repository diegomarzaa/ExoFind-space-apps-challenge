"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, AlertTriangle } from "lucide-react";
import BackToHome from "./BackToHome";

/* 
  Este componente simula el método de TRÁNSITO para detectar exoplanetas.
  El “planeta” pasa periódicamente delante de la estrella, 
  y el usuario debe “descubrirlo” haciendo click en el momento justo.
  Cada acierto suma puntos, los fallos restan vidas, 
  y la dificultad sube con cada acierto.
*/

// Sol (reutilizable)
const Sun = ({ className }) => (
  <div
    className={`w-12 h-12 bg-yellow-400 rounded-full ${className}`}
    style={{
      boxShadow: "0 0 20px 10px rgba(255, 223, 0, 0.5)",
      position: "absolute",
    }}
  />
);

// Estrellas de fondo
const Star = ({ size, top, left, delay, duration, opacity }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{
      width: size,
      height: size,
      top: `${top}%`,
      left: `${left}%`,
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

export default function TransitMinigame() {
  // Configurable: duraciones y velocidades bases
  const [orbitDuration, setOrbitDuration] = useState(3); // Segundos por vuelta
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Generar estrellas de fondo
  const stars = Array.from({ length: 120 }).map((_, index) => ({
    id: index,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * orbitDuration,
    duration: Math.random() * 5 + 5,
    opacity: Math.random() * 0.5 + 0.5,
  }));

  // Manejador para clickar el planeta
  const handlePlanetClick = () => {
    if (gameOver) return;

    setScore((prev) => {
      const newScore = prev + 1;
      if (newScore % 5 === 0) { // Subir velocidad cada 5 puntos
        setOrbitDuration((prevDur) => Math.max(2, prevDur - 0.3)); // Más lento
      }
      return newScore;
    });
  };

  // Manejador para detectar fallos
  // (ejemplo: cada medio ciclo sin hacer click, restamos vida)
  useEffect(() => {
    // Temporizador para “chequear” cada mitad de ciclo 
    // si el usuario no ha cliqueado en el momento apropiado. 
    // Esto es una simulación muy simplificada, 
    // pero te da la idea de “fallar” si el jugador no reaccionó.
    const halfCycle = orbitDuration * 1000;
    const timer = setInterval(() => {
      // Si el usuario no ha clicado, consideramos un fallo
      setLives((prev) => {
        if (prev <= 1) {
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, halfCycle);

    return () => clearInterval(timer);
  }, [orbitDuration, gameOver]);

  // Efecto para reiniciar cuando las vidas llegan a 0
  useEffect(() => {
    if (lives <= 0) {
      setGameOver(true);
    }
  }, [lives]);

  // Reiniciar juego
  const restartGame = () => {
    setScore(0);
    setLives(5);
    setOrbitDuration(4);
    setGameOver(false);
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative">
      <BackToHome />

      {/* Título e info expandible */}
      <div className="text-center mb-4">
        <motion.h1
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: -50, opacity: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="text-5xl md:text-6xl font-extrabold text-white"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Tránsito
        </motion.h1>

        {/* Botón para mostrar explicación */}
        <div className="flex items-center justify-center mt-2">
          <button
            onClick={() => setShowExplanation((prev) => !prev)}
            className="flex items-center space-x-1 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <Info className="w-4 h-4" />
            <span>Ver Explicación</span>
          </button>
        </div>

        {/* Panel expandible con la explicación */}
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-3 bg-white bg-opacity-10 text-white p-4 rounded-xl text-left max-w-md mx-auto"
            >
              <p className="text-sm leading-snug mb-2">
                El <strong>método de Tránsito</strong> detecta
                exoplanetas observando cómo la luz de una estrella disminuye
                cuando un planeta pasa delante de ella. Si medimos la
                intensidad de la luz y notamos caídas periódicas, concluimos
                que un objeto está orbitando a esa estrella.
              </p>
              <p className="text-sm leading-snug">
                Aquí simulamos ese “paso” del planeta. ¡Intenta hacer click en
                el momento apropiado para capturar el tránsito y aumentar
                tu puntuación!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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

      {/* Indicadores de puntaje y vidas */}
      <div className="absolute top-16 right-4 text-white text-sm space-y-2">
        <div>
          <span className="font-bold">Puntuación:</span> {score}
        </div>
        <div>
          <span className="font-bold">Vidas:</span> {lives}{" "}
          {lives <= 1 && !gameOver && (
            <AlertTriangle className="inline w-4 h-4 text-red-400 ml-1" />
          )}
        </div>
      </div>

      {/* Game Over Overlay */}
      <AnimatePresence>
        {gameOver && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">¡Juego terminado!</h2>
            <p className="text-lg mb-6">Puntuación final: {score}</p>
            <button
              onClick={restartGame}
              className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
            >
              Reintentar
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Telescopio principal */}
      <div className="relative w-96 h-96">
        {/* Marco circular externo */}
        <div className="w-full h-full rounded-full border-4 border-gray-800 bg-transparent flex items-center justify-center shadow-2xl">
          {/* Área interna circular */}
          <div className="w-5/6 h-5/6 rounded-full bg-black bg-opacity-50 overflow-hidden relative">
            {/* Contenedor de orbitas */}
            <div className="relative w-full h-full">
              {/* Sol principal en el centro */}
              <Sun className="top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

              {/* Uno o dos soles extra para despistar :)
                  (Los dejamos fijos, sin órbita, para "ruido visual") */}
              <Sun className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2" />
              <Sun className="absolute bottom-1/4 right-1/3 transform translate-x-1/2 translate-y-1/2" />

              {/* Contenedor rotatorio para el planeta que "transita" */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: orbitDuration,
                  ease: "linear",
                }}
                className="absolute inset-0"
                style={{ transformOrigin: "50% 50%" }}
              >
                {/* Planeta (clicable para ganar puntos) */}
                <motion.div
                  onClick={handlePlanetClick}
                  className="absolute top-1/4 right-0 w-9 h-9 bg-blue-400 rounded-full shadow-lg z-40 cursor-pointer"
                  style={{
                    transform: "translate(50%, -50%)",
                  }}
                  animate={{
                    // Hacemos que su opacidad suba (cuando cruza delante)
                    // y baje cuando está detrás.
                    opacity: [0.1, 0.1, 0.7, 0.1, 0.1],
                    scale: [1, 1, 1.5, 1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: orbitDuration,
                    ease: "linear",
                    times: [0, 0.7, 0.75, 0.8, 1],
                  }}
                />
              </motion.div>

              {/* Órbita visual (línea punteada) */}
              <div className="absolute inset-0 rounded-full border border-dashed border-indigo-700 opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
