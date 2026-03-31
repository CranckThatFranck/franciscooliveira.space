import React, { useEffect, useRef } from 'react';

export const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number; y: number; radius: number; vx: number; vy: number; baseVx: number; baseVy: number; alpha: number }> = [];

    // Mouse position tracker
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = 70;
      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 0.3;
        const vy = (Math.random() - 0.5) * 0.3;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: vx,
          vy: vy,
          baseVx: vx,
          baseVy: vy,
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        // Repulsion logic
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        if (dist < 150) {
          // Repulse away from mouse
          const force = (150 - dist) / 150;
          p.vx -= (dx / dist) * force * 0.1;
          p.vy -= (dy / dist) * force * 0.1;
        }

        // Add friction and return to base velocity over time
        p.vx = p.vx * 0.99 + p.baseVx * 0.01;
        p.vy = p.vy * 0.99 + p.baseVy * 0.01;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        else if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        else if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
        ctx.closePath();
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resize);
    resize();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-auto z-0"
      style={{ background: 'radial-gradient(circle at 50% 50%, #0a0f1a 0%, #05050a 100%)' }}
    />
  );
};
