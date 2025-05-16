import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-10">Resources & User Guide</h1>
        <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">User Guide: Navigating the SHTP Cybersecurity Framework</h2>
          <p className="mb-4">
            Welcome to the SHTP Cybersecurity Framework. This platform empowers you to assess, understand, and strengthen your organization&apos;s cyber resilience through interactive tools, actionable frameworks, and expert resources tailored for modern threats.
          </p>
          <ol className="list-decimal pl-6 space-y-5 mb-8 text-gray-800">
            <li>
              <strong>Start with Key Risk Factors:</strong> Use the <span className="font-semibold">CHOOSE A FACTOR</span> menu to explore in-depth pages on <span className="text-blue-700">NIS2</span>, <span className="text-blue-700">Generative AI</span>, and <span className="text-blue-700">COVID-19</span>. Each page provides:
              <ul className="list-disc pl-6 mt-2">
                <li>Clear overviews of sector-specific cyber risks</li>
                <li>Real-world scenarios and impact analysis</li>
                <li>Expert mitigation strategies and best practices</li>
              </ul>
            </li>
            <li>
              <strong>Leverage Interactive Tools & Frameworks:</strong> Access our flagship tools from the <span className="font-semibold">FIND A PRODUCT OR SERVICE</span> menu:
              <ul className="list-disc pl-6 mt-2">
                <li><Link href="/factors/covid19#actionable-framework-covid19" className="text-blue-600 hover:underline">COVID-19: Actionable Framework</Link> – Instantly check URLs for phishing and learn how to spot malicious links with our live demo and educational content.</li>
                <li><Link href="/factors/genai#interactive-assessment-genai" className="text-blue-600 hover:underline">GenAI: Interactive Risk Assessment</Link> – Evaluate your organization&apos;s AI risk posture and receive tailored recommendations.</li>
                <li><Link href="/factors/nis2#interactive-navigator-nis2" className="text-blue-600 hover:underline">NIS2: Preparedness Navigator</Link> – Assess your compliance and readiness for NIS2 regulations with step-by-step guidance.</li>
              </ul>
            </li>
            <li>
              <strong>Respond Effectively to Cyber Attacks:</strong> The <span className="font-semibold">RESPOND TO A CYBER ATTACK</span> menu provides direct access to actionable tools and frameworks for incident response, empowering you to act quickly and confidently during a crisis.
            </li>
            <li>
              <strong>Deepen Your Knowledge:</strong> Each factor page features a curated <span className="font-semibold">References & Resources</span> section, including:
              <ul className="list-disc pl-6 mt-2">
                <li>Peer-reviewed academic research</li>
                <li>Industry best practices and regulatory guidance</li>
                <li>Links to official toolkits and frameworks (e.g., NCSC, NHS DSPT)</li>
              </ul>
            </li>
            <li>
              <strong>Get Support & Personalized Guidance:</strong> For expert advice or custom solutions, visit our <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> page or request a <Link href="/demo" className="text-blue-600 hover:underline">Demo</Link>. Our team is ready to assist you at every step.
            </li>
          </ol>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-4">
            <h3 className="font-semibold text-blue-800 mb-2">Tips for Effective Use:</h3>
            <ul className="list-disc pl-6 text-blue-900 text-sm space-y-1">
              <li>Bookmark the interactive tools for quick access during security reviews or training sessions.</li>
              <li>Use the actionable frameworks as part of your organization&apos;s incident response playbook.</li>
              <li>Encourage staff to utilize the URL Safety Checker to reduce phishing risk.</li>
              <li>Regularly review the References section for updates on evolving threats and new guidance.</li>
            </ul>
          </div>
          <p className="mb-2 text-gray-700">Navigate using the top menus for a seamless experience. If you have questions or need help, our cybersecurity experts are just a click away!</p>
        </section>
        {/* ...other resource content can go here... */}
      </div>
    </MainLayout>
  );
}
