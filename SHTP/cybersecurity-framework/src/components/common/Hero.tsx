import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Hero.css';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = `${process.env.PUBLIC_URL}/assets/images/hero/background_placeholder.png`;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className={`hero-section ${isLoaded ? 'is-loaded' : ''}`}>
      <div 
        className="background" 
        style={{ 
          backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/hero/background_placeholder.png")`,
          opacity: 1,
          visibility: 'visible'
        }} 
      />
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-buttons">
            <Link to={ctaLink} className="btn-primary">
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link to={secondaryCtaLink} className="btn-secondary">
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