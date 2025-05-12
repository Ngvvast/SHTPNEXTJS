'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../../layouts/MainLayout';
// Ensure 'react-icons' is installed: npm install react-icons
import { FaShieldAlt, FaNetworkWired, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaListAlt, FaBalanceScale, FaExclamationCircle, FaTools, FaBookOpen, FaQuestionCircle, FaTasks, FaFileAlt, FaRegCommentDots, FaLink } from 'react-icons/fa'; // Added FaFileAlt, FaRegCommentDots, FaLink
import Nis2ApplicabilityNavigator from '../../../components/sections/Nis2ApplicabilityNavigator'; // Import the new component
import { useState } from 'react'; // Import useState

export default function NIS2DirectivePage() {
  // Navigation items
  const navItems = [
    { id: 'overview', title: 'Overview', icon: <FaInfoCircle /> },
    { id: 'risk1-supply-chain', title: 'Risk 1: Supply Chain', icon: <FaNetworkWired /> },
    { id: 'risk2-compliance-gaps', title: 'Risk 2: Compliance Gaps', icon: <FaExclamationTriangle /> },
    { id: 'cissp-alignment', title: 'CISSP Alignment', icon: <FaBookOpen /> },
    { id: 'mitigation', title: 'Mitigation Strategies', icon: <FaShieldAlt /> },
    { id: 'critical-analysis', title: 'Critical Analysis', icon: <FaBalanceScale /> },
    { id: 'interactive-navigator-nis2', title: 'NIS2 Navigator', icon: <FaTasks /> }, // Added Nav Item
    { id: 'references', title: 'References', icon: <FaLink /> } // Added References Nav Item
  ];

  // State for active sub-tabs for NIS2 risks
  const [activeSupplyChainSubTab, setActiveSupplyChainSubTab] = useState('description');
  const [activeComplianceSubTab, setActiveComplianceSubTab] = useState('description');

  const supplyChainSubTabs = [
    { id: 'description', title: 'Description', icon: <FaFileAlt /> },
    { id: 'vulnerabilities', title: 'Vulnerabilities', icon: <FaExclamationTriangle /> },
    { id: 'ttps', title: 'Attacker TTPs', icon: <FaTools /> },
    { id: 'impact', title: 'Impact', icon: <FaExclamationCircle /> },
    { id: 'scenario', title: 'Scenario', icon: <FaRegCommentDots /> },
  ];

  const complianceSubTabs = [
    { id: 'description', title: 'Description', icon: <FaFileAlt /> },
    { id: 'vulnerabilities', title: 'Vulnerabilities', icon: <FaExclamationTriangle /> },
    { id: 'ttps', title: 'Attacker TTPs', icon: <FaTools /> },
    { id: 'impact', title: 'Impact', icon: <FaExclamationCircle /> },
    { id: 'scenario', title: 'Scenario', icon: <FaRegCommentDots /> },
  ];

  return (
    <MainLayout>
      {/* Hero Section - Consistent Styling */}
      <div className="relative bg-gradient-to-br from-blue-700 via-cyan-700 to-blue-800 py-28 mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/images/pages/nis2/content/NIs2Hero-bg.png" // Updated path
            alt="NIS2 Directive Abstract Background"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              NIS2 DIRECTIVE: Risks & Compliance
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Navigating the Network and Information Systems Directive 2 for UK Healthcare.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link 
                href="#risk-analysis" 
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              >
                View Risk Analysis
              </Link>
              <Link 
                href="#mitigation" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              >
                Explore Mitigation
              </Link>
            </div>
          </div>
        </div>
      </div>      
      {/* REFINED: Sticky Navigation */}
      <div className="sticky top-16 z-50 bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200/80 transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-4 py-2">
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
            <div className="flex items-center justify-start gap-x-8 min-w-max px-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-all duration-200 ease-in-out group"
                >
                  <span className="mr-1.5 text-blue-500 group-hover:text-blue-700 transition-colors duration-200">{item.icon}</span>
                  <span className="group-hover:underline underline-offset-2">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Overview Section */}
            <section id="overview" className="mb-20 scroll-mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><FaInfoCircle className="mr-3 text-blue-600"/>Overview of NIS2 Directive</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>The Network and Information Systems Directive 2 (NIS2) represents a significant evolution from the original NIS Directive, aiming to establish a higher common level of cybersecurity across the EU (and impacting UK organizations providing essential services to the EU or falling under its scope via supply chains). For the UK healthcare sector, NIS2 mandates stricter cybersecurity risk management measures, incident reporting obligations, and supply chain security requirements.</p>
                    <p className="mt-4">Key changes include broader scope, direct management liability, stricter enforcement with higher penalties, and more detailed requirements for risk management and incident handling, emphasizing proactive security and resilience.</p>
                  </div>
                </div>
                <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/assets/images/pages/nis2/content/overview_diagram.png" // Updated path
                    alt="Diagram illustrating NIS2 scope increase"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Risk Analysis Section Title */}
            <h2 id="risk-analysis" className="text-4xl font-bold text-gray-900 mb-16 text-center border-t pt-16 scroll-mt-28">NIS2: Cybersecurity Risk Analysis</h2>

            {/* Risk 1: Expanded Attack Surface via Supply Chain - Enhanced Styling */}
            <section id="risk1-supply-chain" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg border border-blue-200/50">
              <h3 className="text-3xl font-bold text-blue-700 mb-8 flex items-center"><FaNetworkWired className="mr-3"/>Risk 1: Expanded Attack Surface via Supply Chain</h3>
              
              {/* Sub-tabs for Risk 1 */}
              <div className="mb-6 flex flex-wrap gap-2 border-b border-blue-200 pb-4">
                {supplyChainSubTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSupplyChainSubTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSupplyChainSubTab === tab.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-700 hover:bg-blue-100'
                    }`}
                  >
                    {tab.icon && <span className="mr-2">{tab.icon}</span>}
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="order-1 lg:order-2 prose prose-lg max-w-none prose-headings:text-blue-800 prose-strong:text-gray-700">
                  {activeSupplyChainSubTab === 'description' && (
                    <>
                      <h4 className="text-xl font-semibold mb-3 flex items-center"><FaFileAlt className="mr-2 text-blue-600"/>A. Risk Description</h4>
                      <p>NIS2 mandates stricter security requirements across the supply chain, including understanding the components within third-party software (e.g., via Software Bill of Materials - SBOMs). This highlights the significant risk posed by suppliers. Lack of visibility into supplier security practices and the software they provide creates a blind spot. A compromise at a single supplier (e.g., software provider, managed service provider) connected to a UK healthcare organization can lead to widespread breaches, data theft, or operational disruption within the healthcare entity itself, potentially introducing malware or exploiting vulnerabilities hidden within procured software.</p>
                    </>
                  )}
                  {activeSupplyChainSubTab === 'vulnerabilities' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationTriangle className="mr-2 text-orange-500"/>B. Vulnerabilities Exploited</h4>
                      <ul>
                        <li>Inadequate vetting of third-party supplier security postures and development practices.</li>
                        <li>Lack of software composition analysis (SCA) and SBOM verification for procured software.</li>
                        <li>Implicit trust granted to supplier software/services without sufficient verification or binary analysis.</li>
                        <li>Lack of visibility into fourth-party risks (suppliers' suppliers).</li>
                        <li>Weak contractual security requirements or lack of enforcement regarding secure development and vulnerability disclosure.</li>
                        <li>Compromised software updates, libraries, or hardware components from suppliers.</li>
                        <li>Shared credentials or insecure APIs between healthcare org and supplier.</li>
                      </ul>
                    </>
                  )}
                  {activeSupplyChainSubTab === 'ttps' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaTools className="mr-2 text-gray-600"/>C. Attacker Techniques, Tools & Practices</h4>
                      <ul>
                        <li>Targeting smaller, potentially less secure suppliers to gain access to larger healthcare targets.</li>
                        <li>Injecting malicious code (malware, backdoors) into legitimate software updates or open-source components used by suppliers (e.g., SolarWinds, Log4j).</li>
                        <li>Exploiting known (CVEs) or unknown (zero-day) vulnerabilities in supplier-provided hardware or software.</li>
                        <li>Using stolen supplier credentials to access healthcare systems or cloud environments.</li>
                        <li>Phishing attacks targeting supplier employees with privileged access.</li>
                        <li>Leveraging tools like Shodan to find exposed supplier infrastructure linked to healthcare orgs.</li>
                        <li>Poisoning AI/ML models used in supplier software [If applicable].</li>
                      </ul>
                    </>
                  )}
                  {activeSupplyChainSubTab === 'impact' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationCircle className="mr-2 text-red-500"/>D. Impact Assessment</h4>
                      <ul>
                        <li><strong>Data Breaches:</strong> Compromised suppliers can lead to exfiltration of sensitive patient data (PHI), financial information, or intellectual property from the healthcare organization, triggering GDPR/DPA penalties and reputational damage.</li>
                        <li><strong>Operational Disruption:</strong> Malware introduced via the supply chain (e.g., ransomware) can cripple critical healthcare systems (EHR, PACS, diagnostic equipment), leading to cancelled appointments, delayed treatments, and patient diversions.</li>
                        <li><strong>Financial Losses:</strong> Costs associated with incident response, system recovery, regulatory fines, legal fees, and reputational damage can be substantial. Loss of public trust can also impact funding or patient choice.</li>
                        <li><strong>Patient Safety Risks:</strong> Disruption to medical devices or clinical systems due to supply chain attacks can directly impact patient safety and outcomes.</li>
                        <li><strong>Compliance Failures:</strong> A supply chain compromise can lead to non-compliance with NIS2, GDPR, and other relevant regulations, resulting in significant penalties and mandatory public disclosure.</li>
                        <li><strong>Loss of Intellectual Property:</strong> Theft of research data or proprietary algorithms via a compromised supplier.</li>
                      </ul>
                    </>
                  )}
                  {activeSupplyChainSubTab === 'scenario' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaRegCommentDots className="mr-2 text-teal-500"/>E. Scenario Example</h4>
                      <p>A third-party provider of scheduling software used by several NHS trusts suffers a breach due to an unpatched vulnerability in an open-source library they incorporated (identified via SBOM analysis post-breach). Attackers exploit this to inject malware into a software update pushed to the trusts. The malware steals API keys used by the software to interact with the trusts' patient databases. They use these keys to exfiltrate patient appointment data and demographic information from multiple trusts before the breach is detected, violating NIS2 and GDPR.</p>
                    </>
                  )}
                </div>
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/assets/images/pages/nis2/content/supply-chain.jpg" // Updated path
                      alt="Illustration of a supply chain attack vector"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/assets/images/pages/nis2/content/sbom_example.png" // Updated path
                      alt="Example snippet of a Software Bill of Materials (SBOM)"
                      fill
                      className="object-contain p-4 bg-white"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Risk 2: Compliance Gaps & Misconfigurations - Enhanced Styling */}
            <section id="risk2-compliance-gaps" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg border border-blue-200/50">
              <h3 className="text-3xl font-bold text-blue-700 mb-8 flex items-center"><FaExclamationTriangle className="mr-3"/>Risk 2: Compliance Gaps & Misconfigurations</h3>
              
              {/* Sub-tabs for Risk 2 */}
              <div className="mb-6 flex flex-wrap gap-2 border-b border-blue-200 pb-4">
                {complianceSubTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveComplianceSubTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeComplianceSubTab === tab.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-700 hover:bg-blue-100'
                    }`}
                  >
                    {tab.icon && <span className="mr-2">{tab.icon}</span>}
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="prose prose-lg max-w-none prose-headings:text-blue-800 prose-strong:text-gray-700">
                  {activeComplianceSubTab === 'description' && (
                    <>
                      <h4 className="text-xl font-semibold mb-3 flex items-center"><FaFileAlt className="mr-2 text-blue-600"/>A. Risk Description</h4>
                      <p>The significant administrative, technical, and financial burden of achieving and maintaining NIS2 compliance can strain UK healthcare resources. Rushed implementations, lack of skilled cybersecurity personnel, budget constraints, or simply misunderstanding the requirements can lead to misconfigured security controls, incomplete risk assessments, inadequate incident response plans, or overlooked vulnerabilities, creating exploitable gaps despite the intention of compliance.</p>
                    </>
                  )}
                  {activeComplianceSubTab === 'vulnerabilities' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationTriangle className="mr-2 text-orange-500"/>B. Vulnerabilities Exploited</h4>
                      <ul>
                        <li>Misconfigured firewalls, access controls (IAM), or cloud security settings implemented for NIS2.</li>
                        <li>Failure to adequately patch systems due to resources being diverted to documentation/reporting or lack of comprehensive asset inventory.</li>
                        <li>Incomplete asset inventory or risk assessments missing critical systems or data flows.</li>
                        <li>Poorly implemented or missing encryption for data-at-rest or data-in-transit.</li>
                        <li>Lack of training for staff on new NIS2-related procedures (e.g., incident reporting), leading to human error or delays.</li>
                        <li>Insufficient logging and monitoring configurations, hindering detection and investigation capabilities.</li>
                        <li>Inadequate or untested incident response or business continuity plans.</li>
                      </ul>
                    </>
                  )}
                  {activeComplianceSubTab === 'ttps' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaTools className="mr-2 text-gray-600"/>C. Attacker Techniques, Tools & Practices</h4>
                      <ul>
                        <li>Scanning for common misconfigurations using tools like Nmap, Nessus, or specialized cloud security posture management (CSPM) scanners.</li>
                        <li>Exploiting default credentials left unchanged during rushed deployments of new security tools or systems.</li>
                        <li>Leveraging publicly known vulnerabilities (CVEs) in systems that weren't patched due to resource constraints or incomplete inventory.</li>
                        <li>Social engineering staff who may be confused about new procedures or using weak authentication methods.</li>
                        <li>Finding gaps in logging or disabling logging/alerting to evade detection during an attack.</li>
                        <li>Exploiting overly permissive access controls resulting from poor IAM implementation.</li>
                      </ul>
                    </>
                  )}
                  {activeComplianceSubTab === 'impact' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationCircle className="mr-2 text-red-500"/>D. Impact Assessment</h4>
                      <ul>
                        <li><strong>Increased Vulnerability to Attacks:</strong> Unaddressed compliance gaps (e.g., unpatched systems, weak access controls, misconfigured security tools) directly translate to a higher likelihood of successful cyberattacks.</li>
                        <li><strong>Regulatory Penalties & Legal Action:</strong> Failure to meet NIS2 requirements can result in substantial fines (up to €10 million or 2% of global annual turnover for essential entities), sanctions against management, and potential legal action from affected individuals.</li>
                        <li><strong>Reputational Damage:</strong> Public disclosure of non-compliance or breaches resulting from compliance gaps can severely damage the healthcare organization's reputation and erode patient trust.</li>
                        <li><strong>Ineffective Incident Response:</strong> Inadequate incident response plans or untrained staff (a compliance gap) can lead to slower detection, containment, and recovery, amplifying the impact of any security incident.</li>
                        <li><strong>Wasted Security Investment:</strong> Security tools implemented for compliance but misconfigured or not properly managed offer a false sense of security and represent wasted investment.</li>
                        <li><strong>Operational Inefficiencies:</strong> Poorly implemented security measures driven by misunderstood compliance can sometimes hinder legitimate operations or frustrate staff.</li>
                      </ul>
                    </>
                  )}
                  {activeComplianceSubTab === 'scenario' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaRegCommentDots className="mr-2 text-teal-500"/>E. Scenario Example</h4>
                      <p>A hospital IT team, under pressure to meet NIS2 incident reporting timelines, implements a new Security Information and Event Management (SIEM) system quickly. During configuration, they focus on log ingestion but fail to properly configure alert rules for critical security events and accidentally leave a management interface exposed with default credentials. An attacker scans the hospital's IP range, discovers the interface, logs in, and disables security alerts before launching a ransomware attack. The lack of effective alerting significantly delays detection and response, exacerbating the incident's impact and leading to non-compliance with NIS2 reporting requirements.</p>
                    </>
                  )}
                </div>
                <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/assets/images/pages/nis2/content/compliance.jpg" // Updated path
                    alt="Visual representing security misconfiguration leading to a breach"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* CISSP Domain Alignment Section */}
            <section id="cissp-alignment" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gray-50 rounded-xl shadow-lg border border-gray-200/80">
              <h2 className="text-3xl font-bold text-gray-800 mb-10 flex items-center justify-center"><FaBookOpen className="mr-3 text-blue-600"/>CISSP Domain Alignment for NIS2 Risks</h2>

              {/* CISSP for Risk 1: Supply Chain */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center"><FaNetworkWired className="mr-3"/>Alignment for Risk 1: Supply Chain</h3>
                <div className="prose prose-lg max-w-none prose-strong:text-gray-700">
                  <p>The following CISSP domains are particularly relevant to addressing the risks associated with supply chain vulnerabilities under NIS2, such as those arising from inadequate supplier vetting or compromised software components:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-4">
                    <li><strong>Security and Risk Management:</strong> Encompasses establishing third-party risk management frameworks, governance, and ensuring supplier compliance aligns with the organization's risk tolerance. This directly addresses vulnerabilities like "Inadequate vetting of third-party supplier security postures" and "Weak contractual security requirements."</li>
                    <li><strong>Asset Security:</strong> Focuses on protecting sensitive healthcare data when it is processed, stored, or transmitted by third-party suppliers, mitigating risks from vulnerabilities like "Compromised software updates" that could lead to data exposure.</li>
                    <li><strong>Security Architecture and Engineering:</strong> Involves designing secure integrations with supplier systems, implementing zero-trust principles, and validating the security of procured software/hardware. This is key to countering "Implicit trust granted to supplier software/services" and ensuring secure handling of "Compromised software updates, libraries, or hardware components."</li>
                    <li><strong>Communication and Network Security:</strong> Addresses securing network connections (e.g., APIs, VPNs) and data flows between the healthcare organization and its suppliers, crucial for mitigating risks from "Shared credentials or insecure APIs between healthcare org and supplier."</li>
                    <li><strong>Identity and Access Management (IAM):</strong> Concerns managing and auditing access granted to third-party users, applications, and systems, applying principles like least privilege to address vulnerabilities like "Shared credentials or insecure APIs."</li>
                    <li><strong>Security Assessment and Testing:</strong> Includes auditing supplier compliance, performing penetration testing on integrated systems, and validating supplier security claims. This is vital for uncovering issues like a "Lack of software composition analysis (SCA) and SBOM verification" or "Lack of visibility into fourth-party risks."</li>
                    <li><strong>Software Development Security:</strong> Emphasizes securing the software supply chain itself. This involves demanding secure coding practices from suppliers, consuming and verifying SBOMs to address "Lack of software composition analysis (SCA) and SBOM verification," and performing binary analysis on critical software to detect "Compromised software updates, libraries, or hardware components from suppliers."</li>
                  </ul>
                  <div className="relative h-48 md:h-64 mt-6 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/assets/images/pages/nis2/content/cissp_domains_supply.png"
                      alt="Visual representation of CISSP domains related to supply chain security"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* CISSP for Risk 2: Compliance Gaps */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center"><FaExclamationTriangle className="mr-3"/>Alignment for Risk 2: Compliance Gaps & Misconfigurations</h3>
                <div className="prose prose-lg max-w-none prose-strong:text-gray-700">
                  <p>Addressing compliance gaps and misconfigurations under NIS2, which can manifest as misconfigured firewalls or incomplete risk assessments, involves aspects from multiple CISSP domains:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-4">
                    <li><strong>Security and Risk Management:</strong> Directly relates to failures in governance, risk assessment processes, compliance management, and policy implementation required by NIS2. This domain helps address "Incomplete asset inventory or risk assessments missing critical systems or data flows" and ensures "Inadequate or untested incident response or business continuity plans" are identified and rectified.</li>
                    <li><strong>Security Architecture and Engineering:</strong> Covers design flaws and insecure configurations introduced during the implementation of security controls. This is crucial for preventing "Misconfigured firewalls, access controls (IAM), or cloud security settings" and ensuring "Poorly implemented or missing encryption for data-at-rest or data-in-transit."</li>
                    <li><strong>Communication and Network Security:</strong> Includes misconfigurations of network security devices (firewalls, IDS/IPS) or insecure network segmentation. Proper application of this domain prevents vulnerabilities like "Misconfigured firewalls" that expose the network.</li>
                    <li><strong>Identity and Access Management (IAM):</strong> Addresses weak or misconfigured access controls, authentication methods, or privilege management. This is key to fixing "Misconfigured firewalls, access controls (IAM), or cloud security settings" related to user and system access.</li>
                    <li><strong>Security Assessment and Testing:</strong> Highlights the failure to sufficiently audit, test, and validate new controls and configurations. Regular assessments can identify "Failure to adequately patch systems" or "Misconfigured firewalls, access controls (IAM), or cloud security settings."</li>
                    <li><strong>Security Operations:</strong> Concerns gaps in monitoring, logging, vulnerability management, and incident response readiness. This domain is vital for addressing "Insufficient logging and monitoring configurations," managing "Failure to adequately patch systems," and ensuring "Inadequate or untested incident response or business continuity plans" are made robust. It also covers "Lack of training for staff on new NIS2-related procedures," ensuring operational readiness.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* General Mitigation Strategies Section - Enhanced Styling */}
            <section id="mitigation" className="mb-20 scroll-mt-28 border-t pt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center"><FaShieldAlt className="mr-3 text-green-600"/>General NIS2 Mitigation Strategies</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div className="prose prose-lg max-w-none prose-ul:list-none prose-ul:pl-0 prose-li:mb-3 prose-li:flex prose-li:items-start">
                    <p>Addressing the risks associated with NIS2, particularly supply chain vulnerabilities and compliance gaps, requires a comprehensive and ongoing approach focusing on both technical controls and robust governance:</p>
                    <ul className="mt-6 space-y-3">
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Supply Chain Risk Management:</strong> Implement rigorous third-party security assessments (questionnaires, audits), demand and verify SBOMs, enforce contractual security clauses, and perform continuous monitoring of supplier security posture.</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Comprehensive Risk Assessment & Management:</strong> Regularly conduct thorough, documented risk assessments covering all assets, processes, and suppliers, aligning with NIS2 requirements. Implement, track, and review risk treatment plans.</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Enhanced Security Measures & Secure Configuration:</strong> Implement robust technical controls including strong IAM (MFA, least privilege, regular access reviews), network segmentation (Zero Trust Architecture principles), EDR/XDR, proactive vulnerability management (scanning, patching), encryption (data-at-rest and in-transit), and configuration hardening based on security benchmarks.</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Incident Management & Reporting:</strong> Develop, resource, and regularly test (e.g., tabletop exercises, simulations) a robust incident response plan. Ensure capabilities for timely detection, analysis, containment, eradication, recovery, and reporting according to NIS2 timelines (initial notification within 24 hours, detailed report within 72 hours, final report within one month).</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Business Continuity & Crisis Management:</strong> Ensure robust backup and disaster recovery plans are in place, regularly tested (including restoration tests), and integrated with the incident response plan to maintain essential healthcare services during and after an incident.</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Cybersecurity Training & Awareness:</strong> Provide regular, role-specific training to all staff, including management and procurement teams, on cybersecurity risks (including supply chain threats), secure practices, and NIS2 obligations.</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Governance & Documentation:</strong> Establish clear cybersecurity governance structures with defined roles, responsibilities, and C-level accountability as required by NIS2. Maintain comprehensive, up-to-date documentation of policies, procedures, configurations, risk assessments, and incident responses for compliance audits and continuous improvement.</li>
                    </ul>
                  </div>
                 <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                   <Image
                     src="/assets/images/hero/background_placeholder.png" // Updated path to placeholder
                     alt="Abstract image representing cybersecurity mitigation and protection"
                     fill
                     className="object-cover"
                   />
                 </div>
              </div>
            </section>

            {/* Critical Analysis of NIS2 Solutions Section */}
            <section id="critical-analysis" className="mb-20 scroll-mt-28 border-t pt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center"><FaBalanceScale className="mr-3 text-orange-600"/>Critical Analysis of NIS2 Mitigation Strategies</h2>
              <div className="prose prose-lg max-w-none mx-auto bg-gray-50 p-8 rounded-lg shadow">
                <p>While the mitigation strategies outlined are crucial for NIS2 compliance, their implementation in the UK healthcare sector faces specific challenges and requires critical consideration:</p>

                <h4 className="font-semibold mt-6 mb-2 flex items-center"><FaNetworkWired className="mr-2 text-gray-600"/>1. Supply Chain Risk Management (SCRM)</h4>
                <ul>
                  <li><strong>Benefits:</strong> Addresses a major threat vector explicitly targeted by NIS2; promotes transparency (SBOMs).</li>
                  <li><strong>Drawbacks/Challenges:</strong> Significant resource overhead for vetting potentially hundreds of suppliers; difficulty enforcing standards on large or critical suppliers; complexity in verifying SBOM accuracy and acting upon identified vulnerabilities; lack of standardized tooling for continuous monitoring across diverse suppliers. [Citation Needed]</li>
                  <li><strong>Enhancements:</strong> Risk-based tiering of suppliers; leveraging shared assessment platforms (e.g., security scorecards, industry consortiums); focusing on critical software components; investing in binary analysis tools to supplement SBOMs.</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-2 flex items-center"><FaExclamationCircle className="mr-2 text-gray-600"/>2. Incident Reporting Timelines</h4>
                <ul>
                  <li><strong>Benefits:</strong> Encourages rapid response and information sharing (potentially).</li>
                  <li><strong>Drawbacks/Challenges:</strong> Extremely tight 24/72-hour deadlines can lead to premature, inaccurate reports; may divert resources from actual containment/recovery efforts in the critical early hours of an incident, especially for under-resourced NHS trusts; defining a "significant" incident requiring reporting can be ambiguous initially. [Citation Needed]</li>
                  <li><strong>Enhancements:</strong> Pre-defined incident severity matrix; automated alerting integrated with reporting workflows; dedicated, well-practiced incident response teams; clear internal communication protocols for rapid assessment.</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-2 flex items-center"><FaTools className="mr-2 text-gray-600"/>3. Resource Constraints vs. Comprehensive Controls</h4>
                <ul>
                  <li><strong>Benefits:</strong> NIS2 mandates a higher baseline security posture.</li>
                  <li><strong>Drawbacks/Challenges:</strong> UK healthcare, particularly the NHS, often faces significant budget and personnel constraints. Implementing and managing advanced controls (Zero Trust, EDR/XDR, comprehensive logging, frequent testing) across large, complex, and often legacy environments is a major financial and operational challenge. This can lead to the "Compliance Gaps" risk discussed earlier. [Citation Needed]</li>
                  <li><strong>Enhancements:</strong> Phased implementation based on risk assessment; leveraging managed security services (MSSPs) where appropriate; focusing on foundational controls (patching, MFA, backups) first; exploring cost-effective open-source security tools; seeking central funding/support initiatives.</li>
                </ul>
                 <h4 className="font-semibold mt-6 mb-2 flex items-center"><FaListAlt className="mr-2 text-gray-600"/>4. Governance and Management Accountability</h4>
                <ul>
                  <li><strong>Benefits:</strong> Elevates cybersecurity to a board-level concern, fostering a security culture.</li>
                  <li><strong>Drawbacks/Challenges:</strong> Requires cybersecurity literacy among senior management/boards, which may be lacking; potential for a "tick-box" compliance mentality rather than genuine risk reduction; difficulty translating technical risks into business impact for non-technical leaders. [Citation Needed]</li>
                  <li><strong>Enhancements:</strong> Regular cybersecurity briefings for leadership; appointing dedicated security leadership (CISO); using risk quantification methods; aligning security metrics with organizational objectives.</li>
                </ul>
                <p className="mt-6 italic">Note: Effective implementation requires continuous adaptation, adequate funding, skilled personnel, and strong leadership commitment, alongside leveraging appropriate technologies and potentially external expertise.</p>
              </div>
            </section>

            {/* NEW: NIS2 Applicability & Preparedness Navigator Section */}
            <section id="interactive-navigator-nis2" className="mb-20 scroll-mt-28 border-t pt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center">
                <FaTasks className="mr-3 text-blue-600"/> {/* Using FaTasks for consistency */}
                NIS2 Applicability & Preparedness Navigator
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-8 text-center">
                  This navigator helps you determine if the NIS2 Directive likely applies to your organization and assess your preparedness for its key requirements. Answer the questions to receive initial guidance and links to relevant information on this page.
                </p>
                <Nis2ApplicabilityNavigator />
              </div>
            </section>

            {/* References Section */}
            <section id="references" className="mb-20 scroll-mt-28 border-t pt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center">
                <FaBookOpen className="mr-3 text-blue-600"/>References & Resources
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <FaLink className="mr-3 text-blue-600"/>Key Documents & Guidelines
                    </h3>
                    <div className="prose prose-lg max-w-none">
                      <ol className="space-y-4 list-decimal pl-5">
                        <li>
                          <p><strong>European Commission.</strong> (2022). "Directive (EU) 2022/2555 on measures for a high common level of cybersecurity across the Union (NIS2 Directive)." <a href="https://eur-lex.europa.eu/eli/dir/2022/2555/oj" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Official Journal of the European Union</a>.</p>
                        </li>
                        <li>
                          <p><strong>National Cyber Security Centre (NCSC UK).</strong> "NIS Regulations." (Regularly updated guidance) <a href="https://www.ncsc.gov.uk/collection/nis-directive-and-nis-regulations" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">NCSC NIS Collection</a>.</p>
                        </li>
                        <li>
                          <p><strong>ENISA (European Union Agency for Cybersecurity).</strong> "NIS Directive." (Resources and publications) <a href="https://www.enisa.europa.eu/topics/nis-directive" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ENISA NIS Topic</a>.</p>
                        </li>
                        <li>
                          <p><strong>Department for Science, Innovation and Technology (DSIT UK).</strong> (2023). "Government response to the consultation on proposals to improve the UK’s cyber resilience." (Includes intent to update NIS Regulations) <a href="https://www.gov.uk/government/consultations/consultation-on-proposals-to-improve-the-uks-cyber-resilience" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK Consultation Response</a>.</p>
                        </li>
                         <li>
                          <p><strong>(Placeholder) Relevant Academic Paper on NIS2 Implementation Challenges.</strong> Consider adding a relevant academic source discussing the practical challenges or impacts of NIS2 in specific sectors.</p>
                        </li>
                        <li>
                          <p><strong>(Placeholder) Industry Report on Supply Chain Security under NIS2.</strong> Look for reports from cybersecurity firms or industry bodies on best practices for NIS2 supply chain requirements.</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action Section - Consistent Styling */}
            <section className="bg-gradient-to-r from-blue-700 to-cyan-800 py-24">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Achieve NIS2 Compliance</h3>
                  <p className="text-xl text-white/90 mb-8">Navigate the complexities of the NIS2 Directive with expert guidance and tailored solutions for UK healthcare.</p>
                  <div className="flex flex-wrap justify-center gap-5">
                    <Link
                      href="/demo"
                      className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
                    >
                      Request a Demo
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
                    >
                      Contact Our Experts
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div> 
        </div> 
      </div> 
    </MainLayout>
  );
}