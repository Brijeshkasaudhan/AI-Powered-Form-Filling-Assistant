import { motion } from 'framer-motion';
import './Logo.css';

function Logo() {
  return (
     
    <motion.div
      className="logo-container"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <svg className="logo-svg" width="100" height="80" viewBox="0 0 100 80">
        {/* Back Petals (drawn first to appear behind) */}
        <path
          d="M50,80 C10,70 20,10 40,20"
          className="lotus-petal back"
        />
        <path
          d="M50,80 C90,70 80,10 60,20"
          className="lotus-petal back"
        />
        
        {/* Front Petals */}
        <path
          d="M50,80 C20,70 30,10 45,5"
          className="lotus-petal front"
        />
        <path
          d="M50,80 C80,70 70,10 55,5"
          className="lotus-petal front"
        />
        
        {/* Center Petal (drawn last to appear on top) */}
        <path
          d="M50,80 C40,50 45,0 50,0 C55,0 60,50 50,80"
          className="lotus-petal center"
        />
      </svg>
    </motion.div>
  );
}

export default Logo;
