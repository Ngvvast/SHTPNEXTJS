'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../../layouts/MainLayout';
// Ensure 'react-icons' is installed: npm install react-icons
import { FaBrain, FaUserSecret, FaDatabase, FaShieldAlt, FaCheckCircle, FaInfoCircle, FaFileAlt, FaExclamationTriangle, FaTools, FaRegCommentDots, FaMicrochip, FaShareAlt, FaBolt, FaTasks, FaLink, FaExclamationCircle, FaChevronRight, FaBook, FaPuzzlePiece, FaChevronDown, FaChevronUp, FaBalanceScale, FaLightbulb } from 'react-icons/fa'; // Added FaBalanceScale, FaLightbulb
import InteractiveGenAiRiskAssessment from '../../../components/sections/InteractiveGenAiRiskAssessment'; // Import the new component
import { useState } from 'react'; // Import useState

const references = [
  { id: 'ref-ncsc-ai', text: 'National Cyber Security Centre (NCSC) (2023). <em>Principles for AI Security</em>. [Online]. Available at: https://www.ncsc.gov.uk/collection/ai-security/principles-for-ai-security (Accessed: 14 May 2024).' },
  { id: 'ref-nhs-ai-repo', text: 'NHS England (2024). <em>AI Knowledge Repository</em>. [Online]. Available at: https://digital.nhs.uk/services/ai-knowledge-repository (Accessed: 14 May 2024).' },
  { id: 'ref-ico-ai-dp', text: 'Information Commissioner\'s Office (ICO) (2023). <em>Guidance on AI and data protection</em>. [Online]. Available at: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/ (Accessed: 14 May 2024).' },
  { id: 'ref-owasp-llm', text: 'OWASP Foundation (2025). <em>OWASP Top 10 for LLM Applications List for 2025</em>. [Online]. Available at: https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/ (Accessed: 14 May 2024).' }
];

