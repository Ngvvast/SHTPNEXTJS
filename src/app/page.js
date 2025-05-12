'use client';
import MainLayout from '../layouts/MainLayout';
import HeroCarousel from '../components/HeroCarousel';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <MainLayout>
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Property Cards Section */}
      <div className="relative mt-[-400px] z-20 container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          {/* Card 1 - All Solutions */}
          <div className="relative bg-white p-6 group overflow-hidden">
            <div className="absolute inset-0 bg-white transition-opacity duration-500 z-10 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-color to-blue-700 opacity-0 group-hover:opacity-90 transition-all duration-500" />
            <div className="absolute inset-0">
              <Image
                src={`${basePath}/assets/images/hero/background_placeholder.png`}
                alt="Solutions"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized={true}
              />
            </div>
            <div className="relative z-20">
              <div className="mb-8">
                <h3 className="text-[14px] font-semibold uppercase tracking-wider mb-2 text-gray-900 group-hover:text-white/90 transition-colors">
                  All Solutions in One Place
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600 group-hover:text-white/80 transition-colors">
                  Comprehensive cybersecurity solutions for healthcare organizations
                </p>
              </div>
              <div className="inline-flex items-center text-[13px] font-medium text-primary-color group-hover:text-white transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 - NIS2 Directive */}
          <div className="relative bg-white p-6 group overflow-hidden">
            <div className="absolute inset-0 bg-white transition-opacity duration-500 z-10 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-color to-blue-700 opacity-0 group-hover:opacity-90 transition-all duration-500" />
            <div className="absolute inset-0">
              <Image
                src={`${basePath}/assets/images/hero/nis2/NIS2 DIRECTIVe.png`}
                alt="NIS2"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized={true}
              />
            </div>
            <div className="relative z-20">
              <div className="mb-8">
                <h3 className="text-[14px] font-semibold uppercase tracking-wider mb-2 text-gray-900 group-hover:text-white/90 transition-colors">
                  NIS2 Directive
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600 group-hover:text-white/80 transition-colors">
                  Enhanced cybersecurity framework and compliance
                </p>
              </div>
              <Link href="/factors/nis2" className="inline-flex items-center text-[13px] font-medium text-primary-color group-hover:text-white transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 3 - Generative AI */}
          <div className="relative bg-white p-6 group overflow-hidden">
            <div className="absolute inset-0 bg-white transition-opacity duration-500 z-10 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-color to-blue-700 opacity-0 group-hover:opacity-90 transition-all duration-500" />
            <div className="absolute inset-0">
              <Image
                src={`${basePath}/assets/images/hero/genai/AI.png`}
                alt="Generative AI"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized={true}
              />
            </div>
            <div className="relative z-20">
              <div className="mb-8">
                <h3 className="text-[14px] font-semibold uppercase tracking-wider mb-2 text-gray-900 group-hover:text-white/90 transition-colors">
                  Generative AI
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600 group-hover:text-white/80 transition-colors">
                  Protect your AI systems from emerging threats
                </p>
              </div>
              <Link href="/factors/genai" className="inline-flex items-center text-[13px] font-medium text-primary-color group-hover:text-white transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 4 - COVID-19 */}
          <div className="relative bg-white p-6 group overflow-hidden">
            <div className="absolute inset-0 bg-white transition-opacity duration-500 z-10 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-color to-blue-700 opacity-0 group-hover:opacity-90 transition-all duration-500" />
            <div className="absolute inset-0">
              <Image
                src={`${basePath}/assets/images/hero/covid/Frame 118.png`}
                alt="COVID-19"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized={true}
              />
            </div>
            <div className="relative z-20">
              <div className="mb-8">
                <h3 className="text-[14px] font-semibold uppercase tracking-wider mb-2 text-gray-900 group-hover:text-white/90 transition-colors">
                  COVID-19 Security
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600 group-hover:text-white/80 transition-colors">
                  Protect healthcare systems during global health crises
                </p>
              </div>
              <Link href="/factors/covid19" className="inline-flex items-center text-[13px] font-medium text-primary-color group-hover:text-white transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Healthcare Cybersecurity Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection for modern healthcare threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-blue-100 rounded-lg p-3 mb-6">
                <Image 
                  src={`${basePath}/file.svg`} 
                  alt="Healthcare Security" 
                  width={40} 
                  height={40} 
                  unoptimized={true}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Healthcare Security
              </h3>
              <p className="text-gray-600 mb-4">
                Protect patient data and critical healthcare infrastructure with specialized healthcare security solutions.
              </p>
              <Link href="/factors/healthcare-security" className="text-primary-color font-medium flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-orange-100 rounded-lg p-3 mb-6">
                <Image 
                  src={`${basePath}/window.svg`} 
                  alt="Incident Response" 
                  width={40} 
                  height={40} 
                  unoptimized={true}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cyber Attack Response
              </h3>
              <p className="text-gray-600 mb-4">
                Rapid response protocols and recovery procedures to minimize damage from cyber attacks on healthcare systems.
              </p>
              <Link href="/response/incident-response" className="text-primary-color font-medium flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-green-100 rounded-lg p-3 mb-6">
                <Image 
                  src={`${basePath}/file.svg`} 
                  alt="Products and Services" 
                  width={40} 
                  height={40} 
                  unoptimized={true}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Products and Services
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive suite of healthcare-specific cybersecurity products and services to protect your organization.
              </p>
              <Link href="/products/security-platform" className="text-primary-color font-medium flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Healthcare Security Challenges Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Security Challenges</h2>
              <p className="text-lg text-gray-600 mb-6">
                Healthcare organizations face unique cybersecurity challenges that require specialized solutions:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-color mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p><strong>Patient Data Protection</strong> - Safeguarding sensitive patient information from breaches and unauthorized access</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-color mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p><strong>Medical Device Security</strong> - Securing connected medical devices against emerging threats</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-color mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p><strong>Regulatory Compliance</strong> - Meeting HIPAA, GDPR, and other healthcare-specific regulations</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-color mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p><strong>Ransomware Protection</strong> - Defending against targeted ransomware attacks on healthcare facilities</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-96 w-full">
                <Image 
                  src={`${basePath}/globe.svg`}
                  alt="Healthcare Security Challenges"
                  fill
                  style={{objectFit: 'contain'}}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-color py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to secure your healthcare organization?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Get a personalized demo of our healthcare cybersecurity framework.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/demo" className="inline-block bg-white text-primary-color px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Request a Demo
            </Link>
            <Link href="/portal" className="inline-block border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
              Patient Portal
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
