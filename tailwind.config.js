/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e1e1e1',
          900: '#0a0a0a',
          950: '#050505'
        },
        accent: {
          violet: '#a78bfa',
          cyan: '#06b6d4',
          blue: '#3b82f6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'sans-serif']
      },
      backdropBlur: {
        xs: '2px'
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        slideInUp: 'slideInUp 0.6s ease-out',
        fadeIn: 'fadeIn 0.8s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(167, 139, 250, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(167, 139, 250, 0.8)' }
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
