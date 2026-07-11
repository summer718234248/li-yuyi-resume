/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07100e',
        moss: '#10b981',
        aqua: '#06b6d4',
        lime: '#b9f227',
        cloud: '#e9f5ef'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(16,185,129,0.2), 0 16px 55px rgba(16,185,129,0.12)',
        aqua: '0 0 0 1px rgba(6,182,212,0.22), 0 16px 55px rgba(6,182,212,0.12)'
      }
    }
  },
  plugins: []
}
