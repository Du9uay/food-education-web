import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 书本图标 - 赛博朋克风格
export const BookOpen: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <filter id="neon-glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#neon-glow)" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M8 7h8M8 11h8M8 15h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.8" />
    <circle cx="12" cy="11" r="0.5" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 设置图标 - 赛博朋克风格
export const Settings: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-spin" style={{ animationDuration: '3s' }} />
  </svg>
);

// 闪电图标 - 赛博朋克风格
export const Zap: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" strokeLinejoin="round" />
    <path d="M13 2L3 14h9l-1 8 10-12h-9z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" className="animate-pulse" opacity="0.8" />
    <circle cx="12" cy="10" r="0.5" fill="currentColor" className="animate-pulse" />
  </svg>
);

// Star图标 - 赛博朋克风格
export const StarCyber: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1" className="animate-pulse" opacity="0.8" />
  </svg>
);

// CPU图标 - 赛博朋克风格
export const Cpu: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="7" y="7" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="9" y="9" width="6" height="6" fill="currentColor" opacity="0.3" />
    <path d="M10 2v5M14 2v5M10 17v5M14 17v5M2 10h5M17 10h5M2 14h5M17 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M10 2v5M14 2v5M10 17v5M14 17v5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 箭头右图标 - 赛博朋克风格
export const ChevronRight: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 箭头下图标 - 赛博朋克风格
export const ChevronDown: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 播放图标 - 赛博朋克风格
export const PlayCircle: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <polygon points="10,8 16,12 10,16 10,8" fill="currentColor" />
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" className="animate-pulse" opacity="0.5" />
    <polygon points="10,8 16,12 10,16 10,8" fill="currentColor" className="animate-pulse" opacity="0.3" />
  </svg>
);

// 时钟图标 - 赛博朋克风格
export const Clock: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 3v1M12 20v1M3 12h1M20 12h1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" className="animate-pulse" />
  </svg>
);

// 用户图标 - 赛博朋克风格
export const Users: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" />
    <circle cx="9" cy="7" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="20" cy="7" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
  </svg>
);

// 目标图标 - 赛博朋克风格
export const Target: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" className="animate-pulse" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 奖杯图标 - 赛博朋克风格
export const Award: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="8" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 1v2M7 3l1 1M17 3l-1 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
  </svg>
);

// 菜单图标 - 赛博朋克风格
export const Menu: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="3" cy="6" r="1" fill="currentColor" className="animate-pulse" />
    <circle cx="3" cy="12" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
    <circle cx="3" cy="18" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
  </svg>
);

// 关闭图标 - 赛博朋克风格
export const X: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" fill="none" className="animate-pulse" opacity="0.3" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 勾选图标 - 赛博朋克风格
export const CheckCircle: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" opacity="0.8" />
  </svg>
);

// 箭头右图标 - 赛博朋克风格
export const ArrowRight: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12h14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
    <circle cx="19" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 显示器图标 - 赛博朋克风格
export const Monitor: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="4" y="5" width="16" height="10" fill="currentColor" opacity="0.2" />
    <circle cx="12" cy="10" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M6 7h3M6 9h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 网络图标 - 赛博朋克风格
export const Network: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 7v6M12 13l-5.5 4M12 13l5.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
    <circle cx="12" cy="13" r="2" fill="currentColor" />
    <circle cx="12" cy="5" r="0.5" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 眼睛图标 - 赛博朋克风格
export const Eye: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 5v2M12 17v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.4" />
  </svg>
);

// 层级图标 - 赛博朋克风格
export const Layers: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l10 5v10l-10 5-10-5V7z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 7l10 5-10 5-10-5z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M2 12v5l10 5v-5M22 12v5l-10 5v-5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" opacity="0.6" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 箭头左图标 - 赛博朋克风格
export const ArrowLeft: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 12H5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
    <circle cx="5" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 刷新图标 - 赛博朋克风格
