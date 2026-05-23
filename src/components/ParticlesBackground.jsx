import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const init = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="particles-wrapper" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Particles
        id="tsparticles"
        init={init}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent"
            }
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 180,
                links: {
                  opacity: 0.35
                }
              }
            }
          },
          particles: {
            color: {
              value: "#00ffe7"
            },
            links: {
              color: "#bd00ff",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out"
              }
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 65
            },
            opacity: {
              value: 0.4
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 2.5 }
            }
          },
          detectRetina: true
        }}
      />
    </div>
  );
};

export default ParticlesBackground;

