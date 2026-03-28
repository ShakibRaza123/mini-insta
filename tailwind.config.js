export default {
  theme: {
    extend: {
      keyframes: {
        boom: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '40%': { transform: 'scale(1.4)', opacity: '1' },
          '60%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },

        floatUp: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '1' },
          '100%': { transform: 'translateY(-120px) scale(1.2)', opacity: '0' },
        },

        particle: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },

      animation: {
        boom: 'boom 0.7s ease-out forwards',
        float: 'floatUp 1.2s ease-out forwards',
        particle: 'particle 0.6s ease-out forwards',
      },
      plugins: [
        require('tailwind-scrollbar-hide')
      ]
    },
  },
};