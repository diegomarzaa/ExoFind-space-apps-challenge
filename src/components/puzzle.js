import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw } from 'lucide-react';
import 'tailwindcss/tailwind.css'; // Asegúrate de que Tailwind CSS esté importado

import BackToHome from './BackToHome';

const IMAGE_URL = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2811&q=80';

export default function PuzzleGame() {
  const gridSize = 3;
  const totalTiles = gridSize * gridSize;
  const [tiles, setTiles] = useState([]);
  const [emptyTile, setEmptyTile] = useState(totalTiles - 1);
  const [moves, setMoves] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const borderSize = 5;

  const startGame = () => {
    // Estado resuelto del puzzle
    let initialTiles = Array.from(Array(totalTiles).keys()); // [0,1,2,3,4,5,6,7,8]

    // Realizar una única jugada: intercambiar la última pieza con el espacio vacío
    [initialTiles[7], initialTiles[8]] = [initialTiles[8], initialTiles[7]]; // [0,1,2,3,4,5,6,8,7]

    setTiles(initialTiles);
    setEmptyTile(initialTiles.indexOf(totalTiles - 1)); // Índice de la pieza vacía (8) es 7
    setMoves(0);
    setIsCompleted(false);
  };
  
  // Configurar el estado inicial con solo una pieza fuera de lugar
  useEffect(() => {
    startGame();
  }, [startGame]);


  const handleTileClick = (index) => {
    if (isAdjacent(index, emptyTile)) {
      let newTiles = tiles.slice();
      [newTiles[index], newTiles[emptyTile]] = [newTiles[emptyTile], newTiles[index]];
      setTiles(newTiles);
      setEmptyTile(index);
      setMoves(moves + 1);
      if (checkCompletion(newTiles)) {
        setIsCompleted(true);
      }
    }
  };

  const isAdjacent = (index1, index2) => {
    const row1 = Math.floor(index1 / gridSize);
    const col1 = index1 % gridSize;
    const row2 = Math.floor(index2 / gridSize);
    const col2 = index2 % gridSize;
    return (
      (Math.abs(row1 - row2) === 1 && col1 === col2) ||
      (Math.abs(col1 - col2) === 1 && row1 === row2)
    );
  };

  const checkCompletion = (currentTiles) => {
    for (let i = 0; i < totalTiles; i++) {
      if (currentTiles[i] !== i) return false;
    }
    return true;
  };

  // Dividir la imagen en piezas
  const tileSize = 300 / gridSize; // Tamaño de la imagen en px

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2811&q=80')] bg-cover bg-center">
      <BackToHome />
      {/* Campo de estrellas */}
      <Starfield />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenido */}
      <div className="z-10 text-center space-y-8 px-4">
        {/* Título */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'backOut' }}
          className="text-5xl md:text-6xl font-extrabold text-white"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Imágenes Directas
        </motion.h1>

        {/* Tablero del Puzzle */}
        <div
          className="relative mx-auto rounded-lg shadow-2xl"
          style={{
            width: `${tileSize * gridSize + borderSize*2}px`,
            height: `${tileSize * gridSize + borderSize*2}px`,
            border: `${borderSize}px solid #ffffff`,
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
            position: 'relative',
            borderRadius: '12px',
            // Añadir un efecto de resplandor
            backdropFilter: 'blur(2px)',
          }}
        >
          {tiles.map((tile, index) => {
            if (tile === totalTiles - 1) return null; // Es el espacio vacío
            const row = Math.floor(tile / gridSize);
            const col = tile % gridSize;
            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer border border-black rounded-md"
                style={{
                  width: `${tileSize}px`,
                  height: `${tileSize}px`,
                  backgroundImage: `url(${IMAGE_URL})`,
                  backgroundSize: `${tileSize * gridSize}px ${tileSize * gridSize}px`,
                  backgroundPosition: `-${col * tileSize}px -${row * tileSize}px`,
                  top: `${Math.floor(index / gridSize) * tileSize}px`,
                  left: `${(index % gridSize) * tileSize}px`,
                  borderRadius: '8px',
                }}
                onClick={() => handleTileClick(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              />
            );
          })}
        </div>

        {/* Botones de Control */}
        <div className="flex justify-center space-x-6">
          <button
            onClick={startGame}
            className="flex items-center space-x-2 text-white bg-transparent border-2 border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
          >
            <RefreshCcw className="w-5 h-5" />
            <span>Reiniciar</span>
          </button>
        </div>

        {/* Movimientos y Mensaje de Completado */}
        <div className="text-white">
          <p className="text-lg">Movimientos: {moves}</p>
          {isCompleted && (
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-2xl font-bold text-green-400"
            >
              ¡Has completado el puzzle!
            </motion.p>
          )}
        </div>
      </div>

      {/* Estilos adicionales */}
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        .star {
          animation: twinkle infinite;
        }
      `}</style>
    </div>
  );
}

// Componente de Fondo de Estrellas
function Starfield() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 200 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 5 + 1,
      }));
    };
    setStars(generateStars());
  }, []);

  return (
    <>
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute bg-white rounded-full star"
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
    </>
  );
}
