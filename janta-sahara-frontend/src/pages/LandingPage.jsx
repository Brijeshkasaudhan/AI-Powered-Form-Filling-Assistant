import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Logo from '../components/common/Logo';
import AnimatedBackground from '../components/animations/AnimatedBackground';
import CanvasParticles from '../components/animations/CanvasParticles';
import TrustIndicators from '../components/layout/TrustIndicators';
import Testimonials from '../components/layout/Testimonials';
import Chatbot from '../components/Chatbot'; // <-- Import the Chatbot component
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <div className="landing-page">
        <AnimatedBackground />
        <CanvasParticles />
        <motion.div className="hero-section" initial="hidden" animate="visible">
          <Logo />
          <motion.h1
            className="hero-title glow-text"
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            जनता सहारा
          </motion.h1>
          <motion.h2
            className="hero-subtitle"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Janta Sahara
          </motion.h2>
          <motion.p
            className="hero-description"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Your AI-Powered Form Filling Assistant
          </motion.p>
          <motion.p
            className="hero-tagline"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            सरकारी फॉर्म्स, अब आसान | Government Forms, Now Easy
          </motion.p>
          <motion.div
            className="hero-buttons"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link to="/start-form">
              <Button text="Get Started" variant="primary" />
            </Link>
            <Link to="/about">
              <Button text="Learn More" variant="outline" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Section 2: Trust Indicators */}
      <TrustIndicators />

      {/* Section 4: Testimonials */}
      <Testimonials />

      {/* Chatbot Floating Widget */}
      <Chatbot />

    </>
  );
}

export default LandingPage;
