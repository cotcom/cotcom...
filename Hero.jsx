import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../data/mockData';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroData.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroData.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroData.images.length) % heroData.images.length);
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroData.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/85 to-[#1a1a1a]/70"></div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-[#FF6600] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-[#FF6600] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroData.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-[#FF6600] w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {heroData.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
            {heroData.subtitle}
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            {heroData.description}
          </p>
          <a href="#products">
            <Button 
              size="lg" 
              className="bg-[#FF6600] hover:bg-[#e55a00] text-white text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              {heroData.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#FF6600]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Hero;
