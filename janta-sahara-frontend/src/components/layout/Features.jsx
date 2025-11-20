import React from 'react';

const featureData = [
  {
    icon: '⭐',
    title: 'Auto-Fill with AI',
    description: 'Let our smart AI fill out complex government forms in seconds with unmatched accuracy.'
  },
  {
    icon: '🗣️',
    title: 'Voice-Based Filling',
    description: 'Simply speak, and Janta Sahara will fill out the forms for you. It’s that easy.'
  },
  {
    icon: '📄',
    title: 'Document Scanner',
    description: 'Scan your Aadhaar, PAN, or other documents to extract information instantly.'
  },
  {
    icon: '🇮🇳',
    title: 'Hindi & English Support',
    description: 'Our assistant is fluent in both Hindi and English for your convenience.'
  }
];

function FeatureCard({ feature }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{feature.icon}</div>
      <h3 className="feature-card-title">{feature.title}</h3>
      <p className="feature-card-description">{feature.description}</p>
    </div>
  );
}

function Features() {
  return (
    <div className="features-section">
      <h2 className="features-title">Everything You Need. Nothing You Don't.</h2>
      <div className="features-grid">
        {featureData.map((item, index) => (
          <FeatureCard key={index} feature={item} />
        ))}
      </div>
    </div>
  );
}

export default Features;
