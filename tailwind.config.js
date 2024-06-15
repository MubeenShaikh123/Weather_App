// tailwind.config.js

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        reveal: {
          from: {
            opacity: '0',
            scale: '0.7',
            clipPath: 'polygon(0 0, 0 0, 0 82%, 0% 100%)',
          },
          to: {
            opacity: '1',
            scale: '1',
            clipPath: 'polygon(0 0, 100% 0, 99% 100%, 0 100%)',
          },
        },
      },
      screens: {
        'xs': '320px', // Extra Small
        'sm': '576px', // Small
        'md': '768px', // Medium
        'lg': '992px', // Large
        'xl': '1200px', // Extra Large
      }
    }
  },
  plugins: [],
}
