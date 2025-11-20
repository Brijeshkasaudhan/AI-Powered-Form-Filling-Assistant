import './GlowingParticles.css';

function GlowingParticles() {
  return (
    <div className="glowing-particles-container">
      {/* Test element - should be visible */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100px',
        height: '100px',
        background: 'red',
        borderRadius: '50%',
        boxShadow: '0 0 50px 20px red',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000
      }}>
        TEST
      </div>
      
      {[...Array(20)].map((_, i) => (
        <div key={i} className="glowing-particle" />
      ))}
    </div>
  );
}

export default GlowingParticles;
