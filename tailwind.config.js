/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 轻食主色调 - 新鲜绿
        'fresh-green': {
          900: '#14532d',
          800: '#166534',
          700: '#15803d',
          600: '#16a34a',
          500: '#22c55e',
          400: '#4ade80',
          300: '#86efac',
          200: '#bbf7d0',
          100: '#dcfce7',
          50: '#f0fdf4',
        },
        // 轻食活力橙
        'vitality-orange': {
          900: '#9a3412',
          800: '#c2410c',
          700: '#ea580c',
          600: '#f97316',
          500: '#fb923c',
          400: '#fdba74',
          300: '#fed7aa',
          200: '#fef3c7',
          100: '#fffbeb',
          50: '#fffcf5',
        },
        // 轻食柠檬黄
        'lemon-yellow': {
          900: '#713f12',
          800: '#854d0e',
          700: '#a16207',
          600: '#ca8a04',
          500: '#eab308',
          400: '#facc15',
          300: '#fde047',
          200: '#fef08a',
          100: '#fefce8',
          50: '#fffef0',
        },
        // 轻食薄荷绿
        'mint-green': {
          900: '#064e3b',
          800: '#065f46',
          700: '#047857',
          600: '#059669',
          500: '#10b981',
          400: '#34d399',
          300: '#6ee7b7',
          200: '#a7f3d0',
          100: '#d1fae5',
          50: '#ecfdf5',
        },
        // 轻食天然蓝
        'natural-blue': {
          900: '#0c4a6e',
          800: '#075985',
          700: '#0369a1',
          600: '#0284c7',
          500: '#0ea5e9',
          400: '#38bdf8',
          300: '#7dd3fc',
          200: '#bae6fd',
          100: '#e0f2fe',
          50: '#f0f9ff',
        },
        // 轻食温和粉
        'soft-pink': {
          900: '#881337',
          800: '#9f1239',
          700: '#be123c',
          600: '#e11d48',
          500: '#f43f5e',
          400: '#fb7185',
          300: '#fda4af',
          200: '#fecdd3',
          100: '#ffe4e6',
          50: '#fff1f2',
        },
        // 轻食大地棕
        'earth-brown': {
          900: '#451a03',
          800: '#78716c',
          700: '#a8a29e',
          600: '#d6d3d1',
          500: '#e7e5e4',
          400: '#f3f4f6',
          300: '#f9fafb',
          200: '#fefefe',
          100: '#ffffff',
          50: '#ffffff',
        },
        // 轻食深色背景（保持优雅）
        'food-dark': {
          950: '#0a0a0a',
          900: '#1c1c1c',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#a3a3a3',
          300: '#d4d4d4',
          200: '#e5e5e5',
          100: '#f5f5f5',
          50: '#fafafa',
        },
        // 保留旧色系用于快速迁移
        'cyber-pink': {
          500: '#22c55e', // 映射到绿色
          400: '#4ade80',
        },
        'neon-purple': {
          500: '#fb923c', // 映射到橙色
          400: '#fdba74',
        },
        'neon-cyan': {
          500: '#0ea5e9', // 映射到蓝色
          400: '#38bdf8',
        },
        'cyber-dark': {
          950: '#0a0a0a',
          900: '#1c1c1c',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#a3a3a3',
          300: '#d4d4d4',
          200: '#e5e5e5',
          100: '#f5f5f5',
          50: '#fafafa',
        },
        base: { 
          50: '#f0fdf4',
          800: '#16a34a',
          900: '#14532d'
        },
        accent: { 
          500: '#fb923c'
        },
        'surf-tundra': {
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        'accent-sand': {
          400: '#fdba74',
          500: '#fb923c',
          600: '#f97316',
        }
      },
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
      },
      backdropSaturate: {
        150: '150%',
        175: '175%',
        200: '200%',
      },
      boxShadow: {
        'fresh-green': '0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.2), 0 0 60px rgba(34, 197, 94, 0.1)',
        'vitality-orange': '0 0 20px rgba(251, 146, 60, 0.3), 0 0 40px rgba(251, 146, 60, 0.2), 0 0 60px rgba(251, 146, 60, 0.1)',
        'lemon-yellow': '0 0 20px rgba(234, 179, 8, 0.3), 0 0 40px rgba(234, 179, 8, 0.2), 0 0 60px rgba(234, 179, 8, 0.1)',
        'natural-blue': '0 0 20px rgba(14, 165, 233, 0.3), 0 0 40px rgba(14, 165, 233, 0.2), 0 0 60px rgba(14, 165, 233, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 0.5px rgba(255, 255, 255, 0.2) inset',
        'glass-hover': '0 12px 48px rgba(0, 0, 0, 0.15), 0 0 0 0.5px rgba(255, 255, 255, 0.25) inset',
        'glass-sm': '0 4px 24px rgba(0, 0, 0, 0.08), 0 0 0 0.5px rgba(255, 255, 255, 0.15) inset',
        'glass-lg': '0 20px 60px rgba(0, 0, 0, 0.12), 0 0 0 0.5px rgba(255, 255, 255, 0.2) inset',
        'inner-light': '0 0 0 0.5px rgba(255, 255, 255, 0.15) inset',
        // 保持兼容
        'neon-pink': '0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.2)',
        'neon-blue': '0 0 20px rgba(14, 165, 233, 0.3), 0 0 40px rgba(14, 165, 233, 0.2)',
        'neon-purple': '0 0 20px rgba(251, 146, 60, 0.3), 0 0 40px rgba(251, 146, 60, 0.2)',
        'neon-cyan': '0 0 20px rgba(14, 165, 233, 0.3), 0 0 40px rgba(14, 165, 233, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fresh-glow': 'freshGlow 3s ease-in-out infinite',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
        'organic-pulse': 'organicPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        freshGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        organicPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
}