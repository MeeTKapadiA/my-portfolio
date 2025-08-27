import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesBackground = () => {
  const init = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        background: {
          color: {
            value: "#0f0f0f"
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          }
        },
        particles: {
          color: {
            value: "#00ffe7"
          },
          links: {
            color: "#00ffe7",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            speed: 1
          },
          number: {
            value: 50
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 }
          }
        }
      }}
    />
  )
}

export default ParticlesBackground
