"use client";

import MainLayout from '../../layouts/MainLayout';
import Hero from '../../components/Hero';
import { useState } from 'react';

export default function SecurityPortal() {
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  
  const handleLogin = (e) => {
    e.preventDefault();
    setShowTwoFactor(true);
    // In a real application, this would validate credentials first
  };
  
  const handleTwoFactorSubmit = (e) => {
    e.preventDefault();
    // Handle two-factor authentication
    alert('Authentication successful! Redirecting to dashboard...');
  };

  return (
    <MainLayout>
      <Hero 
        title="Security Operations Portal"
        subtitle="Secure access to cybersecurity framework and threat intelligence"
        backgroundImage="/assets/images/hero/background_placeholder.png"
      />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Secure Authentication Portal</h2>
              
              {!showTwoFactor ? (
                <form onSubmit={handleLogin}>
                  <div className="mb-6">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <a href="#" className="text-sm text-primary-color hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
                      required
                    />
                    <div className="mt-2 text-xs text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 text-primary-color mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Password must include at least 12 characters with uppercase, lowercase, numbers, and symbols
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6 flex items-center">
                    <input
                      type="checkbox"
                      id="secure-session"
                      name="secure-session"
                      className="h-4 w-4 text-primary-color focus:ring-primary-color border-gray-300 rounded"
                    />
                    <label htmlFor="secure-session" className="ml-2 block text-sm text-gray-700">
                      Enable secure session (recommended)
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary mb-4"
                  >
                    Continue
                  </button>
                  
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">
                      Need access?{' '}
                      <a href="#" className="text-primary-color hover:underline">
                        Contact your security administrator
                      </a>
                    </p>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleTwoFactorSubmit}>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-600 mb-4">Please enter the verification code sent to your registered device.</p>
                    
                    <label htmlFor="verification-code" className="block text-sm font-medium text-gray-700 mb-1">
                      Verification Code
                    </label>
                    <input
                      type="text"
                      id="verification-code"
                      name="verification-code"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
                      required
                      autoFocus
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary mb-4"
                  >
                    Verify and Sign In
                  </button>
                  
                  <div className="text-center">
                    <button 
                      type="button" 
                      onClick={() => setShowTwoFactor(false)}
                      className="text-sm text-primary-color hover:underline"
                    >
                      Back to login
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Cyber Framework Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-color mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Software Supply Chain Security Analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-color mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>High-Speed File Analysis & Threat Detection</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-color mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Advanced Malware Analysis & Hunting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-color mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Comprehensive Threat Intelligence</span>
                </li>
              </ul>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Our platform is designed to identify threats and risks embedded in software, 
                  providing comprehensive security for your organization's software supply chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}