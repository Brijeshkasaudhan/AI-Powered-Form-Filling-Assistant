import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <div className="faq-page">
      <div className="faq-container">
        <h1 className="faq-title">❓ Frequently Asked Questions</h1>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Who can use Janta Sahara?</h3>
            <p>Any Indian citizen who wants to make public services and forms easier can use the assistant.</p>
          </div>
          <div className="faq-item">
            <h3>Is my information safe?</h3>
            <p>Yes! Your privacy is protected. We use secure, modern systems and do not share your data.</p>
          </div>
          <div className="faq-item">
            <h3>Can I get help in Hindi?</h3>
            <p>Absolutely. Our assistant provides step-by-step guidance in both Hindi and English.</p>
          </div>
          <div className="faq-item">
            <h3>Do I need to create an account?</h3>
            <p>You can get basic guidance without signing up, but some features require login for personalized help.</p>
          </div>
          <div className="faq-item">
            <h3>Who built Janta Sahara?</h3>
            <p>The project was built by Ankita Patel, a full-stack developer and hackathon enthusiast.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
