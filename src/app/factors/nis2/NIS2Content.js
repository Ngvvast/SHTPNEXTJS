'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../../layouts/MainLayout';
import { FaShieldAlt, FaNetworkWired, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaListAlt, FaBalanceScale, FaExclamationCircle, FaTools, FaBookOpen, FaQuestionCircle, FaTasks, FaFileAlt, FaRegCommentDots, FaLink } from 'react-icons/fa';
import Nis2ApplicabilityNavigator from '../../../components/sections/Nis2ApplicabilityNavigator';
import { useState } from 'react';

export default function NIS2Content() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Navigation items
  const navItems = [
    { id: 'overview', title: 'Overview', icon: <FaInfoCircle /> },
    { id: 'risk1-supply-chain', title: 'Risk 1: Supply Chain', icon: <FaNetworkWired /> },
    { id: 'risk2-compliance-gaps', title: 'Risk 2: Compliance Gaps', icon: <FaExclamationTriangle /> },
    { id: 'cissp-alignment', title: 'CISSP Alignment', icon: <FaBookOpen /> },
    { id: 'mitigation', title: 'Mitigation Strategies', icon: <FaShieldAlt /> },
    { id: 'critical-analysis', title: 'Critical Analysis', icon: <FaBalanceScale /> },
    { id: 'interactive-navigator-nis2', title: 'NIS2 Navigator', icon: <FaTasks /> },
    { id: 'references', title: 'References', icon: <FaLink /> }
  ];

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
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-700 via-cyan-700 to-blue-800 py-28 mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={`${basePath}/assets/images/pages/nis2/content/NIs2Hero-bg.png`}
            alt="NIS2 Directive Abstract Background"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
            unoptimized={true}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              NIS2 DIRECTIVE: Risks &amp; Compliance
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
      {/* Sticky Navigation */}
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
                    src={`${basePath}/assets/images/pages/nis2/content/overview_diagram.png`}
                    alt="Diagram illustrating NIS2 scope increase"
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>
            </section>

            {/* Risk Analysis Section Title */}
            <h2 id="risk-analysis" className="text-4xl font-bold text-gray-900 mb-16 text-center border-t pt-16 scroll-mt-28">NIS2: Cybersecurity Risk Analysis</h2>

            {/* Risk 1: Expanded Attack Surface via Supply Chain */}
            <section id="risk1-supply-chain" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg border border-blue-200/50">
              <h3 className="text-3xl font-bold text-blue-700 mb-8 flex items-center"><FaNetworkWired className="mr-3"/>Risk 1: Expanded Attack Surface via Supply Chain</h3>
              
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
                        <li>Lack of visibility into fourth-party risks (suppliers&apos; suppliers).</li>
                        <li>Weak contractual security requirements or lack of enforcement regarding secure development and vulnerability disclosure.</li>
                        <li>Compromised software updates, libraries, or hardware components from suppliers.</li>
                        <li>Shared credentials or insecure APIs between healthcare org and supplier.</li>
                      </ul>
                    </>
                  )}
                  {activeSupplyChainSubTab === 'ttps' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaTools className="mr-2 text-gray-600"/>C. Attacker Techniques, Tools &amp; Practices</h4>
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
                      <p>A third-party provider of scheduling software used by several NHS trusts suffers a breach due to an unpatched vulnerability in an open-source library they incorporated (identified via SBOM analysis post-breach). Attackers exploit this to inject malware into a software update pushed to the trusts. The malware steals API keys used by the software to interact with the trusts&apos; patient databases. They use these keys to exfiltrate patient appointment data and demographic information from multiple trusts before the breach is detected, violating NIS2 and GDPR.</p>
                    </>
                  )}
                </div>
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={`${basePath}/assets/images/pages/nis2/content/supply-chain.jpg`}
                      alt="Illustration of a supply chain attack vector"
                      fill
                      className="object-cover"
                      unoptimized={true}
                    />
                  </div>
                  <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={`${basePath}/assets/images/pages/nis2/content/sbom_example.png`}
                      alt="Example snippet of a Software Bill of Materials (SBOM)"
                      fill
                      className="object-contain p-4 bg-white"
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Risk 2: Compliance Gaps & Misconfigurations */}
            <section id="risk2-compliance-gaps" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg border border-blue-200/50">
              <h3 className="text-3xl font-bold text-blue-700 mb-8 flex items-center"><FaExclamationTriangle className="mr-3"/>Risk 2: Compliance Gaps &amp; Misconfigurations</h3>
              
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
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaTools className="mr-2 text-gray-600"/>C. Attacker Techniques, Tools &amp; Practices</h4>
                      <ul>
                        <li>Scanning for common misconfigurations using tools like Nmap, Nessus, or specialized cloud security posture management (CSPM) scanners.</li>
                        <li>Exploiting default credentials left unchanged during rushed deployments of new security tools or systems.</li>
                        <li>Leveraging publicly known vulnerabilities (CVEs) in systems that weren&apos;t patched due to resource constraints or incomplete inventory.</li>
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
                        <li><strong>Regulatory Penalties &amp; Legal Action:</strong> Failure to meet NIS2 requirements can result in substantial fines (up to €10 million or 2% of global annual turnover for essential entities), sanctions against management, and potential legal action from affected individuals.</li>
                        <li><strong>Reputational Damage:</strong> Public disclosure of non-compliance or breaches resulting from compliance gaps can severely damage the healthcare organization&apos;s reputation and erode patient trust.</li>
                        <li><strong>Ineffective Incident Response:</strong> Inadequate incident response plans or untrained staff (a compliance gap) can lead to slower detection, containment, and recovery, amplifying the impact of any security incident.</li>
                        <li><strong>Wasted Security Investment:</strong> Security tools implemented for compliance but misconfigured or not properly managed offer a false sense of security and represent wasted investment.</li>
                        <li><strong>Operational Inefficiencies:</strong> Poorly implemented security measures driven by misunderstood compliance can sometimes hinder legitimate operations or frustrate staff.</li>
                      </ul>
                    </>
                  )}
                  {activeComplianceSubTab === 'scenario' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaRegCommentDots className="mr-2 text-teal-500"/>E. Scenario Example</h4>
                      <p>A hospital, rushing to meet NIS2 incident reporting timelines, implements a new SIEM solution but misconfigures alert thresholds and fails to integrate logs from all critical systems. An attacker compromises a legacy medical device (missed in the asset inventory), and the SIEM fails to generate a timely alert due to the misconfiguration. The attacker moves laterally, exfiltrating data over several weeks. When the breach is finally discovered through other means, the lack of proper logging hinders investigation, and the hospital faces severe penalties for failing NIS2&apos;s incident detection and reporting requirements, on top of the data breach itself.</p>
                    </>
                  )}
                </div>
                <div className="space-y-6">
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={`${basePath}/assets/images/pages/nis2/content/compliance_gap.png`}
                      alt="Illustration of compliance gaps leading to vulnerabilities"
                      fill
                      className="object-cover"
                      unoptimized={true}
                    />
                  </div>
                  <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={`${basePath}/assets/images/pages/nis2/content/misconfiguration.png`}
                      alt="Abstract representation of system misconfiguration"
                      fill
                      className="object-cover"
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* CISSP Alignment Section */}
            <section id="cissp-alignment" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gray-50 rounded-xl shadow-lg border border-gray-200/50">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center"><FaBookOpen className="mr-3 text-gray-600"/>CISSP Domain Alignment for NIS2</h3>
              <p className="text-lg text-gray-700 mb-6">Compliance with NIS2 and mitigating its associated risks touches upon multiple Certified Information Systems Security Professional (CISSP) domains:</p>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-indigo-700 mb-2">Security and Risk Management (Domain 1)</h4>
                  <p className="text-gray-600">Core to NIS2, this involves establishing governance, identifying critical assets, conducting risk assessments (including supply chain), and implementing risk treatment strategies. NIS2&apos;s emphasis on management accountability directly aligns here.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-indigo-700 mb-2">Asset Security (Domain 2)</h4>
                  <p className="text-gray-600">Protecting information and systems critical to the delivery of essential services. This includes data classification, data handling, ensuring data lifecycle security, and securing hardware and software assets, especially those in the supply chain.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-indigo-700 mb-2">Security Architecture and Engineering (Domain 3)</h4>
                  <p className="text-gray-600">Implementing secure system designs, including network segmentation, secure configurations, cryptography, and resilience measures to withstand and recover from incidents as mandated by NIS2.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-indigo-700 mb-2">Communication and Network Security (Domain 4)</h4>
                  <p className="text-gray-600">Securing network infrastructure, implementing secure communication protocols, and protecting against network-based attacks, all vital for maintaining the availability and integrity of essential services.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-indigo-700 mb-2">Security Operations (Domain 7)</h4>
                  <p className="text-gray-600">Focuses on incident detection, response, and recovery. NIS2&apos;s stringent incident reporting requirements (e.g., 24-hour early warning) necessitate robust security operations capabilities, including logging, monitoring, and forensics.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-indigo-700 mb-2">Software Development Security (Domain 8)</h4>
                  <p className="text-gray-600">Addressing security in the software development lifecycle (SDLC), particularly relevant for securing in-house applications and for managing risks from third-party software components (SBOMs) as highlighted by NIS2&apos;s supply chain security focus.</p>
                </div>
              </div>
            </section>

            {/* Mitigation Strategies Section */}
            <section id="mitigation" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg border border-green-200/50">
              <h3 className="text-3xl font-bold text-green-700 mb-8 flex items-center"><FaShieldAlt className="mr-3"/>Mitigation Strategies for NIS2 Compliance</h3>
              <p className="text-lg text-gray-700 mb-6">A proactive and comprehensive approach is essential for NIS2 compliance:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-600 mb-2 flex items-center"><FaCheckCircle className="mr-2"/>Comprehensive Risk Assessment</h4>
                  <p className="text-gray-600">Conduct thorough risk assessments covering all assets, processes, and third-party dependencies. Identify and prioritize vulnerabilities based on potential impact.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-600 mb-2 flex items-center"><FaCheckCircle className="mr-2"/>Supply Chain Security Program</h4>
                  <p className="text-gray-600">Implement a robust supplier risk management program, including due diligence, contractual security requirements, SBOM requests, and continuous monitoring of supplier security posture.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-600 mb-2 flex items-center"><FaCheckCircle className="mr-2"/>Incident Response Plan & Testing</h4>
                  <p className="text-gray-600">Develop, maintain, and regularly test an incident response plan that meets NIS2 reporting timelines. Ensure staff are trained on their roles and responsibilities.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-600 mb-2 flex items-center"><FaCheckCircle className="mr-2"/>Security Awareness Training</h4>
                  <p className="text-gray-600">Provide regular cybersecurity training for all staff, including management, focusing on recognizing threats, secure practices, and NIS2 obligations.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-600 mb-2 flex items-center"><FaCheckCircle className="mr-2"/>Technical Security Controls</h4>
                  <p className="text-gray-600">Implement and maintain appropriate technical controls such as multi-factor authentication (MFA), encryption, network segmentation, vulnerability management, and robust logging & monitoring.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-600 mb-2 flex items-center"><FaCheckCircle className="mr-2"/>Regular Audits & Governance</h4>
                  <p className="text-gray-600">Conduct regular internal and external audits to verify compliance and effectiveness of security measures. Establish clear governance structures with management oversight as required by NIS2.</p>
                </div>
              </div>
            </section>

            {/* Critical Analysis Section */}
            <section id="critical-analysis" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-yellow-50 rounded-xl shadow-lg border border-yellow-200/50">
              <h3 className="text-3xl font-bold text-yellow-700 mb-8 flex items-center"><FaBalanceScale className="mr-3"/>Critical Analysis of NIS2 for UK Healthcare</h3>
              <div className="prose prose-lg max-w-none">
                <p>While NIS2 aims to significantly uplift cybersecurity standards, its application to the UK healthcare sector (especially post-Brexit) presents unique challenges and considerations:</p>
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong>Resource Intensiveness:</strong> Smaller NHS trusts or private clinics may struggle with the financial and human resources required for full NIS2 compliance, potentially leading to a checkbox approach rather than genuine security improvement if not adequately supported.</li>
                  <li><strong>Complexity of Healthcare IT:</strong> The diverse and often legacy IT infrastructure within healthcare, coupled with the proliferation of IoT/IoMT devices, makes comprehensive asset management and risk assessment exceptionally challenging under NIS2&apos;s broad scope.</li>
                  <li><strong>Supply Chain Depth:</strong> The healthcare supply chain is incredibly deep and complex. Gaining full visibility and enforcing NIS2 standards down multiple tiers of suppliers (e.g., medical device component manufacturers) will be a monumental task.</li>
                  <li><strong>Interoperability vs. Security:</strong> The drive for data interoperability in healthcare (e.g., shared care records) can sometimes conflict with stringent security segmentation or access control measures, requiring careful balancing.</li>
                  <li><strong>Incident Reporting Burden:</strong> The tight incident reporting timelines (24-hour early warning) can be challenging during an active crisis, potentially diverting resources from immediate response and containment if not well-practiced.</li>
                  <li><strong>Cross-Border Data Flows:</strong> For UK healthcare entities interacting with EU counterparts or using EU-based cloud services, navigating data sovereignty and NIS2 compliance alongside UK GDPR will require careful legal and technical planning.</li>
                  <li><strong>Effectiveness of Penalties:</strong> While penalties are a deterrent, their impact on publicly funded healthcare bodies might differ from private sector entities, raising questions about the most effective enforcement mechanisms for driving change.</li>
                </ul>
                <p className="mt-4">Successfully navigating NIS2 will require not just regulatory adherence but a strategic, risk-based approach, significant investment in cybersecurity capabilities, and strong collaboration between government, regulatory bodies, and healthcare organizations.</p>
              </div>
            </section>

            {/* Interactive NIS2 Applicability Navigator Section */}
            <section id="interactive-navigator-nis2" className="mb-20 scroll-mt-28">
              <Nis2ApplicabilityNavigator />
            </section>

            {/* References Section */}
            <section id="references" className="scroll-mt-28 p-8 lg:p-12 bg-white rounded-xl shadow-lg border border-gray-200/50">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center"><FaLink className="mr-3 text-gray-500"/>References &amp; Further Reading</h3>
              <div className="prose prose-lg max-w-none text-gray-700">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Official Journal of the European Union - Directive (EU) 2022/2555 (NIS2 Directive).</li>
                  <li>UK National Cyber Security Centre (NCSC) - Guidance on NIS Regulations and cybersecurity best practices.</li>
                  <li>ENISA (European Union Agency for Cybersecurity) - Reports and guidelines on NIS2 implementation.</li>
                  <li>Relevant UK government guidance on cybersecurity for essential services.</li>
                  <li>Academic papers and industry reports on cybersecurity challenges in the healthcare sector.</li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
