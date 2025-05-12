"use client";

import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';

const ProductHero = ({
  title,
  subtitle,
  description,
  features = [],
  ctaText = "Request Demo",
  ctaLink = "/demo",
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
  imageAlt = "Product image",
  bgColor = "bg-gradient-to-br from-gray-50 to-gray-100"
}) => {
  return (
    <section className={`${bgColor} py-20 md:py-28`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            {subtitle && (
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-color mb-3">{subtitle}</p>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
            
            {description && (
              <p className="text-lg text-gray-600 mb-8">{description}</p>
            )}
            
            {features.length > 0 && (
              <ul className="mb-8 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-color mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            <div className="flex flex-wrap gap-4">
              <Button href={ctaLink} variant="primary">{ctaText}</Button>
              {secondaryCtaText && secondaryCtaLink && (
                <Button href={secondaryCtaLink} variant="outline">{secondaryCtaText}</Button>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            {imageSrc && (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={imageSrc} 
                  alt={imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;