export const RefreshCw: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <polyline points="23,4 23,10 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="1,20 1,14 7,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-spin" style={{ animationDuration: '2s' }} />
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" fill="none" className="animate-pulse" opacity="0.3" />
  </svg>
);

// Hash图标 - 赛博朋克风格
export const Hash = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <line x1="4" y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="10" y1="3" x2="8" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="3" x2="14" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <rect x="8" y="9" width="8" height="6" fill="currentColor" opacity="0.2" />
  </svg>
);

// 计算器图标 - 赛博朋克风格
export const Calculator = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <rect x="7" y="5" width="10" height="3" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.5" />
    <circle cx="8" cy="12" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    <circle cx="12" cy="12" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    <circle cx="16" cy="12" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    <circle cx="8" cy="16" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    <circle cx="12" cy="16" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    <circle cx="16" cy="16" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    <circle cx="12" cy="6.5" r="0.5" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 电源图标 - 赛博朋克风格
export const Power = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M18.36 6.64a9 9 0 11-12.73 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="2" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2" />
    <circle cx="12" cy="2" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 2v10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 代码图标 - 赛博朋克风格
export const Code = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2" rx="2" fill="none" />
    <path d="M8 8l-2 4 2 4M16 8l2 4-2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 16.5v.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
    <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="1" rx="2" fill="none" className="animate-pulse" opacity="0.3" />
  </svg>
);

// 盾牌图标 - 赛博朋克风格
export const Shield = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2l8 3v7c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 2l8 3v7c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5z" stroke="currentColor" strokeWidth="1" fill="none" className="animate-pulse" opacity="0.4" />
  </svg>
);

// 箭头下图标 - 赛博朋克风格
export const ArrowDown = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 5v14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
    <circle cx="12" cy="19" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 文件夹图标 - 赛博朋克风格
export const Folder = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" stroke="currentColor" strokeWidth="1" fill="none" className="animate-pulse" opacity="0.5" />
    <circle cx="12" cy="13" r="0.5" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 服务器图标 - 赛博朋克风格
export const Server = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="6" cy="6" r="1" fill="currentColor" className="animate-pulse" />
    <circle cx="6" cy="18" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
    <line x1="10" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    <line x1="10" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
  </svg>
);

// 数据库图标 - 赛博朋克风格
export const Database = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3V5" stroke="currentColor" strokeWidth="2" />
    <path d="M21 12v7c0 1.66-4 3-9 3s-9-1.34-9-3v-7" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" opacity="0.5" />
    <circle cx="12" cy="5" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
    <circle cx="12" cy="19" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
  </svg>
);

// 图表图标 - 赛博朋克风格
export const BarChart = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2" rx="2" fill="none" />
    <rect x="7" y="8" width="3" height="13" fill="currentColor" opacity="0.6" />
    <rect x="14" y="5" width="3" height="16" fill="currentColor" opacity="0.6" />
    <rect x="7" y="8" width="3" height="13" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse" opacity="0.8" />
    <rect x="14" y="5" width="3" height="16" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse" opacity="0.8" />
    <circle cx="8.5" cy="8" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="15.5" cy="5" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
  </svg>
);

// 灯泡图标 (💡) - 赛博朋克风格
export const LightbulbCyber = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="18" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="9" r="2" fill="currentColor" className="animate-pulse" />
    <path d="M12 2v3M18 9h3M6 9H3M17 14l2 2M7 14l-2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 火箭图标 (🚀) - 赛博朋克风格
export const RocketCyber = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2L8 8l-3 1v6l3 1 4 6 4-6 3-1V9l-3-1z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
    <path d="M7 17l-2 4M17 17l2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="11" r="0.5" fill="currentColor" className="animate-pulse" />
    <path d="M12 22v-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-pulse" opacity="0.8" />
  </svg>
);

