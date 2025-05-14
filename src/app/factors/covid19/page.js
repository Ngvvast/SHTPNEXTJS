'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../../layouts/MainLayout';
import { useState } from 'react';
import { FaShieldAlt, FaUserShield, FaVirus, FaBookOpen, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaListAlt, FaBalanceScale, FaExclamationCircle, FaTools, FaFileAlt, FaRegCommentDots, FaLaptopCode, FaUserClock, FaDatabase, FaUserSecret, FaLink } from 'react-icons/fa';

export default function Covid19Page() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [urlToCheck, setUrlToCheck] = useState('');
  const [checkResult, setCheckResult] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [activeRiskTab, setActiveRiskTab] = useState('overview');
  const [activePhishingSubTab, setActivePhishingSubTab] = useState('description');
  const [activeRansomwareSubTab, setActiveRansomwareSubTab] = useState('description');

  const riskTabs = [
    { id: 'overview', title: 'Overview', icon: <FaInfoCircle /> },
    { id: 'risk1-phishing', title: 'Risk 1: Phishing', icon: <FaUserShield /> },
    { id: 'risk2-ransomware', title: 'Risk 2: Ransomware', icon: <FaVirus /> },
    { id: 'mitigation', title: 'Mitigation', icon: <FaShieldAlt /> }
  ];

  const phishingSubTabs = [
    { id: 'description', title: 'Description', icon: <FaFileAlt /> },
    { id: 'vulnerabilities', title: 'Vulnerabilities', icon: <FaExclamationTriangle /> },
    { id: 'ttps', title: 'Attacker TTPs', icon: <FaTools /> },
    { id: 'impact', title: 'Impact', icon: <FaExclamationCircle /> },
    { id: 'scenario', title: 'Scenario', icon: <FaRegCommentDots /> },
  ];

  const ransomwareSubTabs = [
    { id: 'description', title: 'Description', icon: <FaFileAlt /> },
    { id: 'vulnerabilities', title: 'Vulnerabilities', icon: <FaExclamationTriangle /> },
    { id: 'ttps', title: 'Attacker TTPs', icon: <FaTools /> },
    { id: 'impact', title: 'Impact', icon: <FaExclamationCircle /> },
    { id: 'scenario', title: 'Scenario', icon: <FaRegCommentDots /> },
  ];

  const checkPhishingUrl = async () => {
    setIsChecking(true);
    setCheckResult(null);

    if (!urlToCheck) {
      setCheckResult({ error: 'URL parameter is required' });
      setIsChecking(false);
      return;
    }

    let isSafe = true;
    let reason = 'Simulated safe response.';
    const urlLower = urlToCheck.toLowerCase();

    if (urlLower.includes('phishing') || urlLower.includes('malware') || urlLower.includes('evil')) {
      isSafe = false;
      reason = 'Simulated unsafe URL (contains suspicious keywords).';
    } else if (urlLower.length > 0 && urlLower.length < 10) {
      isSafe = false;
      reason = 'Simulated unsafe URL (URL too short for this demo).';
    }

    await new Promise(resolve => setTimeout(resolve, 500));

    setCheckResult({
      isSafe,
      reason,
      note: 'This is a simulated response for demonstration purposes.'
    });
    setIsChecking(false);
  };

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-blue-700 via-cyan-700 to-blue-800 py-24 mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={`${basePath}/assets/images/hero/background_placeholder.png`}
            alt="COVID-19 Healthcare Cybersecurity"
            fill
            className="object-cover mix-blend-overlay opacity-20"
            priority
            unoptimized={true}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              COVID-19 Impact on Healthcare Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Understanding and mitigating cybersecurity risks in the UK healthcare sector during and after the pandemic
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#solutions" 
                className="bg-white text-primary-color px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Solutions
              </Link>
              <Link 
                href="#overview" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary-color mb-2">64%</div>
              <p className="text-gray-600">Healthcare workers clicked on phishing links</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary-color mb-2">$2B</div>
              <p className="text-gray-600">Estimated ransomware losses by 2026</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary-color mb-2">70%</div>
              <p className="text-gray-600">Mobile device vulnerability rate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Overview', description: 'Impact on UK Healthcare', image: `${basePath}/assets/images/pages/covid19/nav-cards/overview.png`, link: '#overview' },
              { title: 'Risk 1: Phishing', description: 'Social Engineering Analysis', image: `${basePath}/assets/images/pages/covid19/nav-cards/phishing.png`, link: '#risk1-phishing' },
              { title: 'Risk 2: Ransomware', description: 'Critical Infrastructure Impact', image: `${basePath}/assets/images/pages/covid19/nav-cards/ransomware.png`, link: '#risk2-ransomware' },
              { title: 'Mitigation', description: 'General Security Measures', image: `${basePath}/assets/images/pages/covid19/nav-cards/solutions.png`, link: '#mitigation' }
            ].map((card, index) => (
              <Link 
                key={index}
                href={card.link} 
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-xs text-gray-600">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <section id="overview" className="mb-20 scroll-mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><FaInfoCircle className="mr-3 text-blue-600"/>Overview & Impact</h2>                  
                  <div className="prose prose-lg max-w-none">
                    <p>The impact of Covid-19 on Cybersecurity in Healthcare increases reliance on telemedicine, cloud storage and digital patient records; but then, Cybercriminals exploited vulnerabilities in remote access systems, phishing attacks targeting Healthcare workers and ransomware targeting critical hospital infrastructures. For instance, in the year 2020 ransomware attacks on NHS exposed weaknesses in the outdated system.</p>
                    
                    <p className="mt-4">Healthcare IT systems have historically been neglected for spending, usually allocated only 1-2% of the annual budget while other industries receive 4-10%. To shift towards a primary prevention investment, more Spending needs to be done to IT security culture and economic impact evaluations.</p>
                    
                    <p className="mt-4">Since the WannaCry attack, the NHS has spent a sizable amount of capital to enhance system infrastructure and to improve dedicated cybersecurity capabilities. However, due to budgetary constraints, these Systems are put in a position where difficult choices must be made regarding the allocation of resources and investment into cybersecurity is frequently deemed an afterthought.</p>
                    
                    <p className="mt-4">The way in which people usually allocate resources in any given sector is considered, from one point, an opportunity cost decision—yet with respect to healthcare, regarding patients&apos; safety, and on the economy, the impact could be severe. What is the blurring point that would signal the need for these changes to be made at an institutional level?</p>
                    
                    <p className="mt-4">This case study draws from real and holistic problems that every empiric health system faces. However, to what extent can other heterogeneous health systems be made use of in each other&apos;s experience and can that knowledge be disseminated in a way that cybersecurity incidents are mitigated in future attempts.</p>
                  </div>
                </div>
                <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                  <Image                    
                    src={`${basePath}/assets/images/pages/covid19/content/overview.png`}
                    alt="Healthcare Cybersecurity Overview"
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>
            </section>            
            <h2 id="risk-analysis-covid" className="text-4xl font-bold text-gray-900 mb-12 text-center border-t pt-16 scroll-mt-28">COVID-19: Cybersecurity Risk Analysis</h2>
            
            <div className="flex flex-wrap justify-center mb-12 gap-2">
              {riskTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveRiskTab(tab.id);
                    document.getElementById(tab.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all ${
                    activeRiskTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  <span className="font-medium">{tab.title}</span>
                </button>
              ))}
            </div>

            <section id="risk1-phishing" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg border border-blue-200/50">
              <h3 className="text-3xl font-bold text-blue-700 mb-8 flex items-center"><FaUserShield className="mr-3"/>Risk 1: Increased Phishing & Social Engineering</h3>
              
              <div className="mb-6 flex flex-wrap gap-2 border-b border-blue-200 pb-4">
                {phishingSubTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePhishingSubTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activePhishingSubTab === tab.id
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
                  {activePhishingSubTab === 'description' && (
                    <>
                      <h4 className="text-xl font-semibold mb-3 flex items-center"><FaFileAlt className="mr-2 text-blue-600"/>A. Risk Description</h4>
                      <p>The COVID-19 pandemic created an environment of heightened fear, uncertainty, and urgency, which cybercriminals systematically exploited. Phishing and social engineering attacks surged, preying on the public&apos;s and healthcare workers&apos; need for information and changes in operational procedures. Attackers crafted messages that appeared to be from legitimate sources like the World Health Organization (WHO), NHS, government bodies (e.g., HMRC), or internal departments (IT, HR). These communications often revolved around themes such as vaccine distribution, COVID-19 testing, safety protocols, remote work guidelines, and financial support, compelling recipients to act hastily.</p>
                    </>
                  )}
                  {activePhishingSubTab === 'vulnerabilities' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationTriangle className="mr-2 text-orange-500"/>B. Vulnerabilities Exploited</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Heightened Psychological Stress:</strong> Increased stress, distraction, and anxiety among healthcare staff and the general public led to reduced critical assessment of incoming communications.</li>
                        <li><strong>Rapid Technology Adoption:</strong> The urgent shift to remote work and telehealth services often meant deploying new technologies (VPNs, video conferencing, cloud storage) without thorough security vetting, configuration hardening, or adequate user training.</li>
                        <li><strong>Inadequate Security Awareness:</strong> Existing security awareness programs were often not updated quickly enough to address pandemic-specific phishing lures and social engineering tactics.</li>
                        <li><strong>BYOD Risks:</strong> Increased use of personal devices (Bring Your Own Device) for work purposes, which may lack enterprise-grade security controls and patch management, expanded the attack surface.</li>
                        <li><strong>Weak Remote Access Controls:</strong> Insufficient identity verification, lack of multi-factor authentication (MFA) on remote access points, and poorly secured home networks created easier entry points.</li>
                        <li><strong>Overwhelmed IT/Security Teams:</strong> Healthcare IT and security staff were often stretched thin managing the rapid technological changes and increased alerts, potentially missing critical indicators of attack.</li>
                        <li><strong>Information Overload:</strong> The constant stream of COVID-19 related news and policy updates made it harder for individuals to discern legitimate communications from malicious ones.</li>
                      </ul>
                    </>
                  )}
                  {activePhishingSubTab === 'ttps' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaTools className="mr-2 text-gray-600"/>C. Attacker Techniques, Tools & Practices (TTPs)</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Impersonation:</strong> Crafting emails, SMS (smishing), and voice calls (vishing) that convincingly impersonated trusted entities like WHO, NHS, government agencies, or company executives (CEO fraud).</li>
                        <li><strong>Themed Lures:</strong> Using subject lines and content related to COVID-19 test results, vaccine appointments, safety guidelines, remote work instructions, stimulus payments, or urgent health alerts.</li>
                        <li><strong>Malicious Attachments & Links:</strong> Distributing malware (e.g., ransomware loaders like Emotet, TrickBot, BazarLoader; info-stealers like Agent Tesla; Remote Access Trojans - RATs) via attachments disguised as important documents (e.g., &quot;COVID-19_Safety_Measures.pdf&quot;, &quot;Urgent_Remote_Access_Update.docx&quot;) or links to fake login portals.</li>
                        <li><strong>Fake Login Portals:</strong> Creating convincing replicas of login pages for Office 365, VPNs, telehealth platforms, NHS internal portals, or other critical systems to harvest credentials.</li>
                        <li><strong>Exploitation of Public Information:</strong> Leveraging publicly available information from social media or data breaches to tailor spear-phishing attacks against specific healthcare roles or individuals.</li>
                        <li><strong>Phishing Kits:</strong> Utilizing readily available phishing kits from dark web marketplaces to quickly deploy sophisticated phishing campaigns with minimal technical skill.</li>
                        <li><strong>Domain Spoofing & Typosquatting:</strong> Registering domain names similar to legitimate organizations (e.g., `nhssupport-uk.com` instead of `nhs.uk`) to deceive users.</li>
                      </ul>
                    </>
                  )}
                  {activePhishingSubTab === 'impact' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationCircle className="mr-2 text-amber-500"/>D. Impact Assessment</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Data Loss:</strong> Successful phishing attacks led to credential theft, allowing unauthorized access to sensitive patient health information, resulting in data breaches affecting thousands of patient records.</li>
                        <li><strong>Operational Disruption:</strong> Healthcare staff locked out of critical systems due to credential theft or malware requiring system recovery, impacting patient care workflows.</li>
                        <li><strong>Regulatory Consequences:</strong> Healthcare organizations faced potential GDPR violations and ICO penalties due to the compromise of patient data.</li>
                        <li><strong>Financial Impact:</strong> The average cost of phishing remediation in healthcare organizations exceeded £260,000 per incident, including incident response, system recovery, and legal costs.</li>
                        <li><strong>Reputation Damage:</strong> Public trust in healthcare organizations was eroded when data breaches were disclosed, affecting patient confidence in digital health services.</li>
                      </ul>
                    </>
                  )}
                  {activePhishingSubTab === 'scenario' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaRegCommentDots className="mr-2 text-teal-500"/>E. Scenario Example</h4>
                      <p>An overworked NHS clinician receives an email appearing to be from their hospital&apos;s IT department. The subject line reads: &quot;Urgent: Mandatory Telehealth Platform Security Update - Action Required Within 2 Hours.&quot; The email explains that due to increased COVID-19 caseloads and telehealth usage, an immediate security patch must be applied by logging into a &quot;newly secured portal.&quot; The link provided uses a typosquatted domain (e.g., `hospital-securelogin.co.uk` instead of `hospital.nhs.uk/securelogin`). The clinician, juggling patient care and fearing disruption to their remote consultations, clicks the link and enters their NHS credentials on the fake portal. Attackers capture these credentials, gain access to the hospital&apos;s network, exfiltrate sensitive patient data from the EHR system, and deploy a ransomware variant, crippling hospital operations for several days.</p>
                    </>
                  )}
                </div>
                <div className="order-2 lg:order-1 relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={`${basePath}/assets/images/pages/covid19/content/phishing.png`}
                    alt="Phishing Attacks in Healthcare during COVID-19"
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>
            </section>

            <section id="risk2-ransomware" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg border border-blue-200/50">
              <h3 className="text-3xl font-bold text-blue-700 mb-8 flex items-center"><FaVirus className="mr-3"/>Risk 2: Ransomware Targeting Critical Infrastructure</h3>
              
              <div className="mb-6 flex flex-wrap gap-2 border-b border-blue-200 pb-4">
                {ransomwareSubTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveRansomwareSubTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeRansomwareSubTab === tab.id
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
                  {activeRansomwareSubTab === 'description' && (
                    <>
                      <h4 className="text-xl font-semibold mb-3 flex items-center"><FaFileAlt className="mr-2 text-blue-600"/>A. Risk Description</h4>
                      <p>The COVID-19 pandemic critically increased the healthcare sector&apos;s dependency on interconnected digital systems for patient care, remote consultations, and administrative functions. This heightened reliance, coupled with often outdated or poorly secured infrastructure, made healthcare organizations prime targets for ransomware attacks. Cybercriminals recognized the immense pressure on healthcare providers to maintain operational continuity, making them more likely to pay ransoms to restore critical systems and avoid patient care disruptions. Ransomware attacks during this period were not just about data encryption; they often involved data exfiltration (double extortion) and threats to publish sensitive patient information if the ransom was not paid, further amplifying the impact.</p>
                    </>
                  )}
                  {activeRansomwareSubTab === 'vulnerabilities' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationTriangle className="mr-2 text-orange-500"/>B. Vulnerabilities Exploited</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Legacy Systems & Unpatched Devices:</strong> Many healthcare organizations operated with outdated operating systems (e.g., Windows 7), medical devices with embedded legacy software, and systems that were difficult to patch due to uptime requirements or lack of vendor support. These unpatched vulnerabilities (e.g., BlueKeep, EternalBlue) were frequently exploited.</li>
                        <li><strong>Weak Access Controls & Credential Management:</strong> Insufficient use of multi-factor authentication (MFA), weak or default passwords, and compromised credentials obtained via phishing or dark web marketplaces provided easy entry points.</li>
                        <li><strong>Exposed Remote Desktop Protocol (RDP):</strong> Poorly secured RDP ports, often left open to facilitate remote work during the pandemic, were a common attack vector for ransomware deployment.</li>
                        <li><strong>Insufficient Network Segmentation:</strong> Flat network architectures allowed attackers to move laterally with ease once initial access was gained, enabling widespread ransomware deployment across critical systems.</li>
                        <li><strong>Inadequate Backup and Recovery Practices:</strong> Lack of regular, tested, and offline/off-site backups meant that organizations often had no viable alternative to paying the ransom to recover encrypted data.</li>
                        <li><strong>Supply Chain Vulnerabilities:</strong> Compromise of third-party vendors or managed service providers (MSPs) with access to healthcare networks provided an indirect route for attackers.</li>
                        <li><strong>Overwhelmed Security Teams:</strong> Security teams, already stretched by the pandemic&apos;s demands, struggled to keep up with the increased volume and sophistication of attacks, leading to delayed detection and response.</li>
                      </ul>
                    </>
                  )}
                  {activeRansomwareSubTab === 'ttps' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaTools className="mr-2 text-gray-600"/>C. Attacker Techniques, Tools & Practices (TTPs)</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Initial Access Vectors:</strong> Phishing emails with malicious attachments or links (as detailed in Risk 1), exploitation of unpatched public-facing applications (e.g., VPN vulnerabilities like CVE-2019-19781), and brute-forcing RDP credentials.</li>
                        <li><strong>Malware Delivery:</strong> Using sophisticated malware loaders and droppers (e.g., Emotet, TrickBot, BazarLoader) to gain a foothold and then download and execute ransomware payloads (e.g., Ryuk, Conti, Sodinokibi/REvil, Maze).</li>
                        <li><strong>Privilege Escalation & Lateral Movement:</strong> Exploiting local vulnerabilities (e.g., ZeroLogon - CVE-2020-1472) to gain administrative privileges and using tools like Mimikatz to harvest credentials, then moving laterally across the network using PsExec, WMI, or compromised RDP sessions.</li>
                        <li><strong>Data Exfiltration:</strong> Before encryption, attackers exfiltrated large volumes of sensitive data (patient records, financial information, research data) to cloud storage or attacker-controlled servers using tools like Rclone or custom scripts. This formed the basis of double extortion tactics.</li>
                        <li><strong>Encryption & Ransom Note:</strong> Deploying ransomware to encrypt critical files, databases, and backup systems. Ransom notes were left on compromised systems demanding payment in cryptocurrency (usually Bitcoin or Monero) for a decryption key.</li>
                        <li><strong>Pressure Tactics:</strong> Threatening to publish exfiltrated data on leak sites, auctioning data to other cybercriminals, or directly contacting patients/media if the ransom was not paid. Some groups also launched DDoS attacks to further pressure victims.</li>
                        <li><strong>Ransomware-as-a-Service (RaaS):</strong> The RaaS model enabled less skilled attackers to launch sophisticated attacks using pre-built ransomware kits and infrastructure provided by RaaS operators in exchange for a share of the profits.</li>
                      </ul>
                    </>
                  )}
                  {activeRansomwareSubTab === 'impact' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationCircle className="mr-2 text-amber-500"/>D. Impact Assessment</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Direct Patient Care Impact:</strong> Cancellation of appointments and surgeries, diversion of emergency patients to other hospitals, inability to access patient records leading to treatment delays and medical errors. In some documented cases, ransomware attacks were linked to patient deaths.</li>
                        <li><strong>Financial Costs:</strong> Significant financial losses due to ransom payments (often millions of pounds), recovery and remediation costs, system upgrades, legal fees, and regulatory fines (e.g., under GDPR). The average cost of a healthcare data breach, often initiated by ransomware, was over £7 million in 2021.</li>
                        <li><strong>Operational Disruption:</strong> Prolonged downtime of critical systems, including EHRs, imaging systems (PACS), and laboratory information systems, sometimes lasting weeks or months.</li>
                        <li><strong>Data Breach & Loss of Sensitive Information:</strong> Exposure of highly sensitive patient data, leading to identity theft, fraud, and loss of patient trust.</li>
                        <li><strong>Reputational Damage:</strong> Severe damage to the reputation of affected healthcare organizations, impacting public confidence and potentially leading to patient attrition.</li>
                        <li><strong>Psychological Impact on Staff:</strong> Increased stress, burnout, and moral injury among healthcare professionals unable to provide adequate care due to system outages.</li>
                      </ul>
                    </>
                  )}
                  {activeRansomwareSubTab === 'scenario' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaRegCommentDots className="mr-2 text-teal-500"/>E. Scenario Example</h4>
                      <p>A regional NHS Trust, already strained by pandemic response, falls victim to a sophisticated ransomware attack initiated via a phishing email containing a Qakbot malware loader. The attackers move laterally, compromise domain controllers using ZeroLogon, and exfiltrate terabytes of patient data. They then deploy Conti ransomware, encrypting servers hosting the EHR, pathology, and radiology systems. Critical appointments are cancelled, A&E is forced to divert ambulances, and clinicians resort to paper-based processes, significantly increasing the risk of medical errors. The attackers demand a £5 million ransom in Bitcoin and threaten to publish the stolen patient data on their leak site. The Trust&apos;s backups are found to be incomplete and also partially encrypted. After days of severe disruption and facing immense pressure, the Trust, in consultation with national cybersecurity agencies, makes the difficult decision not to pay the ransom and embarks on a lengthy and costly recovery process, while dealing with the fallout of a major patient data breach.</p>
                    </>
                  )}
                </div>
                <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={`${basePath}/assets/images/pages/covid19/content/ransomware.png`}
                    alt="Ransomware Impact on Healthcare during COVID-19"
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>
            </section>

            <section id="cissp-alignment-covid" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gray-50 rounded-xl shadow-lg border border-gray-200/80">
              <h2 className="text-3xl font-bold text-gray-800 mb-10 flex items-center justify-center"><FaBookOpen className="mr-3 text-blue-600"/>CISSP Domain Alignment for COVID-19 Risks</h2>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center"><FaUserShield className="mr-3"/>Alignment for Risk 1: Increased Phishing & Social Engineering</h3>
                <div className="prose prose-lg max-w-none prose-strong:text-gray-700">
                  <p>Addressing the heightened phishing and social engineering risks prevalent during the COVID-19 pandemic, which exploited vulnerabilities such as <code className="font-mono text-sm bg-blue-100 px-1 rounded">Heightened Psychological Stress</code>, <code className="font-mono text-sm bg-blue-100 px-1 rounded">Rapid Technology Adoption</code> without adequate vetting, <code className="font-mono text-sm bg-blue-100 px-1 rounded">Inadequate Security Awareness</code>, and <code className="font-mono text-sm bg-blue-100 px-1 rounded">Weak Remote Access Controls</code>, involves a multi-domain CISSP approach:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong>Security and Risk Management:</strong> This domain is foundational for adapting risk assessments to the dynamic pandemic threat landscape. It emphasizes the development and urgent rollout of updated security awareness programs specifically addressing COVID-themed lures and the psychological pressures exploited by attackers (countering <code className="font-mono text-sm bg-blue-100 px-1 rounded">Inadequate Security Awareness</code> and <code className="font-mono text-sm bg-blue-100 px-1 rounded">Heightened Psychological Stress</code>).</li>
                    <li><strong>Asset Security:</strong> Focuses on protecting sensitive data (e.g., patient records, research data, credentials) accessed via potentially insecure remote endpoints or personal devices. This is critical given the <code className="font-mono text-sm bg-blue-100 px-1 rounded">BYOD Risks</code> and the general rush to enable remote work.</li>
                    <li><strong>Security Architecture and Engineering:</strong> This domain guides the secure configuration of newly deployed technologies (VPNs, telehealth platforms, cloud services) and the hardening of remote access solutions. It directly addresses vulnerabilities arising from <code className="font-mono text-sm bg-blue-100 px-1 rounded">Rapid Technology Adoption</code> and aims to prevent exploitation of poorly configured systems.</li>
                    <li><strong>Communication and Network Security:</strong> Involves securing all communication channels, especially email gateways (to filter phishing), VPN connections, and video conferencing tools. This is key to mitigating risks from attackers impersonating trusted entities and exploiting <code className="font-mono text-sm bg-blue-100 px-1 rounded">Weak Remote Access Controls</code>.</li>
                    <li><strong>Identity and Access Management (IAM):</strong> Stresses the implementation of robust multi-factor authentication (MFA) across all remote access points and critical systems. It also involves stringent identity verification processes to protect against credential theft from successful phishing campaigns targeting <code className="font-mono text-sm bg-blue-100 px-1 rounded">Overwhelmed IT/Security Teams</code> who might overlook alerts.</li>
                    <li><strong>Security Operations:</strong> Enhancing monitoring (SIEM, EDR) to detect phishing attempts and compromised accounts swiftly. Developing agile incident response plans tailored to pandemic-related scenarios is crucial, especially when dealing with <code className="font-mono text-sm bg-blue-100 px-1 rounded">Information Overload</code> that can mask malicious activity.</li>
                  </ul>
                </div>
              </div>

              <div className="relative h-64 w-full max-w-3xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={`${basePath}/assets/images/pages/genai/content/cissp_social_engineering.png`}
                  alt="CISSP Domains Alignment for Social Engineering Risks during COVID-19"
                  fill
                  className="object-contain p-2 bg-white"
                  unoptimized={true}
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center"><FaShieldAlt className="mr-3"/>Alignment for Risk 2: Increased Ransomware Attacks</h3>
                <div className="prose prose-lg max-w-none prose-strong:text-gray-700">
                  <p>Mitigating the severe threat of ransomware attacks on critical healthcare infrastructure, which capitalized on vulnerabilities like <code className="font-mono text-sm bg-blue-100 px-1 rounded">Legacy Systems & Unpatched Devices</code>, <code className="font-mono text-sm bg-blue-100 px-1 rounded">Flat Network Architectures</code>, <code className="font-mono text-sm bg-blue-100 px-1 rounded">Inadequate Backup & Recovery</code> procedures (including online backups), and <code className="font-mono text-sm bg-blue-100 px-1 rounded">Weak Access Controls & Credential Hygiene</code>, requires comprehensive application of CISSP domains:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong>Security and Risk Management:</strong> This domain is paramount for establishing robust business continuity planning (BCP) and disaster recovery (DR) strategies. It ensures that healthcare organizations can recover critical functions and data even if ransomware successfully breaches defenses, directly addressing <code className="font-mono text-sm bg-blue-100 px-1 rounded">Inadequate Backup & Recovery</code>. It also involves risk assessments that specifically identify critical systems vulnerable to ransomware.</li>
                    <li><strong>Asset Security:</strong> Focuses on the stringent protection of critical assets such as Electronic Health Records (EHRs), Picture Archiving and Communication Systems (PACS), and Internet of Medical Things (IoMT) devices from encryption and data exfiltration (double extortion). This domain is key to managing risks associated with <code className="font-mono text-sm bg-blue-100 px-1 rounded">Legacy Systems & Unpatched Devices</code> by prioritizing their protection or isolation.</li>
                    <li><strong>Security Architecture and Engineering:</strong> Guides the design of resilient network architectures, emphasizing network segmentation (micro-segmentation) to contain ransomware propagation and counter <code className="font-mono text-sm bg-blue-100 px-1 rounded">Flat Network Architectures</code>. It also involves implementing robust security controls for all systems, including specialized medical devices, and ensuring secure configurations for <code className="font-mono text-sm bg-blue-100 px-1 rounded">Increased Remote Access Points</code>.</li>
                    <li><strong>Communication and Network Security:</strong> Involves securing network perimeters, internal network segments, and remote access channels (VPNs, RDP) to prevent initial ransomware intrusion and lateral movement. This includes hardening systems against exploitation of public-facing vulnerabilities.</li>
                    <li><strong>Identity and Access Management (IAM):</strong> Enforcing the principle of least privilege, strong authentication (MFA), and regular credential audits to limit an attacker&apos;s ability to escalate privileges and move laterally, directly addressing <code className="font-mono text-sm bg-blue-100 px-1 rounded">Weak Access Controls & Credential Hygiene</code> and the risk from <code className="font-mono text-sm bg-blue-100 px-1 rounded">Third-Party Risks</code>.</li>
                    <li><strong>Security Assessment and Testing:</strong> Mandates regular and thorough vulnerability scanning, penetration testing, and security audits to proactively identify and remediate weaknesses such as <code className="font-mono text-sm bg-blue-100 px-1 rounded">Delayed Patching Cycles</code> and unpatched vulnerabilities before attackers can exploit them. Testing backup restoration is also critical.</li>
                    <li><strong>Security Operations:</strong> Implementing advanced Endpoint Detection and Response (EDR), Security Information and Event Management (SIEM) systems, and maintaining a vigilant Security Operations Center (SOC) for early detection, containment, and eradication of ransomware. This domain also covers effective vulnerability management, patch management, and ensuring that <code className="font-mono text-sm bg-blue-100 px-1 rounded">Inadequate Backup & Recovery</code> procedures are identified and improved through operational checks.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="mitigation" className="mb-24 scroll-mt-20 border-t pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Enhanced Mitigation Strategies & Actionable Framework</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p>The COVID-19 pandemic underscored the critical need for robust cybersecurity. Beyond general best practices, healthcare organizations must adopt a proactive and adaptive security posture. Here are enhanced mitigation strategies:</p>
                
                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Comprehensive Security Awareness & Training:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Pandemic-Specific Phishing Simulation:</strong> Conduct regular training using phishing emails that mimic COVID-19 related lures (e.g., vaccine updates, remote work policies, health alerts). Track metrics and provide targeted follow-up for individuals who fall victim.</li>
                  <li><strong>Safe Remote Work Practices:</strong> Educate staff on securing home networks, using VPNs correctly, identifying secure Wi-Fi, and the risks of using personal devices for work (BYOD policies).</li>
                  <li><strong>Reporting Suspicious Activity:</strong> Establish clear, easy-to-use channels for reporting suspected phishing attempts or security incidents without fear of reprisal.</li>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Strengthen Identity & Access Management (IAM):</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Universal Multi-Factor Authentication (MFA):</strong> Implement MFA for all remote access (VPNs, RDP), cloud services (Office 365, EHR portals), and privileged accounts.</li>
                  <li><strong>Principle of Least Privilege:</strong> Ensure users only have access to the data and systems necessary for their roles. Regularly review and revoke unnecessary access.</li>
                  <li><strong>Strong Password Policies & Management:</strong> Enforce complex passwords and encourage the use of password managers. Monitor for compromised credentials.</li>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Secure Network & Endpoint Infrastructure:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Endpoint Detection and Response (EDR):</strong> Deploy EDR solutions on all endpoints (including those used by remote workers) for advanced threat detection, investigation, and response capabilities.</li>
                  <li><strong>Aggressive Patch Management:</strong> Prioritize and expedite patching of critical vulnerabilities, especially in VPNs, RDP, and internet-facing systems. Automate where possible.</li>
                  <li><strong>Network Segmentation:</strong> Isolate critical systems (e.g., EHRs, medical devices) from the general network to limit the blast radius of an attack. Implement micro-segmentation for finer control.</li>
                  <li><strong>Secure Configuration of Remote Access Tools:</strong> Regularly audit and harden configurations for VPNs, RDP, and other remote access solutions. Disable unnecessary services.</li>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Robust Data Backup & Recovery:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>3-2-1 Backup Rule:</strong> Maintain at least three copies of data, on two different media types, with one copy off-site (and preferably offline/immutable).</li>
                  <li><strong>Regularly Test Backups:</strong> Frequently test data restoration procedures to ensure backups are viable and recovery time objectives (RTOs) can be met.</li>
                  <li><strong>Protect Backups from Ransomware:</strong> Ensure backups are isolated from the primary network and cannot be encrypted or deleted by ransomware.</li>
                </ul>
                
                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Proactive Threat Intelligence & Monitoring:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Utilize Threat Intelligence Feeds:</strong> Subscribe to healthcare-specific threat intelligence to stay informed about emerging TTPs and vulnerabilities.</li>
                  <li><strong>Security Information and Event Management (SIEM):</strong> Implement or enhance SIEM capabilities for centralized logging and real-time correlation of security events to detect suspicious activity.</li>
                </ul>
              </div>

              <div id="actionable-framework-covid19-urlchecker" className="py-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Actionable Framework: URL Safety Checker</h3>
                <p className="text-center text-gray-700 mb-8">
                  A key part of mitigating phishing risks, especially prevalent during the COVID-19 era, is empowering staff to identify malicious links. Our URL Safety Checker provides a simple way to assess potential threats.
                </p>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Understanding Phishing Links</h4>
                    <div className="prose prose-lg max-w-none text-gray-700">
                      <p>
                        Phishing links are deceptive URLs designed to mimic legitimate websites to steal sensitive information like login credentials or financial details. They often appear in emails, SMS, or instant messages, urging immediate action.
                      </p>
                      <ul className="mt-3">
                        <li>Look for slight misspellings in domain names (e.g., `micros0ft.com` instead of `microsoft.com`).</li>
                        <li>Be wary of links that create a sense of urgency or pressure.</li>
                        <li>Never enter sensitive information on a site reached via an unsolicited link without verification.</li>
                        <li>Hover over links (on desktop) to see the actual destination URL before clicking.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-6 mt-8 mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">How to Use the URL Safety Checker</h4>
                      <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="mb-4">Follow these simple steps to verify if a link is potentially unsafe:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Copy the suspicious URL from the email, message, or website.</li>
                          <li>Paste it into the input field below.</li>
                          <li>Click the &quot;Check URL&quot; button.</li>
                          <li>Review the safety result:
                            <ul className="ml-6 mt-2">
                              <li className="text-green-600">Green message: The URL appears safe based on our simulation.</li>
                              <li className="text-red-600">Red message: The URL may be dangerous - exercise extreme caution and avoid visiting if unsure.</li>
                            </ul>
                          </li>
                        </ol>
                        <p className="mt-4 text-sm bg-yellow-100 border border-yellow-300 p-3 rounded">
                          <strong>Important Note:</strong> This checker provides a simulated response for demonstration purposes. Always exercise caution and use multiple verification methods for suspicious links. If in doubt, do not click and report it to your IT/Security department.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-6 mt-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Live URL Safety Checker (Demo)</h4>
                      <div className="flex flex-col space-y-4 max-w-lg mx-auto">
                        <input
                          type="url"
                          value={urlToCheck}
                          onChange={(e) => setUrlToCheck(e.target.value)}
                          placeholder="Enter URL to check (e.g., https://example.com)"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        />
                        <button
                          onClick={checkPhishingUrl}
                          disabled={isChecking || !urlToCheck}
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                          {isChecking ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Checking...
                            </span>
                          ) : 'Check URL Safety'}
                        </button>
                        {checkResult && (
                          <div className={`p-4 rounded-lg text-center font-medium ${
                            checkResult.error ? 'bg-red-100 text-red-700 border border-red-300' : 
                            checkResult.isSafe ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'
                          }`}>
                            {checkResult.error ? checkResult.error :
                             checkResult.isSafe ? `Safe: ${checkResult.reason}` : `Warning: ${checkResult.reason}`}
                            {checkResult.note && <p className="text-sm mt-1">{checkResult.note}</p>}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="references" className="text-3xl font-bold text-gray-900 mb-12 text-center border-t pt-16">
              References & Resources
            </h2>
            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">                
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaLink className="mr-3 text-blue-600"/>Academic & Industry Sources
                </h3>
                <div className="prose prose-lg max-w-none">
                  <ol className="space-y-4 list-decimal pl-5">
                    <li>
                      <p>Ghafur, S., Grass, E., Jennings, N.R. and Darzi, A., 2019. The challenges of cybersecurity in health care: the UK National Health Service as a case study. <em>The Lancet Digital Health</em>, 1(1), pp. e10-e12.</p>
                    </li>
                    <li>
                      <p>Florackis, C., Louca, C., Michaely, R. and Weber, M., 2023. Cybersecurity risk. <em>The Review of Financial Studies</em>, 36(1), pp.351-407.</p>
                    </li>
                    <li>
                      <p>Cuchta, T., Blackwood, B., Devine, T.R., Niichel, R.J., Daniels, K.M., Lutjens, C.H., Maibach, S. and Stephenson, R.J., 2019. Human risk factors in cybersecurity. In <em>Proceedings of the 20th annual SIG conference on information technology education</em> (pp. 87-92).</p>
                    </li>
                    <li>
                      <p>Brewer, R., 2016. Ransomware attacks: detection, prevention and cure. <em>Network security</em>, 2016(9), pp.5-9.</p>
                    </li>
                    <li>
                      <p>Cheng, L., Liu, F. and Yao, D., 2017. Enterprise data breach: causes, challenges, prevention, and future directions. <em>Wiley Interdisciplinary Reviews: Data Mining and Knowledge Discovery</em>, 7(5), p.e1211.</p>
                    </li>
                    <li>
                      <p>Yuan, S. and Wu, X., 2021. Deep learning for insider threat detection: Review, challenges and opportunities. <em>Computers & Security</em>, 104, p.102221.</p>
                    </li>
                    <li>
                      <p>Manda, J.K., 2017. Cybersecurity strategies for legacy telecom systems: Developing tailored cybersecurity strategies to secure aging telecom infrastructures against modern cyber threats, leveraging your experience with legacy systems and cybersecurity practices. <em>Leveraging your Experience with Legacy Systems and Cybersecurity Practices</em>.</p>
                    </li>
                    <li>
                      <p><strong>National Cyber Security Centre.</strong> (2022). &quot;Cyber Security Guidance for Healthcare Organizations.&quot; <a href="https://www.ncsc.gov.uk/section/advice-guidance/all-topics" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">NCSC Guidance Portal</a></p>
                    </li>
                    <li>
                      <p><strong>NHS Digital.</strong> (2024). &quot;Data Security and Protection Toolkit.&quot; <a href="https://www.dsptoolkit.nhs.uk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">DSPT Portal</a></p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Protect Your Healthcare Organization?</h2>
            <p className="text-xl text-gray-600 mb-8">Get expert guidance on implementing robust cybersecurity measures for your healthcare institution</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/demo" 
                className="bg-primary-color text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Request Demo
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-primary-color text-primary-color px-8 py-4 rounded-lg font-semibold hover:bg-primary-color hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}