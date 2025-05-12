import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="mb-8">
            <p className="text-xl md:text-2xl text-gray-700 italic mb-4">
              "The SHTP Framework has revolutionized our hospital's security posture. We've significantly reduced our risk exposure while maintaining HIPAA compliance."
            </p>
            <footer className="text-gray-600">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/logos/SHTP-LOGO.png"
                  alt="Client Logo"
                  width={48}
                  height={48}
                  className="rounded-full mr-3"
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