export default function GenAIContent() {  // Renamed from GenAIPage
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Navigation items
  const navItems = [
    { id: 'overview', title: 'Overview', icon: <FaInfoCircle /> },
    { id: 'risk1-social-engineering', title: 'Risk 1: AI Social Engineering', icon: <FaUserSecret /> },
    { id: 'risk2-data-poisoning', title: 'Risk 2: Data Poisoning', icon: <FaDatabase /> },
    { id: 'mitigation', title: 'Mitigation Strategies', icon: <FaShieldAlt /> }, // ID updated
    { id: 'critical-analysis-genai', title: 'Critical Analysis', icon: <FaBalanceScale /> }, // New
    { id: 'solutions-drawbacks-genai', title: 'Solutions & Drawbacks', icon: <FaLightbulb /> }, // New
    { id: 'interactive-assessment-genai', title: 'Interactive Assessment', icon: <FaTasks /> },
    { id: 'future-outlook', title: 'Future Outlook', icon: <FaBolt /> },
    { id: 'references', title: 'References', icon: <FaLink /> }
  ];

  // State for active sub-tabs for GenAI risks
  const [activeSocialEngineeringSubTab, setActiveSocialEngineeringSubTab] = useState('description');
  const [activeDataPoisoningSubTab, setActiveDataPoisoningSubTab] = useState('description');

  const socialEngineeringSubTabs = [
    { id: 'description', title: 'Description', icon: <FaFileAlt /> },
    { id: 'vulnerabilities', title: 'Vulnerabilities', icon: <FaExclamationTriangle /> },
    { id: 'ttps', title: 'Attacker TTPs', icon: <FaTools /> },
    { id: 'impact', title: 'Impact', icon: <FaExclamationCircle /> },
    { id: 'scenario', title: 'Scenario', icon: <FaRegCommentDots /> },
    { id: 'cissp', title: 'CISSP Alignment', icon: <FaPuzzlePiece /> }, // Updated icon
  ];

  const dataPoisoningSubTabs = [
    { id: 'description', title: 'Description', icon: <FaFileAlt /> },
    { id: 'vulnerabilities', title: 'Vulnerabilities', icon: <FaExclamationTriangle /> },
    { id: 'ttps', title: 'Attacker TTPs', icon: <FaTools /> },
    { id: 'impact', title: 'Impact', icon: <FaExclamationCircle /> },
    { id: 'scenario', title: 'Scenario', icon: <FaRegCommentDots /> },
    { id: 'cissp', title: 'CISSP Alignment', icon: <FaPuzzlePiece /> }, // Updated icon
  ];

  // CISSP Domain Data for Social Engineering Risk
  const socialEngineeringCisspDomains = [
    { id: 'se-d1', title: 'Security and Risk Management (Domain 1)', content: 'This domain is crucial for addressing AI-driven social engineering. It involves identifying and assessing the risk of deepfakes and sophisticated phishing campaigns powered by GenAI, establishing governance frameworks that consider the ethical implications of using or defending against such AI, and implementing risk mitigation strategies, including awareness programs and incident response plans tailored to these advanced threats.' },
    { id: 'se-d5', title: 'Identity and Access Management (Domain 5)', content: 'IAM plays a vital role in preventing the success of AI-powered social engineering attacks by ensuring robust authentication mechanisms that are resilient to impersonation attempts, even those enhanced by AI, implementing the principle of least privilege to limit the potential impact if an account is compromised through social engineering, and monitoring access patterns for anomalies that might indicate a compromised account or an AI-driven attack in progress.' },
  ];

  // CISSP Domain Data for Data Poisoning Risk
  const dataPoisoningCisspDomains = [
    { id: 'dp-d1', title: 'Security and Risk Management (Domain 1)', content: 'This domain addresses the foundational aspects of protecting AI models: Assessing risks related to training data integrity and model susceptibility to adversarial attacks. Defining policies for data sourcing, validation, and continuous monitoring of model performance for signs of compromise. Ensuring model integrity and establishing ethical guidelines for AI development and deployment.' },
    { id: 'dp-d2', title: 'Asset Security (Domain 2)', content: 'Protecting the data and models themselves is paramount: Classifying training data and AI models as critical assets requiring stringent protection measures. Implementing secure data handling procedures throughout the AI lifecycle, from collection to model training and inference. Protecting the intellectual property embodied in the AI models and algorithms.' },
    { id: 'dp-d8', title: 'Software Development Security (Domain 8)', content: 'Secure development practices are essential for building resilient AI systems: Integrating security into the AI model development lifecycle (MLSecOps). Conducting vulnerability assessments of AI components and dependencies. Implementing robust input validation and sanitization to defend against data poisoning and some forms of evasion. Developing secure APIs for model interaction.' },
  ];

  const [openSocialEngineeringCisspDomain, setOpenSocialEngineeringCisspDomain] = useState(socialEngineeringCisspDomains[0]?.id || null);
  const [openDataPoisoningCisspDomain, setOpenDataPoisoningCisspDomain] = useState(dataPoisoningCisspDomains[0]?.id || null);

  const toggleSocialEngineeringCisspDomain = (domainId) => {
    setOpenSocialEngineeringCisspDomain(prevOpen => (prevOpen === domainId ? null : domainId));
  };

  const toggleDataPoisoningCisspDomain = (domainId) => {
    setOpenDataPoisoningCisspDomain(prevOpen => (prevOpen === domainId ? null : domainId));
  };

  // Shared placeholder images for GenAI risk sub-tabs
  const genAiRiskImages = {
    description: '/assets/images/pages/genai/risk-images/shared_description.png',
    vulnerabilities: '/assets/images/pages/genai/risk-images/shared_vulnerabilities.png',
    ttps: '/assets/images/pages/genai/risk-images/shared_ttps.png',
    impact: '/assets/images/pages/genai/risk-images/shared_impact.png',
    scenario: '/assets/images/pages/genai/risk-images/shared_scenario.png',
    cissp: '/assets/images/pages/genai/risk-images/shared_cissp.png',
  };

  return (
    <MainLayout>
      {/* Hero Section - Enhanced Styling */}
      <div className="relative bg-gradient-to-br from-blue-700 via-cyan-700 to-blue-800 py-28 mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={`${basePath}/assets/images/hero/genai/AI.png`}
            alt="Generative AI Hero"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
            unoptimized={true}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              GENERATIVE AI: Healthcare Cybersecurity Risks
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Exploring the dual-edged sword of Generative AI in the UK healthcare sector and its cybersecurity implications.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link 
                href="#risk-analysis-genai" 
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
      {/* Sticky On This Page Navigation - GenAI Specific */}
      <div className="sticky top-16 z-50 bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200/80 transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-4 py-2">
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
            <div className="flex items-center justify-start gap-x-8 min-w-max px-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-all duration-200 ease-in-out group"
                >
                  <span className="mr-1.5 text-purple-500 group-hover:text-purple-700 transition-colors duration-200">{item.icon}</span>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><FaInfoCircle className="mr-3 text-purple-600" />Overview of Generative AI in Healthcare</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>Generative AI (GenAI) refers to artificial intelligence capable of generating novel content, including text, images, audio, and synthetic data. In healthcare, its applications are vast, from accelerating drug discovery and personalizing treatment plans to automating administrative tasks and enhancing diagnostic tools. However, this transformative potential is accompanied by significant cybersecurity risks that UK healthcare organizations must proactively address.</p>
                    <p className="mt-4">The core challenge lies in GenAI&apos;s ability to create highly convincing outputs that can be misused for malicious purposes, coupled with risks inherent in the AI models themselves, such as data privacy concerns and susceptibility to adversarial attacks.</p>
                  </div>
                </div>
                <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={`${basePath}/assets/images/pages/genai/content/genai_overview.png`}
                    alt="Generative AI in Healthcare Concept"
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>
            </section>

            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Generative AI is transforming healthcare, from drug discovery and
              personalized medicine to diagnostics and patient care. However, this
              powerful technology also introduces new cybersecurity vulnerabilities
              that healthcare organizations must address proactively. It&apos;s crucial
              to understand these risks to harness AI&apos;s benefits safely.
            </p>

            <h2 id="risk-analysis-genai" className="text-4xl font-bold text-gray-900 mb-16 text-center border-t pt-16 scroll-mt-28">Generative AI: Cybersecurity Risk Analysis</h2>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Cybersecurity Risks of Generative AI in Healthcare
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              While generative AI offers immense potential, it&apos;s essential to
              be aware of the associated cybersecurity risks. These include:
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  AI-Powered Social Engineering & Deepfakes
                </h3>
                <p className="text-gray-700">
                  GenAI can create highly convincing phishing emails, voice clones, and video deepfakes to manipulate individuals, making attacks more sophisticated and harder to detect than traditional methods.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Data Poisoning & Model Evasion
                </h3>
                <p className="text-gray-700">
                  Malicious actors can corrupt AI model training data (poisoning) or use crafted inputs to trick models (evasion), leading to inaccurate outputs, system failures, or impacting patient diagnoses.
                </p>
              </div>
            </div>

            {/* Risk 1: AI-Powered Social Engineering & Deepfake Threats */}
            <section id="risk1-social-engineering" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg border border-purple-200/50">
              <h3 className="text-3xl font-bold text-purple-700 mb-8 flex items-center"><FaUserSecret className="mr-3"/>Risk 1: AI-Powered Social Engineering &amp; Deepfakes</h3>
              
              <div className="mb-6 flex flex-wrap gap-2 border-b border-purple-200 pb-4">
                {socialEngineeringSubTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSocialEngineeringSubTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSocialEngineeringSubTab === tab.id
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-6">
                <div className="lg:col-span-2 prose prose-lg max-w-none prose-headings:text-purple-700 prose-strong:text-gray-700 text-gray-700">
                  {activeSocialEngineeringSubTab === 'description' && (
                    <>
                      <h4 className="text-xl font-semibold mb-3 flex items-center"><FaFileAlt className="mr-2 text-purple-600"/>A. Risk Description</h4>
                      <p>AI-powered social engineering involves using generative AI to create highly convincing phishing emails, voice messages (vishing), or even video deepfakes to manipulate individuals into divulging sensitive information or performing actions that compromise security. These attacks are more sophisticated and harder to detect than traditional social engineering attempts due to their personalization and realism.</p>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'vulnerabilities' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationTriangle className="mr-2 text-orange-500"/>B. Vulnerabilities Exploited</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Human Trust & Gullibility:</strong> Exploits the natural human tendency to trust seemingly authentic communication.</li>
                        <li><strong>Lack of Awareness & Training:</strong> Insufficient training on identifying sophisticated AI-generated fakes.</li>
                        <li><strong>Data Availability for Personalization:</strong> Publicly available information can be used by AI to tailor attacks.</li>
                        <li><strong>Advanced Deepfake Technology:</strong> Increasing realism of AI-generated voice and video.</li>
                      </ul>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'ttps' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaTools className="mr-2 text-gray-600"/>C. Attacker Techniques, Tools &amp; Practices</h4>
                      <p>Attackers might use GenAI to:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Craft personalized spear-phishing emails that mimic trusted colleagues or superiors.</li>
                        <li>Generate voice clones of executives to authorize fraudulent transactions.</li>
                        <li>Create deepfake videos for disinformation campaigns or to impersonate individuals in secure video calls.</li>
                        <li>Automate the creation and distribution of convincing fake news or alerts to cause panic or manipulate behavior.</li>
                      </ul>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'impact' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationCircle className="mr-2 text-red-500"/>D. Impact Assessment</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Unauthorized access to sensitive patient data (PHI).</li>
                        <li>Financial fraud and theft.</li>
                        <li>Reputational damage to the healthcare organization.</li>
                        <li>Compromise of critical healthcare systems.</li>
                        <li>Erosion of trust between patients and providers.</li>
                      </ul>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'scenario' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaRegCommentDots className="mr-2 text-purple-500"/>E. Scenario Example</h4>
                      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg shadow-inner">
                        <p className="text-gray-700">An attacker uses GenAI to create a voice clone of a hospital&apos;s Chief of Surgery. The AI calls a junior doctor, mimicking the Chief&apos;s voice and urgency, requesting immediate remote access to a patient&apos;s sensitive records for an &apos;emergency consultation&apos;. The junior doctor, believing it&apos;s a legitimate urgent request, bypasses standard verification protocols and provides access, leading to a data breach.</p>
                      </div>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'cissp' && (
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold mb-4 text-purple-700 flex items-center"><FaPuzzlePiece className="mr-2 text-purple-600"/>F. CISSP Domain Alignment</h4>
                       <p className="mb-4"><strong>AI-Powered Social Engineering & Deepfakes</strong> present unique challenges. Understanding CISSP alignment helps formulate a comprehensive defense:</p>
                      <div className="space-y-2">
                        {socialEngineeringCisspDomains.map(domain => (
                          <div key={domain.id} className="border border-purple-200 rounded-lg">
                            <button
                              onClick={() => toggleSocialEngineeringCisspDomain(domain.id)}
                              className="w-full flex justify-between items-center p-4 bg-purple-100 hover:bg-purple-200 focus:outline-none transition-colors"
                            >
                              <span className="font-medium text-purple-700 text-left">{domain.title}</span>
                              {openSocialEngineeringCisspDomain === domain.id ? <FaChevronUp className="text-purple-600" /> : <FaChevronDown className="text-purple-600" />}
                            </button>
                            {openSocialEngineeringCisspDomain === domain.id && (
                              <div className="p-4 bg-white border-t border-purple-200">
                                <p className="text-gray-700 text-sm">{domain.content}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-gray-600">By focusing on these domains, organizations can build stronger defenses against the evolving threat of AI-enhanced social engineering and deepfakes.</p>
                    </div>
                  )}
                </div>
                <div className="lg:col-span-1 order-1 lg:order-2 mt-6 lg:mt-0">
                  <div className="relative h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-lg group">
                    <Image 
                      src={`${basePath}${genAiRiskImages[activeSocialEngineeringSubTab] || genAiRiskImages.description}`}
                      alt={`Visual for ${activeSocialEngineeringSubTab.replace('-', ' ')}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Risk 2: Data Poisoning & Model Evasion in GenAI */}
            <section id="risk2-data-poisoning" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-lg border border-teal-200/50">
              <h3 className="text-3xl font-bold text-teal-700 mb-8 flex items-center"><FaDatabase className="mr-3"/>Risk 2: Data Poisoning &amp; Model Evasion</h3>
              
              <div className="mb-6 flex flex-wrap gap-2 border-b border-teal-200 pb-4">
                {dataPoisoningSubTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDataPoisoningSubTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeDataPoisoningSubTab === tab.id
                        ? 'bg-teal-600 text-white shadow-md'
                        : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-6">
                <div className="lg:col-span-2 prose prose-lg max-w-none prose-headings:text-teal-700 prose-strong:text-gray-700 text-gray-700">
                  {activeDataPoisoningSubTab === 'description' && (
                    <>
                      <h4 className="text-xl font-semibold mb-3 flex items-center"><FaFileAlt className="mr-2 text-teal-600"/>A. Risk Description</h4>
                      <p><strong>Data Poisoning:</strong> Involves corrupting the training data of a GenAI model. If malicious data is introduced, the model learns incorrect patterns, leading to biased, inaccurate, or harmful outputs. For example, a diagnostic AI could be poisoned to misdiagnose conditions.</p>
                      <p className="mt-2"><strong>Model Evasion:</strong> Attackers craft specific inputs (adversarial examples) that appear normal to humans but are designed to trick the AI model into making incorrect classifications or predictions during its operational phase. This could lead to a GenAI tool generating misleading medical advice or failing to identify critical issues.</p>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'vulnerabilities' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationTriangle className="mr-2 text-orange-500"/>B. Vulnerabilities Exploited</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Reliance on large, externally sourced datasets for training.</li>
                        <li>Insufficient validation and sanitization of training data.</li>
                        <li>Complexity of GenAI models making them &apos;black boxes&apos;, hard to inspect for tampering.</li>
                        <li>Lack of robust defenses against adversarial inputs in deployed models.</li>
                      </ul>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'ttps' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaTools className="mr-2 text-gray-600"/>C. Attacker Techniques, Tools &amp; Practices</h4>
                      <p>Attackers might:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Subtly alter medical images in a training set to cause misdiagnosis of a specific condition.</li>
                        <li>Inject biased text data to make a clinical NLP model produce discriminatory outputs.</li>
                        <li>Craft specific patient queries that cause a GenAI diagnostic tool to consistently provide incorrect (evasive) advice.</li>
                        <li>Manipulate inputs to a drug discovery AI to steer it towards ineffective or harmful compounds.</li>
                      </ul>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'impact' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationCircle className="mr-2 text-red-500"/>D. Impact Assessment</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Incorrect medical diagnoses and treatment plans, leading to patient harm.</li>
                        <li>Compromised integrity of medical research and drug discovery processes.</li>
                        <li>Erosion of trust in AI-powered healthcare tools.</li>
                        <li>Legal and regulatory repercussions for the healthcare organization.</li>
                        <li>Generation of harmful or biased medical content.</li>
                      </ul>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'scenario' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaRegCommentDots className="mr-2 text-teal-500"/>E. Scenario Example</h4>
                      <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg shadow-inner">
                        <p className="text-gray-700">A malicious actor gains access to a dataset used to train a GenAI model for identifying cancerous tumors in medical scans. They subtly alter a small percentage of images, mislabeling benign tumors as malignant and vice-versa. The deployed AI, now poisoned, starts producing a higher rate of false positives and false negatives, leading to unnecessary invasive procedures for some patients and delayed treatment for others, severely impacting patient outcomes and trust in the hospital&apos;s diagnostic capabilities.</p>
                      </div>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'cissp' && (
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold mb-4 text-teal-700 flex items-center"><FaPuzzlePiece className="mr-2 text-teal-600"/>F. CISSP Domain Alignment</h4>
                      <p className="mb-4"><strong>Data Poisoning & Model Evasion</strong> attacks target the core of GenAI systems. Aligning mitigation efforts with CISSP domains is key:</p>
                      <div className="space-y-2">
                        {dataPoisoningCisspDomains.map(domain => (
                          <div key={domain.id} className="border border-teal-200 rounded-lg">
                            <button
                              onClick={() => toggleDataPoisoningCisspDomain(domain.id)}
                              className="w-full flex justify-between items-center p-4 bg-teal-100 hover:bg-teal-200 focus:outline-none transition-colors"
                            >
                              <span className="font-medium text-teal-700 text-left">{domain.title}</span>
                              {openDataPoisoningCisspDomain === domain.id ? <FaChevronUp className="text-teal-600" /> : <FaChevronDown className="text-teal-600" />}
                            </button>
                            {openDataPoisoningCisspDomain === domain.id && (
                              <div className="p-4 bg-white border-t border-teal-200">
                                <p className="text-gray-700 text-sm">{domain.content}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-gray-600">Addressing these CISSP domains helps create a multi-layered defense against data poisoning and model evasion attacks, enhancing the trustworthiness and reliability of GenAI systems.</p>
                    </div>
                  )}
                </div>
                <div className="lg:col-span-1 order-1 lg:order-2 mt-6 lg:mt-0">
                  <div className="relative h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-lg group">
                    <Image 
                      src={`${basePath}${genAiRiskImages[activeDataPoisoningSubTab] || genAiRiskImages.description}`}
                      alt={`Visual for ${activeDataPoisoningSubTab.replace('-', ' ')}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Mitigation Strategies Section */}
            <section id="mitigation" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg border border-green-200/50">
              <h3 className="text-3xl font-bold text-green-700 mb-8 flex items-center"><FaShieldAlt className="mr-3"/>Mitigation Strategies for GenAI Risks</h3>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Effective mitigation requires a multi-layered approach. While the strategies below offer general guidance, detailed alignment with cybersecurity best practices, including relevant CISSP domains, can be found within the &quot;CISSP Alignment&quot; sub-tab of each specific risk discussed earlier (AI-Powered Social Engineering and Data Poisoning).
                </p>
                <p className="mb-6">Key general mitigation strategies include:</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-600 mb-2 flex items-center"><FaCheckCircle className="mr-2"/>Robust Data Governance</h4>
                  <p className="text-gray-600">Implement strict controls over training data, including provenance tracking, bias detection, and sanitization to prevent data poisoning.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-600 mb-2 flex items-center"><FaCheckCircle className="mr-2"/>Adversarial Training & Testing</h4>
                  <p className="text-gray-600">Train models on datasets that include adversarial examples to improve resilience. Regularly test models against evasion techniques.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-600 mb-2 flex items-center"><FaCheckCircle className="mr-2"/>Secure Prompt Engineering</h4>
                  <p className="text-gray-600">Design prompts carefully to limit unintended behaviors. Implement input validation and output filtering to prevent injection attacks and harmful content generation.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-600 mb-2 flex items-center"><FaCheckCircle className="mr-2"/>Human Oversight & Monitoring</h4>
                  <p className="text-gray-600">Incorporate human review in critical decision-making processes involving AI. Continuously monitor AI outputs for anomalies and unexpected behavior.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-600 mb-2 flex items-center"><FaCheckCircle className="mr-2"/>Ethical Guidelines & Frameworks</h4>
                  <p className="text-gray-600">Develop and enforce clear ethical guidelines for AI development and deployment, focusing on fairness, transparency, and accountability.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-green-600 mb-2 flex items-center"><FaCheckCircle className="mr-2"/>Regular Audits & Updates</h4>
                  <p className="text-gray-600">Conduct regular security audits of AI systems and keep models and underlying infrastructure updated with the latest security patches.</p>
                </div>
              </div>
              <div className="mt-10 relative h-[350px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`${basePath}/assets/images/pages/genai/content/genai_mitigation_framework.png`}
                  alt="GenAI Mitigation Framework Diagram"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
            </section>

            {/* Critical Analysis Section - New */}
            <section id="critical-analysis-genai" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl shadow-lg border border-sky-200/50">
              <h3 className="text-3xl font-bold text-sky-700 mb-8 flex items-center"><FaBalanceScale className="mr-3"/>Critical Analysis of GenAI in Healthcare</h3>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  [Placeholder for Critical Analysis content. This section should delve into a deeper critical examination of Generative AI's role in healthcare, considering ethical dilemmas, societal impact, regulatory challenges, and the balance between innovation and risk. It could explore questions like: How do we ensure equitable access to GenAI benefits? What are the long-term implications for the healthcare workforce? How can regulatory frameworks keep pace with rapid technological advancements?]
                </p>
                {/* Add more structured content like subheadings, lists, or blockquotes as needed */}
              </div>
            </section>

            {/* Solutions & Drawbacks Section - New */}
            <section id="solutions-drawbacks-genai" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl shadow-lg border border-amber-200/50">
              <h3 className="text-3xl font-bold text-amber-700 mb-8 flex items-center"><FaLightbulb className="mr-3"/>Existing Solutions, Proposed Innovations & Their Drawbacks</h3>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  [Placeholder for Solutions & Drawbacks content. This section should discuss current and proposed solutions to address GenAI risks in healthcare. It should also critically evaluate their potential drawbacks, limitations, and feasibility. Consider aspects like:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Technical solutions (e.g., advanced encryption, differential privacy, AI for detecting AI-generated disinformation).</li>
                  <li>Policy and regulatory approaches.</li>
                  <li>Organisational best practices and training programs.</li>
                  <li>The challenges in implementing these solutions effectively and at scale.]</li>
                </ul>
              </div>
            </section>

            {/* Interactive GenAI Risk Assessment Section */}
            <section id="interactive-assessment-genai" className="mb-20 scroll-mt-28">
              <InteractiveGenAiRiskAssessment />
            </section>

            {/* Future Outlook Section */}
            <section id="future-outlook" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gray-800 text-white rounded-xl shadow-xl">
              <h3 className="text-3xl font-bold mb-8 flex items-center"><FaBolt className="mr-3 text-yellow-400"/>Future Outlook & Preparedness</h3>
              <p className="text-lg text-gray-300 mb-6">The landscape of Generative AI is rapidly evolving. Future developments may include more sophisticated AI models, novel attack vectors, and evolving regulatory frameworks. Healthcare organizations must foster a culture of continuous learning and adaptation to stay ahead of emerging threats. This includes investing in research, participating in industry collaborations, and developing agile security strategies that can respond to the dynamic nature of AI risks.</p>
              <p className="text-lg text-gray-300">Preparedness involves not just technical measures but also strategic planning, workforce training, and ethical considerations to ensure that GenAI is leveraged responsibly and securely for the benefit of patient care.</p>
            </section>

            {/* References Section */}
            <section id="references" className="scroll-mt-28 p-8 lg:p-12 bg-white rounded-xl shadow-lg border border-gray-200/50">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center"><FaLink className="mr-3 text-gray-500"/>References &amp; Further Reading</h3>
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
