'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../../layouts/MainLayout';
// Ensure 'react-icons' is installed: npm install react-icons
import { FaBrain, FaUserSecret, FaDatabase, FaShieldAlt, FaCheckCircle, FaInfoCircle, FaBookOpen, FaFileAlt, FaExclamationTriangle, FaTools, FaRegCommentDots, FaMicrochip, FaShareAlt, FaBolt, FaTasks, FaLink, FaExclamationCircle, FaChevronRight } from 'react-icons/fa'; // Added FaTasks, FaLink, FaExclamationCircle, FaChevronRight
import InteractiveGenAiRiskAssessment from '../../../components/sections/InteractiveGenAiRiskAssessment'; // Import the new component
import { useState } from 'react'; // Import useState

export default function GenAIContent() {  // Renamed from GenAIPage
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Navigation items
  const navItems = [
    { id: 'overview', title: 'Overview', icon: <FaInfoCircle /> },
    { id: 'risk1-social-engineering', title: 'Risk 1: AI Social Engineering', icon: <FaUserSecret /> },
    { id: 'risk2-data-poisoning', title: 'Risk 2: Data Poisoning', icon: <FaDatabase /> },
    { id: 'cissp-alignment-genai', title: 'CISSP Alignment', icon: <FaBookOpen /> },
    { id: 'mitigation-genai', title: 'Mitigation Strategies', icon: <FaShieldAlt /> },
    { id: 'interactive-assessment-genai', title: 'Interactive Assessment', icon: <FaTasks /> }, // Added Nav Item
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
  ];

  const dataPoisoningSubTabs = [
    { id: 'description', title: 'Description', icon: <FaFileAlt /> },
    { id: 'vulnerabilities', title: 'Vulnerabilities', icon: <FaExclamationTriangle /> },
    { id: 'ttps', title: 'Attacker TTPs', icon: <FaTools /> },
    { id: 'impact', title: 'Impact', icon: <FaExclamationCircle /> },
    { id: 'scenario', title: 'Scenario', icon: <FaRegCommentDots /> },
  ];

  return (
    <MainLayout>
      {/* Hero Section - Enhanced Styling */}
      <div className="relative bg-gradient-to-br from-blue-700 via-cyan-700 to-blue-800 py-28 mt-16"> {/* Applied NIS2 gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={`${basePath}/assets/images/hero/genai/AI.png`} // Updated image path
            alt="Generative AI Hero"
            fill
            className="object-cover opacity-20 mix-blend-overlay" // Adjusted opacity like NIS2
            priority
            unoptimized={true} // Added for static export
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
                Analyse Risks
              </Link>
              <Link 
                href="#mitigation-genai" 
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
                    src={`${basePath}/assets/images/pages/genai/content/genai_overview.png`} // Updated image path
                    alt="Generative AI in Healthcare Concept"
                    fill
                    className="object-cover"
                    unoptimized={true} // Added for static export
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
                  Data Poisoning &amp; Evasion Attacks
                </h3>
                <p className="text-gray-700">
                  Malicious actors can corrupt AI models by feeding them
                  manipulated data, leading to inaccurate outputs or system
                  failures. Evasion attacks involve crafting inputs that trick AI
                  models into making incorrect predictions, potentially
                  impacting patient diagnoses or treatment plans. It&apos;s vital to
                  ensure data integrity and model robustness.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Model Inversion &amp; Membership Inference
                </h3>
                <p className="text-gray-700">
                  These attacks aim to extract sensitive information from AI
                  models. Model inversion attempts to reconstruct training data,
                  potentially exposing confidential patient records. Membership
                  inference determines if a specific individual&apos;s data was used
                  to train the model. Protecting patient privacy is paramount.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Prompt Injection &amp; Output Manipulation
                </h3>
                <p className="text-gray-700">
                  Attackers can inject malicious prompts to control AI behavior
                  or generate harmful content. Output manipulation involves
                  altering AI-generated results before they&apos;re used, which could
                  have severe consequences in clinical decision-making. Secure
                  prompt engineering and output verification are critical.
                </p>
              </div>
            </div>

            {/* Risk 1: AI-Powered Social Engineering & Deepfake Threats */}
            <section id="risk1-social-engineering" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg border border-purple-200/50">
              <h3 className="text-3xl font-bold text-purple-700 mb-8 flex items-center"><FaUserSecret className="mr-3"/>Risk 1: AI-Powered Social Engineering &amp; Deepfakes</h3>
              
              {/* Sub-tabs for Risk 1 */}
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

              {/* Content for Risk 1 Sub-tabs */}
              {activeSocialEngineeringSubTab === 'description' && (
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>AI-powered social engineering involves using generative AI to create highly convincing phishing emails, voice messages (vishing), or even video deepfakes to manipulate individuals into divulging sensitive information or performing actions that compromise security. These attacks are more sophisticated and harder to detect than traditional social engineering attempts due to their personalization and realism.</p>
                </div>
              )}
              {activeSocialEngineeringSubTab === 'vulnerabilities' && (
                <div className="prose prose-lg max-w-none text-gray-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Human Trust & Gullibility:</strong> Exploits the natural human tendency to trust seemingly authentic communication.</li>
                    <li><strong>Lack of Awareness & Training:</strong> Insufficient training on identifying sophisticated AI-generated fakes.</li>
                    <li><strong>Data Availability for Personalization:</strong> Publicly available information can be used by AI to tailor attacks.</li>
                    <li><strong>Advanced Deepfake Technology:</strong> Increasing realism of AI-generated voice and video.</li>
                  </ul>
                </div>
              )}
              {activeSocialEngineeringSubTab === 'ttps' && (
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>Attackers might use GenAI to:
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>Craft personalized spear-phishing emails that mimic trusted colleagues or superiors.</li>
                      <li>Generate voice clones of executives to authorize fraudulent transactions.</li>
                      <li>Create deepfake videos for disinformation campaigns or to impersonate individuals in secure video calls.</li>
                      <li>Automate the creation and distribution of convincing fake news or alerts to cause panic or manipulate behavior.</li>
                    </ul>
                  </p>
                </div>
              )}
              {activeSocialEngineeringSubTab === 'impact' && (
                <div className="prose prose-lg max-w-none text-gray-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Unauthorized access to sensitive patient data (PHI).</li>
                    <li>Financial fraud and theft.</li>
                    <li>Reputational damage to the healthcare organization.</li>
                    <li>Compromise of critical healthcare systems.</li>
                    <li>Erosion of trust between patients and providers.</li>
                  </ul>
                </div>
              )}
              {activeSocialEngineeringSubTab === 'scenario' && (
                <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg shadow-inner">
                  <h4 className="text-xl font-semibold text-purple-700 mb-3">Scenario: The Compromised Clinician</h4>
                  <p className="text-gray-700">An attacker uses GenAI to create a voice clone of a hospital&apos;s Chief of Surgery. The AI calls a junior doctor, mimicking the Chief&apos;s voice and urgency, requesting immediate remote access to a patient&apos;s sensitive records for an &apos;emergency consultation&apos;. The junior doctor, believing it&apos;s a legitimate urgent request, bypasses standard verification protocols and provides access, leading to a data breach.</p>
                </div>
              )}
              <div className="order-2 lg:order-1 relative h-[400px] lg:h-auto min-h-[300px] rounded-lg overflow-hidden shadow-lg group mt-8 lg:mt-0">
                <Image 
                  src={`${basePath}/assets/images/pages/genai/content/social_engineering_visual.png`} // Updated image path
                  alt="AI Social Engineering Visualization"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={true} // Added for static export
                />
              </div>
            </section>

            {/* Risk 2: Data Poisoning & Model Evasion in GenAI */}
            <section id="risk2-data-poisoning" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-lg border border-teal-200/50">
              <h3 className="text-3xl font-bold text-teal-700 mb-8 flex items-center"><FaDatabase className="mr-3"/>Risk 2: Data Poisoning &amp; Model Evasion</h3>
              
              {/* Sub-tabs for Risk 2 */}
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

              {/* Content for Risk 2 Sub-tabs */}
              {activeDataPoisoningSubTab === 'description' && (
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p><strong>Data Poisoning:</strong> Involves corrupting the training data of a GenAI model. If malicious data is introduced, the model learns incorrect patterns, leading to biased, inaccurate, or harmful outputs. For example, a diagnostic AI could be poisoned to misdiagnose conditions.</p>
                  <p className="mt-2"><strong>Model Evasion:</strong> Attackers craft specific inputs (adversarial examples) that appear normal to humans but are designed to trick the AI model into making incorrect classifications or predictions during its operational phase. This could lead to a GenAI tool generating misleading medical advice or failing to identify critical issues.</p>
                </div>
              )}
              {activeDataPoisoningSubTab === 'vulnerabilities' && (
                <div className="prose prose-lg max-w-none text-gray-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Reliance on large, externally sourced datasets for training.</li>
                    <li>Insufficient validation and sanitization of training data.</li>
                    <li>Complexity of GenAI models making them &apos;black boxes&apos;, hard to inspect for tampering.</li>
                    <li>Lack of robust defenses against adversarial inputs in deployed models.</li>
                  </ul>
                </div>
              )}
              {activeDataPoisoningSubTab === 'ttps' && (
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>Attackers might:
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>Subtly alter medical images in a training set to cause misdiagnosis of a specific condition.</li>
                      <li>Inject biased text data to make a clinical NLP model produce discriminatory outputs.</li>
                      <li>Craft specific patient queries that cause a GenAI diagnostic tool to consistently provide incorrect (evasive) advice.</li>
                      <li>Manipulate inputs to a drug discovery AI to steer it towards ineffective or harmful compounds.</li>
                    </ul>
                  </p>
                </div>
              )}
              {activeDataPoisoningSubTab === 'impact' && (
                <div className="prose prose-lg max-w-none text-gray-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Incorrect medical diagnoses and treatment plans, leading to patient harm.</li>
                    <li>Compromised integrity of medical research and drug discovery processes.</li>
                    <li>Erosion of trust in AI-powered healthcare tools.</li>
                    <li>Legal and regulatory repercussions for the healthcare organization.</li>
                    <li>Generation of harmful or biased medical content.</li>
                  </ul>
                </div>
              )}
              {activeDataPoisoningSubTab === 'scenario' && (
                <div className="p-6 bg-teal-50 border border-teal-200 rounded-lg shadow-inner">
                  <h4 className="text-xl font-semibold text-teal-700 mb-3">Scenario: The Poisoned Diagnostic AI</h4>
                  <p className="text-gray-700">A malicious actor gains access to a dataset used to train a GenAI model for identifying cancerous tumors in medical scans. They subtly alter a small percentage of images, mislabeling benign tumors as malignant and vice-versa. The deployed AI, now poisoned, starts producing a higher rate of false positives and false negatives, leading to unnecessary invasive procedures for some patients and delayed treatment for others, severely impacting patient outcomes and trust in the hospital&apos;s diagnostic capabilities.</p>
                </div>
              )}
              <div className="relative h-[400px] lg:h-auto min-h-[300px] rounded-lg overflow-hidden shadow-lg group mt-8 lg:mt-0">
                <Image 
                  src={`${basePath}/assets/images/pages/genai/content/data_poisoning_visual.png`} // Updated image path
                  alt="Data Poisoning Visualization"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={true} // Added for static export
                />
              </div>
            </section>

            {/* CISSP Alignment Section */}
            <section id="cissp-alignment-genai" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gray-50 rounded-xl shadow-lg border border-gray-200/50">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center"><FaBookOpen className="mr-3 text-gray-600"/>CISSP Domain Alignment for GenAI Risks</h3>
              <p className="text-lg text-gray-700 mb-6">Addressing Generative AI cybersecurity risks aligns with several CISSP domains, emphasizing a holistic security approach:</p>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-indigo-700 mb-2">Security and Risk Management (Domain 1)</h4>
                  <p className="text-gray-600">Involves identifying, assessing, and mitigating risks associated with GenAI, including data privacy, model integrity, and ethical considerations. Requires establishing governance frameworks for AI.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-indigo-700 mb-2">Asset Security (Domain 2)</h4>
                  <p className="text-gray-600">Protecting data used to train GenAI models (e.g., patient records) and the AI models themselves as critical assets. Includes data classification, handling, and lifecycle management.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-indigo-700 mb-2">Software Development Security (Domain 8)</h4>
                  <p className="text-gray-600">Ensuring secure coding practices in developing or integrating GenAI applications. Includes vulnerability management for AI components and secure software development lifecycle (SSDLC) for AI systems.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold text-indigo-700 mb-2">Identity and Access Management (Domain 5)</h4>
                  <p className="text-gray-600">Controlling access to GenAI models, their training data, and management interfaces. Preventing unauthorized modifications or misuse of AI capabilities.</p>
                </div>
              </div>
              <div className="mt-10 relative h-[300px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`${basePath}/assets/images/pages/genai/content/cissp_genai_graphic.png`} // Updated image path
                  alt="CISSP Domains and GenAI Alignment Graphic"
                  fill
                  className="object-contain"
                  unoptimized={true} // Added for static export
                />
              </div>
            </section>

            {/* Mitigation Strategies Section */}
            <section id="mitigation-genai" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg border border-green-200/50">
              <h3 className="text-3xl font-bold text-green-700 mb-8 flex items-center"><FaShieldAlt className="mr-3"/>Mitigation Strategies for GenAI Risks</h3>
              <p className="text-lg text-gray-700 mb-6">Effective mitigation requires a multi-layered approach:</p>
              <div className="grid md:grid-cols-2 gap-6">
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
                  src={`${basePath}/assets/images/pages/genai/content/genai_mitigation_framework.png`} // Updated image path
                  alt="GenAI Mitigation Framework Diagram"
                  fill
                  className="object-cover"
                  unoptimized={true} // Added for static export
                />
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
                <ul className="list-disc pl-5 space-y-2">
                  <li>National Cyber Security Centre (NCSC) - Guidance on AI Security.</li>
                  <li>NHS Transformation Directorate - AI Lab and Ethical Frameworks.</li>
                  <li>Information Commissioner&apos;s Office (ICO) - Guidance on AI and Data Protection.</li>
                  <li>Academic journals and conference proceedings on AI security and healthcare (e.g., IEEE, ACM).</li>
                  <li>OWASP Top 10 for Large Language Model Applications.</li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
