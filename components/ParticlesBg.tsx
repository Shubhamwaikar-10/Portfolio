'use client';
import { useEffect } from 'react';

export function ParticlesBg() {
  useEffect(() => {
    // Canvas particles animation (futuristic dots)
    const canvas = document.getElementById('particles') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Add 100 neon particles here (code snippet next)
    // ...
  }, []);
  
  return <canvas id="particles" className="fixed inset-0 -z-10 opacity-30" />;
}
