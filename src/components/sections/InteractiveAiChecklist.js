'use client';

import { useState } from 'react';
import { CheckCircleIcon, ClockIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const checklistItems = [
  {
    id: 'data-provenance',
    text: 'Are you using AI models trained on public or third-party data? Have you verified data sources and assessed for potential biases or poisoning?',
    riskLink: '#risk2-data-poisoning', // Links to the relevant section on the GenAI page
    details: 'Models trained on unverified data can inherit biases or be vulnerable to data poisoning attacks, leading to skewed or malicious outcomes.'
  },
  {
    id: 'sensitive-data',
    text: 'Do your AI systems handle sensitive personal data (e.g., PII, health records)? What specific safeguards (e.g., anonymization, encryption, access controls) are in place?',
    riskLink: '#risk3-data-privacy', // Placeholder, assuming a risk3 for data privacy
    details: 'Generative AI can inadvertently reveal sensitive information from its training data or through model inversion attacks if not properly secured.'
  },
  {
    id: 'deepfake-misinformation',
    text: 'Have you considered the risk of AI-generated misinformation or deepfakes in your application domain? What detection or mitigation strategies are planned?',
    riskLink: '#risk1-social-engineering',
    details: 'AI can be used to create highly realistic fake content, eroding trust and potentially causing significant harm if used maliciously.'
  },
  {
    id: 'model-security',
    text: 'How are your AI models protected against theft, unauthorized access, or adversarial attacks designed to cause misbehavior?',
    riskLink: '#risk2-data-poisoning', // Also relevant to model evasion/theft
    details: 'Proprietary models are valuable IP. Adversarial attacks can trick models into making incorrect predictions or classifications.'
  },
  {
    id: 'ethical-oversight',
    text: 'Is there an ethical review process or oversight body for your AI projects, particularly those with high societal impact?',
    riskLink: '#responsible-ai-framework', // Placeholder for a general responsible AI section
    details: 'Ensuring AI is developed and deployed ethically requires ongoing oversight and adherence to responsible AI principles.'
  },
  {
    id: 'transparency-explainability',
    text: 'Can you explain how your AI models arrive at their decisions, especially for critical applications? Are methods for transparency and explainability (XAI) being explored?',
    riskLink: '#responsible-ai-framework',
    details: 'Black-box models can be problematic when decisions impact individuals significantly. XAI helps build trust and allows for debugging.'
  },
  {
    id: 'user-awareness',
    text: 'Are users of your AI systems (internal or external) made aware when they are interacting with an AI and informed about its capabilities and limitations?',
    riskLink: '#responsible-ai-framework',
    details: 'Clear communication helps manage expectations and prevents misuse or over-reliance on AI systems.'
  }
];

const statusOptions = [
  { id: 'not-started', label: 'Needs Review', icon: ExclamationCircleIcon, color: 'text-red-500', bgColor: 'bg-red-100' },
  { id: 'in-progress', label: 'In Progress', icon: ClockIcon, color: 'text-yellow-500', bgColor: 'bg-yellow-100' },
  { id: 'addressed', label: 'Addressed', icon: CheckCircleIcon, color: 'text-green-500', bgColor: 'bg-green-100' },
];

export default function InteractiveAiChecklist() {
  const [statuses, setStatuses] = useState(() =>
    checklistItems.reduce((acc, item) => {
      acc[item.id] = 'not-started';
      return acc;
    }, {})
  );
  const [expandedItem, setExpandedItem] = useState(null);

  const handleStatusChange = (itemId, newStatus) => {
    setStatuses(prev => ({ ...prev, [itemId]: newStatus }));
  };

  const toggleExpand = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };
  
  const getProgress = () => {
    const totalItems = checklistItems.length;
    const addressedItems = Object.values(statuses).filter(s => s === 'addressed').length;
    const inProgressItems = Object.values(statuses).filter(s => s === 'in-progress').length;
    // Weight in-progress as half-addressed for a more nuanced progress
    return ((addressedItems + (inProgressItems * 0.5)) / totalItems) * 100;
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-200">
      <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6 flex items-center">
        <InformationCircleIcon className="w-8 h-8 mr-3 text-purple-600" />
        Interactive AI Security &amp; Ethics Checklist
      </h3>
      <p className="mb-6 text-gray-600">
        Assess your Generative AI project&apos;s alignment with key security and ethical considerations. Use this checklist to identify areas for review and improvement.
      </p>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-2">Overall Progress:</h4>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-purple-600 h-4 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${getProgress()}%` }}
          ></div>
        </div>
        <p className="text-sm text-purple-700 font-medium">{getProgress().toFixed(0)}% Complete</p>
      </div>

      <div className="space-y-6">
        {checklistItems.map((item) => {
          const currentStatus = statusOptions.find(s => s.id === statuses[item.id]);
          const IconComponent = currentStatus?.icon;

          return (
            <div key={item.id} className={`p-4 rounded-lg shadow border ${currentStatus?.bgColor ? currentStatus.bgColor.replace('bg-', 'border-') : 'border-gray-200'} transition-all duration-300`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="text-gray-800 font-medium flex-1 mb-3 sm:mb-0">{item.text}</p>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  {IconComponent && <IconComponent className={`w-6 h-6 ${currentStatus?.color}`} />}
                  <select
                    value={statuses[item.id]}
                    onChange={(e) => handleStatusChange(item.id, e.target.value)}
                    className={`p-2 border rounded-md text-sm ${currentStatus?.bgColor || 'bg-gray-50'} ${currentStatus?.color || 'text-gray-700'} focus:ring-purple-500 focus:border-purple-500`}
                  >
                    {statusOptions.map(option => (
                      <option key={option.id} value={option.id}>{option.label}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="p-2 text-purple-600 hover:text-purple-800"
                    aria-label={expandedItem === item.id ? "Collapse details" : "Expand details"}
                  >
                    <InformationCircleIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {expandedItem === item.id && (
                <div className="mt-3 pt-3 border-t border-gray-300/50">
                  <p className="text-sm text-gray-600 mb-2">{item.details}</p>
                  <a href={item.riskLink} className="text-sm text-purple-600 hover:underline hover:text-purple-800 font-medium">
                    Learn more about this risk
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-xs text-gray-500">
        Disclaimer: This checklist is for informational purposes only and not exhaustive. Consult with legal and cybersecurity professionals for comprehensive advice.
      </p>
    </div>
  );
}
