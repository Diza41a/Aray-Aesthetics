import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

export default function Particle() {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (/* container */) => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 2,
            },
          },
        },
        particles: {
          // bounce: {
          //   enable: false,
          // },
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true /*true*/,
            opacity: 1,
            width: 1,
            frequency: 0.75,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'top-right',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            // speed: {
            //   min: 0.5,
            //   max: 1.5,
            // },
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 10,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1
            },
            value: {
              min: 0,
              max: 1
            },
            animation: {
              enable: true,
              speed: 0.25,
              decay: 0,
              startValue: "random",
              minimumValue: 0
            }
          },
          shape: {
            type: 'circle',
          },
          stroke: {
            width: 0.5,
            color: {
              value: "#ffffff",
            },
            opacity: 1,
          },
          shadow: {
            blur: 25,
            color: {
              // value: "#ffffff"
              value: "#f096fca5"
              // value: "#000000"
            },
            enable: true,
            offset: {
              // x: 0,
              // y: 0
              x: 5,
              y: 5
            }
          },
          size: {
            value: { min: 1, max: 100 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
