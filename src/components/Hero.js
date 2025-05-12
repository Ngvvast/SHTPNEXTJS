"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Hero component with similar interface to your original TypeScript version
const Hero = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  secondaryCtaText, 
  secondaryCtaLink,
  backgroundImage = '/assets/images/hero/background_placeholder.png'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Simplified loading logic for Next.js
  }, []);

  return (
    <div className={`relative min-h-[500px] flex items-center ${isLoaded ? 'animate-fade-in' : ''}`}>
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            {ctaText && ctaLink && (
              <Link href={ctaLink} className="btn-primary">
                {ctaText}
              </Link>
            )}
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink} className="btn-secondary">
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;