// 工具图标 (🔧) - 赛博朋克风格
export const Tool = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="18" cy="6" r="1" fill="currentColor" className="animate-pulse" />
    <circle cx="6" cy="18" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
    <path d="M15 9l-6 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 书籍图标 (📚) - 赛博朋克风格
export const Books = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 5h5v14H4zM9 5h5v14H9zM14 5h6v14h-6z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M4 5h5v14H4z" stroke="currentColor" strokeWidth="2" />
    <path d="M9 5h5v14H9z" stroke="currentColor" strokeWidth="2" />
    <path d="M14 5h6v14h-6z" stroke="currentColor" strokeWidth="2" />
    <circle cx="6.5" cy="8" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="11.5" cy="8" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
    <circle cx="17" cy="8" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
  </svg>
);

// 简单增长箭头图标
export const FoodGrowth = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    {/* 简单的上升箭头 */}
    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 7h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* 装饰性圆点 */}
    <circle cx="7" cy="17" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="17" cy="7" r="1.5" fill="currentColor" opacity="0.6" />
    
    {/* 简单脉动效果 */}
    <circle cx="17" cy="7" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 包裹图标 (📦) - 赛博朋克风格
export const Package = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2l10 5v10l-10 5-10-5V7z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 22V12M2 7l10 5 10-5M7 4.5L17 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 2v5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 闪光图标 (⚡) - 已存在 Zap，创建别名
export const Lightning = Zap;

// 目标靶心图标 (🎯) - 已存在 Target，创建别名
export const Bullseye = Target;

// 信号图标 (📡) - 赛博朋克风格
export const Signal = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
    <path d="M16.24 13.76a6 6 0 00-8.48 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M19.07 10.93a10 10 0 00-14.14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 8a14 14 0 00-20 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="18" r="0.5" fill="currentColor" className="animate-pulse" />
    <path d="M16.24 13.76a6 6 0 00-8.48 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 消息图标 (💬) - 赛博朋克风格  
export const Message = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="8" cy="11" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="12" cy="11" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
    <circle cx="16" cy="11" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
  </svg>
);

// 标签图标 (🏷️) - 赛博朋克风格
export const Tag = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="7" cy="7" r="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.6" />
    <circle cx="7" cy="7" r="0.5" fill="currentColor" className="animate-pulse" />
    <path d="M2 2l10 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 握手图标 (🤝) - 赛博朋克风格
export const Handshake = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M11 6l-3-3-6 6v8h7l3-3m10-8l-6-6-3 3m14 14v-8l-6-6m-5 5l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" className="animate-pulse" />
    <path d="M7 12h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 拼图图标 (🧩) - 赛博朋克风格
export const Puzzle = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 4h4c0-2 1-3 2-3s2 1 2 3h4v4c2 0 3 1 3 2s-1 2-3 2v4h-4c0 2-1 3-2 3s-2-1-2-3H4v-4c-2 0-3-1-3-2s1-2 3-2V4z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 刷新循环图标 (🔄) - 已有 RefreshCw，创建别名
export const Refresh = RefreshCw;

// 图表图标 (📊) - 已有 BarChart，创建别名
export const Chart = BarChart;

// 机器人图标 (🤖) - 赛博朋克风格
export const Robot = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <rect x="6" y="2" width="12" height="2" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
    <circle cx="9" cy="9" r="1" fill="currentColor" className="animate-pulse" />
    <circle cx="15" cy="9" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
    <path d="M8 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="4" y="20" width="4" height="2" rx="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.5" />
    <rect x="16" y="20" width="4" height="2" rx="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
  </svg>
);

// 大脑图标 (🧠) - 赛博朋克风格
export const Brain = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2C8 2 5 5 5 9c0 1.5.5 3 1.5 4C5.5 14 5 15.5 5 17c0 2.5 2 4.5 4.5 4.5h5c2.5 0 4.5-2 4.5-4.5 0-1.5-.5-3-1.5-4 1-.5 1.5-2.5 1.5-4 0-4-3-7-7-7z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M8 10c0-1 .5-2 1.5-2S11 9 11 10M13 10c0-1 .5-2 1.5-2S16 9 16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M9 14c1 1 2 1 3 1s2 0 3-1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
  </svg>
);

