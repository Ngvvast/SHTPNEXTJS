"use client";

import Image from 'next/image';
import Link from 'next/link';

const Card = ({ 
  title, 
  description, 
  icon, 
  iconBgColor = "bg-blue-100",
  iconAlt = "Feature icon",
  linkText = "Learn more", 
  linkHref = "#",
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}>
      {icon && (
        <div className={`h-16 w-16 ${iconBgColor} rounded-lg p-3 mb-6 flex items-center justify-center`}>
          {typeof icon === 'string' ? (
            <Image 
              src={icon} 
              alt={iconAlt}
              width={40}
              height={40}
            />
          ) : (
            icon
          )}
        </div>
      )}
      
      {title && (
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      )}
      
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      
      {linkText && linkHref && (
        <Link 
          href={linkHref} 
          className="text-primary-color font-medium flex items-center hover:underline"
        >
          {linkText}
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      )}
    </div>
  );
};

export default Card;