import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full backdrop-blur-md bg-blue-100/20 flex items-center justify-center">
      <div className="text-center space-y-4 max-w-4xl animate-fade-in">
        <img src={logo} alt="logo" className="w-28 mx-auto" />
        <h1 className="text-charcoal text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold drop-shadow-sm transition-all duration-500">
          Welcome To <span className="text-primary">Talky</span>
        </h1>

        <p className="text-charcoal sm:text-lg md:text-xl font-semibold leading-relaxed px-2">
          Connect, chat, and share — anytime, anywhere.
          <br className="hidden sm:block" />
          Simple. Fast. Beautiful.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="px-8 py-2 bg-primary hover:bg-hover text-white font-semibold text-lg sm:text-xl rounded-full shadow-lg hover:scale-102 transition-all duration-300 cursor-pointer"
        >
          Start Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
