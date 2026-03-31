import { useEffect, useRef } from 'react';

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    const dpr = window.devicePixelRatio || 1;

    const particles = Array.from({ length: 95 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.8 + 0.4,
      speedY: Math.random() * 0.25 + 0.05,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle) => {
        particle.y -= particle.speedY;
        if (particle.y < -4) {
          particle.y = window.innerHeight + 4;
          particle.x = Math.random() * window.innerWidth;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        ctx.fill();
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    resize();
    render();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" aria-hidden="true" />;
}
