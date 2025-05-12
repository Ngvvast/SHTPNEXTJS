'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaCheckCircle, FaTimesCircle, FaMinusCircle, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';

const nis2Questions = {
  applicability: {
    title: 'NIS2 Applicability',
    questions: [
      {
        id: 'q1-sector',
        text: "Does your organization operate within the health sector (e.g., healthcare provider, research organization, pharmaceutical manufacturer involved in essential services)?",
        guidance: "NIS2 applies to essential and important entities. Most healthcare providers directly involved in patient care are considered essential."
      },
      {
        id: 'q2-size',
        text: "Based on employee headcount and annual turnover, would your organization be classified as medium-sized or large?",
        guidance: "Generally, medium-sized (50+ employees or >€10M turnover) and all large entities in scope are covered. However, some entities are covered regardless of size if deemed critical."
      },
      {
        id: 'q3-services',
        text: "Does your organization provide services within the EU, or are you a key supplier to entities that provide essential services within the EU?",
        guidance: "NIS2 has extraterritorial scope in certain conditions, especially concerning the supply chain of essential services."
      }
    ]
  },
  preparedness: {
    title: 'NIS2 Preparedness',
    questions: [
      {
        id: 'q1-risk-management',
        text: "Has your organization implemented and documented a comprehensive cybersecurity risk management framework, including regular risk assessments and treatment plans specifically addressing NIS2 requirements?",
        mitigationLink: '#mitigation'
      },
      {
        id: 'q2-supply-chain',
        text: "Do you have a process for assessing and managing cybersecurity risks throughout your supply chain, including requirements for SBOMs where appropriate?",
        mitigationLink: '#risk1-supply-chain'
      },
      {
        id: 'q3-incident-handling',
        text: "Is there a documented incident response plan that aligns with NIS2 reporting timelines (e.g., 24-hour initial notification, 72-hour detailed report)? Is it regularly tested?",
        mitigationLink: '#mitigation'
      },
      {
        id: 'q4-governance',
        text: "Does top management have oversight of cybersecurity risks, and have they received appropriate training as mandated by NIS2?",
        mitigationLink: '#critical-analysis'
      },
      {
        id: 'q5-technical-controls',
        text: "Has your organization implemented key technical security measures such as strong IAM (MFA), network segmentation, encryption, and robust vulnerability management?",
        mitigationLink: '#mitigation'
      }
    ]
  }
};

const options = [
  { value: 'yes', label: 'Yes', icon: <FaCheckCircle className="text-green-500" /> },
  { value: 'partially', label: 'Partially', icon: <FaMinusCircle className="text-yellow-500" /> },
  { value: 'no', label: 'No', icon: <FaTimesCircle className="text-red-500" /> }
];

