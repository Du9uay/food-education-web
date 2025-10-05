import React from 'react';

interface FoodVignetteProps {
  intensity?: 'light' | 'medium' | 'strong';
  variant?: 'fresh' | 'warm' | 'natural';
}

const FoodVignette: React.FC<FoodVignetteProps> = ({ 
  intensity = 'medium',
  variant = 'fresh' 
}) => {
  const getIntensityClass = () => {
    switch (intensity) {
      case 'light':
        return 'opacity-20';
      case 'medium':
        return 'opacity-40';
      case 'strong':
        return 'opacity-60';
      default:
        return 'opacity-40';
    }
  };

  const getVariantStyle = () => {
    switch (variant) {
      case 'fresh':
        return {
          background: `
            radial-gradient(ellipse at center, 
              transparent 0%, 
              rgba(34, 197, 94, 0.1) 60%, 
              rgba(16, 185, 129, 0.2) 100%
            )
          `,
        };
      case 'warm':
        return {
          background: `
            radial-gradient(ellipse at center, 
              transparent 0%, 
              rgba(251, 146, 60, 0.1) 60%, 
              rgba(234, 179, 8, 0.15) 100%
            )
          `,
        };
      case 'natural':
        return {
          background: `
            radial-gradient(ellipse at center, 
              transparent 0%, 
              rgba(14, 165, 233, 0.08) 60%, 
              rgba(34, 197, 94, 0.12) 100%
            )
          `,
        };
      default:
        return {
          background: `
            radial-gradient(ellipse at center, 
              transparent 0%, 
              rgba(34, 197, 94, 0.1) 60%, 
              rgba(16, 185, 129, 0.2) 100%
            )
          `,
        };
    }
  };

  return (
    <div
      className={`fixed inset-0 pointer-events-none -z-5 ${getIntensityClass()}`}
      style={{
        ...getVariantStyle(),
        mixBlendMode: 'multiply',
      }}
    />
  );
};

export default FoodVignette;