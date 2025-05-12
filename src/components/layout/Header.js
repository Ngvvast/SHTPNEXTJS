"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="container mx-auto flex items-center h-16 px-4">
        {/* Logo section */}
        <div className="flex-shrink-0 flex items-center mr-12">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image 
              src={`${basePath}/assets/logos/SHTP-LOGO.png`} 
              alt="SHTP Logo" 
              width={180} 
              height={40} 
              unoptimized={true}
              priority={true}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SHTP</span>
          </Link>
        </div>

        {/* Navigation section - centered and aligned with logo */}
        <nav className="hidden md:flex items-center h-full">
          <div className="flex items-center h-full">
            <div className="relative group h-full flex items-center mx-4">
              <button className="flex items-center font-medium text-[14px] whitespace-nowrap text-gray-800">
                HEALTHCARE SECURITY
                <svg className="ml-1 w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-1 w-64 bg-white shadow-lg rounded-md p-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                <Link href="/healthcare-security/overview" className="block p-2 hover:bg-gray-100 rounded-md text-[14px]">
                  Overview
                </Link>
                <Link href="/healthcare-security/medical-devices" className="block p-2 hover:bg-gray-100 rounded-md text-[14px]">
                  Medical Device Security
                </Link>
                <Link href="/healthcare-security/compliance" className="block p-2 hover:bg-gray-100 rounded-md text-[14px]">
                  Compliance
                </Link>
                <Link href="/healthcare-security/data-protection" className="block p-2 hover:bg-gray-100 rounded-md text-[14px]">
                  Data Protection
                </Link>
              </div>
            </div>

            <div className="relative group h-full flex items-center mx-4">
              <button className="flex items-center font-medium text-[14px] whitespace-nowrap text-gray-800">
                CYBER ATTACK RESPONSE
                <svg className="ml-1 w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-1 w-64 bg-white shadow-lg rounded-md p-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                <Link href="/cyber-response/incident-response" className="block p-2 hover:bg-gray-100 rounded-md text-[14px]">
                  Incident Response
                </Link>
                <Link href="/cyber-response/breach-notification" className="block p-2 hover:bg-gray-100 rounded-md text-[14px]">
                  Breach Notification
                </Link>
                <Link href="/cyber-response/recovery" className="block p-2 hover:bg-gray-100 rounded-md text-[14px]">
                  Recovery Procedures
                </Link>
                <Link href="/cyber-response/threat-hunting" className="block p-2 hover:bg-gray-100 rounded-md text-[14px]">
                  Threat Hunting
                </Link>
              </div>
            </div>

            <div className="relative group h-full flex items-center mx-4">
              <button className="flex items-center font-medium text-[14px] whitespace-nowrap text-gray-800">
                PRODUCTS
                <svg className="ml-1 w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-1 w-64 bg-white shadow-lg rounded-md p-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                <Link href="/products/secure-platform" className="block p-2 hover:bg-gray-100 rounded-md text-[14px]">
                  Healthcare Security Platform
                </Link>
                <Link href="/products/threat-intelligence" className="block p-2 hover:bg-gray-100 rounded-md text-[14px]">
                  Threat Intelligence
                </Link>
                <Link href="/products/security-assessment" className="block p-2 hover:bg-gray-100 rounded-md text-[14px]">
                  Security Assessment
                </Link>
                <Link href="/products/managed-services" className="block p-2 hover:bg-gray-100 rounded-md text-[14px]">
                  Managed Security Services
                </Link>
              </div>
            </div>
            
            <Link href="/resources" className="flex items-center h-full font-medium text-[14px] whitespace-nowrap text-gray-800 mx-4">
              RESOURCES
            </Link>
            
            <Link href="/blog" className="flex items-center h-full font-medium text-[14px] whitespace-nowrap text-gray-800 mx-4">
              BLOG
            </Link>
          </div>
        </nav>

        {/* CTA Buttons - aligned with logo and nav */}
        <div className="flex items-center justify-end ml-auto">
          <Link 
            href="/demo" 
            className="hidden sm:inline-block mr-2 px-4 py-2 rounded-md text-[14px] font-medium transition-colors bg-primary-color text-white hover:bg-blue-700 whitespace-nowrap"
          >
            Request Demo
          </Link>
          <Link 
            href="/portal" 
            className="hidden sm:inline-block px-4 py-2 rounded-md text-[14px] font-medium transition-colors border border-primary-color text-primary-color hover:bg-primary-color/10 whitespace-nowrap"
          >
            Patient Portal
          </Link>
          <button className="ml-4 md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <div className="border-b pb-3">
                <div className="font-medium mb-2 text-[14px] whitespace-nowrap">HEALTHCARE SECURITY</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/healthcare-security/overview" className="text-gray-600 text-[14px] whitespace-nowrap">Overview</Link>
                  <Link href="/healthcare-security/medical-devices" className="text-gray-600 text-[14px] whitespace-nowrap">Medical Device Security</Link>
                  <Link href="/healthcare-security/compliance" className="text-gray-600 text-[14px] whitespace-nowrap">Compliance</Link>
                  <Link href="/healthcare-security/data-protection" className="text-gray-600 text-[14px] whitespace-nowrap">Data Protection</Link>
                </div>
              </div>
              
              <div className="border-b pb-3">
                <div className="font-medium mb-2 text-[14px] whitespace-nowrap">CYBER ATTACK RESPONSE</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/cyber-response/incident-response" className="text-gray-600 text-[14px] whitespace-nowrap">Incident Response</Link>
                  <Link href="/cyber-response/breach-notification" className="text-gray-600 text-[14px] whitespace-nowrap">Breach Notification</Link>
                  <Link href="/cyber-response/recovery" className="text-gray-600 text-[14px] whitespace-nowrap">Recovery Procedures</Link>
                  <Link href="/cyber-response/threat-hunting" className="text-gray-600 text-[14px] whitespace-nowrap">Threat Hunting</Link>
                </div>
              </div>
              
              <div className="border-b pb-3">
                <div className="font-medium mb-2 text-[14px] whitespace-nowrap">PRODUCTS</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/products/secure-platform" className="text-gray-600 text-[14px] whitespace-nowrap">Healthcare Security Platform</Link>
                  <Link href="/products/threat-intelligence" className="text-gray-600 text-[14px] whitespace-nowrap">Threat Intelligence</Link>
                  <Link href="/products/security-assessment" className="text-gray-600 text-[14px] whitespace-nowrap">Security Assessment</Link>
                  <Link href="/products/managed-services" className="text-gray-600 text-[14px] whitespace-nowrap">Managed Security Services</Link>
                </div>
              </div>
              
              <Link href="/resources" className="font-medium text-[14px] whitespace-nowrap">RESOURCES</Link>
              <Link href="/blog" className="font-medium text-[14px] whitespace-nowrap">BLOG</Link>
              
              <div className="pt-2 flex flex-col space-y-3">
                <Link href="/demo" className="bg-primary-color text-white hover:bg-blue-700 rounded-md text-center py-2 text-[14px] font-medium whitespace-nowrap">
                  Request Demo
                </Link>
                <Link href="/portal" className="border border-primary-color text-primary-color hover:bg-primary-color/10 rounded-md text-center py-2 text-[14px] font-medium whitespace-nowrap">
                  Patient Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;