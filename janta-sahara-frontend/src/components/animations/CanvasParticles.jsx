import { useEffect, useRef } from 'react';
import './CanvasParticles.css';

function CanvasParticles() {
  const canvasRef = useRef(null);
  // Use a ref to hold the particles array so it persists
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particleCount = 40;
    const colors = ['#FF9933', '#FFB366', '#FFD1A3']; // Shades of Saffron/Yellow

    class Particle {
      constructor(x, y, isBurstParticle = false) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.isBurst = isBurstParticle;

        if (this.isBurst) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 4 + 1;
          this.speedX = Math.cos(angle) * speed;
          this.speedY = Math.sin(angle) * speed;
          this.size = Math.random() * 2.5 + 1;
          this.lifespan = 100; // Burst particles fade away
        } else {
          this.speedX = Math.random() * 2 - 1;
          this.speedY = Math.random() * 2 - 1;
          this.size = Math.random() * 3 + 2;
          this.lifespan = Infinity; // Main particles last forever
        }
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.lifespan !== Infinity) {
          this.lifespan--;
          this.size *= 0.98; // Shrink fading particles
        }
        
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        
        ctx.globalAlpha = Math.min(1, this.lifespan / 100); // Fade out burst particles
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1; // Reset for next particle
      }
    }

    // --- Click Interaction ---
    const handleClick = (event) => {
        const burstCount = 20;
        for (let i = 0; i < burstCount; i++) {
            particlesRef.current.push(new Particle(event.clientX, event.clientY, true));
        }
    };

    // Add listener to the window so it's not blocked by canvas CSS
    window.addEventListener('click', handleClick);

    // Initialize main particles
    if (particlesRef.current.length === 0) {
        for (let i = 0; i < particleCount; i++) {
          particlesRef.current.push(new Particle());
        }
    }

    let animationFrameId;
    const animate = () => {
      // FIX #1: This ensures a pure black background every frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Filter out dead particles and update/draw the rest
      particlesRef.current = particlesRef.current.filter(p => p.lifespan > 0);
      particlesRef.current.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Reset particles on resize
        particlesRef.current = [];
        for (let i = 0; i < particleCount; i++) {
          particlesRef.current.push(new Particle());
        }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick); // FIX #2: Correctly cleans up window listener
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-particles" />;
}

export default CanvasParticles;
