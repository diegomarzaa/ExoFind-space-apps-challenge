
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppMenu from './components/01-App-menu';
import Perfil from './components/perfil-explorador';

function App() {
    return (
      <Router>
        <div className="app-container">
          <nav className="flex justify-center space-x-4 my-4">
            <Link to="/">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Home</button>
            </Link>

            <Link to="/menu">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Menu</button>
            </Link>

            <Link to="/perfil">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Perfil</button>
            </Link>

            {/* OTROS */}
          </nav>
          <Routes>
            <Route path="/menu" element={<AppMenu />} />
            <Route path="/perfil" element={<Perfil />} />
            {/* Add more routes for additional slides */}
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;
  