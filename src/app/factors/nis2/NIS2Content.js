'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../../layouts/MainLayout';
import { FaShieldAlt, FaNetworkWired, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaListAlt, FaBalanceScale, FaExclamationCircle, FaTools, FaBookOpen, FaQuestionCircle, FaTasks, FaFileAlt, FaRegCommentDots, FaLink, FaLightbulb, FaCogs, FaUserTie, FaPuzzlePiece, FaClipboardList, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Nis2ApplicabilityNavigator from '../../../components/sections/Nis2ApplicabilityNavigator';
import { useState } from 'react';

const references = [
  {
    id: 'ref-eu-nis2',
    text: 'European Union (2022). <em>Directive (EU) 2022/2555 of the European Parliament and of the Council of 14 December 2022 on measures for a high common level of cybersecurity across the Union, amending Regulation (EU) No 910/2014 and Directive (EU) 2018/1972, and repealing Directive (EU) 2016/1148 (NIS 2 Directive)</em>. Official Journal of the European Union, L 333/80. Available at: https://eur-lex.europa.eu/eli/dir/2022/2555/oj (Accessed: 14 May 2024).',
  },
  {
    id: 'ref-ncsc-nis',
    text: 'National Cyber Security Centre (NCSC) (2023). <em>The NIS Regulations</em>. [Online]. Available at: https://www.ncsc.gov.uk/collection/nis-directive-and-nis-regulations (Accessed: 14 May 2024).',
  },
  {
    id: 'ref-enisa-nis2',
    text: 'European Union Agency for Cybersecurity (ENISA) (2023). <em>ENISA NIS Investments Report 2023</em>. [Online]. Available at: https://www.enisa.europa.eu/publications/nis-investments-report-2023 (Accessed: 14 May 2024).',
  },
  {
    id: 'ref-ukgov-cyber',
    text: 'UK Government (2024). <em>Cyber security guidance for essential and digital services</em>. [Online]. Available at: https://www.gov.uk/government/collections/cyber-security-guidance-for-essential-and-digital-services (Accessed: 14 May 2024).',
  },
  {
    id: 'ref-cisa-sbom',
    text: 'Cybersecurity and Infrastructure Security Agency (CISA) (2023). <em>Software Bill of Materials (SBOM)</em>. [Online]. Available at: https://www.cisa.gov/sbom (Accessed: 14 May 2024).',
  },
  {
    id: 'ref-techtarget-supplychain',
    text: 'TechTarget (2023). <em>Supply chain attacks: Definition, examples and prevention tips</em>. SearchSecurity. [Online]. Available at: https://www.techtarget.com/searchsecurity/definition/supply-chain-attack (Accessed: 14 May 2024).',
  }
];

export default function NIS2Content() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Navigation items
  const navItems = [
    { id: 'overview', title: 'Overview', icon: <FaInfoCircle /> },
    { id: 'risk1-supply-chain', title: 'Risk 1: Supply Chain', icon: <FaNetworkWired /> },
    { id: 'risk2-compliance-gaps', title: 'Risk 2: Compliance Gaps', icon: <FaExclamationTriangle /> },
    { id: 'mitigation', title: 'Mitigation Strategies', icon: <FaShieldAlt /> },
    { id: 'critical-analysis', title: 'Critical Analysis', icon: <FaBalanceScale /> },
    { id: 'existing-solutions-drawbacks', title: 'Solutions & Drawbacks', icon: <FaLightbulb /> },
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
    { id: 'cissp-alignment', title: 'CISSP Alignment', icon: <FaPuzzlePiece /> },
  ];

  const complianceSubTabs = [
    { id: 'description', title: 'Description', icon: <FaFileAlt /> },
    { id: 'vulnerabilities', title: 'Vulnerabilities', icon: <FaExclamationTriangle /> },
    { id: 'ttps', title: 'Attacker TTPs', icon: <FaTools /> },
    { id: 'impact', title: 'Impact', icon: <FaExclamationCircle /> },
    { id: 'scenario', title: 'Scenario', icon: <FaRegCommentDots /> },
    { id: 'cissp-alignment', title: 'CISSP Alignment', icon: <FaPuzzlePiece /> },
  ];

  const risk1CisspDomains = [
    { id: 'r1d1', title: 'Security and Risk Management (Domain 1)', content: 'To address the **Expanded Attack Surface via Supply Chain**, this domain mandates robust third-party risk management programs, including supplier due diligence, contractual security requirements, and continuous monitoring, directly addressing the core of supply chain risk.' },
    { id: 'r1d2', title: 'Asset Security (Domain 2)', content: 'In the context of **supply chain risks**, this domain requires clear identification, classification, and protection of assets shared with or accessed by suppliers. It emphasizes securing data throughout its lifecycle, especially when handled by third parties, and understanding software components (SBOMs) to mitigate the **Expanded Attack Surface via Supply Chain**.' },
    { id: 'r1d3', title: 'Security Architecture and Engineering (Domain 3)', content: 'When dealing with an **Expanded Attack Surface via Supply Chain**, this domain involves designing secure interfaces with suppliers, implementing network segmentation to limit supplier access, and ensuring that supplier-provided solutions are securely integrated into the healthcare organization’s architecture.' },
    { id: 'r1d4', title: 'Communication and Network Security (Domain 4)', content: 'To protect against threats from an **Expanded Attack Surface via Supply Chain**, this domain focuses on securing communication channels with suppliers, ensuring data in transit is encrypted, and monitoring network traffic for anomalous activity originating from or related to supplier connections.' },
    { id: 'r1d5', title: 'Identity and Access Management (IAM) (Domain 5)', content: 'Managing the **Expanded Attack Surface via Supply Chain** makes IAM crucial for controlling supplier identities and their access to systems and data. Implementing least privilege, strong authentication for supplier accounts, and regular access reviews are key.' },
    { id: 'r1d6', title: 'Software Development Security (Domain 8)', content: 'This domain directly addresses the **Expanded Attack Surface via Supply Chain** by focusing on the security of software procured from suppliers. This includes demanding secure coding practices from vendors, verifying software integrity, managing vulnerabilities in third-party components (via SBOMs), and ensuring secure software update mechanisms.' },
  ];

  const risk2CisspDomains = [
    { id: 'r2d1', title: 'Security and Risk Management (Domain 1)', content: 'To mitigate **Compliance Gaps & Misconfigurations**, this domain underpins the entire compliance effort. It involves understanding NIS2 requirements, conducting gap analyses against these requirements, establishing governance for compliance, and ensuring management accountability for addressing such gaps.' },
    { id: 'r2d2', title: 'Security Architecture and Engineering (Domain 3)', content: 'Addressing potential **compliance gaps and misconfigurations** requires this domain to ensure that security controls implemented to meet NIS2 are correctly designed, configured, and integrated. This helps prevent misconfigurations by promoting secure baselines and validation of security settings.' },
    { id: 'r2d3', title: 'Security Assessment and Testing (Domain 6)', content: 'This domain is vital for identifying **Compliance Gaps & Misconfigurations**. Regular vulnerability assessments, penetration testing, and security audits verify that controls are implemented correctly and are effective in meeting NIS2 objectives and closing these gaps.' },
    { id: 'r2d4', title: 'Security Operations (Domain 7)', content: 'To prevent **Compliance Gaps & Misconfigurations** from persisting, this domain focuses on the ongoing monitoring and management of security controls. Effective security operations can detect misconfigurations or compliance drifts, and ensure that incident response capabilities (a key NIS2 requirement) are not hampered by such gaps.' },
  ];

  const [openRisk1Domain, setOpenRisk1Domain] = useState(risk1CisspDomains[0]?.id || null);
  const [openRisk2Domain, setOpenRisk2Domain] = useState(risk2CisspDomains[0]?.id || null);

  const toggleRisk1Domain = (domainId) => {
    setOpenRisk1Domain(prevOpen => (prevOpen === domainId ? null : domainId));
  };

  const toggleRisk2Domain = (domainId) => {
    setOpenRisk2Domain(prevOpen => (prevOpen === domainId ? null : domainId));
  };

  // Shared placeholder images for Risk Sections
  // DEVELOPER NOTE: Replace these paths with your actual image locations in
  // `public/assets/images/pages/nis2/risk images/` (note the space in 'risk images')
  const sharedRiskImages = {
    description: '/assets/images/pages/nis2/risk images/shared_description.png',
    vulnerabilities: '/assets/images/pages/nis2/risk images/shared_vulnerabilities.png',
    ttps: '/assets/images/pages/nis2/risk images/shared_ttps.png',
    impact: '/assets/images/pages/nis2/risk images/shared_impact.png',
    scenario: '/assets/images/pages/nis2/risk images/shared_scenario.png',
    'cissp-alignment': '/assets/images/pages/nis2/risk images/shared_cissp.png',
  };

  // Use the shared images for both risk sections
  const supplyChainImages = sharedRiskImages;
  const complianceImages = sharedRiskImages;

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
                    <p>The Network and Information Systems Directive 2 (NIS2) represents a significant evolution from the original NIS Directive, aiming to establish a higher common level of cybersecurity across the EU (and impacting UK organizations providing essential services to the EU or falling under its scope via supply chains). For the UK healthcare sector, NIS2 mandates stricter cybersecurity risk management measures, incident reporting obligations, and supply chain security requirements (European Union, 2022).</p>
                    <p className="mt-4">Key changes include broader scope, direct management liability, stricter enforcement with higher penalties, and more detailed requirements for risk management and incident handling, emphasizing proactive security and resilience (European Union, 2022; ENISA, 2023).</p>
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
                      <p>NIS2 mandates stricter security requirements across the supply chain, including understanding the components within third-party software (e.g., via Software Bill of Materials - SBOMs) (European Union, 2022; CISA, 2023). This highlights the significant risk posed by suppliers. Lack of visibility into supplier security practices and the software they provide creates a blind spot. A compromise at a single supplier (e.g., software provider, managed service provider) connected to a UK healthcare organization can lead to widespread breaches, data theft, or operational disruption within the healthcare entity itself, potentially introducing malware or exploiting vulnerabilities hidden within procured software.</p>
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
                        <li>Injecting malicious code (malware, backdoors) into legitimate software updates or open-source components used by suppliers (e.g., SolarWinds, Log4j) (TechTarget, 2023).</li>
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
                  {activeSupplyChainSubTab === 'cissp-alignment' && (
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold mb-4 text-blue-600">CISSP Domain Alignment for Risk 1</h4>
                      <div className="space-y-2">
                        {risk1CisspDomains.map(domain => (
                          <div key={domain.id} className="border rounded-lg">
                            <button
                              onClick={() => toggleRisk1Domain(domain.id)}
                              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                            >
                              <span className="font-medium text-gray-800">{domain.title}</span>
                              {openRisk1Domain === domain.id ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
                            </button>
                            {openRisk1Domain === domain.id && (
                              <div className="p-4 bg-white border-t">
                                <p className="text-gray-700">{domain.content}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={`${basePath}${supplyChainImages[activeSupplyChainSubTab]}`}
                      alt={`Visual for Supply Chain Risk - ${activeSupplyChainSubTab.replace('-', ' ')}`}
                      fill
                      className="object-cover"
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
                      <p>The significant administrative, technical, and financial burden of achieving and maintaining NIS2 compliance can strain UK healthcare resources. Rushed implementations, lack of skilled cybersecurity personnel, budget constraints, or simply misunderstanding the requirements can lead to misconfigured security controls, incomplete risk assessments, inadequate incident response plans, or overlooked vulnerabilities, creating exploitable gaps despite the intention of compliance (ENISA, 2023).</p>
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
                  {activeComplianceSubTab === 'cissp-alignment' && (
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold mb-4 text-orange-500">CISSP Domain Alignment for Risk 2</h4>
                      <div className="space-y-2">
                        {risk2CisspDomains.map(domain => (
                          <div key={domain.id} className="border rounded-lg">
                            <button
                              onClick={() => toggleRisk2Domain(domain.id)}
                              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                            >
                              <span className="font-medium text-gray-800">{domain.title}</span>
                              {openRisk2Domain === domain.id ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
                            </button>
                            {openRisk2Domain === domain.id && (
                              <div className="p-4 bg-white border-t">
                                <p className="text-gray-700">{domain.content}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="space-y-6">
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={`${basePath}${complianceImages[activeComplianceSubTab]}`}
                      alt={`Visual for Compliance Gaps Risk - ${activeComplianceSubTab.replace('-', ' ')}`}
                      fill
                      className="object-cover"
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* EXISTING SOLUTIONS & THEIR DRAWBACKS SECTION */}
            <section id="existing-solutions-drawbacks" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-xl border border-gray-200/50">
              <h3 className="text-3xl font-bold text-gray-800 mb-10 flex items-center"><FaLightbulb className="mr-3 text-yellow-500" /> Review of Existing NIS2 Compliance Solutions &amp; Their Drawbacks</h3>
              <p className="text-lg text-gray-700 mb-12">
                While various solutions aim to help organizations achieve NIS2 compliance, each comes with its own set of potential drawbacks. Understanding these can help UK healthcare entities make informed decisions:
              </p>
              <div className="space-y-10">
                {/* Solution 1 Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                    <FaCogs className="mr-3 text-blue-500" /> 1. Automated Compliance Platforms
                  </h4>
                  <p className="text-gray-600 mb-4">
                    These platforms offer tools for continuous monitoring, risk assessment, policy management, and reporting, often mapping controls to NIS2 requirements. They aim to streamline compliance efforts through automation.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
                      <FaExclamationCircle className="mr-2 text-orange-500" />Potential Drawbacks:
                    </h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 pl-4 marker:text-blue-500">
                      <li><strong>High Cost:</strong> Subscription fees and implementation costs can be substantial.</li>
                      <li><strong>Complexity:</strong> Can be complex to configure and integrate fully with existing diverse IT environments in healthcare.</li>
                      <li><strong>Over-reliance:</strong> May lead to a false sense of security if not properly managed or if underlying issues are merely masked.</li>
                      <li><strong>Generic Approach:</strong> Might not cater to specific nuances of UK healthcare or unique organizational risks without significant customization.</li>
                      <li><strong>Integration Challenges:</strong> Difficulty integrating with legacy systems or specialized medical devices.</li>
                    </ul>
                  </div>
                </div>

                {/* Solution 2 Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                    <FaUserTie className="mr-3 text-blue-500" /> 2. Cybersecurity Consulting Services
                  </h4>
                  <p className="text-gray-600 mb-4">
                    External experts provide gap analysis, risk assessments, policy development, implementation support, and training tailored to NIS2.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
                      <FaExclamationCircle className="mr-2 text-orange-500" />Potential Drawbacks:
                    </h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 pl-4 marker:text-blue-500">
                      <li><strong>Cost:</strong> Can be very expensive, especially for ongoing support.</li>
                      <li><strong>Knowledge Transfer:</strong> Risk of limited knowledge transfer to internal teams, creating dependency.</li>
                      <li><strong>Inconsistent Quality:</strong> The quality of consultants can vary significantly.</li>
                      <li><strong>Scope Limitations:</strong> May focus on specific areas, potentially missing broader organizational context if not managed well.</li>
                      <li><strong>Time-Intensive:</strong> Requires significant internal staff time to support consultant activities.</li>
                    </ul>
                  </div>
                </div>

                {/* Solution 3 Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                    <FaPuzzlePiece className="mr-3 text-blue-500" /> 3. Point Security Solutions (Firewalls, SIEM, EDR, etc.)
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Implementing or upgrading specific security technologies to meet particular NIS2 technical requirements (e.g., incident detection, access control).
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
                      <FaExclamationCircle className="mr-2 text-orange-500" />Potential Drawbacks:
                    </h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 pl-4 marker:text-blue-500">
                      <li><strong>Siloed Approach:</strong> May address individual requirements but lack an integrated security posture.</li>
                      <li><strong>Integration & Management Overhead:</strong> Managing multiple point solutions can be complex and resource-intensive.</li>
                      <li><strong>Gaps in Coverage:</strong> May not cover all aspects of NIS2 if not part of a holistic strategy.</li>
                      <li><strong>Vendor Lock-in:</strong> Can lead to dependency on specific vendors.</li>
                      <li><strong>False Sense of Compliance:</strong> Having tools doesn&apos;t guarantee they are configured or used effectively to meet compliance.</li>
                    </ul>
                  </div>
                </div>

                {/* Solution 4 Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                    <FaClipboardList className="mr-3 text-blue-500" /> 4. Internal Development & Manual Processes
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Relying on in-house teams to develop procedures, conduct assessments, and manage compliance manually or with basic tools.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
                      <FaExclamationCircle className="mr-2 text-orange-500" />Potential Drawbacks:
                    </h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 pl-4 marker:text-blue-500">
                      <li><strong>Resource Intensive:</strong> Requires significant internal expertise and staff time, which may be scarce in healthcare.</li>
                      <li><strong>Scalability Issues:</strong> Manual processes may not scale with the complexity of NIS2 or the organization.</li>
                      <li><strong>Inconsistency:</strong> Prone to human error and inconsistencies in application.</li>
                      <li><strong>Lack of Specialized Knowledge:</strong> Internal teams may lack deep expertise in all areas of NIS2.</li>
                      <li><strong>Auditability Challenges:</strong> Documenting and proving compliance through manual processes can be difficult and time-consuming.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Mitigation Strategies Section */}
            <section id="mitigation" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg border border-green-200/50">
              <h3 className="text-3xl font-bold text-green-700 mb-10 flex items-center"><FaShieldAlt className="mr-3 text-green-600"/>Mitigation & Response Strategies for NIS2</h3>
              <p className="text-lg text-gray-700 mb-8">
                Addressing the cybersecurity risks highlighted by the NIS2 Directive requires a multi-faceted approach encompassing robust mitigation strategies and well-defined response plans. UK healthcare organizations should focus on the following key areas:
              </p>

              <div className="space-y-6 mb-12">
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-800 mb-2">1. Enhanced Supply Chain Risk Management:</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Key CISSP domains like Security and Risk Management (D1), Asset Security (D2), and Software Development Security (D8) are central here.
                    <span className="text-blue-600 ml-1 font-medium">(For more details, navigate to the &#34;Risk 1: Supply Chain&#34; section and select the &#34;CISSP Alignment&#34; tab.)</span>
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Conduct thorough due diligence and continuous monitoring of all third-party suppliers, especially those handling sensitive data or providing critical services.</li>
                    <li>Mandate strong contractual security requirements, including adherence to NIS2 standards (European Union, 2022), right-to-audit clauses, and clear incident notification protocols.</li>
                    <li>Implement Software Bill of Materials (SBOMs) practices to understand and manage vulnerabilities within third-party software components (CISA, 2023).</li>
                    <li>Segment networks to limit supplier access to only necessary systems and data.</li>
                  </ul>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-800 mb-2">2. Closing Compliance Gaps & Preventing Misconfigurations:</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    This aligns with CISSP Domains such as Security and Risk Management (D1), Security Architecture and Engineering (D3), and Security Assessment and Testing (D6).
                    <span className="text-blue-600 ml-1 font-medium">(For more details, navigate to the &#34;Risk 2: Compliance Gaps&#34; section and select the &#34;CISSP Alignment&#34; tab.)</span>
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Perform comprehensive NIS2 gap analyses and risk assessments, regularly updating them to reflect changes in the threat landscape and organizational structure.</li>
                    <li>Develop and enforce strong configuration management processes based on security best practices and NIS2 requirements (European Union, 2022; NCSC, 2023).</li>
                    <li>Invest in cybersecurity awareness training for all staff, focusing on their roles and responsibilities under NIS2, including incident reporting and secure practices.</li>
                    <li>Implement robust logging and monitoring across all critical systems to detect and respond to potential incidents promptly.</li>
                    <li>Regularly test incident response and business continuity plans through tabletop exercises and simulations.</li>
                  </ul>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-800 mb-2">3. Proactive Security Measures & Incident Response:</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Effectiveness here is supported by CISSP Domains like Security Assessment and Testing (D6) and Security Operations (D7).
                    <span className="text-blue-600 ml-1 font-medium">(Relevant CISSP domain information can be found within the &#34;CISSP Alignment&#34; tabs of the &#34;Risk 1: Supply Chain&#34; and &#34;Risk 2: Compliance Gaps&#34; sections.)</span>
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Adopt a defense-in-depth strategy with multiple layers of security controls (technical, administrative, physical).</li>
                    <li>Implement advanced threat detection technologies like EDR, NDR, and SIEM, configured for the healthcare environment.</li>
                    <li>Establish clear and actionable incident reporting and handling procedures as mandated by NIS2 (European Union, 2022), including defined timelines and communication channels.</li>
                    <li>Foster a culture of security information sharing, both internally and with relevant authorities or information sharing and analysis centers (ISACs).</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t-2 border-green-200">
                <h4 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                  <FaTasks className="mr-3 text-green-600"/>Explore Our Interactive Actionable Framework
                </h4>
                <p className="text-lg text-gray-700 mb-6">
                  To further assist UK healthcare organizations in navigating NIS2 compliance and strengthening their cybersecurity posture, we have developed an interactive actionable framework. This tool provides tailored guidance, checklists, and resources to help you implement effective mitigation strategies.
                </p>
                <Link
                  href="#interactive-navigator-nis2"
                  className="inline-flex items-center px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <FaCogs className="mr-2"/> Launch the Framework
                </Link>
              </div>
            </section>

            {/* Critical Analysis Section */}
            <section id="critical-analysis" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-yellow-50 rounded-xl shadow-lg border border-yellow-200/50">
              <h3 className="text-3xl font-bold text-yellow-700 mb-8 flex items-center"><FaBalanceScale className="mr-3"/>Critical Analysis of NIS2 for UK Healthcare</h3>
              <div className="prose prose-lg max-w-none">
                <p>While NIS2 aims to significantly uplift cybersecurity standards (European Union, 2022), its application to the UK healthcare sector (especially post-Brexit) presents unique challenges and considerations:</p>
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong>Resource Intensiveness:</strong> Smaller NHS trusts or private clinics may struggle with the financial and human resources required for full NIS2 compliance, potentially leading to a checkbox approach rather than genuine security improvement if not adequately supported.</li>
                  <li><strong>Complexity of Healthcare IT:</strong> The diverse and often legacy IT infrastructure within healthcare, coupled with the proliferation of IoT/IoMT devices, makes comprehensive asset management and risk assessment exceptionally challenging under NIS2&apos;s broad scope.</li>
                  <li><strong>Supply Chain Depth:</strong> The healthcare supply chain is incredibly deep and complex. Gaining full visibility and enforcing NIS2 standards down multiple tiers of suppliers (e.g., medical device component manufacturers) will be a monumental task.</li>
                  <li><strong>Interoperability vs. Security:</strong> The drive for data interoperability in healthcare (e.g., shared care records) can sometimes conflict with stringent security segmentation or access control measures, requiring careful balancing.</li>
                  <li><strong>Incident Reporting Burden:</strong> The tight incident reporting timelines (24-hour early warning) (European Union, 2022) can be challenging during an active crisis, potentially diverting resources from immediate response and containment if not well-practiced.</li>
                  <li><strong>Cross-Border Data Flows:</strong> For UK healthcare entities interacting with EU counterparts or using EU-based cloud services, navigating data sovereignty and NIS2 compliance alongside UK GDPR will require careful legal and technical planning (UK Government, 2024).</li>
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
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center"><FaLink className="mr-3 text-gray-500"/>References</h3>
              <div className="prose prose-lg max-w-none text-gray-700">
                <ul className="list-none pl-0 space-y-3">
                  {references.map((ref, index) => (
                    <li key={ref.id || index} className="mb-2" style={{ textIndent: '-1.5em', paddingLeft: '1.5em' }}>
                      <span dangerouslySetInnerHTML={{ __html: ref.text }} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
