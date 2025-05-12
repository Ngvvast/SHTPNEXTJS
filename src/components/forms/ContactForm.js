"use client";

import { useState } from 'react';
import Button from '../ui/Button';

const ContactForm = ({
  title = "Request a Demo",
  subtitle = "CONTACT US",
  description = "Get a personalized demonstration of our healthcare cybersecurity solutions",
  submitButtonText = "Submit Request",
  successMessage = "Thank you for your request. Our team will contact you shortly.",
  formType = "demo" // Options: demo, contact, quote
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    jobTitle: '',
    message: '',
    interests: [],
    preferredContact: 'email',
    urgency: 'standard'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    { id: 'healthcare-security', label: 'Healthcare Security' },
    { id: 'cyber-attack-response', label: 'Cyber Attack Response' },
    { id: 'threat-intel', label: 'Threat Intelligence' },
    { id: 'compliance', label: 'Regulatory Compliance' },
    { id: 'managed-services', label: 'Managed Security Services' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { checked, value } = e.target;
    
    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          interests: [...prev.interests, value]
        };
      } else {
        return {
          ...prev,
          interests: prev.interests.filter(item => item !== value)
        };
      }
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization name is required';
    }
    
    if (formType === 'demo' && formData.interests.length === 0) {
      newErrors.interests = 'Please select at least one area of interest';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your API
      // For now, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulating successful submission
      setIsSubmitted(true);
      
      // Reset form if needed
      // setFormData({
      //   firstName: '',
      //   lastName: '',
      //   email: '',
      //   phone: '',
      //   organization: '',
      //   jobTitle: '',
      //   message: '',
      //   interests: [],
      //   preferredContact: 'email',
      //   urgency: 'standard'
      // });
    } catch (error) {
      setErrors({
        form: 'There was an error submitting your request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        {subtitle && (
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-color mb-3">{subtitle}</p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-gray-600">{description}</p>
        )}
      </div>

      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 text-center">
          <svg className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 className="text-xl font-bold mb-2">Request Submitted!</h3>
          <p>{successMessage}</p>
          <Button onClick={() => setIsSubmitted(false)} className="mt-4" variant="outline">Submit Another Request</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
          {errors.form && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              <p>{errors.form}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization*</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color ${
                  errors.organization ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.organization && <p className="mt-1 text-sm text-red-600">{errors.organization}</p>}
            </div>

            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
              />
            </div>
          </div>

          {formType === 'demo' && (
            <div className="mb-6">
              <fieldset>
                <legend className="text-sm font-medium text-gray-700 mb-2">Areas of Interest*</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {interestOptions.map(option => (
                    <div key={option.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={option.id}
                        name="interests"
                        value={option.id}
                        checked={formData.interests.includes(option.id)}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-primary-color focus:ring-primary-color border-gray-300 rounded"
                      />
                      <label htmlFor={option.id} className="ml-2 text-sm text-gray-700">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.interests && <p className="mt-1 text-sm text-red-600">{errors.interests}</p>}
              </fieldset>
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {formType === 'demo' ? 'Tell us about your specific needs' : 'Message'}
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className={isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : submitButtonText}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;