// src/components/BackToHome.js
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '../img/Logo.png';

export default function BackToHome() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center space-x-2 p-1 bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-md rounded-full transition-all cursor-pointer"
        onClick={() => navigate('/')}>
      <ArrowLeft className="w-5 h-5 text-white" />
      <img src={Logo} alt="Logo" className="w-8 h-8 rounded-full" />
    </div>
  );
}
