import React, { useEffect, useRef } from 'react';

export default function ECGPulseWave() {
  const canvasRef = useRef(null);
 
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let progress = 0;
   
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
   
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
   
    // Generate PQRST complex wave pattern
    const generateECGWave = (x, cycleLength) => {
      const t = (x % cycleLength) / cycleLength;
      const centerY = canvas.height / 2;
     
      // P wave (0-0.15)
      if (t < 0.15) {
        const pt = t / 0.15;
        return centerY - 60 * Math.sin(pt * Math.PI);
      }
      // PR segment (0.15-0.25)
      else if (t < 0.25) {
        return centerY;
      }
      // Q wave (0.25-0.30)
      else if (t < 0.30) {
        const qt = (t - 0.25) / 0.05;
        return centerY + 45 * Math.sin(qt * Math.PI);
      }
      // R wave (0.30-0.40) - sharp peak
      else if (t < 0.40) {
        const rt = (t - 0.30) / 0.10;
        return centerY - 280 * Math.sin(rt * Math.PI);
      }
      // S wave (0.40-0.45)
      else if (t < 0.45) {
        const st = (t - 0.40) / 0.05;
        return centerY + 45 * Math.sin(st * Math.PI);
      }
      // ST segment (0.45-0.55)
      else if (t < 0.55) {
        return centerY;
      }
      // T wave (0.55-0.75)
      else if (t < 0.75) {
        const tt = (t - 0.55) / 0.20;
        return centerY - 40 * Math.sin(tt * Math.PI);
      }
      // Baseline
      else {
        return centerY;
      }
    };
   
    const draw = () => {
      // Clear with transparent instead of white
      ctx.clearRect(0, 0, canvas.width, canvas.height);
     
      const cycleLength = 400;
     
      // Draw grid (optional - remove if you don't want grid)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
     
      for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
     
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
     
      // Current drawing position
      const currentX = progress % canvas.width;
      const currentY = generateECGWave(progress, cycleLength);
     
      // Draw the formed wave (trail behind the light)
      ctx.beginPath();
      for (let x = 0; x <= currentX; x++) {
        const y = generateECGWave(progress - currentX + x, cycleLength);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 3;
      ctx.stroke();
     
      // Add glow trail effect
      const trailLength = 150;
      for (let i = 0; i < trailLength; i++) {
        const trailX = currentX - i;
        if (trailX < 0) break;
       
        const trailY = generateECGWave(progress - i, cycleLength);
        const alpha = (1 - i / trailLength) * 0.4;
       
        ctx.beginPath();
        ctx.arc(trailX, trailY, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }
     
      // Crystal light at current position (drawing the wave)
     
      // Subtle outer glow
      const gradient1 = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 60);
      gradient1.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      gradient1.addColorStop(0.3, 'rgba(220, 240, 255, 0.5)');
      gradient1.addColorStop(1, 'rgba(200, 230, 255, 0)');
     
      ctx.fillStyle = gradient1;
      ctx.fillRect(currentX - 60, currentY - 60, 120, 120);
     
      // Bright core with rays
      ctx.save();
      ctx.translate(currentX, currentY);
     
      // Rotating rays
      const rayCount = 8;
      const rotation = (progress * 0.05) % (Math.PI * 2);
      ctx.rotate(rotation);
     
      for (let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * Math.PI * 2;
        const rayLength = 15 + Math.sin(progress * 0.1 + i) * 3;
       
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * rayLength, Math.sin(angle) * rayLength);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
     
      ctx.restore();
     
      // Central sparkle - matching line size
      ctx.beginPath();
      ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
      ctx.fill();
      ctx.shadowBlur = 0;
     
      progress += 3;
     
      // Reset when reaching end
      if (currentX >= canvas.width - 1) {
        progress = 0;
      }
     
      animationId = requestAnimationFrame(draw);
    };
   
    draw();
   
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
 
  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}