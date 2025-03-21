
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react'
import AppMenu from './components/home';
import Perfil from './components/perfil-explorador';
import Telescopio from './components/telescope';
import PuzzleGame from './components/puzzle';
import OrbitaPlaneta from './components/orbita_planetaria';
import SelectorDeNiveles from './components/niveles';

function App() {
    const [showDevMenu, setShowDevMenu] = useState(false);

    return (
      <Router>
      <div className="app-container relative">
        {/* Botón menú desplegable navegación entre secciones */}
        <button
          onClick={() => setShowDevMenu(!showDevMenu)}
          className="fixed top-4 right-4 z-50 bg-gray-800 text-white px-3 py-1 rounded shadow"
        >
          🧪 Navigation Panel
        </button>

        {/* Menú desplegable*/}
        {showDevMenu && (
          <nav className="fixed top-16 right-4 z-40 bg-gray-900 bg-opacity-90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-700 w-52 space-y-2">
            {[
              { path: "/", label: "🏠 Inicio" },
              { path: "/niveles", label: "🪐 Niveles" },
              { path: "/perfil", label: "🧑‍🚀 Perfil" },
              { path: "/telescope", label: "🔭 Telescopio" },
              { path: "/puzzle", label: "🧩 Puzzle" },
              { path: "/orbita", label: "🌀 Órbita" },
            ].map(({ path, label }) => (
              <Link to={path} key={path}>
                <button className="w-full text-left px-3 py-2 rounded-lg bg-gray-800 hover:bg-blue-600 text-white font-mono text-sm transition duration-200">
                  {label}
                </button>
              </Link>
            ))}
          </nav>
        )}

        {/* Rutas navegación */}
        <Routes>
          <Route path="/" element={<AppMenu />} />
          <Route path="/menu" element={<AppMenu />} />
          <Route path="/niveles" element={<SelectorDeNiveles />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/telescope" element={<Telescopio />} />
          <Route path="/puzzle" element={<PuzzleGame />} />
          <Route path="/orbita" element={<OrbitaPlaneta />} />
          <Route path="*" element={<h1 className="text-center text-white mt-10">404 - Página no encontrada</h1>} />
        </Routes>
      </div>
    </Router>
    );
  }
  
  export default App;
  