export default function Nis2ApplicabilityNavigator() {
  const [currentSectionKey, setCurrentSectionKey] = useState('applicability');
  const [answers, setAnswers] = useState({});
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const currentData = nis2Questions[currentSectionKey];

  const getSummary = (sectionKey) => {
    const sectionQuestions = nis2Questions[sectionKey].questions;
    const sectionAnswers = sectionQuestions.reduce((acc, q) => {
      if (answers[q.id]) acc[q.id] = answers[q.id];
      return acc;
    }, {});

    if (Object.keys(sectionAnswers).length !== sectionQuestions.length) {
      return { message: "Please answer all questions in this section for a summary.", color: "text-gray-600" };
    }

    const noCount = Object.values(sectionAnswers).filter(a => a === 'no').length;
    const partiallyCount = Object.values(sectionAnswers).filter(a => a === 'partially').length;

    if (sectionKey === 'applicability') {
      if (answers['q1-sector'] === 'yes' && (answers['q2-size'] === 'yes' || answers['q3-services'] === 'yes')) {
        return { message: "Your organization is likely within the scope of NIS2. Proceed to assess your preparedness.", color: "text-blue-600 font-semibold", likelyInScope: true };
      } else {
        return { message: "Based on your answers, your organization may not fall directly under NIS2, but consider its principles for good security posture. Verify with legal counsel.", color: "text-orange-600 font-semibold", likelyInScope: false };
      }
    } else { // Preparedness summary
      if (noCount > 0) {
        return { message: "Your preparedness assessment indicates critical areas needing immediate attention to align with NIS2. Review detailed recommendations.", color: "text-red-600 font-semibold" };
      }
      if (partiallyCount > 0) {
        return { message: "Your preparedness assessment shows some controls are in place, but further improvements are recommended for NIS2 alignment.", color: "text-yellow-600 font-semibold" };
      }
      return { message: "Your responses suggest a good level of preparedness. Continue to monitor and adapt to NIS2 requirements.", color: "text-green-600 font-semibold" };
    }
  };

  const applicabilitySummary = getSummary('applicability');
  const preparednessSummary = currentSectionKey === 'preparedness' ? getSummary('preparedness') : null;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-blue-200/70">
      <div className="flex border-b border-blue-300 mb-6">
        <button 
          onClick={() => setCurrentSectionKey('applicability')} 
          className={`py-3 px-5 font-semibold text-lg transition-colors ${currentSectionKey === 'applicability' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
        >
          NIS2 Applicability
        </button>
        <button 
          onClick={() => setCurrentSectionKey('preparedness')} 
          className={`py-3 px-5 font-semibold text-lg transition-colors ${currentSectionKey === 'preparedness' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
          disabled={!applicabilitySummary.likelyInScope && currentSectionKey !== 'preparedness'}
        >
          NIS2 Preparedness
        </button>
      </div>

      <h3 className="text-2xl font-bold text-blue-700 mb-6">{currentData.title}</h3>
      
      <div className="space-y-6">
        {currentData.questions.map((q, index) => (
          <div key={q.id} className="p-5 bg-blue-50/50 rounded-lg border border-blue-200/80 shadow-md">
            <button
              onClick={() => toggleQuestion(q.id)}
              className="flex justify-between items-center w-full text-left text-lg font-semibold text-blue-800 hover:text-blue-600 transition-colors"
            >
              <span>{index + 1}. {q.text}</span>
              {expandedQuestions[q.id] ? <FaChevronUp className="text-blue-500" /> : <FaChevronDown className="text-blue-500" />}
            </button>
            
            {expandedQuestions[q.id] && (
              <div className="mt-4 space-y-3 pl-2">
                {q.guidance && <p className="text-sm text-gray-600 bg-blue-100 p-2 rounded"><FaInfoCircle className="inline mr-1 mb-0.5 text-blue-500"/>{q.guidance}</p>}
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 mb-3">
                  {options.map(option => (
                    <label key={option.value} className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-100 transition-colors cursor-pointer">
                      <input
                        type="radio"
                        name={q.id}
                        value={option.value}
                        checked={answers[q.id] === option.value}
                        onChange={() => handleAnswerChange(q.id, option.value)}
                        className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      {option.icon}
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
                {(answers[q.id] === 'no' || answers[q.id] === 'partially') && q.mitigationLink && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-700">
                    <strong className="font-semibold">Recommendation:</strong> Consider strengthening controls in this area. 
                    Refer to our <Link href={q.mitigationLink} className="underline hover:text-red-900 font-medium">guidance on {nis2Questions.preparedness.questions.find(pq => pq.id === q.id)?.text.substring(0,30).trim() + '...'}</Link> for more context.
                  </div>
                )}
                 {answers[q.id] === 'yes' && q.mitigationLink && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md text-sm text-green-700">
                    <strong className="font-semibold">Good Practice:</strong> Continue to maintain and regularly review these controls.
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {currentSectionKey === 'applicability' && Object.keys(answers).filter(k => k.startsWith('q') && (k.includes('-sector') || k.includes('-size') || k.includes('-services'))).length === nis2Questions.applicability.questions.length && (
        <div className={`mt-10 p-5 rounded-lg shadow-inner ${applicabilitySummary.color.includes('blue') ? 'bg-blue-50 border border-blue-300' : applicabilitySummary.color.includes('orange') ? 'bg-orange-50 border border-orange-300' : 'bg-gray-50 border border-gray-300'}`}>
          <h4 className="text-xl font-semibold mb-2">Applicability Summary:</h4>
          <p className={`text-md ${applicabilitySummary.color}`}>{applicabilitySummary.message}</p>
          {applicabilitySummary.likelyInScope && (
            <button 
              onClick={() => setCurrentSectionKey('preparedness')} 
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow-md"
            >
              Assess Preparedness
            </button>
          )}
        </div>
      )}

      {currentSectionKey === 'preparedness' && preparednessSummary && (
         <div className={`mt-10 p-5 rounded-lg shadow-inner ${preparednessSummary.color.includes('red') ? 'bg-red-50 border border-red-300' : preparednessSummary.color.includes('yellow') ? 'bg-yellow-50 border border-yellow-300' : 'bg-green-50 border border-green-300'}`}>
          <h4 className="text-xl font-semibold mb-2">Preparedness Summary:</h4>
          <p className={`text-md ${preparednessSummary.color}`}>{preparednessSummary.message}</p>
        </div>
      )}

       <p className="mt-8 text-xs text-gray-500 text-center">
         <FaQuestionCircle className="inline mr-1 mb-0.5"/> 
         This navigator provides an initial indication and is not a substitute for legal or professional cybersecurity advice. Always verify your organization’s status and obligations under NIS2 with qualified experts.
       </p>
    </div>
  );
}
