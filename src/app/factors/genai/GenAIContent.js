'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../../layouts/MainLayout';
// Ensure 'react-icons' is installed: npm install react-icons
import { FaBrain, FaUserSecret, FaDatabase, FaShieldAlt, FaCheckCircle, FaInfoCircle, FaFileAlt, FaExclamationTriangle, FaTools, FaRegCommentDots, FaMicrochip, FaShareAlt, FaBolt, FaTasks, FaLink, FaExclamationCircle, FaChevronRight, FaBook, FaPuzzlePiece, FaChevronDown, FaChevronUp, FaBalanceScale, FaLightbulb, FaUsers, FaUserShield, FaUsersCog } from 'react-icons/fa'; // Added FaBalanceScale, FaLightbulb
import InteractiveGenAiRiskAssessment from '../../../components/sections/InteractiveGenAiRiskAssessment'; // Import the new component
import { useState } from 'react'; // Import useState

const references = [
  { id: 1, text: "AbbVie. (2023). *AbbVie and Insilico Medicine Announce Collaboration to Leverage Artificial Intelligence for Drug Discovery*. AbbVie News Center." },
  { id: 2, text: "Birhane, A., Kasirzadeh, A., Leslie, D., & Wachter, S. (2021). *Science in the age of large language models*. Nature Reviews Physics, 3(9), 596-598." },
  { id: 3, text: "Davenport, T. H., & Kalakota, R. (2019). The potential for artificial intelligence in healthcare. *Future healthcare journal*, 6(2), 94." },
  { id: 4, text: "FDA. (2023). *Artificial Intelligence and Machine Learning (AI/ML) Software as a Medical Device Action Plan*. U.S. Food and Drug Administration." },
  { id: 5, text: "Fredrikson, M., Jha, S., & Ristenpart, T. (2015). Model Inversion Attacks that Exploit Confidence Information and Basic Countermeasures. In *Proceedings of the 22nd ACM SIGSAC Conference on Computer and Communications Security* (pp. 1322-1333). ACM." },
  { id: 6, text: "Goodfellow, I. J., Shlens, J., & Szegedy, C. (2014). Explaining and harnessing adversarial examples. *arXiv preprint arXiv:1412.6572*." },
  { id: 7, text: "Google Health. (2023). *AI in Health*. Google Health." },
  { id: 8, text: "Gretel.ai. (2023). *Synthetic Data for Healthcare*. Gretel.ai." },
  { id: 9, text: "HHS. (n.d.). *Health Information Privacy*. U.S. Department of Health & Human Services." },
  { id: 10, text: "HIPAA Journal. (2023). *Healthcare Data Breach Statistics*. HIPAA Journal." },
  { id: 11, text: "Insilico Medicine. (2023). *Insilico Medicine AI-discovered and AI-designed drug for IPF receives FDA Orphan Drug Designation*. Insilico Medicine News." },
  { id: 12, text: "Microsoft Nuance. (2023). *Ambient clinical intelligence*. Microsoft Nuance." },
  { id: 13, text: "NIST. (2023). *AI Risk Management Framework*. National Institute of Standards and Technology." },
  { id: 14, text: "NVIDIA. (2023). *AI in Medical Imaging*. NVIDIA Healthcare." },
  { id: 15, text: "Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). Dissecting racial bias in an algorithm used to manage the health of populations. *Science*, 366(6464), 447-453." },
  { id: 17, text: "Perez, F., & Ribeiro, I. (2022). *Ignore Previous Prompt: Attack Techniques For Language Models*. GitHub." },
  { id: 18, text: "Price, W. N. (2022). AI, Health, and the Law. In *The Oxford Handbook of AI and Law*. Oxford University Press." },
  { id: 19, text: "Radcliffe, D. (2023). *How AI is Revolutionizing Medical Imaging*. HealthTech Magazine." },
  { id: 20, text: "Stanford Medicine. (2023). *AI in Medicine: Powering a Healthier Future*. Stanford Medicine." },
  { id: 21, text: "Wachter, S., Mittelstadt, B., & Floridi, L. (2017). Why a right to explanation of automated decision-making does not exist in the general data protection regulation. *International Data Privacy Law*, 7(2), 76-99." },
  { id: 22, text: "WHO. (2021). *Ethics and governance of artificial intelligence for health*. World Health Organization." }
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

  const overviewContent = {
    title: 'Overview of Generative AI in Healthcare',
    text: `Generative Artificial Intelligence (AI) is rapidly transforming healthcare, marking a paradigm shift with its sophisticated models like Large Language Models (LLMs) and Generative Adversarial Networks (GANs). It offers unprecedented opportunities for innovation in diagnostics, treatment personalization, drug discovery, and operational efficiency (OpenAI, 2023; Google Health, 2023). Potential applications are profound, ranging from accelerating medical research and creating synthetic patient data for training—without exposing real patient information—to drafting clinical notes, summarizing patient histories, and even assisting in surgical planning by generating 3D models of organs (Davenport & Kalakota, 2019).

However, this transformative potential is intrinsically linked to a complex web of cybersecurity vulnerabilities and ethical dilemmas. The sensitive nature of health data, coupled with novel attack surfaces introduced by AI systems, creates a high-stakes environment where the healthcare sector faces an amplified threat landscape (HIPAA Journal, 2023). This necessitates a robust governance framework to harness GenAI's benefits while safeguarding patient data and maintaining trust.`,
  };

  const applicationsContent = {
    title: 'Key Application Areas of Generative AI in Healthcare',
    features: [
      {
        title: "Drug Discovery and Development",
        description: "Generative models can design novel molecular structures with desired therapeutic properties, significantly accelerating early stages of drug discovery and optimizing clinical trial designs (AbbVie, 2023; Insilico Medicine, 2023).",
      },
      {
        title: "Medical Imaging and Diagnostics",
        description: "AI algorithms enhance medical image quality (e.g., MRI, CT scans), generate synthetic images for training, and assist in early disease detection by identifying subtle patterns (Radcliffe, 2023; NVIDIA, 2023).",
      },
      {
        title: "Personalized Medicine and Treatment Planning",
        description: "GenAI analyzes individual patient data (genomics, lifestyle, medical history) to predict treatment responses, tailor therapies, and generate patient-specific simulations for surgical planning (Stanford Medicine, 2023).",
      },
      {
        title: "Clinical Documentation and Workflow Optimization",
        description: "LLMs automate drafting of clinical notes, patient summaries, and referral letters, reducing administrative burden and powering intelligent virtual assistants for patients (Microsoft Nuance, 2023).",
      },
      {
        title: "Synthetic Data Generation for Research and Training",
        description: "A key contribution is creating realistic synthetic patient datasets for training AI models, research, and medical education without compromising real patient privacy (Gretel.ai, 2023).",
      }
    ]
  };

  const risksAndChallengesContent = {
    title: "Cybersecurity Vulnerabilities and Ethical Imperatives of Generative AI in Healthcare",
    introduction: "The integration of Generative AI (GenAI) into healthcare, while promising, introduces a spectrum of cybersecurity vulnerabilities and profound ethical questions that demand rigorous attention. These challenges can compromise patient data, undermine model integrity, erode trust, and impact equitable access to AI-enhanced healthcare. Proactively addressing these is crucial for responsible innovation and safeguarding patient well-being (NIST, 2023; WHO, 2021).",
    categories: [
      {
        title: "Data Poisoning and Model Integrity",
        description: "Malicious actors can corrupt GenAI models by injecting biased or harmful data during their training phase. This can lead to skewed outputs, flawed diagnostic tools, or compromised treatment recommendations, directly impacting patient safety and care quality (Birhane et al., 2021)."
      },
      {
        title: "Adversarial Attacks on Inputs/Outputs",
        description: "Subtle, often undetectable, changes to input data (like medical images or patient queries) can trick GenAI models into producing erroneous diagnoses or harmful advice. These attacks exploit model sensitivities and can have severe clinical implications (Goodfellow, Shlens & Szegedy, 2014)."
      },
      {
        title: "Model Inversion and Extraction",
        description: "These attacks attempt to reconstruct sensitive training data (violating patient privacy) or steal the underlying AI model itself by repeatedly querying it. This compromises confidentiality and intellectual property (Fredrikson, Jha, & Ristenpart, 2015)."
      },
      {
        title: "Prompt Injection and Manipulation",
        description: "Attackers can craft malicious inputs (prompts) that override a GenAI model's intended instructions. This can lead to the generation of inappropriate content, disclosure of sensitive data, or execution of harmful commands, particularly in LLM-based applications (Perez & Ribeiro, 2022)."
      },
      {
        title: "Data Privacy and Confidentiality",
        description: "GenAI systems process vast amounts of sensitive health data, making them prime targets for breaches. Risks include unauthorized access to PHI and potential re-identification from inadequately anonymized synthetic data, violating regulations like HIPAA and GDPR (HHS, n.d.)."
      },
      {
        title: "Regulatory and Compliance Labyrinth",
        description: "The evolving nature of GenAI technology often outpaces existing legal and regulatory frameworks. Healthcare providers face challenges in ensuring compliance with data protection laws (e.g., HIPAA, GDPR), medical device regulations, and emerging AI-specific legislation (FDA, 2023)."
      },
      {
        title: "Algorithmic Bias and Health Equity",
        description: "GenAI models can perpetuate and even amplify biases present in historical data, leading to health disparities. This can result in unfair or inaccurate diagnoses and treatment plans for underrepresented demographic groups, undermining health equity (Obermeyer et al., 2019)."
      },
      {
        title: "Accountability and Lack of Transparency",
        description: "The complex, often opaque, decision-making processes of 'black box' GenAI models make it difficult to assign accountability for errors. This lack of transparency (explainability) can erode trust among clinicians and patients and complicate error remediation (Wachter, Mittelstadt, & Floridi, 2017)."
      },
      {
        title: "Patient Autonomy and Informed Consent",
        description: "Using GenAI in clinical settings must uphold patient autonomy. This requires clear communication about AI's role in diagnosis or treatment, ensuring informed consent. Opaque AI recommendations or over-reliance can undermine the crucial patient-clinician trust relationship (Price, 2022)."
      }
    ]
  };

  const mitigationStrategiesContent = {
    title: "Mitigation Strategies and Best Practices for Secure GenAI in Healthcare",
    introduction: "To harness the benefits of Generative AI while mitigating its risks, healthcare organizations must adopt a multi-layered defense strategy. This involves a combination of robust technical safeguards, comprehensive governance frameworks, continuous vigilance, and a commitment to ethical AI principles. Key strategies include:",
    strategies: [
      {
        title: "Robust Data Governance and Privacy Preservation",
        points: [
          "Implement stringent data handling protocols, including encryption, anonymization, and de-identification techniques to protect PHI (HIPAA Journal, 2023).",
          "Utilize privacy-enhancing technologies (PETs) like federated learning or differential privacy when training and deploying GenAI models.",
          "Conduct regular data privacy impact assessments (DPIAs) for all GenAI applications."
        ],
      },
      {
        title: "Secure AI Development and Deployment Lifecycle (DevSecOps for AI)",
        points: [
          "Integrate security into every phase of the AI model lifecycle, from data acquisition and model training to deployment and monitoring.",
          "Employ rigorous testing for vulnerabilities, including adversarial attack simulations and bias detection, before and after deployment.",
          "Maintain comprehensive audit trails for AI model behavior, data access, and decision-making processes."
        ],
      },
      {
        title: "Advanced Threat Detection and Response",
        points: [
          "Deploy AI-specific intrusion detection and prevention systems capable of identifying novel attack vectors like data poisoning or model inversion.",
          "Establish clear incident response plans tailored to AI-related security breaches, including prompt injection and adversarial attacks.",
          "Monitor GenAI outputs for anomalous behavior, unexpected biases, or indications of manipulation."
        ],
      },
      {
        title: "Ethical AI Frameworks and Transparency",
        points: [
          "Develop and enforce clear ethical guidelines for GenAI use, emphasizing fairness, accountability, and transparency (FAT).",
          "Strive for model explainability (XAI) to understand and validate AI-driven decisions, particularly in clinical settings.",
          "Ensure human oversight in critical decision-making processes, preventing full automation of sensitive tasks."
        ],
      },
      {
        title: "Regulatory Compliance and Adaptability",
        points: [
          "Stay abreast of evolving AI regulations and healthcare data protection laws (e.g., FDA guidelines, EU AI Act, HIPAA).",
          "Design GenAI systems with adaptability in mind to accommodate future regulatory changes.",
          "Engage with regulatory bodies and industry consortiums to contribute to the development of AI governance standards."
        ],
      },
      {
        title: "Third-Party Risk Management (TPRM) for AI Vendors",
        points: [
          "Conduct thorough security assessments of third-party GenAI vendors and solutions.",
          "Establish clear contractual obligations for data security, model integrity, and incident reporting with AI service providers.",
          "Understand the data lineage and training methodologies of externally sourced models or APIs."
        ],
      },
      {
        title: "Workforce Training and Awareness",
        points: [
          "Educate healthcare professionals and staff on the capabilities, limitations, and potential risks of GenAI tools.",
          "Provide training on secure interaction with GenAI systems, including recognizing and reporting suspicious activities or outputs.",
          "Foster a culture of cybersecurity awareness that encompasses AI-specific threats."
        ],
      }
    ]
  };

  const futureOutlookContent = {
    title: "Future Outlook and Proactive Governance for GenAI in Healthcare",
    introduction: "The trajectory of Generative AI in healthcare is one of continuous evolution, promising even more sophisticated applications in personalized medicine, drug discovery, and operational automation. However, to navigate this future responsibly, a proactive and adaptive governance approach is paramount. This involves anticipating emerging threats, fostering ethical innovation, and ensuring that GenAI serves to enhance patient outcomes and health equity.",
    points: [
      {
        title: "Anticipatory Threat Modeling",
        description: "Organizations must move beyond reacting to known vulnerabilities and proactively model future threats. This includes considering how advancements in AI could be exploited by malicious actors and developing preemptive defenses (NIST, 2023)."
      },
      {
        title: "Ethical Innovation and Value Alignment",
        description: "Fostering an environment where innovation is guided by strong ethical principles is crucial. GenAI development should be aligned with core healthcare values, including patient safety, privacy, and equitable access (WHO, 2021)."
      },
      {
        title: "Dynamic Regulatory Frameworks",
        description: "Regulators and healthcare bodies need to collaborate on developing agile and adaptive regulatory frameworks that can keep pace with rapid technological advancements while ensuring safety and efficacy (FDA, 2023)."
      },
      {
        title: "Collaborative Ecosystems",
        description: "Building collaborative ecosystems involving researchers, clinicians, industry, policymakers, and patient advocacy groups is essential for sharing best practices, threat intelligence, and developing consensus on responsible AI deployment."
      },
      {
        title: "Continuous Learning and Adaptation",
        description: "Healthcare organizations must commit to continuous learning, monitoring the performance and impact of GenAI systems, and adapting their strategies and governance models based on real-world evidence and evolving societal expectations."
      },
      {
        title: "Focus on Human-AI Collaboration",
        description: "The future likely involves a synergistic relationship between human expertise and AI capabilities. Governance should promote models where GenAI augments and supports healthcare professionals, rather than replacing human judgment in critical areas."
      }
    ],
    conclusion: "Proactive governance, ethical vigilance, and a multi-stakeholder approach will be key to unlocking the immense potential of Generative AI in healthcare while safeguarding against its inherent risks, ensuring a future where technology serves humanity's best interests."
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
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 ease-in-out flex items-center whitespace-nowrap"
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Overview Section */}
            <section id="overview" className="mb-20 scroll-mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{overviewContent.title}</h2>
                  <p className="text-lg text-gray-700 mb-6 whitespace-pre-line">{overviewContent.text}</p>
                </div>
                <div className="flex justify-center items-center order-first lg:order-last">
                  <Image
                    src={`${basePath}/assets/images/pages/genai/content/genai_overview.png`} 
                    alt="Generative AI in Healthcare Conceptual Overview"
                    width={500} 
                    height={400} 
                    className="rounded-lg shadow-xl object-contain"
                    unoptimized={true}
                  />
                </div>
              </div>
            </section>

            <h2 id="risk-analysis-genai" className="text-4xl font-bold text-gray-900 mb-16 text-center border-t pt-16 scroll-mt-28">Generative AI: Cybersecurity Risk Analysis</h2>

            {/* Risk 1: AI-Powered Social Engineering & Deepfake Threats */}
            <section id="risk1-social-engineering" className="mb-20 scroll-mt-28 p-8 lg:p-12 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl shadow-lg border border-rose-200/50">
              <h3 className="text-3xl font-bold text-rose-700 mb-8 flex items-center"><FaUserSecret className="mr-3"/>Risk 1: AI-Powered Social Engineering & Deepfake Threats</h3>
              <div className="mb-6 flex flex-wrap gap-2 border-b border-rose-200 pb-4">
                {socialEngineeringSubTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSocialEngineeringSubTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSocialEngineeringSubTab === tab.id
                        ? 'bg-rose-600 text-white shadow-md'
                        : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Content for Social Engineering Subtabs */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-6">
                <div className="lg:col-span-2 prose prose-lg max-w-none prose-headings:text-rose-700 prose-strong:text-gray-700 text-gray-700">
                  {activeSocialEngineeringSubTab === 'description' && (
                    <>
                      <h4 className="text-xl font-semibold mb-3 flex items-center"><FaFileAlt className="mr-2 text-rose-600"/>A. Risk Description</h4>
                      <p>Generative AI significantly lowers the barrier to creating highly convincing and personalized social engineering attacks. This includes crafting sophisticated phishing emails, generating tailored pretexting scenarios, and producing realistic deepfake audio and video content. For healthcare, this means staff and patients face increasingly deceptive communications designed to manipulate them into divulging sensitive information or performing actions that could compromise security.</p>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'vulnerabilities' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationTriangle className="mr-2 text-orange-500"/>B. Vulnerabilities Exploited</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Human Trust & Cognitive Biases:</strong> Exploiting the natural human tendency to trust communications that appear authentic.</li>
                        <li><strong>Lack of Awareness:</strong> Insufficient training among staff and patients about the capabilities of GenAI in creating fakes.</li>
                        <li><strong>Weak Authentication:</strong> Over-reliance on knowledge-based or simple biometric authentication that can be bypassed by deepfakes.</li>
                        <li><strong>Data Availability:</strong> Publicly available information that can be used by GenAI to personalize attacks.</li>
                      </ul>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'ttps' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaTools className="mr-2 text-gray-600"/>C. Attacker Techniques, Tools &amp; Practices</h4>
                      <p>Attackers may use GenAI to:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Generate spear-phishing emails that perfectly mimic legitimate communications.</li>
                        <li>Create deepfake voice clones of executives to authorize fraudulent transactions.</li>
                        <li>Produce deepfake video of clinicians to spread misinformation or extract patient data.</li>
                        <li>Automate persuasive chat interactions to deceive customer support or patients.</li>
                      </ul>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'impact' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationCircle className="mr-2 text-red-500"/>D. Impact Assessment</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Increased success rates of phishing and impersonation attacks.</li>
                        <li>Financial losses due to fraudulent transactions or data breaches.</li>
                        <li>Reputational damage to healthcare organizations and erosion of patient trust.</li>
                        <li>Unauthorized access to sensitive patient data (PHI).</li>
                        <li>Spread of medical misinformation through convincing deepfakes.</li>
                      </ul>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'scenario' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaRegCommentDots className="mr-2 text-rose-500"/>E. Scenario Example</h4>
                      <div className="p-4 bg-rose-50 border border-rose-200 rounded-lg shadow-inner">
                        <p className="text-gray-700">A hospital&apos;s finance department receives an email, seemingly from the CEO, urgently requesting a wire transfer to a new vendor. The email is perfectly crafted, using the CEO&apos;s known communication style. Simultaneously, the department head receives a voice message, a deepfake of the CEO&apos;s voice, confirming the request. Believing the communications to be genuine, the transfer is made to a fraudulent account.</p>
                      </div>
                    </>
                  )}
                  {activeSocialEngineeringSubTab === 'cissp' && (
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold mb-4 text-rose-700 flex items-center"><FaPuzzlePiece className="mr-2 text-rose-600"/>F. CISSP Domain Alignment</h4>
                      <p className="mb-4"><strong>AI-Powered Social Engineering & Deepfake Threats</strong> cut across multiple CISSP domains, requiring a holistic security approach:</p>
                      <div className="space-y-2">
                        {socialEngineeringCisspDomains.map(domain => (
                          <div key={domain.id} className="border border-rose-200 rounded-lg">
                            <button
                              onClick={() => toggleSocialEngineeringCisspDomain(domain.id)}
                              className="w-full flex justify-between items-center p-4 bg-rose-100 hover:bg-rose-200 focus:outline-none transition-colors"
                            >
                              <span className="font-medium text-rose-700 text-left">{domain.title}</span>
                              {openSocialEngineeringCisspDomain === domain.id ? <FaChevronUp className="text-rose-600" /> : <FaChevronDown className="text-rose-600" />}
                            </button>
                            {openSocialEngineeringCisspDomain === domain.id && (
                              <div className="p-4 bg-white border-t border-rose-200">
                                <p className="text-gray-700 text-sm">{domain.content}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-gray-600">By addressing these domains, organizations can build a stronger defense against sophisticated AI-driven social engineering and deepfake attacks.</p>
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

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Cybersecurity Risks of Generative AI in Healthcare
            </h2>
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

              {/* Content for Data Poisoning Subtabs */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-6">
                <div className="lg:col-span-2 prose prose-lg max-w-none prose-headings:text-teal-700 prose-strong:text-gray-700 text-gray-700">
                  {activeDataPoisoningSubTab === 'description' && (
                    <>
                      <h4 className="text-xl font-semibold mb-3 flex items-center"><FaFileAlt className="mr-2 text-teal-600"/>A. Risk Description</h4>
                      <p>Data poisoning involves an attacker intentionally corrupting the training data of an AI model. If successful, the model learns from this malicious data, leading to inaccurate predictions, biased outputs, or system failures when deployed. This can severely undermine the reliability of AI in healthcare diagnostics or treatment planning.</p>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'vulnerabilities' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationTriangle className="mr-2 text-orange-500"/>B. Vulnerabilities Exploited</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Reliance on External Data Sources:</strong> Models trained on data scraped from the web or from third-party sources without rigorous validation.</li>
                        <li><strong>Insider Threats:</strong> Malicious insiders with access to training data.</li>
                        <li><strong>Lack of Data Integrity Checks:</strong> Insufficient mechanisms to verify the authenticity and quality of training data.</li>
                        <li><strong>Transfer Learning Vulnerabilities:</strong> Using pre-trained models that may have been subtly poisoned.</li>
                      </ul>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'ttps' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaTools className="mr-2 text-gray-600"/>C. Attacker Techniques, Tools &amp; Practices</h4>
                      <p>Attackers might:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Inject mislabeled data into training sets (e.g., labeling malignant tumors as benign).</li>
                        <li>Subtly alter data features to create backdoors in the model.</li>
                        <li>Target data annotation processes if they are outsourced or not well-secured.</li>
                        <li>Exploit vulnerabilities in data pipelines to introduce malicious data.</li>
                      </ul>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'impact' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaExclamationCircle className="mr-2 text-red-500"/>D. Impact Assessment</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Erroneous medical diagnoses or treatment recommendations.</li>
                        <li>Reduced model performance and reliability.</li>
                        <li>Reputational damage to the healthcare provider and loss of patient trust.</li>
                        <li>Significant costs for retraining models and data cleansing.</li>
                        <li>Potential for widespread harm if a poisoned model is deployed at scale.</li>
                      </ul>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'scenario' && (
                    <>
                      <h4 className="text-xl font-semibold mt-6 mb-3 flex items-center"><FaRegCommentDots className="mr-2 text-teal-500"/>E. Scenario Example</h4>
                      <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg shadow-inner">
                        <p className="text-gray-700">A research group uses a publicly available dataset to train a GenAI model for identifying early signs of a rare neurological disorder from patient brain scans. An adversary had previously subtly poisoned this dataset by mislabeling a small fraction of scans from healthy individuals as showing early signs of the disorder. The resulting AI model, when used in a clinical trial, incorrectly flags healthy patients, leading to unnecessary anxiety, further invasive testing, and a delay in identifying truly affected individuals.</p>
                      </div>
                    </>
                  )}
                  {activeDataPoisoningSubTab === 'cissp' && (
                     <div className="mt-6">
                      <h4 className="text-xl font-semibold mb-4 text-teal-700 flex items-center"><FaPuzzlePiece className="mr-2 text-teal-600"/>F. CISSP Domain Alignment</h4>
                      <p className="mb-4"><strong>Data Poisoning & Model Evasion</strong> directly challenge several core security principles. Aligning with CISSP domains provides a structured approach to mitigation:</p>
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
                      <p className="mt-4 text-sm text-gray-600">Addressing these domains helps build resilience against data poisoning and model evasion attacks, ensuring the integrity and reliability of GenAI systems in healthcare.</p>
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
            <section id="mitigation" className="py-16 bg-gradient-to-b from-gray-50 to-slate-100 scroll-mt-28">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Mitigation Strategies for GenAI Risks</h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200/70">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center"><FaShieldAlt className="mr-3 text-blue-500"/>Technical Mitigations</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Advanced Email Filtering & Endpoint Detection:</strong> Deploy solutions capable of identifying AI-generated phishing content and deepfakes.</li>
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Robust Identity and Access Management (IAM):</strong> Implement multi-factor authentication (MFA) resistant to deepfakes (e.g., FIDO2, liveness detection for biometrics).</li>
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Data Provenance and Integrity Controls:</strong> For AI model development, ensure rigorous data validation, sanitation, and tracking of data lineage.</li>
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Adversarial Training & Model Robustness:</strong> Train AI models to be resilient against adversarial attacks and data poisoning.</li>
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Deepfake Detection Technologies:</strong> Investigate and deploy tools to detect synthetic media in real-time, especially for critical communications.</li>
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Secure AI Development Lifecycles (SAIDL):</strong> Integrate security into every phase of AI model development and deployment.</li>
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Regular AI Model Auditing and Monitoring:</strong> Continuously monitor AI model behavior for anomalies and potential compromises.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200/70">
                    <h3 className="text-2xl font-semibold mb-4 text-purple-700 flex items-center"><FaUsers className="mr-3 text-purple-500"/>Organizational Mitigations</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Comprehensive Staff Training & Awareness:</strong> Educate all personnel about AI-powered social engineering, deepfakes, and data integrity risks. Conduct regular phishing simulations.</li>
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Incident Response Plan Updates:</strong> Ensure IR plans specifically address AI-related incidents, including deepfake attacks and model poisoning.</li>
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Strong Data Governance for AI:</strong> Establish clear policies for data used in AI training and operation, focusing on quality, bias, and security.</li>
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Vendor Risk Management for AI Services:</strong> Scrutinize third-party AI providers for their security practices and data handling.</li>
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Ethical AI Framework:</strong> Develop and adhere to an ethical framework that guides the responsible development and deployment of AI.</li>
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Cross-functional Collaboration:</strong> Foster collaboration between IT, security, clinical, legal, and research teams to address GenAI risks holistically.</li>
                      <li className="flex items-start"><FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0"/><strong>Clear Communication Protocols:</strong> Establish secure channels and verification procedures for sensitive requests or information sharing to counter impersonation.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Critical Analysis Section */}
            <section id="critical-analysis-genai" className="py-16 scroll-mt-28">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Critical Analysis of GenAI Impact</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200/60">
                    <h3 className="text-2xl font-semibold mb-3 text-indigo-700 flex items-center"><FaBalanceScale className="mr-3 text-indigo-500"/>Dual-Use Nature</h3>
                    <p className="text-gray-700 leading-relaxed">GenAI&apos;s power is a double-edged sword. The same capabilities that drive innovation in healthcare (e.g., drug discovery, personalized medicine, diagnostic assistance) can be exploited for malicious purposes. The ease of generating convincing synthetic content democratizes advanced attack techniques previously requiring significant expertise.</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200/60">
                    <h3 className="text-2xl font-semibold mb-3 text-red-700 flex items-center"><FaExclamationTriangle className="mr-3 text-red-500"/>Evolving Threat Landscape</h3>
                    <p className="text-gray-700 leading-relaxed">Traditional security measures may struggle against AI-driven attacks. Signature-based detection is less effective against polymorphic malware generated by AI, and human-centric verification processes are challenged by realistic deepfakes. The speed at which GenAI models evolve means defenses must be equally agile.</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200/60">
                    <h3 className="text-2xl font-semibold mb-3 text-orange-700 flex items-center"><FaDatabase className="mr-3 text-orange-500"/>Data Integrity as a Prime Target</h3>
                    <p className="text-gray-700 leading-relaxed">For AI systems, especially in healthcare, data is the lifeblood. Attacks on data integrity (like poisoning) can have far more insidious and harder-to-detect consequences than traditional data breaches. A compromised diagnostic AI could lead to widespread misdiagnoses, directly impacting patient safety.</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200/60">
                    <h3 className="text-2xl font-semibold mb-3 text-purple-700 flex items-center"><FaUserShield className="mr-3 text-purple-500"/>Trust and Ethical Concerns</h3>
                    <p className="text-gray-700 leading-relaxed">The proliferation of deepfakes and AI-generated misinformation erodes trust in digital communications and institutions. In healthcare, where trust is paramount, this can have severe repercussions. Ethical considerations around AI bias, transparency, and accountability are critical and must be addressed proactively.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Solutions and Drawbacks Section */}
            <section id="solutions-drawbacks-genai" className="py-16 bg-gray-50 scroll-mt-28">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Solutions & Their Drawbacks</h2>
                <div className="space-y-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200/70">
                    <h3 className="text-2xl font-semibold mb-3 text-teal-700 flex items-center"><FaMicrochip className="mr-3 text-teal-500"/>Solution: AI-Powered Defense Systems</h3>
                    <p className="text-gray-700 mb-3 leading-relaxed"><strong>Description:</strong> Employing AI and machine learning to detect and respond to AI-generated threats, such as deepfake detection algorithms, anomaly detection in data, and behavioral biometrics.</p>
                    <p className="text-gray-700 leading-relaxed"><strong className="text-red-600">Drawbacks:</strong> Arms race scenario (AI vs. AI); potential for false positives/negatives; high computational cost; requires specialized expertise to develop and maintain; adversarial attacks can target these defense AIs themselves.</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200/70">
                    <h3 className="text-2xl font-semibold mb-3 text-cyan-700 flex items-center"><FaShareAlt className="mr-3 text-cyan-500"/>Solution: Zero Trust Architecture (ZTA)</h3>
                    <p className="text-gray-700 mb-3 leading-relaxed"><strong>Description:</strong> Adopting a ZTA framework where no user or system is implicitly trusted. Access is granted on a per-session basis, strictly enforced, and continuously verified.</p>
                    <p className="text-gray-700 leading-relaxed"><strong className="text-red-600">Drawbacks:</strong> Complex and costly to implement comprehensively; can introduce friction for users if not carefully designed; requires significant cultural and operational shifts; may not fully address novel AI attack vectors like model inversion or membership inference if not specifically adapted.</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200/70">
                    <h3 className="text-2xl font-semibold mb-3 text-lime-700 flex items-center"><FaBook className="mr-3 text-lime-500"/>Solution: Enhanced Regulatory Frameworks & Standards</h3>
                    <p className="text-gray-700 mb-3 leading-relaxed"><strong>Description:</strong> Developing and enforcing robust regulations and industry standards for AI security, data governance in AI, and accountability for AI-caused harm.</p>
                    <p className="text-gray-700 leading-relaxed"><strong className="text-red-600">Drawbacks:</strong> Regulations often lag behind technological advancements; can be difficult to enforce globally; potential to stifle innovation if overly prescriptive; requires international cooperation.</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200/70">
                    <h3 className="text-2xl font-semibold mb-3 text-amber-700 flex items-center"><FaUsersCog className="mr-3 text-amber-500"/>Solution: Human-in-the-Loop (HITL) & Public Awareness</h3>
                    <p className="text-gray-700 mb-3 leading-relaxed"><strong>Description:</strong> Ensuring critical decisions made by AI are validated by humans. Increasing public and professional awareness about GenAI risks and identification techniques.</p>
                    <p className="text-gray-700 leading-relaxed"><strong className="text-red-600">Drawbacks:</strong> Human oversight can be a bottleneck and is prone to error, especially with sophisticated fakes; awareness campaigns require sustained effort and may not reach everyone; scalability issues for HITL in many applications.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Assessment Section - GenAI Specific */}
            <section id="interactive-assessment-genai" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100 scroll-mt-28">
              <InteractiveGenAiRiskAssessment /> 
            </section>

            {/* Future Outlook Section */}
            <section id="future-outlook" className="py-16 scroll-mt-28">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-2xl border border-gray-200/80">
                  <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center"><FaBolt className="mr-3 text-yellow-500"/>Future Outlook & Preparedness</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    The rapid evolution of Generative AI will continue to reshape the cybersecurity landscape. We can anticipate more sophisticated AI-driven attack tools, an increase in the scale and realism of social engineering and deepfake campaigns, and novel attack vectors targeting AI systems themselves.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Healthcare organizations must adopt a proactive and adaptive security posture. This involves:
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-start"><FaChevronRight className="text-blue-500 mr-2 mt-1 flex-shrink-0"/><strong>Continuous Learning & Adaptation:</strong> Staying abreast of the latest GenAI threats and defensive technologies.</li>
                    <li className="flex items-start"><FaChevronRight className="text-blue-500 mr-2 mt-1 flex-shrink-0"/><strong>Investing in AI-Specific Defenses:</strong> Deploying tools and techniques designed to counter AI-driven attacks.</li>
                    <li className="flex items-start"><FaChevronRight className="text-blue-500 mr-2 mt-1 flex-shrink-0"/><strong>Fostering a Culture of Security Awareness:</strong> Ensuring that staff at all levels are vigilant and knowledgeable.</li>
                    <li className="flex items-start"><FaChevronRight className="text-blue-500 mr-2 mt-1 flex-shrink-0"/><strong>Prioritizing Data Integrity:</strong> Implementing robust measures to protect the integrity of data used by and generated by AI systems.</li>
                    <li className="flex items-start"><FaChevronRight className="text-blue-500 mr-2 mt-1 flex-shrink-0"/><strong>Ethical AI Governance:</strong> Establishing strong governance frameworks to ensure responsible AI deployment.</li>
                    <li className="flex items-start"><FaChevronRight className="text-blue-500 mr-2 mt-1 flex-shrink-0"/><strong>Collaboration and Information Sharing:</strong> Working with industry peers, government agencies, and researchers to share threat intelligence and best practices.</li>
                  </ul>
                  <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                    The challenge is significant, but by understanding the risks and preparing strategically, the healthcare sector can harness the benefits of GenAI while mitigating its potential harms.
                  </p>
                </div>
              </div>
            </section>

            {/* References Section */}
            <section id="references" className="py-16 bg-gray-100 scroll-mt-28">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-2xl border border-gray-200/80">
                  <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center"><FaLink className="mr-3 text-gray-500"/>References</h2>
                  <ul className="space-y-4 list-none pl-5">
                    {references.map((ref) => (
                      <li key={ref.id} className="text-sm text-gray-700 border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
                        {ref.text}
                        {ref.link && 
                          <Link href={ref.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:text-blue-800 hover:underline">
                            (Access Link)
                          </Link>
                        }
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
