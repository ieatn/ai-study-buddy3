module.exports = {
  // ... other config
  theme: {
    extend: {
      // ... other extensions
      utilities: {
        '.backface-hidden': {
          'backface-visibility': 'hidden',
          '-moz-backface-visibility': 'hidden',
          '-webkit-backface-visibility': 'hidden',
        },
      },
    },
  },
} 