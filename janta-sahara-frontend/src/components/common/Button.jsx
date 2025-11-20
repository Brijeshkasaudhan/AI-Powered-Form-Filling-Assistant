import { motion } from 'framer-motion';
import './Button.css';

function Button({ text, onClick, variant = 'primary' }) {
  return (
    <motion.button
      className={`custom-button ${variant}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <span className="button-text">{text}</span>
      <span className="button-glow"></span>
    </motion.button>
  );
}

export default Button;
