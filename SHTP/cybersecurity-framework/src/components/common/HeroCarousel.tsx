import React, { useState, useEffect } from 'react';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "SHTP - Secure Health Triad Protocol",
    subtitle: "Advanced Healthcare Cybersecurity for a Digital Health World",
    ctaText: "Get Started",
    ctaLink: "/platform",
    secondaryCtaText: "Learn More",
    secondaryCtaLink: "/about",
    backgroundImage: "/assets/images/hero/background_placeholder.png"
  },
  {
    id: 2,
    title: "NIS2 Directive",
    subtitle: "Stay Compliant with the Latest EU Cybersecurity Regulations",
    ctaText: "Learn About NIS2",
    ctaLink: "/nis2",
    secondaryCtaText: "Get Assessment",
    secondaryCtaLink: "/assessment",
    backgroundImage: "/assets/images/hero/nis2/NIS2%20DIRECTIVe.png"
  },
  {
    id: 3,
    title: "Generative AI Security",
    subtitle: "Protect Your AI Systems from Emerging Threats",
    ctaText: "Explore AI Security",
    ctaLink: "/ai-security",
    secondaryCtaText: "Watch Demo",
    secondaryCtaLink: "/demo",
    backgroundImage: "/assets/images/hero/genai/AI.png"
  },
  {
    id: 4,
    title: "COVID-19 Cybersecurity",
    subtitle: "Protect Healthcare Systems During Global Health Crises",
    ctaText: "View Solutions",
    ctaLink: "/covid-security",
    secondaryCtaText: "Emergency Support",
    secondaryCtaLink: "/emergency-support",
    backgroundImage: "/assets/images/hero/covid/Frame 118.png"
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    // Preload all images
    heroSlides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.backgroundImage;
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [index]: true
        }));
      };
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-carousel">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-section ${loadedImages[index] ? 'is-loaded' : ''} ${
            index === currentSlide ? 'active' : ''
          }`}
        >
          <div
            className="background"
            style={{
              backgroundImage: `url("${slide.backgroundImage}")`,
              opacity: index === currentSlide ? 1 : 0,
            }}
          />
          <div className="hero-overlay" />
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-buttons">
                <a href={slide.ctaLink} className="btn-primary">
                  {slide.ctaText}
                </a>
                {slide.secondaryCtaText && slide.secondaryCtaLink && (
                  <a href={slide.secondaryCtaLink} className="btn-secondary">
                    {slide.secondaryCtaText}
                  </a>
                )}
              </div>
              <div className="carousel-pagination">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`pagination-dot ${idx === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;