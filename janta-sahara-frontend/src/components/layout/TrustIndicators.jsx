import { motion } from 'framer-motion';
import './TrustIndicators.css';

const indicators = [
  { icon: '✔', text: '1M+ Forms Simplified' },
  { icon: '✔', text: 'Trusted by Students & Citizens' },
  { icon: '✔', text: 'Secure (AES-256 Encryption)' },
  { icon: '✔', text: 'Works in Hindi & English' },
];

function TrustIndicators() {
  return (
    <motion.div 
      className="trust-indicators-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="trust-indicators-container">
        {indicators.map((item, index) => (
          <motion.div 
            key={index} 
            className="indicator-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <span className="indicator-icon">{item.icon}</span>
            <span className="indicator-text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default TrustIndicators;
