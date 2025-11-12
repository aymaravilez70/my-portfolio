'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      background: { color: 'transparent' },
      fpsLimit: 60,
      interactivity: {
        events: { onHover: { enable: true, mode: 'repulse' } },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      particles: {
        color: { value: '#00ff88' }, // 💚 verde brillante
        links: {
          color: '#00ff88',
          distance: 120,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 1.5, outModes: { default: 'bounce' } },
        number: { value: 60 },
        opacity: { value: 0.3 },
        shape: { type: 'circle' },
        size: { value: { min: 2, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
