'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '../../../layouts/MainLayout';
// Ensure 'react-icons' is installed: npm install react-icons
import { FaVirus, FaBrain, FaShieldAlt } from 'react-icons/fa'; 
import { useRouter } from 'next/navigation'; // Import useRouter

const metadata = {
  title: "Cybersecurity Factor Analysis Summary | SecureHealth",
  description: "A summary of critical cybersecurity factors including COVID-19, Generative AI, and NIS2. Understand the interconnected risks and SecureHealth&apos;s holistic approach to cybersecurity in healthcare.",
  keywords: [
    "cybersecurity",
    "healthcare",
    "COVID-19",
    "Generative AI",
    "NIS2",
    "risk factors",
    "SecureHealth"
  ]
};

export default function FactorsSummaryPage() {
  const router = useRouter(); // Initialize useRouter
  const basePath = router.basePath || ''; // Get basePath

  const factors = [
    {
      id: 'covid19',
      title: 'COVID-19',
      description: 'Assessing the pandemic\'s impact on cybersecurity in UK healthcare.',
      image: `${basePath}/assets/images/hero/covid/Frame 118.png`, // Updated image path
      link: '/factors/covid19',
      details: "Explore how the rapid shift to remote work, telehealth, and increased reliance on digital infrastructure during the COVID-19 pandemic created new cybersecurity vulnerabilities and attack vectors in the UK healthcare sector. Understand the specific risks, from targeted phishing campaigns exploiting pandemic fears to strains on IT resources, and learn about mitigation strategies to protect patient data and healthcare services.",
      keyAreas: ['Remote Work Vulnerabilities', 'Telehealth Security', 'Phishing & Social Engineering', 'Data Privacy Concerns', 'Supply Chain Disruptions'],
      learnMoreLink: '/factors/covid19#learn-more',
      readMoreLink: '/factors/covid19#case-studies',
    },
    {
      id: 'genai',
      title: 'Generative AI',
      description: 'Analysing the dual role of Generative AI in cybersecurity threats and defenses.',
      image: `${basePath}/assets/images/hero/genai/AI.png`, // This path was already correct
      link: '/factors/genai',
      details: "Delve into the transformative potential and inherent risks of Generative AI in the cybersecurity landscape of UK healthcare. This section examines how AI can be exploited to create sophisticated phishing attacks and deepfakes, or used to enhance threat detection and response. Discover the implications for data integrity, patient privacy, and the development of AI-driven security solutions.",
      keyAreas: ['AI-Powered Attacks', 'Deepfake Technology', 'Data Poisoning', 'AI for Threat Detection', 'Ethical AI Use'],
      learnMoreLink: '/factors/genai#learn-more',
      readMoreLink: '/factors/genai#case-studies',
    },
    {
      id: 'nis2',
      title: 'NIS2 Directive',
      description: 'Understanding the new cybersecurity obligations for UK healthcare.',
      image: `${basePath}/assets/images/hero/nis2/NIS2 DIRECTIVe.png`, // Updated image path
      link: '/factors/nis2',
      details: "The NIS2 Directive expands cybersecurity obligations for essential and important entities, including many in the UK healthcare sector. This section breaks down the key requirements of NIS2, such as risk management, incident reporting, and supply chain security. Understand how these regulations aim to bolster cybersecurity resilience across the EU and the implications for UK healthcare organisations post-Brexit.",
      keyAreas: ['Risk Management Frameworks', 'Incident Reporting Mandates', 'Supply Chain Security', 'Cyber Hygiene Practices', 'Cross-Border Collaboration'],
      learnMoreLink: '/factors/nis2#learn-more',
      readMoreLink: '/factors/nis2#case-studies',
    },
  ];

  return (
    <MainLayout>
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-28 mt-16"> {/* Adjusted gradient */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Optional: Add a subtle background pattern or image */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"> {/* Added tracking */}
              Key Cybersecurity Risk Factors
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              An overview of critical cybersecurity challenges facing organizations, including the lasting effects of the pandemic, the emergence of AI, and evolving regulatory landscapes like NIS2.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20 bg-white"> {/* Increased padding */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Understanding the Threat Landscape</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Staying ahead in cybersecurity requires a clear understanding of the diverse factors that can impact your organization&apos;s security posture. Below, we summarize three significant areas demanding attention: the cybersecurity fallout from COVID-19, the risks associated with Generative AI, and the compliance requirements of the NIS2 Directive.
            </p>
          </div>
        </div>
      </div>

      {/* Factors Grid Section - Enhanced Styling */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"> {/* Increased padding */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
            {factors.map((factor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-200/80"> {/* Adjusted hover scale, border */}
                <div className="relative h-56 w-full"> {/* Increased height */}
                  <Image
                    src={factor.image}
                    alt={`${factor.title} background`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg"> {/* Adjusted padding, shadow, opacity */}
                    {factor.icon} 
                  </div>
                  <h3 className="absolute bottom-0 left-0 p-4 text-2xl font-semibold text-white z-10">
                    {factor.title}
                  </h3>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow"> {/* Increased padding */}
                  <p className="text-gray-700 mb-6 flex-grow text-base leading-relaxed">{factor.description}</p> {/* Adjusted text color, margin */}
                  <Link 
                    href={factor.link} 
                    className="mt-auto inline-block w-full bg-primary-color text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors duration-200 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" // Added focus states
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Enhanced Call to Action Section */}
       <div className="bg-gradient-to-r from-primary-color to-blue-700 py-24"> {/* Increased padding */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Strengthen Your Defenses?</h2> {/* Responsive font size */}
            <p className="text-xl text-white/90 mb-8">Address these critical risk factors head-on. Our experts can help you navigate the complexities of modern cybersecurity.</p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link 
                href="/demo" 
                className="bg-white text-primary-color px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-color" // Added focus states
              >
                Request a Demo
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-color transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-color" // Added focus states
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