// 天平图标 (⚖️) - 赛博朋克风格
export const Scale = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 6l6 0 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="18" cy="6" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <rect x="8" y="20" width="8" height="2" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
    <circle cx="6" cy="6" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="18" cy="6" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
  </svg>
);

// 天平图标别名
export const Balance = Scale;

// 添加更多赛博朋克风格图标
export const Warning = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2L2 20h20L12 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 9v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
  </svg>
);

export const Cog = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 1v6m0 6v6m6.36-15.36l-4.24 4.24m-4.24 4.24l-4.24 4.24M23 12h-6m-6 0H1m16.36 6.36l-4.24-4.24m-4.24-4.24L4.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-spin-slow" />
  </svg>
);

export const ClipboardCheck = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
    <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const Globe = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
  </svg>
);

export const Timer = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="13" r="9" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
    <path d="M9 2h6m-3 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Map = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M8 2v16m8-12v16" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
  </svg>
);

export const Building = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="2" width="16" height="20" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <rect x="8" y="6" width="3" height="3" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
    <rect x="13" y="6" width="3" height="3" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
    <rect x="8" y="12" width="3" height="3" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
    <rect x="13" y="12" width="3" height="3" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
    <rect x="10" y="18" width="4" height="4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const MessageSquare = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="9" cy="10" r="1" fill="currentColor" className="animate-pulse" />
    <circle cx="12" cy="10" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
    <circle cx="15" cy="10" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
  </svg>
);

export const Camera: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

export const Film: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="3" width="20" height="18" rx="2" ry="2"/>
    <line x1="7" y1="3" x2="7" y2="21"/>
    <line x1="17" y1="3" x2="17" y2="21"/>
    <line x1="2" y1="9" x2="22" y2="9"/>
    <line x1="2" y1="15" x2="22" y2="15"/>
  </svg>
);

export const Video: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="23,7 16,12 23,17 23,7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

export const Edit3: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);

export const Lightbulb: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
  </svg>
);

export const Mic: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 1a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V5a4 4 0 0 0-4-4z"/>
    <path d="M19 10v1a7 7 0 0 1-14 0v-1"/>
    <line x1="12" y1="19" x2="12" y2="23"/>
    <line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
);

export const Clapperboard: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.2 6L3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/>
    <path d="M6.2 5.3l3.1 3.9"/>
    <path d="M12.4 3.4l3.1 4"/>
    <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  </svg>
);

export const Scissors: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/>
    <line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
);

export const Star: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
  </svg>
);

export const Megaphone: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 11h3l3-9v18l-3-9H3"/>
    <path d="M7 2h13"/>
    <path d="M7 22h13"/>
  </svg>
);

export const TrendingUp: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

export const Briefcase: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);

export const Building2: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
    <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"/>
    <path d="M10 6h4"/>
    <path d="M10 10h4"/>
    <path d="M10 14h4"/>
    <path d="M10 18h4"/>
  </svg>
);

export const Rocket: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

export const Trophy: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.04 18.75 14 20 14 20s1.96-1.25 3.03-1.79c.5-.23.97-.66.97-1.21v-2.34"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

export const Sparkles: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);

