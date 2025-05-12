"use client";

import React, { useState } from 'react';

export default function FAQ({ 
  title, 
  subtitle, 
  description, 
  faqs, 
  columns = 2,
  bgColor = "bg-white" 
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className={`${bgColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-color mb-3">{subtitle}</p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
          )}
        </div>
        
        <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : ''} gap-x-8 gap-y-4 max-w-5xl mx-auto`}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 pb-4"
            >
              <button 
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <div className="ml-2 flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 transform ${openIndex === index ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 py-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}