import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#000000',
          gray: '#121212',
          blue: '#0074D9',
          electric: '#00BFFF',
          neon: '#39FF14',
          white: '#FFFFFF',
          'dark-blue': '#001F3F',
          'light-gray': '#2A2A2A',
          'dark-gray': '#1A1A1A',
          'text-primary': '#FFFFFF',
          'text-secondary': '#B0B0B0',
        }
      },
      animation: {
        'cyber-pulse': 'cyber-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cyber-glow': 'cyber-glow 2s ease-in-out infinite',
        'cyber-float': 'cyber-float 3s ease-in-out infinite',
        'text-flicker': 'text-flicker 1.5s ease-in-out infinite',
        'border-flow': 'border-flow 2s linear infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
      },
      keyframes: {
        'cyber-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'cyber-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 5px #0074D9, 0 0 10px #0074D9, 0 0 15px #0074D9',
          },
          '50%': {
            'box-shadow': '0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #00BFFF',
          },
        },
        'cyber-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'text-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
        'matrix-rain': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to right, #121212, #001F3F)',
        'button-gradient': 'linear-gradient(to right, #0074D9, #00BFFF)',
        'accent-gradient': 'linear-gradient(to right, #39FF14, #00BFFF)',
        'glow-gradient': 'radial-gradient(circle at center, #0074D9 0%, transparent 70%)',
      },
      boxShadow: {
        'cyber': '0 0 10px #0074D9',
        'cyber-strong': '0 0 20px #00BFFF',
        'neon': '0 0 10px #39FF14',
        'neon-strong': '0 0 20px #39FF14',
      },
    },
  },
  plugins: [],
};

export default config; 