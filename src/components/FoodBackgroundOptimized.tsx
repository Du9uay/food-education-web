import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  type: 'leaf' | 'circle' | 'seed';
}

const FoodBackgroundOptimized: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置Canvas尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 粒子数组
    const particles: Particle[] = [];
    const particleCount = 50;

    // 颜色主题
    const colors = [
      'rgba(34, 197, 94, 0.6)',   // 绿色
      'rgba(251, 146, 60, 0.6)',  // 橙色
      'rgba(250, 204, 21, 0.6)',  // 黄色
      'rgba(168, 85, 247, 0.5)',  // 紫色
      'rgba(59, 130, 246, 0.5)',  // 蓝色
    ];

    // 初始化粒子
    for (let i = 0; i < particleCount; i++) {
      const type = ['leaf', 'circle', 'seed'][Math.floor(Math.random() * 3)] as 'leaf' | 'circle' | 'seed';
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3,
        type
      });
    }

    // 绘制粒子
    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      
      switch(particle.type) {
        case 'leaf':
          // 绘制叶子形状
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.ellipse(particle.x, particle.y, particle.size, particle.size * 0.6, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
          break;
        
        case 'circle':
          // 绘制圆形
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // 添加光晕效果
          const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        
        case 'seed':
          // 绘制种子形状
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.ellipse(particle.x, particle.y, particle.size * 0.4, particle.size, 0, 0, Math.PI * 2);
          ctx.fill();
          break;
      }
      
      ctx.restore();
    };

    // 更新粒子位置
    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // 边界反弹
      if (particle.x <= 0 || particle.x >= canvas.width) {
        particle.vx *= -1;
      }
      if (particle.y <= 0 || particle.y >= canvas.height) {
        particle.vy *= -1;
      }

      // 确保粒子在边界内
      particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      particle.y = Math.max(0, Math.min(canvas.height, particle.y));
    };

    // 绘制连接线
    const drawConnections = () => {
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.globalAlpha = (1 - distance / 150) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // 动画循环
    const animate = () => {
      // 完全清除画布，移除拖尾效果
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 更新和绘制粒子
      particles.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });

      // 绘制连接线
      drawConnections();

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* 基础渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800" />
      
      {/* 有机渐变叠加 - 增强光晕效果 */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.6) 0%, rgba(22, 101, 52, 0.3) 40%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.6) 0%, rgba(154, 52, 18, 0.3) 40%, transparent 70%)',
            filter: 'blur(120px)',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(88, 28, 135, 0.25) 40%, transparent 70%)',
            filter: 'blur(150px)',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(250, 204, 21, 0.5) 0%, rgba(161, 98, 7, 0.25) 40%, transparent 70%)',
            filter: 'blur(80px)',
            animationDelay: '3s'
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-[550px] h-[550px] rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(29, 78, 216, 0.2) 40%, transparent 70%)',
            filter: 'blur(90px)',
            animationDelay: '1.5s'
          }}
        />
      </div>

      {/* Canvas粒子层 */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* 微妙的噪点纹理 */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
};

export default FoodBackgroundOptimized;