import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './ParticleBackground.css';

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: ["#FF9933", "#138808", "#667eea", "#00d9ff", "#ed64a6"],
          },
          links: {
            color: {
              value: ["#FF9933", "#667eea", "#00d9ff"]
            },
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: 0.8,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
              sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 4,
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 1,
              sync: false
            }
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "repulse"
            },
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 1,
                color: "#FF9933"
              }
            },
            repulse: {
              distance: 150,
              duration: 0.4
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticleBackground;
