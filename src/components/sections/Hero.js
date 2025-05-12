"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Hero = ({ 
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage = '/assets/images/hero/background_placeholder.png',
  showImage = true,
  imageSrc = '/globe.svg',
  imageAlt = 'Hero image'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient overlay */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-color/90 to-primary-color/60 z-10" />
        </>
      )}

      <div className="container mx-auto px-4 py-16 md:py-32 relative z-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className={`lg:w-1/2 ${showImage ? 'mb-12 lg:mb-0' : 'w-full'}`}>
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                isLoaded ? 'animate-fade-in' : ''
              }`}
            >
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-2xl md:text-3xl font-light text-white/90 mb-6">
                {subtitle}
              </p>
            )}
            
            {description && (
              <p className="text-lg text-white/80 mb-8 max-w-xl">
                {description}
              </p>
            )}

            <div className="flex flex-wrap gap-4">
              {primaryButtonText && primaryButtonLink && (
                <Button
                  href={primaryButtonLink}
                  variant="white"
                >
                  {primaryButtonText}
                </Button>
              )}
              
              {secondaryButtonText && secondaryButtonLink && (
                <Button
                  href={secondaryButtonLink}
                  variant="transparent"
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>

          {showImage && (
            <div className="lg:w-1/2">
              <div className={`relative h-72 md:h-96 w-full transition duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="drop-shadow-lg"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;