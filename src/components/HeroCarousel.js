"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Corrected paths assuming files are in public/assets/images/hero/...
const heroSlides = [
  {
    id: 1,
    title: "SecureHealth Triad Protocol",
    subtitle: "Advanced Healthcare Cybersecurity Framework for Modern Healthcare Organizations",
    ctaText: "Learn More",
    ctaLink: "/demo",
    secondaryCtaText: "View Solutions",
    secondaryCtaLink: "/products",
    backgroundImage: "/assets/images/hero/background_placeholder.png" 
  },
  {
    id: 2,
    title: "NIS2 Directive",
    subtitle: "Stay Compliant with the Latest EU Cybersecurity Regulations",
    ctaText: "Learn About NIS2",
    ctaLink: "/factors/nis2",
    secondaryCtaText: "Get Assessment",
    secondaryCtaLink: "/assessment",
    backgroundImage: "/assets/images/hero/nis2/NIS2 DIRECTIVe.png"
  },
  {
    id: 3,
    title: "Generative AI Security",
    subtitle: "Protect Your AI Systems from Emerging Threats",
    ctaText: "Explore AI Security",
    ctaLink: "/factors/genai",
    secondaryCtaText: "Watch Demo",
    secondaryCtaLink: "/demo",
    backgroundImage: "/assets/images/hero/genai/AI.png"
  },
  {
    id: 4,
    title: "COVID-19 Cybersecurity",
    subtitle: "Protect Healthcare Systems During Global Health Crises",
    ctaText: "View Solutions",
    ctaLink: "/factors/covid19",
    secondaryCtaText: "Emergency Support",
    secondaryCtaLink: "/emergency-support",
    backgroundImage: "/assets/images/hero/covid/Frame 118.png"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState({});
  const effectiveBasePath = process.env.NEXT_PUBLIC_BASE_PATH || ''; 
  
  useEffect(() => {
    console.log('[HeroCarousel Mounted] process.env.NEXT_PUBLIC_BASE_PATH:', process.env.NEXT_PUBLIC_BASE_PATH, ', effectiveBasePath:', effectiveBasePath);
    console.log('[HeroCarousel Mounted] heroSlides definition being used:', JSON.stringify(heroSlides.map(s => s.backgroundImage)));
  }, [effectiveBasePath]); // Log if effectiveBasePath changes

  useEffect(() => {
    console.log('[HeroCarousel Preload Effect] Running. effectiveBasePath (from NEXT_PUBLIC_BASE_PATH):', effectiveBasePath);
    heroSlides.forEach((slide, index) => {
      const finalImageUrl = `${effectiveBasePath}${slide.backgroundImage}`;
      console.log(`[HeroCarousel Preload Effect] Index ${index}: Slide path: "${slide.backgroundImage}", effectiveBasePath: "${effectiveBasePath}", Attempting to load: "${finalImageUrl}"`);
      
      const img = new Image();
      img.src = finalImageUrl;
      img.onload = () => {
        console.log(`[HeroCarousel Preload Effect] Successfully loaded: "${finalImageUrl}"`);
        setIsLoaded(prev => ({
          ...prev,
          [index]: true
        }));
      };
      img.onerror = () => {
        console.error(`[HeroCarousel Preload Effect] ERROR loading image. Attempted URL was: "${finalImageUrl}". (Raw slide.backgroundImage: "${slide.backgroundImage}", effectiveBasePath: "${effectiveBasePath}")`);
      };
    });
  }, [effectiveBasePath]); // Re-run if effectiveBasePath changes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[600px] md:h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out"
              style={{
                backgroundImage: `url("${effectiveBasePath}${slide.backgroundImage}")`,
                transform: isLoaded[index] && index === currentSlide ? 'scale(1)' : 'scale(1.05)',
                transition: 'transform 6s ease-out, opacity 1s ease-in-out'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            <div className="container mx-auto px-4 h-full relative z-10">
              <div className={`flex flex-col justify-center h-full max-w-3xl transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link 
                    href={slide.ctaLink} 
                    className="btn-primary"
                  >
                    {slide.ctaText}
                  </Link>
                  {slide.secondaryCtaText && (
                    <Link 
                      href={slide.secondaryCtaLink} 
                      className="btn-secondary"
                    >
                      {slide.secondaryCtaText}
                    </Link>
                  )}
                </div>
                <div className="flex gap-3 mt-4">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 
                        ${idx === currentSlide 
                          ? 'bg-white w-8' 
                          : 'w-2 bg-white/50 hover:bg-white/75'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;