// AI工具图标
export const GPT: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor" className={className}>
    <path d="M475.52 26.88a252.032 252.032 0 0 1 176.128 71.872l3.456 3.648 7.552-1.344 8.768-1.088 8.832-0.768 17.728-0.64c90.24 0 173.568 47.68 218.432 124.8a244.032 244.032 0 0 1 26.048 187.264l-1.6 5.312 3.392 3.968c32.32 40 51.392 88.832 54.592 139.904l0.448 15.36c0 43.904-11.712 87.04-33.92 124.8-17.664 30.528-41.6 56.96-70.4 77.504a250.752 250.752 0 0 1-81.6 38.464l-4.864 1.152-0.896 2.56a251.84 251.84 0 0 1-222.464 159.936l-15.104 0.32a252.096 252.096 0 0 1-176.128-71.872l-3.392-3.584-5.824 1.024a255.168 255.168 0 0 1-109.76-7.872l-15.04-4.992-14.784-5.952a250.88 250.88 0 0 1-115.968-103.232 244.096 244.096 0 0 1-26.048-187.264l1.6-5.312-3.392-3.968a247.232 247.232 0 0 1-54.528-139.904l-0.512-15.36c0-43.904 11.776-87.04 34.048-124.928 17.6-30.464 41.6-56.896 70.4-77.44a250.816 250.816 0 0 1 81.536-38.464l4.8-1.28 1.024-2.56A251.904 251.904 0 0 1 460.48 27.264L475.584 26.88z m208.064 473.792v227.328a47.104 47.104 0 0 1-24.128 41.216l-166.144 94.592 8.256 4.48c17.92 8.768 37.44 14.208 57.6 15.744l12.16 0.448c86.592-0.192 156.544-69.184 156.608-154.24l0.128-204.224-44.48-25.344z m-77.824 138.88L406.272 753.28a48.192 48.192 0 0 1-48 0.064L191.36 658.304c0 22.72 5.12 44.928 14.72 65.216l6.272 11.904c13.696 23.424 33.472 42.88 57.28 56.448a158.528 158.528 0 0 0 156.736 0.064l179.328-102.08v-50.304z m39.488-300.288l-44.16 25.152 199.04 113.344c5.504 3.136 10.24 7.232 14.08 12.16l3.584 5.184a47.168 47.168 0 0 1 6.464 23.808l-0.064 189.952 6.848-3.968a154.048 154.048 0 0 0 71.424-118.4l0.448-11.328c0-27.072-7.232-53.632-20.928-77.056a155.52 155.52 0 0 0-57.28-56.512l-179.456-102.4z m-423.936-41.408l-8.512 5.12a152.832 152.832 0 0 0 8.128 262.016l179.328 102.4 44.224-25.152-198.912-113.28a47.68 47.68 0 0 1-14.208-12.16l-3.52-5.184a47.104 47.104 0 0 1-6.528-23.936V297.856zM522.816 408.96l-83.008 47.296V550.4l83.008 47.232L605.76 550.4V456.256L522.816 408.96z m-48.64-286.72c-86.528 0-156.608 69.12-156.672 154.176L317.44 480.64l44.48 25.344 0.192-227.2c0-6.272 1.28-12.48 3.712-18.304l2.816-5.568a47.488 47.488 0 0 1 17.6-17.28l166.016-94.72-8.128-4.352a158.528 158.528 0 0 0-57.792-15.808l-12.16-0.448z m223.36 71.872c-27.52 0-54.464 7.104-78.272 20.672L439.872 316.736v50.304l199.552-113.664a48.192 48.192 0 0 1 17.728-6.016l6.336-0.384c8.448 0 16.704 2.24 23.936 6.4l166.656 94.976-0.256-10.048c-5.12-77.056-67.648-138.816-145.92-143.808l-10.368-0.32z" />
  </svg>
);

