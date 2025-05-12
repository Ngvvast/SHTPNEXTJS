import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../../layouts/MainLayout';

export default function SpectraAssure() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Spectra Assure
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-blue-100 mb-6">
                Software Supply Chain Security
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Identify threats and vulnerabilities in your software dependencies, containers, and release packages before they reach production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Request Demo
                </Link>
                <Link href="/resources/documentation" className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                  Documentation
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full">
                <Image 
                  src="/file.svg"
                  alt="Spectra Assure"
                  fill
                  style={{objectFit: 'contain'}}
                  className="drop-shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spectra Assure provides comprehensive security for your software supply chain
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full p-3 mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Detect Hidden Threats
              </h3>
              <p className="text-gray-600">
                Find malware, backdoors, and other malicious code that traditional tools miss, using our advanced binary analysis technology.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full p-3 mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Uncover Secrets & Risks
              </h3>
              <p className="text-gray-600">
                Identify hardcoded credentials, API keys, and other secrets that could lead to unauthorized access and data breaches.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full p-3 mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SBOM Generation & Validation
              </h3>
              <p className="text-gray-600">
                Automatically create and validate Software Bills of Materials (SBOMs) to ensure transparency in your software components.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Spectra Assure Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced platform integrates seamlessly into your development lifecycle
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="h-20 w-20 bg-primary-color rounded-full text-white text-3xl font-bold flex items-center justify-center mx-auto">
                  1
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Integration
                </h3>
                <p className="text-gray-600">
                  Integrate Spectra Assure into your CI/CD pipeline with our easy-to-use plugins for GitHub Actions, Jenkins, GitLab CI, and more.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="h-20 w-20 bg-primary-color rounded-full text-white text-3xl font-bold flex items-center justify-center mx-auto">
                  2
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Analysis
                </h3>
                <p className="text-gray-600">
                  Our platform performs deep static and dynamic analysis on your software artifacts, identifying malware, vulnerabilities, and compliance issues.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="h-20 w-20 bg-primary-color rounded-full text-white text-3xl font-bold flex items-center justify-center mx-auto">
                  3
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Remediation
                </h3>
                <p className="text-gray-600">
                  Get actionable insights and recommendations to address identified issues, with detailed reports and integrations with your issue tracking systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to secure your software supply chain?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join leading organizations that trust Spectra Assure to protect their software supply chain.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Demo
            </Link>
            <Link href="/resources/documentation" className="btn-secondary">
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}