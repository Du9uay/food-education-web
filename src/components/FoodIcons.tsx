import React from 'react';

// 轻食行业专用图标组件
export const Leaf = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4C12 4 15 7 15 12C15 17 12 20 12 20C12 20 9 17 9 12C9 7 12 4 12 4Z" />
  </svg>
);

export const Salad = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3C16.4183 3 20 6.58172 20 11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11C4 6.58172 7.58172 3 12 3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 19H18C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20C5 19.4477 5.44772 19 6 19Z" />
  </svg>
);

export const Apple = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3L13.09 8.26L18 7.27L14.18 11.43L19 12L14.18 12.57L18 16.73L13.09 15.74L12 21L10.91 15.74L6 16.73L9.82 12.57L5 12L9.82 11.43L6 7.27L10.91 8.26L12 3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C11 2 10 3 10 4C10 5 11 6 12 6C13 6 14 5 14 4C14 3 13 2 12 2Z" />
  </svg>
);

export const Avocado = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="14" rx="6" ry="8" strokeWidth={2} />
    <circle cx="12" cy="14" r="3" strokeWidth={2} />
    <circle cx="12" cy="14" r="1" fill="currentColor" />
  </svg>
);

export const Smoothie = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21L17 21" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 18L16 18L15 21L9 21L8 18Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 18L8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8L16 18" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4C9 3.44772 9.44772 3 10 3L14 3C14.5523 3 15 3.44772 15 4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 10L14 10" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 13L14 13" />
  </svg>
);

export const Nutrition = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12L11 14L15 10" />
    <circle cx="12" cy="12" r="9" strokeWidth={2} />
  </svg>
);

export const Organic = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
  </svg>
);

export const Wellness = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61C19.32 3.29 17.16 3.29 15.64 4.61L12 8.69L8.36 4.61C6.84 3.29 4.68 3.29 3.16 4.61C1.64 5.93 1.64 8.15 3.16 9.47L12 19L20.84 9.47C22.36 8.15 22.36 5.93 20.84 4.61Z" />
  </svg>
);

export const Store = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 21H2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 13H8V21H16V13Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7H15" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11H15" />
  </svg>
);

export const Recipe = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" />
  </svg>
);

export const Analytics = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6L20 17H7C5.89543 17 5 16.1046 5 15V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V15" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9H15" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13H12" />
  </svg>
);

export const Branding = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H16" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11H16" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 15H13" />
  </svg>
);

export const Business = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 21H2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 13H8V21H16V13Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7H15" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11H15" />
  </svg>
);

export const Compliance = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
  </svg>
);

export const Target = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeWidth={2} />
    <circle cx="12" cy="12" r="3" strokeWidth={2} />
  </svg>
);

export const Growth = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 14L12 9L17 14M3 21L21 3" />
  </svg>
);

export const TrendingUp = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7H21L15 1M21 7L13 15L9 11L3 17" />
  </svg>
);

export const AlertTriangle = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9V13M12 17H12.01M10.29 3.86L1.82 18A2 2 0 003.65 21H20.35A2 2 0 0022.18 18L13.71 3.86A2 2 0 0010.29 3.86Z" />
  </svg>
);

export const Lightbulb = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17H20A1 1 0 0021 16V9A1 1 0 0020 8H4A1 1 0 003 9V16A1 1 0 004 17H14.337M9.663 17L10 21H14L14.337 17M9.663 17H14.337" />
    <circle cx="12" cy="12" r="3" strokeWidth={2} />
  </svg>
);

export const Globe = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12C3 12 9 4 12 4S21 12 21 12S15 20 12 20S3 12 3 12Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3V21" />
  </svg>
);

export const Zap = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
  </svg>
);

// 继续使用一些通用图标，但用新的颜色系统
export { Users, BookOpen, Award } from './Icons';