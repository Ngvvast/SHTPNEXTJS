import MainLayout from '../../layouts/MainLayout';
import Hero from '../../components/Hero';

export default function DemoRequest() {
  return (
    <MainLayout>
      <Hero 
        title="Request a Demo"
        subtitle="See our healthcare cybersecurity solutions in action"
        backgroundImage="/assets/images/hero/background_placeholder.png"
      />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              Fill out the form below and one of our healthcare security experts will contact you to schedule a personalized demo.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Healthcare Organization*
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="ciso">CISO / Security Leadership</option>
                    <option value="it-director">IT Director / Manager</option>
                    <option value="compliance">Compliance Officer</option>
                    <option value="executive">Executive Leadership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center">
                      <input
                        id="healthcare-security"
                        name="interests"
                        type="checkbox"
                        value="healthcare-security"
                        className="h-4 w-4 text-primary-color focus:ring-primary-color border-gray-300 rounded"
                      />
                      <label htmlFor="healthcare-security" className="ml-2 text-sm text-gray-700">
                        Healthcare Security
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="medical-device-security"
                        name="interests"
                        type="checkbox"
                        value="medical-device-security"
                        className="h-4 w-4 text-primary-color focus:ring-primary-color border-gray-300 rounded"
                      />
                      <label htmlFor="medical-device-security" className="ml-2 text-sm text-gray-700">
                        Medical Device Security
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="incident-response"
                        name="interests"
                        type="checkbox"
                        value="incident-response"
                        className="h-4 w-4 text-primary-color focus:ring-primary-color border-gray-300 rounded"
                      />
                      <label htmlFor="incident-response" className="ml-2 text-sm text-gray-700">
                        Incident Response
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="compliance"
                        name="interests"
                        type="checkbox"
                        value="compliance"
                        className="h-4 w-4 text-primary-color focus:ring-primary-color border-gray-300 rounded"
                      />
                      <label htmlFor="compliance" className="ml-2 text-sm text-gray-700">
                        Healthcare Compliance
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
                    placeholder="Tell us about your specific needs or challenges"
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="consent"
                      className="h-4 w-4 text-primary-color focus:ring-primary-color border-gray-300 rounded"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      I consent to SHTP processing my data to respond to my inquiry.*
                    </span>
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}