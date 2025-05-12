import React from 'react';
import Image from 'next/image';

export default function FeatureList({ 
  title, 
  subtitle, 
  description, 
  features, 
  bgColor = "bg-gray-50",
  layout = "grid", // grid, alternating, or list
  columns = 3
}) {
  // Handle different layouts
  const renderFeatures = () => {
    switch (layout) {
      case 'alternating':
        return (
          <div className="space-y-16 md:space-y-24">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  {feature.image && (
                    <div className="relative rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  {feature.items && (
                    <ul className="space-y-2">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-color mr-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        );

      case 'list':
        return (
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start p-6 bg-white rounded-lg shadow-md">
                {feature.icon && (
                  <div className="text-primary-color p-3 bg-primary-50 rounded-lg">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'grid':
      default:
        return (
          <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                {feature.icon && (
                  <div className="text-primary-color mb-4 p-3 bg-primary-50 inline-block rounded-lg">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                )}
                {feature.image && (
                  <div className="mb-4 relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                {feature.items && (
                  <ul className="mt-4 space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-primary-color mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <section className={`${bgColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-color mb-3">{subtitle}</p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
          )}
        </div>
        
        {renderFeatures()}
      </div>
    </section>
  );
}