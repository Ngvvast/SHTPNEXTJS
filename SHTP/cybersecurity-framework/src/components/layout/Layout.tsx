import React from 'react';
import Header from './Header';
import '../../styles/Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Health Security Solutions</h4>
              <ul>
                <li><a href="/solutions/hospital-security">Hospital Security</a></li>
                <li><a href="/solutions/patient-data-protection">Patient Data Protection</a></li>
                <li><a href="/solutions/medical-device-security">Medical Device Security</a></li>
                <li><a href="/solutions/telehealth-security">Telehealth Security</a></li>
                <li><a href="/solutions/healthcare-threats">Healthcare Threats</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>SHTP Platform</h4>
              <ul>
                <li><a href="/platform/patient-shield">PatientShield</a></li>
                <li><a href="/platform/health-sentinel">HealthSentinel</a></li>
                <li><a href="/platform/medical-risk-analyzer">MedicalRiskAnalyzer</a></li>
                <li><a href="/platform/health-compliance-scanner">HealthComplianceScanner</a></li>
                <li><a href="/technology/health-ai-engine">Healthcare AI Engine</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="/resources/blog">Blog</a></li>
                <li><a href="/resources/white-papers">White Papers</a></li>
                <li><a href="/resources/webinars">Webinars</a></li>
                <li><a href="/resources/health-threat-reports">Health Threat Reports</a></li>
                <li><a href="/resources/health-security-advisories">Health Security Advisories</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="/company/about">Our Story</a></li>
                <li><a href="/company/leadership">Leadership</a></li>
                <li><a href="/company/careers">Careers</a></li>
                <li><a href="/company/contact">Contact Us</a></li>
                <li><a href="/company/partners">Healthcare Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-logo">
              <img src="/logo.svg" alt="SHTP - Secure Health Triad Protocol" />
            </div>
            <div className="footer-legal">
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Use</a></li>
                <li><a href="/hipaa">HIPAA Statement</a></li>
              </ul>
              <p className="copyright">All rights reserved SHTP © {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 