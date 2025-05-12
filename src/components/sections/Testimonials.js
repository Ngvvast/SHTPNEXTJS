import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const testimonials = [
    {
      quote: "Since partnering with SecureHealth, our patient data security has never been stronger. Their proactive approach and cutting-edge solutions have given us peace of mind. We&apos;ve seen a measurable improvement in our security posture.",
      name: "Dr. Emily Carter",
      title: "Chief Medical Officer, City General Hospital",
      image: `${basePath}/images/placeholder-female-1.jpg`, // Updated path
    },
    {
      quote: "The NIS2 compliance guidance from SecureHealth was invaluable. They made a complex process understandable and manageable, ensuring we met all requirements ahead of schedule. Their team&apos;s expertise is unmatched.",
      name: "John Matthews",
      title: "IT Director, Regional Health Clinics",
      image: `${basePath}/images/placeholder-male-1.jpg`, // Updated path
    },
    {
      quote: "SecureHealth&apos;s AI-driven threat detection identified a vulnerability we weren&apos;t aware of, preventing a potential major breach. Their understanding of healthcare-specific cyber threats is exceptional.",
      name: "Maria Rodriguez",
      title: "Practice Manager, Lakeside Family Care",
      image: `${basePath}/images/placeholder-female-2.jpg`, // Updated path
    },
    {
      quote: "Navigating HIPAA compliance for our new telehealth platform was daunting. SecureHealth provided a clear roadmap and practical solutions, making the entire process seamless. We couldn&apos;t have done it without them.",
      name: "David Lee",
      title: "CEO, HealthTech Innovators Inc.",
      image: `${basePath}/images/placeholder-male-2.jpg`, // Updated path
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="mb-8">
            <p className="text-xl md:text-2xl text-gray-700 italic mb-4">
              &quot;The SHTP Framework has revolutionized our hospital&apos;s security posture. We&apos;ve significantly reduced our risk exposure while maintaining HIPAA compliance.&quot;
            </p>
            <footer className="text-gray-600">
              <div className="flex justify-center items-center">
                <Image
                  src={`${basePath}/assets/logos/SHTP-LOGO.png`} // Updated path
                  alt="Client Logo"
                  width={48}
                  height={48}
                  className="rounded-full mr-3"
                  unoptimized={true} // Added for static export
                />
                <div>
                  <cite className="font-semibold not-italic">Dr. Sarah Chen</cite>
                  <p className="text-sm">Chief Security Officer, Memorial Healthcare</p>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;