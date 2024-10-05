
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';

function App() {
    return (
      <Router>
        <div className="app-container">
          {/* Navigation Buttons */}
          <nav className="flex justify-center space-x-4 my-4">
            <Link to="/slide1">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Slide 1</button>
            </Link>
            <Link to="/slide2">
              <button className="px-4 py-2 bg-green-500 text-white rounded">Slide 2</button>
            </Link>
            {/* Add more buttons for additional slides */}
          </nav>
  
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Slide1 />} />
            <Route path="/slide1" element={<Slide1 />} />
            <Route path="/slide2" element={<Slide2 />} />
            {/* Add more routes for additional slides */}
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;
  