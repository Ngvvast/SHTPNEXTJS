'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../../layouts/MainLayout';
// Ensure 'react-icons' is installed: npm install react-icons
import { FaBrain, FaUserSecret, FaDatabase, FaShieldAlt, FaCheckCircle, FaInfoCircle, FaBookOpen, FaFileAlt, FaExclamationTriangle, FaTools, FaRegCommentDots, FaMicrochip, FaShareAlt, FaBolt, FaTasks, FaLink, FaExclamationCircle, FaChevronRight } from 'react-icons/fa'; // Added FaTasks, FaLink, FaExclamationCircle, FaChevronRight
import InteractiveGenAiRiskAssessment from '../../../components/sections/InteractiveGenAiRiskAssessment'; // Import the new component
import { useState } from 'react'; // Import useState

export default function GenAIPage() {  // Navigation items
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
            src="/assets/images/hero/genai/AI.png" // Updated image path
            alt="Generative AI Hero"
            fill
            className="object-cover opacity-20 mix-blend-overlay" // Adjusted opacity like NIS2
            priority
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
                    <p className="mt-4">The core challenge lies in GenAI's ability to create highly convincing outputs that can be misused for malicious purposes, coupled with risks inherent in the AI models themselves, such as data privacy concerns and susceptibility to adversarial attacks.</p>
                  </div>
                </div>
                <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/assets/images/pages/genai/content/genai_overview.png" // Placeholder - replace with actual image
                    alt="Generative AI in Healthcare Concept"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            <h2 id="risk-analysis-genai" className="text-4xl font-bold text-gray-900 mb-16 text-center border-t pt-16 scroll-mt-28">Generative AI: Cybersecurity Risk Analysis</h2>

            {/* Risk 1: AI-Powered Social Engineering & Deepfake Threats */}
            <section id="risk1-social-engineering" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg border border-purple-200/50">
              <h3 className="text-3xl font-bold text-purple-700 mb-8 flex items-center"><FaUserSecret className="mr-3"/>Risk 1: AI-Powered Social Engineering & Deepfakes</h3>
              
              {/* Sub-tabs for Risk 1 */}
              <div className="mb-6 flex flex-wrap gap-2 border-b border-purple-200 pb-4">
                {socialEngineeringSubTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSocialEngineeringSubTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSocialEngineeringSubTab === tab.id
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-purple-700 hover:bg-purple-100'
                    }`}
                  >
                    {tab.icon && <span className="mr-2">{tab.icon}</span>}
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="order-1 lg:order-2 prose prose-lg max-w-none prose-headings:text-purple-800 prose-strong:text-gray-700">
                  {activeSocialEngineeringSubTab === 'description' && (
                    <>
                      <h4 className="text-xl font-semibold mb-3 flex items-center"><FaFileAlt className="mr-2 text-purple-600"/>A. Risk Description</h4>
                      <p>Generative AI (GenAI) tools, particularly Large Language Models (LLMs) and deepfake generators, dramatically lower the cost and skill required to create highly convincing and personalized social engineering attacks at scale. This includes crafting sophisticated phishing emails, generating tailored pretexting scenarios for vishing (voice phishing), and producing realistic deepfake audio/video content. For the UK healthcare sector, this means staff, patients, and even executives face increasingly deceptive communications designed to manipulate them into divulging sensitive information, authorizing fraudulent transactions, or taking actions that compromise security. Deepfakes can be used to impersonate trusted individuals in calls or video conferences (including telehealth consultations), potentially bypass voice or facial biometric authentication systems, or be used to create and spread highly believable medical misinformation or disinformation campaigns, eroding public trust.</p>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'vulnerabilities' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationTriangle className="mr-2 text-orange-500"/>B. Vulnerabilities Exploited</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Human Susceptibility to Deception:</strong> The inherent difficulty for humans to distinguish high-quality AI-generated fake text, voice, or video from genuine communications, especially when under pressure or when the content is highly contextualized.</li>
                        <li><strong>Limitations of Existing Defenses:</strong> Traditional security awareness training and technical controls (e.g., email filters) may not be sufficiently equipped to detect or flag sophisticated AI-generated malicious content.</li>
                        <li><strong>Biometric Authentication Weaknesses:</strong> Voice and facial biometric authentication systems may be vulnerable to spoofing by advanced deepfakes if they lack robust liveness detection and anti-spoofing capabilities.</li>
                        <li><strong>Implicit Trust in Rich Media:</strong> A general tendency to place higher trust in voice and video communication channels, which can be exploited by deepfake impersonations, especially in internal communications or telehealth scenarios.</li>
                        <li><strong>Lack of Widespread Deepfake Detection:</strong> The absence of easily deployable, real-time, and highly accurate deepfake detection technologies integrated into common communication platforms.</li>
                        <li><strong>Availability of Personal Data for Training:</strong> Abundant publicly available data (social media profiles, recorded interviews, data breach corpuses) that can be scraped and used to train AI models for creating personalized deepfakes or highly targeted phishing messages.</li>
                        <li><strong>Speed and Scale of Attack Generation:</strong> AI tools enable attackers to generate and distribute convincing attack material at a speed and scale previously unattainable.</li>
                      </ul>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'ttps' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaTools className="mr-2 text-gray-600"/>C. Attacker Techniques, Tools & Practices (TTPs)</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>LLM-Powered Phishing/Smishing/Vishing:</strong> Using LLMs (e.g., GPT-based models, open-source variants) to mass-generate highly personalized, contextually relevant, and grammatically flawless spear-phishing emails, SMS messages (smishing), or scripts for vishing calls.</li>
                        <li><strong>Deepfake Voice Cloning:</strong> Employing AI voice synthesis tools (e.g., readily available online voice cloning services or more sophisticated models) to clone the voices of executives, clinicians, or other trusted personnel for fraudulent authorizations (e.g., urgent fund transfers, data access requests, prescription fraud).</li>
                        <li><strong>Deepfake Video Impersonation:</strong> Creating deepfake video avatars for use in virtual meetings, telehealth sessions, or KYC (Know Your Customer) processes to impersonate individuals for fraud, intelligence gathering, or to bypass identity verification.</li>
                        <li><strong>AI-Generated Malicious Content:</strong> Using GenAI to create fake expert endorsements for medical products, fabricated patient testimonials, or public health announcements to spread misinformation, promote fraudulent services, or manipulate public opinion.</li>
                        <li><strong>Automated Social Engineering Chatbots:</strong> Deploying AI-powered chatbots that can engage in extended, convincing, and adaptive conversations to extract information or manipulate targets over time.</li>
                        <li><strong>AI-Enhanced Reconnaissance:</strong> Exploiting AI to rapidly analyze breached data, social media, and other open-source intelligence (OSINT) to identify high-value targets, understand their communication patterns, and craft more effective social engineering lures.</li>
                        <li><strong>Exploitation of AI Model Vulnerabilities:</strong> In some cases, attackers might exploit vulnerabilities in legitimate AI tools or platforms to generate malicious content or gain unauthorized access.</li>
                      </ul>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'impact' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationCircle className="mr-2 text-amber-500"/>D. Impact Assessment</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Financial Losses:</strong> Successful AI-driven social engineering can lead to significant direct financial theft (e.g., fraudulent fund transfers), costs associated with incident response, and reputational damage impacting revenue or funding.</li>
                        <li><strong>Data Breach & Privacy Violations:</strong> Compromised credentials or manipulated individuals can lead to unauthorized access and exfiltration of sensitive patient data (PII/PHI), resulting in severe GDPR/DPA fines and loss of patient trust.</li>
                        <li><strong>Operational Disruption:</strong> Attacks could disrupt critical healthcare operations if staff are locked out of systems or if malicious instructions are followed, impacting patient care delivery.</li>
                        <li><strong>Erosion of Trust:</strong> The proliferation of deepfakes and sophisticated AI-generated misinformation can erode public and professional trust in digital communication channels, healthcare institutions, and even specific individuals if they are convincingly impersonated.</li>
                        <li><strong>Psychological Harm:</strong> Victims of highly personalized social engineering or deepfake attacks can experience significant psychological distress.</li>
                        <li><strong>Misinformation Impact:</strong> AI-generated medical misinformation can lead to poor health decisions by the public, undermining public health initiatives.</li>
                      </ul>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'scenario' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaRegCommentDots className="mr-2 text-teal-500"/>E. Scenario Example</h4>
                      <p>A hospital's Chief Financial Officer (CFO) receives a highly convincing AI-generated voice call, perfectly mimicking the voice of the hospital's CEO (cloned from publicly available recordings of conference speeches). The 'CEO' explains they are in a confidential, time-sensitive negotiation for a major equipment purchase from a new overseas supplier and need an urgent, off-books wire transfer of £250,000 to secure the deal, bypassing standard procurement protocols due to its sensitivity. Simultaneously, the CFO receives an email, crafted by an LLM, appearing to be from the CEO's executive assistant, with seemingly legitimate (but fake) supporting documentation for the transfer. The email uses sophisticated language, internal jargon, and references recent hospital activities, making it highly credible. The combination of the authoritative voice call and the detailed email, both AI-generated, pressures the CFO into authorizing the transfer before the fraud is discovered, leading to significant financial loss and regulatory scrutiny for the NHS Trust.</p>
                    </>
                  )}
                </div>
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/assets/images/pages/genai/content/deepfake_social_engineering.png" // Placeholder - replace
                      alt="AI-powered social engineering concept"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/assets/images/pages/genai/content/llm_phishing_example.png" // Placeholder - replace
                      alt="Example of an LLM-generated phishing email"
                      fill
                      className="object-contain p-4 bg-white"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Risk 2: Data Poisoning & Model Evasion/Theft - REFINED */}
            <section id="risk2-data-poisoning" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg border border-purple-200/50">
              <h3 className="text-3xl font-bold text-purple-700 mb-8 flex items-center"><FaDatabase className="mr-3"/>Risk 2: Data Poisoning, Model Evasion & Theft</h3>
              
              {/* Sub-tabs for Risk 2 */}
              <div className="mb-6 flex flex-wrap gap-2 border-b border-purple-200 pb-4">
                {dataPoisoningSubTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDataPoisoningSubTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeDataPoisoningSubTab === tab.id
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-purple-700 hover:bg-purple-100'
                    }`}
                  >
                    {tab.icon && <span className="mr-2">{tab.icon}</span>}
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                 <div className="prose prose-lg max-w-none prose-headings:text-purple-800 prose-strong:text-gray-700">
                  {activeDataPoisoningSubTab === 'description' && (
                    <>
                      <h4 className="text-xl font-semibold mb-3 flex items-center"><FaFileAlt className="mr-2 text-purple-600"/>A. Risk Description</h4>
                      <p>Generative AI models used in UK healthcare for critical tasks like <code className="font-mono text-sm bg-indigo-100 px-1 rounded">diagnostic support</code>, <code className="font-mono text-sm bg-indigo-100 px-1 rounded">treatment planning personalization</code>, <code className="font-mono text-sm bg-indigo-100 px-1 rounded">drug discovery pipelines</code>, and <code className="font-mono text-sm bg-indigo-100 px-1 rounded">resource allocation optimization</code> are fundamentally reliant on the integrity of their training data and the security of the models themselves. <code className="font-mono text-sm bg-indigo-100 px-1 rounded">Data poisoning</code> attacks involve the malicious corruption of this training data to manipulate model behaviour—potentially introducing dangerous biases against patient demographics, creating hidden <code className="font-mono text-sm bg-indigo-100 px-1 rounded">backdoors</code> that trigger misdiagnosis on specific inputs, or degrading overall model accuracy and reliability. <code className="font-mono text-sm bg-indigo-100 px-1 rounded">Model evasion</code> techniques involve crafting inputs that cause misclassifications at inference time (e.g., an adversarial attack on a medical image scanner). Furthermore, <code className="font-mono text-sm bg-indigo-100 px-1 rounded">model theft</code> of valuable, proprietary healthcare AI models represents a significant intellectual property and competitive loss. Successful attacks can lead to severe patient harm, misallocation of NHS resources, and erosion of public and clinical trust in AI-driven healthcare innovations.</p>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'vulnerabilities' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationTriangle className="mr-2 text-orange-500"/>B. Vulnerabilities Exploited</h4>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Reliance on vast training datasets, potentially from diverse, unverified, or public sources (e.g., <code className="font-mono text-sm bg-indigo-100 px-1 rounded">web-scraped medical images</code> or <code className="font-mono text-sm bg-indigo-100 px-1 rounded">open-source clinical notes repositories</code>).</li>
                        <li>The inherent <code className="font-mono text-sm bg-indigo-100 px-1 rounded">complexity and 'black box' nature</code> of many deep learning models, hindering the detection of subtle data manipulations or embedded backdoors.</li>
                        <li><code className="font-mono text-sm bg-indigo-100 px-1 rounded">Inadequate data validation, sanitation, and provenance tracking</code> throughout the Machine Learning Operations (MLOps) pipeline.</li>
                        <li>Vulnerabilities in <code className="font-mono text-sm bg-indigo-100 px-1 rounded">distributed or federated learning environments</code> where data or model updates originate from multiple, potentially untrusted, parties (e.g., different NHS trusts collaborating on model training).</li>
                        <li>Difficulty in detecting sophisticated <code className="font-mono text-sm bg-indigo-100 px-1 rounded">'clean-label' poisoning attacks</code> where data labels remain correct but inputs are imperceptibly altered to cause misbehaviour on specific triggers.</li>
                        <li>Overly permissive <code className="font-mono text-sm bg-indigo-100 px-1 rounded">APIs exposing AI models</code>, which can be systematically queried to enable model inversion, extraction, or membership inference attacks.</li>
                        <li>Potential for <code className="font-mono text-sm bg-indigo-100 px-1 rounded">insider threats</code> (malicious or negligent) from personnel with access to sensitive training data or model repositories.</li>
                        <li><code className="font-mono text-sm bg-indigo-100 px-1 rounded">Supply chain vulnerabilities</code> introduced by using pre-trained models or third-party AI components that may contain hidden flaws or backdoors.</li>
                      </ul>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'ttps' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaTools className="mr-2 text-gray-600"/>C. Attacker Techniques, Tools & Practices (TTPs)</h4>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Data Injection/Poisoning:</strong> Introducing incorrectly labelled data (<code className="font-mono text-sm bg-indigo-100 px-1 rounded">label flipping</code>), subtly altered data (<code className="font-mono text-sm bg-indigo-100 px-1 rounded">data modification</code>), or data with hidden triggers (<code className="font-mono text-sm bg-indigo-100 px-1 rounded">backdoor poisoning</code>) into training sets to skew model outputs or create specific vulnerabilities exploitable later.</li>
                        <li><strong>Semantic Poisoning:</strong> Manipulating semantic relationships in unstructured text data (e.g., medical literature, electronic health records) to alter the outputs of LLMs used for clinical decision support, research summarization, or patient communication bots.</li>
                        <li><strong>Adversarial Examples:</strong> Crafting inputs (e.g., slightly modified medical images invisible to the human eye, perturbed physiological sensor data) specifically designed to be misclassified by diagnostic AI tools, leading to incorrect diagnoses or treatment recommendations (<code className="font-mono text-sm bg-indigo-100 px-1 rounded">model evasion</code>).</li>
                        <li><strong>Model Extraction/Inversion:</strong> Systematically querying model APIs to reconstruct the proprietary model architecture or parameters (<code className="font-mono text-sm bg-indigo-100 px-1 rounded">model stealing</code>), or to infer sensitive information from the training data (e.g., specific patient conditions or demographics).</li>
                        <li><strong>Membership Inference Attacks:</strong> Techniques used to determine if a particular individual's data (e.g., a patient's specific medical record) was part of an AI model's training set, thereby breaching privacy.</li>
                        <li><strong>Exploiting AI Platform Vulnerabilities:</strong> Targeting known or zero-day vulnerabilities in AI development platforms, popular libraries (e.g., TensorFlow, PyTorch, Scikit-learn), or MLOps infrastructure to steal models, exfiltrate data, or inject malicious code into the AI pipeline.</li>
                        <li><strong>Byzantine Attacks in Federated Learning:</strong> Malicious participants in a federated learning setup (e.g., a compromised hospital node) sending deliberately corrupted model updates to degrade the performance of the global model or introduce targeted biases.</li>
                      </ul>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'impact' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationCircle className="mr-2 text-amber-500"/>D. Impact Assessment</h4>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Patient Safety & Misdiagnosis:</strong> Poisoned AI models used for diagnostics could lead to incorrect diagnoses (false positives or false negatives), delayed treatment, or inappropriate treatment plans, directly harming patients.</li>
                        <li><strong>Compromised Research & Drug Discovery:</strong> Manipulation of data used in AI-driven research can invalidate findings, waste resources, and set back medical advancements.</li>
                        <li><strong>Resource Misallocation:</strong> AI models used for resource planning (e.g., bed allocation, staff scheduling) that are compromised could lead to inefficient or unfair distribution of critical NHS resources.</li>
                        <li><strong>Intellectual Property Loss:</strong> Theft of proprietary AI models developed by healthcare organizations or their partners represents a significant loss of competitive advantage and investment.</li>
                        <li><strong>Regulatory & Compliance Failures:</strong> If AI systems produce biased or harmful outcomes due to data poisoning, organizations could face severe regulatory penalties and legal liabilities.</li>
                        <li><strong>Loss of Clinical & Public Trust:</strong> Incidents involving compromised AI systems can severely damage the trust of clinicians and the public in the use of AI in healthcare, hindering adoption of beneficial technologies.</li>
                        <li><strong>Financial Costs:</strong> Costs associated with retraining models, investigating incidents, potential lawsuits, and reputational damage can be substantial.</li>
                      </ul>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'scenario' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaRegCommentDots className="mr-2 text-teal-500"/>E. Scenario Example</h4>
                      <p>A state-sponsored group aims to undermine public trust in a national AI-driven cancer screening program recently adopted by the NHS. They execute a <code className="font-mono text-sm bg-indigo-100 px-1 rounded">clean-label data poisoning attack</code> by contributing subtly altered medical images to several open-source datasets known to be used for pre-training such diagnostic models. These images contain almost imperceptible digital watermarks that, while not affecting the image's diagnostic utility for human radiologists, are engineered to cause the AI model to misclassify a specific, aggressive, yet treatable-if-caught-early, subtype of cancer as benign in a small percentage of cases. A UK healthcare provider, using a commercial AI diagnostic tool built upon one of these compromised foundational models, starts seeing a statistically insignificant but tragic pattern of delayed diagnoses for this cancer subtype. The attack is designed to be slow-burning and hard to attribute, causing gradual erosion of confidence in AI healthcare tools and potentially leading to severe patient outcomes and increased long-term treatment costs for the NHS. Discovering the specific poisoned data points within terabytes of training material proves exceptionally challenging.</p>
                    </>
                  )}
                </div>
                <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">                  
                  <Image
                    src="/assets/images/pages/genai/content/data-privacy.png" // Updated to PNG format
                    alt="Data Poisoning Risk in AI Healthcare"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* NEW CISSP Domain Alignment Section for GenAI Risks */}
            <section id="cissp-alignment-genai" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gray-50 rounded-xl shadow-lg border border-gray-200/80">
              <h2 className="text-3xl font-bold text-gray-800 mb-10 flex items-center justify-center"><FaBookOpen className="mr-3 text-purple-600"/>CISSP Domain Alignment for Generative AI Risks</h2>

              {/* CISSP for Risk 1: AI-Powered Social Engineering & Deepfakes */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-purple-700 mb-6 flex items-center"><FaUserSecret className="mr-3"/>Alignment for Risk 1: AI-Powered Social Engineering & Deepfakes</h3>
                <div className="prose prose-lg max-w-none prose-strong:text-gray-700">
                  <p>Addressing AI-powered social engineering and deepfake threats, which exploit vulnerabilities like <code className="font-mono text-sm">Human difficulty distinguishing high-quality AI-generated fakes</code> and <code className="font-mono text-sm">Weaknesses in voice/facial biometric authentication</code>, involves these CISSP domains:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-4">
                    <li><strong>Security and Risk Management:</strong> Critical for updating risk assessments to include AI-specific threats and enhancing security awareness programs to educate users about deepfakes and sophisticated phishing, addressing <code className="font-mono text-sm">Limitations of existing security awareness training</code>.</li>
                    <li><strong>Identity and Access Management (IAM):</strong> Implementing robust multi-factor authentication (MFA) with liveness detection and continuous authentication mechanisms to counter deepfake-based impersonation attempts that exploit <code className="font-mono text-sm">Weaknesses in voice/facial biometric authentication</code>.</li>
                    <li><strong>Security Architecture and Engineering:</strong> Designing systems that are resilient to AI-generated attacks, potentially incorporating AI-based detection tools for malicious content, and ensuring secure communication channels to mitigate <code className="font-mono text-sm">Implicit trust in voice/video communication channels</code>.</li>
                    <li><strong>Communication and Network Security:</strong> Securing email, voice, and video channels against AI-generated malicious inputs. This includes advanced filtering and analysis for AI-crafted phishing emails.</li>
                    <li><strong>Security Operations:</strong> Developing capabilities to detect, respond to, and recover from AI-driven social engineering attacks. This includes monitoring for unusual account activities that might indicate a successful impersonation.</li>
                    <li><strong>Software Development Security:</strong> If developing or integrating AI tools, ensuring they are not susceptible to misuse for generating harmful content or that they have safeguards. This also relates to securing data used to personalize attacks, mitigating risks from <code className="font-mono text-sm">Availability of personal data online</code>.</li>
                  </ul>
                  <div className="relative h-48 md:h-64 mt-6 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/assets/images/hero/background_placeholder.png"
                      alt="Visual representation of CISSP domains for AI social engineering risk"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* CISSP for Risk 2: Data Poisoning & Model Evasion/Theft */}
              <div>
                <h3 className="text-2xl font-semibold text-purple-700 mb-6 flex items-center"><FaDatabase className="mr-3"/>Alignment for Risk 2: Data Poisoning & Model Evasion/Theft</h3>
                <div className="prose prose-lg max-w-none prose-strong:text-gray-700">                  
                  <p>Mitigating risks of data poisoning, model evasion, and model theft, which exploit vulnerabilities such as <code className="font-mono text-sm">Reliance on vast training datasets from unverified sources</code>, the <code className="font-mono text-sm">'black box' nature of many AI models</code>, and <code className="font-mono text-sm">Inadequate data validation</code>, requires focus on these CISSP domains:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-4">
                    <li><strong>Asset Security:</strong> Protecting the integrity and confidentiality of training data and AI models as critical assets. This includes robust data governance and classification to address <code className="font-mono text-sm">Inadequate data validation, sanitation, and provenance tracking</code>.</li>
                    <li><strong>Security Assessment and Testing:</strong> Regularly testing AI models for vulnerabilities like data poisoning susceptibility, adversarial robustness, and privacy leakage. This is crucial due to the <code className="font-mono text-sm">'black box' nature of many AI models</code>.</li>
                    <li><strong>Security Operations:</strong> Monitoring AI systems for anomalous behavior that could indicate a data poisoning attack or model compromise. This includes monitoring data pipelines for <code className="font-mono text-sm">Vulnerabilities in distributed/federated learning environments</code>.</li>
                    <li><strong>Identity and Access Management (IAM):</strong> Ensuring strict access controls to training data, model development environments, and deployed AI models to prevent unauthorized modification or theft.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* General Mitigation Strategies Section */}
            <section id="mitigation-genai" className="mb-20 scroll-mt-20 border-t pt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center"><FaShieldAlt className="mr-3 text-green-600"/>General GenAI Mitigation Strategies</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div className="prose prose-lg max-w-none prose-ul:list-none prose-ul:pl-0 prose-li:mb-3 prose-li:flex prose-li:items-start">
                    <p>Mitigating GenAI risks requires a multi-faceted approach:</p>
                    <ul className="mt-6 space-y-3">
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Robust Identity Verification:</strong> Implement multi-layered authentication, including liveness detection for biometrics, to counter deepfakes.</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Enhanced Security Awareness Training:</strong> Educate staff specifically on AI-powered phishing tactics and deepfake identification.</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Secure AI Development Lifecycle (SAIDL):</strong> Integrate security throughout AI model development, including data validation, provenance tracking, and adversarial testing.</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Data Governance and Privacy Controls:</strong> Implement strict controls on training data, use anonymization/pseudonymization, and ensure compliance (e.g., GDPR).</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Model Monitoring and Validation:</strong> Continuously monitor AI model inputs/outputs for anomalies, drift, or signs of poisoning/adversarial attacks. Regularly validate model performance.</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Input/Output Sanitization:</strong> Filter and sanitize data fed into AI models and scrutinize generated outputs, especially in critical applications.</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Responsible AI Policies:</strong> Develop clear guidelines for the ethical and secure use of GenAI, including mandatory human oversight for critical decisions.</li>
                      <li><FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0"/><strong>Third-Party AI Risk Management:</strong> Conduct thorough due diligence on vendors providing AI models or platforms.</li>
                    </ul>
                  </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">                  
                  <Image
                    src="/assets/images/pages/genai/content/mitigation.png"
                    alt="GenAI Mitigation Strategies"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* NEW: Interactive GenAI Risk Self-Assessment Tool Section */}
            <section id="interactive-assessment-genai" className="mb-20 scroll-mt-28 border-t pt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center">
                <FaTasks className="mr-3 text-purple-600"/>
                Interactive GenAI Risk Self-Assessment
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-8 text-center">
                  This tool helps you quickly assess your organization's preparedness against key Generative AI risks. Select a risk area and answer the questions to receive tailored feedback and links to relevant guidance on this page.
                </p>
                <InteractiveGenAiRiskAssessment />
              </div>
            </section>
            
            {/* Future Outlook Section */}
            <section id="future-outlook" className="mb-20 scroll-mt-28 border-t pt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center"><FaBolt className="mr-3 text-yellow-500"/>Future Outlook & Proactive Defence</h2>
              <div className="prose prose-lg max-w-none mx-auto bg-yellow-50 p-8 rounded-lg shadow">
                <p>The landscape of Generative AI is rapidly evolving, and so are the associated cybersecurity threats. UK healthcare organizations must adopt a proactive and adaptive defence posture. Future considerations include:</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li><strong>AI-Driven Defence:</strong> Leveraging AI itself to detect AI-generated attacks, identify anomalies in data or model behaviour, and automate incident response.</li>
                  <li><strong>Standardization and Certification:</strong> Development of industry standards and certification programs for secure AI development and deployment in healthcare.</li>
                  <li><strong>Advanced Anonymization & Privacy-Preserving AI:</strong> Techniques like federated learning with differential privacy, homomorphic encryption, and secure multi-party computation will be crucial for training AI models on sensitive healthcare data without compromising patient privacy.</li>
                  <li><strong>Regulatory Evolution:</strong> Staying abreast of evolving regulations (e.g., EU AI Act, UK AI regulations) and ensuring compliance.</li>
                  <li><strong>Continuous Research & Collaboration:</strong> Engaging with the cybersecurity research community and participating in information sharing initiatives to stay ahead of emerging threats and best practices.</li>
                </ul>
                <p className="mt-6 italic">Proactive adaptation, continuous learning, and investment in both technology and human expertise will be key to harnessing the benefits of GenAI while mitigating its risks in the healthcare sector.</p>
              </div>
            </section>

            {/* References Section */}
            <section id="references" className="mb-20 scroll-mt-28 border-t pt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center">
                <FaBookOpen className="mr-3 text-purple-600"/>References & Resources
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <FaLink className="mr-3 text-purple-600"/>Academic & Industry Sources
                    </h3>
                    <div className="prose prose-lg max-w-none">
                      <ol className="space-y-4 list-decimal pl-5">
                        <li>
                          <p>Weidinger, L., Mellor, J. and Rauh, M., 2023. Taxonomy of Risks posed by Language Models. <em>ACM Conference on Fairness, Accountability, and Transparency</em>, pp.1298-1321.</p>
                        </li>
                        <li>
                          <p>Brown, T.B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., et al., 2020. Language Models are Few-Shot Learners. <em>Advances in Neural Information Processing Systems</em>, 33, pp.1877-1901.</p>
                        </li>
                        <li>
                          <p>Bommasani, R., Hudson, D.A., Adeli, E., Altman, R., Arora, S., von Arx, S., Bernstein, M.S., Bohg, J., Bosselut, A., Brunskill, E., Bosselut, A., et al., 2021. On the opportunities and risks of foundation models. <em>arXiv preprint arXiv:2108.07258</em>.</p>
                        </li>
                        <li>
                          <p>Goldstein, A., Shaham, U., Ullman, J. and Zhu, X., 2023. Data poisoning attacks on machine learning models: A survey. <em>ACM Computing Surveys</em>, 55(12), pp.1-38.</p>
                        </li>
                        <li>
                          <p>Carlini, N., Tramer, F., Wallace, E., Jagielski, M., Herbert-Voss, A., Lee, K., Roberts, A., Brown, T., Song, D., Erlingsson, U. and Oprea, A., 2021. Extracting training data from large language models. <em>USENIX Security Symposium</em>, pp.2633-2650.</p>
                        </li>
                        <li>
                          <p>Ferrara, E., Varol, O., Davis, C., Menczer, F. and Flammini, A., 2016. The rise of social bots. <em>Communications of the ACM</em>, 59(7), pp.96-104.</p>
                        </li>
                        <li>
                          <p>Mirsky, Y., Lee, W. and Chattopadhyay, A., 2023. The creation and detection of deepfakes: A survey. <em>ACM Computing Surveys</em>, 55(3), pp.1-34.</p>
                        </li>
                        <li>
                          <p>Floridi, L. and Chiriatti, M., 2020. GPT-3: Its nature, scope, limits, and consequences. <em>Minds and Machines</em>, 30(4), pp.681-694.</p>
                        </li>
                        <li>
                          <p>Guo, C., Gardner, J.R., You, Y., Wilson, A.G. and Weinberger, K.Q., 2022. Simple and principled uncertainty estimation with deterministic deep learning via distance awareness. <em>Advances in Neural Information Processing Systems</em>, 35, pp.1-16.</p>
                        </li>
                        <li>
                          <p><strong>National Cyber Security Centre.</strong> (2023). "AI Security in Healthcare: Guidelines for the NHS." <a href="https://www.ncsc.gov.uk/collection/ai-security" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">NCSC AI Security Guidelines</a></p>
                        </li>
                        <li>
                          <p><strong>European Union Agency for Cybersecurity (ENISA).</strong> (2024). "Securing Machine Learning Algorithms." <a href="https://www.enisa.europa.eu/topics/threat-risk-management/threats-and-trends/securing-machine-learning-algorithms" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">ENISA ML Security</a></p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-gradient-to-r from-purple-700 to-indigo-800 py-24">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Leverage AI Responsibly</h3>
                  <p className="text-xl text-white/90 mb-8">Need guidance on implementing Generative AI securely in your healthcare setting?</p>
                  <div className="flex flex-wrap justify-center gap-5">
                    <Link
                      href="/demo"
                      className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700"
                    >
                      Request a Demo
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700"
                    >
                      Contact Us Today
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