export const N8N: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor" className={className}>
    <path d="M916.386987 242.517333a107.818667 107.818667 0 0 0-104.405334 80.853334H688.37632a107.776 107.776 0 0 0-106.325333 90.026666l-4.394667 26.624a53.888 53.888 0 0 1-53.162667 45.013334h-42.709333a107.818667 107.818667 0 0 0-208.768 0H212.34432a107.818667 107.818667 0 1 0 0 53.930666h60.672a107.818667 107.818667 0 0 0 208.810667 0h42.666666a53.888 53.888 0 0 1 53.205334 45.013334l4.394666 26.581333a107.776 107.776 0 0 0 106.325334 90.069333h15.786666a107.818667 107.818667 0 1 0 0-53.888h-15.786666a53.888 53.888 0 0 1-53.162667-45.056l-4.394667-26.581333A107.52 107.52 0 0 0 595.789653 512a107.52 107.52 0 0 0 34.986667-63.146667l4.437333-26.538666a53.888 53.888 0 0 1 53.162667-45.056h123.562667a107.818667 107.818667 0 1 0 104.405333-134.741334m0 53.888a53.888 53.888 0 0 1 53.888 53.888 53.888 53.888 0 0 1-53.888 53.930667A53.888 53.888 0 0 1 862.45632 350.293333a53.888 53.888 0 0 1 53.930667-53.888m-808.448 161.706667A53.888 53.888 0 0 1 161.869653 512a53.888 53.888 0 0 1-53.930666 53.888A53.888 53.888 0 0 1 54.050987 512a53.888 53.888 0 0 1 53.888-53.888m269.482666 0A53.888 53.888 0 0 1 431.309653 512a53.888 53.888 0 0 1-53.888 53.888A53.888 53.888 0 0 1 323.57632 512a53.888 53.888 0 0 1 53.888-53.888m431.146667 161.706667a53.888 53.888 0 0 1 53.930666 53.888 53.888 53.888 0 0 1-53.888 53.888 53.888 53.888 0 0 1-53.930666-53.888 53.888 53.888 0 0 1 53.888-53.930667" />
  </svg>
);

export const Runway: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor" className={className}>
    <path d="M483.328 769.299692c-1.851077 8.507077-3.190154 16.541538-5.316923 24.497231-19.810462 74.752-67.702154 122.013538-142.375385 140.681846-59.549538 14.926769-116.893538 6.380308-169.353846-26.269538-46.985846-29.341538-74.830769-72.270769-84.086154-126.818462a248.674462 248.674462 0 0 1-3.308307-40.684307c-0.196923-153.481846-0.078769-306.963692-0.07877-460.445539C78.769231 185.186462 146.904615 101.730462 240.206769 83.101538a211.022769 211.022769 0 0 1 40.526769-4.135384c154.624-0.275692 309.248-0.275692 463.793231-0.118154 45.174154 0.118154 86.646154 12.209231 122.486154 40.566154 35.367385 27.923692 57.619692 64.669538 68.253539 108.110769 14.099692 57.619692 8.034462 113.152-22.646154 164.588308-27.057231 45.528615-67.780923 73.097846-118.86277 85.661538-7.640615 1.969231-15.478154 3.190154-23.670153 4.962462 1.181538 1.260308 2.126769 2.402462 3.150769 3.465846 38.990769 38.872615 77.981538 77.587692 116.854154 116.539077 30.444308 30.444308 48.049231 67.111385 53.563077 109.961846 10.633846 82.313846-33.949538 170.496-106.57477 209.841231a186.092308 186.092308 0 0 1-90.702769 22.252307c-12.957538 0-25.836308 0.590769-38.596923-1.732923-23.197538-4.253538-44.268308-13.745231-64.196923-25.993846-28.750769-17.801846-53.76-39.975385-77.469538-63.763692-24.772923-24.812308-49.033846-50.176-73.609847-75.224615-2.875077-3.111385-5.907692-5.789538-9.176615-8.822154zM201.531077 512.787692v126.188308c0 36.667077-0.393846 73.334154 0.196923 109.961846 0.393846 22.331077 9.924923 40.920615 27.963077 54.468923 17.841231 13.430154 38.360615 17.959385 60.219077 16.147693 18.274462-1.575385 34.816-7.876923 48.561231-20.401231 16.423385-15.084308 23.000615-34.343385 23.000615-56.123077V280.064c0-3.662769-0.196923-7.483077-0.787692-11.027692-6.183385-40.526769-45.056-70.971077-85.976616-67.584a80.265846 80.265846 0 0 0-73.255384 79.872c0.078769 77.193846 0.078769 154.348308 0.078769 231.424z m282.978461-29.144615c-0.118154 1.851077-0.196923 3.150769-0.196923 4.371692 0 35.131077-0.118154 70.222769 0.07877 105.314462 0 1.969231 1.063385 4.450462 2.520615 5.828923a56947.003077 56947.003077 0 0 0 202.318769 202.121846c17.329231 17.211077 38.478769 24.654769 63.015385 20.283077 23.630769-4.135385 41.826462-17.014154 55.729231-36.076308 11.224615-15.438769 17.132308-32.768 15.596307-52.224-1.575385-18.825846-10.358154-34.107077-23.512615-47.261538a387007.842462 387007.842462 0 0 1-199.286154-199.246769 9.176615 9.176615 0 0 0-7.404308-3.072c-34.697846 0.078769-69.316923 0.078769-104.054153 0.078769-1.457231-0.078769-2.875077-0.078769-4.804924-0.078769z m-0.118153-122.486154h159.586461c34.500923 0 69.041231 0.472615 103.581539-0.118154 28.317538-0.472615 49.979077-13.351385 63.40923-38.675692 9.019077-16.935385 11.421538-35.209846 8.822154-54.075077-5.041231-36.824615-31.744-66.638769-73.412923-66.717538-91.372308-0.196923-182.665846-0.078769-274.077538-0.07877-1.181538 0-2.402462 0.157538-3.859693 0.393846 7.089231 15.635692 10.712615 31.704615 12.760616 48.246154 3.387077 26.978462 3.465846 54.035692 3.111384 81.211077l0.07877 29.814154z" />
  </svg>
);

