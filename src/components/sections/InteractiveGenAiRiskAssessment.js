'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaCheckCircle, FaTimesCircle, FaMinusCircle, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';

const riskSections = {
  socialEngineering: {
    title: 'AI-Powered Social Engineering & Deepfakes',
    questions: [
      {
        id: 'q1-social',
        text: "Does your organization conduct regular security awareness training specifically addressing AI-generated phishing, vishing, and deepfake threats?",
        mitigationLink: '#mitigation-genai',
        vulnerabilityLink: '#risk1-social-engineering'
      },
      {
        id: 'q2-social',
        text: "Are multi-factor authentication (MFA) methods, including liveness detection for biometrics where appropriate, implemented for critical system and data access?",
        mitigationLink: '#mitigation-genai',
        vulnerabilityLink: '#risk1-social-engineering'
      },
      {
        id: 'q3-social',
        text: "Do you have clear, documented procedures for verifying unusual or high-stakes requests (e.g., financial transfers, sensitive data access) that might originate from impersonation, including out-of-band verification?",
        mitigationLink: '#mitigation-genai',
        vulnerabilityLink: '#risk1-social-engineering'
      },
      {
        id: 'q4-social',
        text: "Are communication channels monitored for signs of sophisticated AI-generated malicious content, and are there tools or processes to analyze suspicious voice/video calls?",
        mitigationLink: '#mitigation-genai',
        vulnerabilityLink: '#risk1-social-engineering'
      }
    ]
  },
  dataPoisoning: {
    title: 'Data Poisoning, Model Evasion & Theft',
    questions: [
      {
        id: 'q1-data',
        text: "Does your organization have robust data validation, sanitation, and provenance tracking for AI model training datasets, especially those from external or public sources?",
        mitigationLink: '#mitigation-genai',
        vulnerabilityLink: '#risk2-data-poisoning'
      },
      {
        id: 'q2-data',
        text: "Are your AI models regularly tested for adversarial robustness (evasion attacks) and data poisoning vulnerabilities (e.g., using clean-label attacks or backdoor detection methods)?",
        mitigationLink: '#mitigation-genai',
        vulnerabilityLink: '#risk2-data-poisoning'
      },
      {
        id: 'q3-data',
        text: "Are there strict access controls, audit logs, and monitoring for AI model repositories, training data storage, and MLOps pipelines to prevent unauthorized access or modification?",
        mitigationLink: '#mitigation-genai',
        vulnerabilityLink: '#risk2-data-poisoning'
      },
      {
        id: 'q4-data',
        text: "Do you have a process for vetting and monitoring third-party AI models or components for security vulnerabilities before integration?",
        mitigationLink: '#mitigation-genai',
        vulnerabilityLink: '#risk2-data-poisoning'
      }
    ]
  }
};

const options = [
  { value: 'yes', label: 'Yes', icon: <FaCheckCircle className="text-green-500" /> },
  { value: 'partially', label: 'Partially', icon: <FaMinusCircle className="text-yellow-500" /> },
  { value: 'no', label: 'No', icon: <FaTimesCircle className="text-red-500" /> }
];

export default function InteractiveGenAiRiskAssessment() {
  const [selectedRiskKey, setSelectedRiskKey] = useState('socialEngineering');
  const [answers, setAnswers] = useState({});
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const handleRiskChange = (event) => {
    setSelectedRiskKey(event.target.value);
    setAnswers({}); // Reset answers when risk changes
    setExpandedQuestions({});
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const selectedRisk = riskSections[selectedRiskKey];

  const getSummary = () => {
    if (Object.keys(answers).length !== selectedRisk.questions.length) {
      return { message: "Please answer all questions to see the summary.", color: "text-gray-600" };
    }

    const noCount = Object.values(answers).filter(a => a === 'no').length;
    const partiallyCount = Object.values(answers).filter(a => a === 'partially').length;

    if (noCount > 0) {
      return { message: "Your assessment indicates critical areas needing immediate attention. Review detailed recommendations.", color: "text-red-600 font-semibold" };
    }
    if (partiallyCount > 0) {
      return { message: "Your assessment shows some controls are in place, but further improvements are recommended.", color: "text-yellow-600 font-semibold" };
    }
    return { message: "Your responses suggest a good level of preparedness for this risk area. Continue to monitor and adapt.", color: "text-green-600 font-semibold" };
  };
  
  const summary = getSummary();

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-purple-200/70">
      <div className="mb-8">
        <label htmlFor="riskSelector" className="block text-lg font-semibold text-purple-800 mb-2">
          Select a GenAI Risk Area to Assess:
        </label>
        <select
          id="riskSelector"
          value={selectedRiskKey}
          onChange={handleRiskChange}
          className="w-full p-3 border border-purple-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
        >
          {Object.keys(riskSections).map(key => (
            <option key={key} value={key}>{riskSections[key].title}</option>
          ))}
        </select>
      </div>

      <h3 className="text-2xl font-bold text-purple-700 mb-6">{selectedRisk.title} Assessment</h3>
      
      <div className="space-y-6">
        {selectedRisk.questions.map((q, index) => (
          <div key={q.id} className="p-5 bg-purple-50/50 rounded-lg border border-purple-200/80 shadow-md">
            <button
              onClick={() => toggleQuestion(q.id)}
              className="flex justify-between items-center w-full text-left text-lg font-semibold text-purple-800 hover:text-purple-600 transition-colors"
            >
              <span>{index + 1}. {q.text}</span>
              {expandedQuestions[q.id] ? <FaChevronUp className="text-purple-500" /> : <FaChevronDown className="text-purple-500" />}
            </button>
            
            {expandedQuestions[q.id] && (
              <div className="mt-4 space-y-3 pl-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 mb-3">
                  {options.map(option => (
                    <label key={option.value} className="flex items-center space-x-2 p-2 rounded-md hover:bg-purple-100 transition-colors cursor-pointer">
                      <input
                        type="radio"
                        name={q.id}
                        value={option.value}
                        checked={answers[q.id] === option.value}
                        onChange={() => handleAnswerChange(q.id, option.value)}
                        className="form-radio h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300"
                      />
                      {option.icon}
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
                {(answers[q.id] === 'no' || answers[q.id] === 'partially') && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-700">
                    <strong className="font-semibold">Recommendation:</strong> Consider strengthening controls in this area. 
                    Refer to our <Link href={q.mitigationLink} className="underline hover:text-red-900 font-medium">Mitigation Strategies</Link> and the detailed 
                    <Link href={q.vulnerabilityLink} className="underline hover:text-red-900 font-medium"> Risk Description</Link> for more context.
                  </div>
                )}
                 {answers[q.id] === 'yes' && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md text-sm text-green-700">
                    <strong className="font-semibold">Good Practice:</strong> Continue to maintain and regularly review these controls.
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {Object.keys(answers).length === selectedRisk.questions.length && (
        <div className={`mt-10 p-5 rounded-lg shadow-inner ${summary.color.includes('red') ? 'bg-red-50 border border-red-300' : summary.color.includes('yellow') ? 'bg-yellow-50 border border-yellow-300' : 'bg-green-50 border border-green-300'}`}>
          <h4 className="text-xl font-semibold mb-2">Assessment Summary:</h4>
          <p className={`text-md ${summary.color}`}>{summary.message}</p>
        </div>
      )}
       <p className="mt-8 text-xs text-gray-500 text-center">
         <FaInfoCircle className="inline mr-1 mb-0.5 text-gray-400"/> 
         This self-assessment is for informational purposes only and does not constitute formal advice. Consult with cybersecurity professionals for a comprehensive evaluation.
       </p>
    </div>
  );
}
