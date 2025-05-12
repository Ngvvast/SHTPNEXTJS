"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter

const Header = () => {
  const router = useRouter(); // Initialize useRouter
  const basePath = router.basePath || ''; // Get basePath
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileFactorOpen, setMobileFactorOpen] = useState(false);
  const [mobileResponseOpen, setMobileResponseOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle functions for mobile accordion
  const toggleMobileFactor = () => setMobileFactorOpen(!mobileFactorOpen);
  const toggleMobileResponse = () => setMobileResponseOpen(!mobileResponseOpen);
  const toggleMobileProduct = () => setMobileProductOpen(!mobileProductOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out w-full
        ${scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/assets/logos/SHTP-LOGO.png" // Rely on assetPrefix
              alt="SHTP Logo" 
              width={180} 
              height={40} 
              priority
            />
          </Link>
        </div>

        <nav className={`hidden md:flex items-center space-x-6 ${isOpen ? 'mobile-active' : ''}`}>
          <div className="relative group">
            <button 
              className="flex items-center space-x-1 font-medium text-[14px] text-gray-800 hover:text-primary-color whitespace-nowrap"
              aria-haspopup="true"
              aria-controls="factor-menu"
              aria-expanded="false"
            >
              CHOOSE A FACTOR
              <svg className="w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              id="factor-menu"
              role="menu"
              className="absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100"
            >
              <Link href="/factors/summary" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md">
                VIEW ALL RISK IN ONE PLACE
              </Link>
              <Link href="/factors/nis2" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md">
                NIS2 DIRECTIVE
              </Link>
              <Link href="/factors/genai" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md">
                GENERATIVE AI
              </Link>
              <Link href="/factors/covid19" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md">
                COVID-19
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button 
              className="flex items-center space-x-1 font-medium text-[14px] text-gray-800 hover:text-primary-color whitespace-nowrap"
              aria-haspopup="true"
              aria-controls="response-menu"
              aria-expanded="false"
            >
              RESPOND TO A CYBER ATTACK
              <svg className="w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              id="response-menu"
              role="menu"
              className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100"
            >
              <Link href="/factors/covid19#actionable-framework-covid19" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md font-semibold">
                COVID-19: Actionable Tools
              </Link>
              <Link href="/factors/genai#interactive-assessment-genai" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md font-semibold">
                GenAI: Risk Self-Assessment
              </Link>
              <Link href="/factors/nis2#interactive-navigator-nis2" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md font-semibold">
                NIS2: Preparedness Navigator
              </Link>
              <Link href="/response/framework" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md">
                General Incident Response Framework
              </Link>
              <Link href="/response/incident-response" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md">
                General Incident Response Steps
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button 
              className="flex items-center space-x-1 font-medium text-[14px] text-gray-800 hover:text-primary-color whitespace-nowrap"
              aria-haspopup="true"
              aria-controls="product-menu"
              aria-expanded="false"
            >
              FIND A PRODUCT OR SERVICE
              <svg className="w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              id="product-menu"
              role="menu"
              className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100"
            >
              <Link href="/products/spectra-assure" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md font-semibold">
                Spectra-Assure Platform
              </Link>
              <Link href="/products/risk-assessment" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md">
                Risk Assessment Services
              </Link>
              <Link href="/products/threat-intelligence" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md">
                Threat Intelligence Feeds
              </Link>
              <Link href="/products/security-operations" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md">
                Managed Security Operations
              </Link>
              <Link href="/services/consulting" role="menuitem" className="text-[14px] block p-2 hover:bg-gray-100 rounded-md">
                Cybersecurity Consulting
              </Link>
            </div>
          </div>

          <Link href="/resources" className="text-[14px] font-medium py-2 hover:text-primary-color whitespace-nowrap">
            RESOURCES
          </Link>
        </nav>

        <div className="flex items-center">
          <button className="md:hidden ml-4" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-1">
              <div className="border-b pb-2">
                <button 
                  onClick={toggleMobileFactor}
                  className="flex justify-between items-center w-full text-[14px] font-medium mb-1 py-2"
                  aria-expanded={mobileFactorOpen}
                  aria-controls="mobile-factor-links"
                >
                  CHOOSE A FACTOR
                  <svg className={`w-4 h-4 transform transition-transform duration-200 ${mobileFactorOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileFactorOpen && (
                  <div id="mobile-factor-links" className="pl-4 flex flex-col space-y-2 mt-1">
                    <Link href="/factors/summary" className="text-[14px] text-gray-600 hover:text-primary-color py-1">VIEW ALL RISK IN ONE PLACE</Link>
                    <Link href="/factors/nis2" className="text-[14px] text-gray-600 hover:text-primary-color py-1">NIS2 DIRECTIVE</Link>
                    <Link href="/factors/genai" className="text-[14px] text-gray-600 hover:text-primary-color py-1">GENERATIVE AI</Link>
                    <Link href="/factors/covid19" className="text-[14px] text-gray-600 hover:text-primary-color py-1">COVID-19</Link>
                  </div>
                )}
              </div>
              
              <div className="border-b pb-2">
                <button 
                  onClick={toggleMobileResponse}
                  className="flex justify-between items-center w-full text-[14px] font-medium mb-1 py-2"
                  aria-expanded={mobileResponseOpen}
                  aria-controls="mobile-response-links"
                >
                  RESPOND TO A CYBER ATTACK
                  <svg className={`w-4 h-4 transform transition-transform duration-200 ${mobileResponseOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileResponseOpen && (
                  <div id="mobile-response-links" className="pl-4 flex flex-col space-y-2 mt-1">
                    <Link href="/factors/covid19#actionable-framework-covid19" className="text-[14px] text-gray-600 hover:text-primary-color font-semibold py-1">COVID-19: Actionable Tools</Link>
                    <Link href="/factors/genai#interactive-assessment-genai" className="text-[14px] text-gray-600 hover:text-primary-color font-semibold py-1">GenAI: Risk Self-Assessment</Link>
                    <Link href="/factors/nis2#interactive-navigator-nis2" className="text-[14px] text-gray-600 hover:text-primary-color font-semibold py-1">NIS2: Preparedness Navigator</Link>
                    <Link href="/response/framework" className="text-[14px] text-gray-600 hover:text-primary-color py-1">General Incident Response Framework</Link>
                    <Link href="/response/incident-response" className="text-[14px] text-gray-600 hover:text-primary-color py-1">General Incident Response Steps</Link>
                  </div>
                )}
              </div>
              
              <div className="border-b pb-2">
                <button 
                  onClick={toggleMobileProduct}
                  className="flex justify-between items-center w-full text-[14px] font-medium mb-1 py-2"
                  aria-expanded={mobileProductOpen}
                  aria-controls="mobile-product-links"
                >
                  FIND A PRODUCT OR SERVICE
                  <svg className={`w-4 h-4 transform transition-transform duration-200 ${mobileProductOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileProductOpen && (
                  <div id="mobile-product-links" className="pl-4 flex flex-col space-y-2 mt-1">
                    <Link href="/products/spectra-assure" className="text-[14px] text-gray-600 hover:text-primary-color font-semibold py-1">Spectra-Assure Platform</Link>
                    <Link href="/products/risk-assessment" className="text-[14px] text-gray-600 hover:text-primary-color py-1">Risk Assessment Services</Link>
                    <Link href="/products/threat-intelligence" className="text-[14px] text-gray-600 hover:text-primary-color py-1">Threat Intelligence Feeds</Link>
                    <Link href="/products/security-operations" className="text-[14px] text-gray-600 hover:text-primary-color py-1">Managed Security Operations</Link>
                    <Link href="/services/consulting" className="text-[14px] text-gray-600 hover:text-primary-color py-1">Cybersecurity Consulting</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;