export const SeedDream: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 1170 1024" fill="currentColor" className={className}>
    <path d="M0 968.216381l197.87581-50.517333V105.22819L0 54.710857z" />
    <path d="M968.216381 0v1018.733714L1170.285714 968.216381V54.710857z" />
    <path d="M648.289524 378.88l202.069333-50.517333v534.625523l-202.069333-50.517333z" />
    <path d="M315.733333 458.849524l202.069334 50.517333v433.590857L315.733333 997.668571z" />
  </svg>
);

export const LumaAI: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor" className={className}>
    <path d="M512 509.696V0L71.9872 257.1264v509.7472L512 1024l440.0128-257.1264L512 509.696z" />
  </svg>
);

export const FoodAI: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor" className={className}>
    <path d="M512 0C794.772048 0 1024 229.227952 1024 512S794.772048 1024 512 1024 0 794.772048 0 512 229.227952 0 512 0zM777.253012 160.385542c-20.48 0-37.184771 16.050892-37.184771 35.679615v107.544674H695.456386V178.237687c0-9.82053-8.352386-17.839807-18.592386-17.839807-10.24 0-18.592386 8.019277-18.592386 17.839807v125.372144h-44.599518v-107.544674c0-19.616386-16.717108-35.667277-37.197108-35.667277v214.447807c0 37.147759 29.671325 67.855422 67.386602 71.556626v410.01947c0 17.519036 14.928193 31.867373 33.212145 31.867374 18.283952 0 33.224482-14.360675 33.224482-31.879711V446.291277c37.505542-3.898602 66.843759-34.507566 66.843759-71.556626V303.498795L777.253012 160.385542z m-468.819277 11.103615V888.289157c37.394506 0 67.584-30.596627 67.584-68.287229l-1.246072-292.234795c33.730313-28.277205 88.989301-216.347759 35.716626-291.28482-19.320289-27.216193-61.20559-57.936193-84.917976-74.184482a10.980241 10.980241 0 0 0-17.136578 9.178988z" p-id="13150"></path>
  </svg>
);

