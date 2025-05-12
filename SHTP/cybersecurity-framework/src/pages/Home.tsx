import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import Layout from '../components/layout/Layout';
import HeroCarousel from '../components/common/HeroCarousel';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroCarousel />
      
      <section className="hero-property-cards">
        <div className="container">
          <div className="property-cards-grid">
            <div className="property-card">
              <div className="property-logo">
                <img src="/assets/images/products/all-solutions.svg" alt="All Solutions" />
              </div>
              <div className="property-card-content">
                <h3>ALL SOLUTIONS IN ONE PLACE</h3>
                <p>Secure your software supply chain</p>
                <Link to="/platform/all-solutions" className="btn btn-text">Learn More</Link>
              </div>
            </div>
            
            <div className="property-card">
              <div className="property-logo">
                <img src="/assets/images/hero/nis2/NIS2%20DIRECTIVe.png" alt="NIS2 Risk" />
              </div>
              <div className="property-card-content">
                <h3>NIS2 RISK</h3>
                <p>Meet new EU cybersecurity requirements</p>
                <Link to="/platform/nis2-compliance" className="btn btn-text">Learn More</Link>
              </div>
            </div>
            
            <div className="property-card">
              <div className="property-logo">
                <img src="/assets/images/hero/genai/AI.png" alt="Generative AI Risks" />
              </div>
              <div className="property-card-content">
                <h3>GENERATIVE AI RISKS</h3>
                <p>Identify AI security threats</p>
                <Link to="/platform/ai-security" className="btn btn-text">Learn More</Link>
              </div>
            </div>
            
            <div className="property-card">
              <div className="property-logo">
                <img src="/assets/images/hero/covid/Frame%20118.png" alt="COVID-19 Risk" />
              </div>
              <div className="property-card-content">
                <h3>COVID-19 RISK</h3>
                <p>Healthcare crisis security solutions</p>
                <Link to="/platform/covid-security" className="btn btn-text">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="alert-section">
        <div className="container">
          <Alert
            message={
              <div className="alert-header">
                <WarningOutlined className="alert-icon" />
                <span>Security Advisory</span>
              </div>
            }
            description={
              <div className="alert-content">
                <h2>Critical Healthcare Ransomware Campaign Targeting Hospitals</h2>
                <p>Our healthcare threat intelligence team has identified a new ransomware variant specifically targeting hospital systems</p>
                <Link to="/research/healthcare-ransomware-report">
                  <Button type="primary" size="large">Read the Analysis</Button>
                </Link>
              </div>
            }
            type="error"
            showIcon={false}
            className="custom-alert"
          />
        </div>
      </section>
      
      <section className="feature-section">
        <div className="container">
          <div className="feature-content">
            <div className="feature-text">
              <h2>Comprehensive Healthcare Security Protection</h2>
              <p>SHTP provides multilayered security controls specifically designed for healthcare environments to protect patient data, medical devices, and critical healthcare infrastructure</p>
              <div className="feature-buttons">
                <Link to="/platform/overview" className="btn btn-primary">Explore Platform</Link>
                <Link to="/demo" className="btn btn-secondary">Request Demo</Link>
              </div>
            </div>
            <div className="feature-image">
              <img src="/assets/images/products/feature-image.png" alt="Healthcare Security Dashboard" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial-quote">
              <h2>"The SHTP Framework has revolutionized our hospital's security posture. We've significantly reduced our risk exposure while maintaining HIPAA compliance and ensuring uninterrupted patient care."</h2>
              <div className="client-logo">
                <img src="/assets/images/testimonials/client-logo.svg" alt="Major Hospital Network" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features-grid-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card-image">
                <img src="/assets/images/features/feature-1.svg" alt="Healthcare Threat Detection" />
              </div>
              <h3>Healthcare-specific Threat Detection</h3>
              <p>Our specialized AI models are trained on healthcare-specific threats and vulnerabilities, enabling detection of threats targeting medical records, hospital systems, and clinical workflows with unprecedented accuracy.</p>
              <Link to="/platform/threat-detection" className="btn btn-text">Learn More</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-card-image">
                <img src="/assets/images/features/feature-2.svg" alt="Patient Data Protection" />
              </div>
              <h3>Patient Data Protection</h3>
              <p>Safeguard sensitive patient information with our comprehensive data protection solutions that ensure HIPAA compliance while maintaining accessibility for authorized healthcare providers.</p>
              <Link to="/platform/patient-data-protection" className="btn btn-text">Learn More</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-card-image">
                <img src="/assets/images/features/feature-3.svg" alt="Medical Device Security" />
              </div>
              <h3>Medical Device Security</h3>
              <p>Protect connected medical devices with specialized security controls that identify vulnerabilities and threats without disrupting critical healthcare operations or patient care.</p>
              <Link to="/platform/medical-device-security" className="btn btn-text">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <h2>Secure Your Healthcare Organization</h2>
          <Link to="/platform" className="btn btn-primary">Explore Platform</Link>
        </div>
      </section>
      
      <section className="products-section">
        <div className="container">
          <h2>Solutions for Modern Security Challenges</h2>
          <p>Comprehensive protection against emerging threats</p>
          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-logo">
                <img src="/assets/images/products/all-solutions.svg" alt="All Solutions" />
              </div>
              <h3>ALL SOLUTIONS IN ONE PLACE</h3>
              <h4>Complete Security Platform</h4>
              <p>Experience the industry's most complete platform for software supply chain security, bringing together all the capabilities needed to secure your modern software factory.</p>
              <Link to="/platform/all-solutions" className="btn btn-text">Read More About Our Platform</Link>
            </div>
            
            <div className="product-card">
              <div className="product-logo">
                <img src="/assets/images/hero/nis2/NIS2%20DIRECTIVe.png" alt="NIS2 Risk" />
              </div>
              <h3>NIS2 RISK</h3>
              <h4>EU Cybersecurity Compliance</h4>
              <p>Address new requirements for software bills of materials (SBOMs) and supply chain security under the NIS2 directive with our comprehensive compliance solutions.</p>
              <Link to="/platform/nis2-compliance" className="btn btn-text">Read More About NIS2 Compliance</Link>
            </div>
            
            <div className="product-card">
              <div className="product-logo">
                <img src="/assets/images/hero/genai/AI.png" alt="Generative AI Risks" />
              </div>
              <h3>GENERATIVE AI RISKS</h3>
              <h4>AI Security Assessment</h4>
              <p>Protect your organization from emerging threats in AI-generated code and content with advanced security analysis and threat detection capabilities.</p>
              <Link to="/platform/ai-security" className="btn btn-text">Read More About AI Security</Link>
            </div>
            
            <div className="product-card">
              <div className="product-logo">
                <img src="/assets/images/hero/covid/Frame%20118.png" alt="COVID-19 Risk" />
              </div>
              <h3>COVID-19 RISK</h3>
              <h4>Pandemic Response Security</h4>
              <p>Secure your healthcare operations and remote workforce with specialized tools designed to address cybersecurity challenges during global health crises.</p>
              <Link to="/platform/covid-security" className="btn btn-text">Read More About COVID Security</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="insights-section">
        <div className="container">
          <h2>Healthcare Security Insights</h2>
          
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-image">
                <img src="/assets/images/insights/insight-1.jpg" alt="Healthcare Threat Intelligence Report" />
              </div>
              <h3>2025 Healthcare Cyber Threat Report</h3>
              <p>Our annual analysis of the evolving threat landscape for healthcare organizations, including trends in ransomware, data breaches, and medical device vulnerabilities.</p>
              <Link to="/reports/2025-healthcare-threat-report" className="btn btn-text">Read Report</Link>
            </div>
            
            <div className="insight-card">
              <div className="insight-image">
                <img src="/assets/images/insights/insight-2.jpg" alt="CISO Guide" />
              </div>
              <h3>The Healthcare CISO's Guide to Security Operations</h3>
              <p>A strategic roadmap for healthcare security leaders to build and manage effective security operations that support patient care.</p>
              <Link to="/guides/healthcare-ciso-security-operations" className="btn btn-text">Download Guide</Link>
            </div>
            
            <div className="insight-card">
              <div className="insight-image">
                <img src="/assets/images/insights/insight-3.jpg" alt="HIPAA Compliance" />
              </div>
              <h3>HIPAA Security Rule: Beyond Basic Compliance</h3>
              <p>Learn how to transform HIPAA compliance requirements into a robust security program that enhances patient trust and safety.</p>
              <Link to="/reports/hipaa-security-rule" className="btn btn-text">Read Article</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="trial-section">
        <div className="container">
          <h2>Start Your Free Trial Today</h2>
          <p>Experience the power of the SHTP Framework with a 30-day free trial</p>
          <Link to="/free-trial" className="btn btn-primary btn-lg">Get Started</Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;