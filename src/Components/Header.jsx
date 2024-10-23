import React from 'react'; 
import { FaVideo, FaStar, FaBullhorn, FaChartLine, FaArrowRight } from 'react-icons/fa'; 

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white h-screen w-full p-10 rounded-lg text-center relative overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" 
           style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,ai')" }} />

      
      <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-5">
        <ul className="flex space-x-6 text-lg font-semibold bg-white text-purple-600 rounded-full p-2 shadow-lg px-8">
          <li><a href="#" className="hover:text-purple-300 transition">Home</a></li>
          <li><a href="#" className="hover:text-purple-300 transition">Features</a></li>
          <li><a href="#" className="hover:text-purple-300 transition">Pricing</a></li>
          <li><a href="#" className="hover:text-purple-300 transition">About</a></li>
          <li><a href="#" className="hover:text-purple-300 transition">Contact</a></li>
        </ul>
      </nav>

      <h1 className="text-5xl font-bold relative z-10 neon-text">Welcome to AI Innovations</h1>
      <h2 className="text-3xl font-semibold mt-2 relative z-10 neon-text">AI Powered Short Video Generator</h2>
      <p className="mt-4 text-xl relative z-10 neon-text">
        Transforming Ideas into Stunning Videos.
      </p>
      
      <div className="mt-6 flex justify-center space-x-8 relative z-10">
        <div className="flex flex-col items-center">
          <FaVideo className="h-16 w-16 text-white neon-icon" />
          <span className="mt-2">Video Creation</span>
        </div>
        <div className="flex flex-col items-center">
          <FaStar className="h-16 w-16 text-white neon-icon" />
          <span className="mt-2">Stunning Effects</span>
        </div>
        <div className="flex flex-col items-center">
          <FaBullhorn className="h-16 w-16 text-white neon-icon" />
          <span className="mt-2">Generate for Social Media</span>
        </div>
        <div className="flex flex-col items-center">
          <FaChartLine className="h-16 w-16 text-white neon-icon" />
          <span className="mt-2">Ideal for Marketers</span>
        </div>
      </div>

      <button 
        onClick={() => alert('Get Started clicked!')} 
        className="mt-6 bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative z-10 neon-button flex items-center justify-center space-x-2 hover:bg-purple-600 hover:text-white" // Added hover effects
      >
        <FaArrowRight className="h-5 w-5" />
        <span>Get Started</span>
      </button>
    </header>
  );
};

export default Header;
