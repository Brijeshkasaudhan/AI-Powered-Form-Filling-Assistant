import React from 'react';
import { Link } from 'react-router-dom';

function Confirmation() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#e2e8f0',
      background: 'linear-gradient(120deg, #080812 60%, #181825 100%)',
      fontFamily: "Poppins, sans-serif"
    }}>
      <div style={{
        background: 'rgba(22, 26, 37, 0.99)',
        padding: '48px 36px',
        borderRadius: '22px',
        maxWidth: '420px',
        textAlign: 'center',
        boxShadow: '0 0 40px 0 rgba(19, 136, 8, 0.14), 0 0 80px 0 rgba(103, 230, 220, 0.10)'
      }}>
        <h1 style={{
          fontSize: '2rem',
          color: '#67e6dc',
          marginBottom: '16px'
        }}>
          🎉 Form Submitted!
        </h1>
        <p style={{ color: '#ff9933', fontSize: '1.16rem', marginBottom: '18px' }}>
          Thank you for submitting your PAN Card application.<br/>
          You will be contacted soon for further steps.
        </p>
        <Link to="/dashboard" style={{ 
          background: 'linear-gradient(90deg, #67e6dc 90%, #138808 100%)',
          color: '#181825', 
          padding: '11px 32px',
          borderRadius: '7px',
          fontWeight: 700, 
          textDecoration: 'none',
          letterSpacing: '.07em'
        }}>
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;
