/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: '0.81rem',
      },
      minHeight: {
        'd-screen': '100dvh',
      },
      height: {
        'd-screen': '100dvh',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'identification-image': 'url(../assets/images/identification-01.jpg)',
      },
      backgroundColor: {
        'unique-cream-900': '#E9ECDB',
        'unique-cream-800': '#e9ecdbdf',
        'unique-cream-700': '#e9ecdbc6',

        'unique-gold-900': '#AEA668',
        'unique-gold-800': '#aea668e1',
        'unique-gold-700': '#aea668c6',

        'unique-gray-900': '#363940',
        'unique-gray-800': '#363940e7',
        'unique-gray-700': '#363940ce',
      },
      textColor: {
        error: '#FF5733',
        'unique-cream-900': '#E9ECDB',
        'unique-cream-800': '#e9ecdbdf',
        'unique-cream-700': '#e9ecdbc6',

        'unique-gold-900': '#AEA668',
        'unique-gold-800': '#aea668e1',
        'unique-gold-700': '#aea668c6',

        'unique-gray-900': '#363940',
        'unique-gray-800': '#363940e7',
        'unique-gray-700': '#363940ce',
      },
      boxShadowColor: {
        'unique-gray': '#363940',
      },
    },
  },
  plugins: [],
};
