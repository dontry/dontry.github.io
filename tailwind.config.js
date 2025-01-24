/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#413288',
        'dark-grey': '#413c58',
        'primary-green': '#bfd7b5',
        'secondary-green': '#a3c4bc',
        light: '#ebebeb',
        dark: {
          bg: '#1a1a1a',
          text: '#e5e9f0',
          'text-secondary': '#a3b1cc',
          border: '#2e2e2e',
        },
      },
      fontSize: {
        xs: '10px',
        sm: '14px',
        base: '18px',
        lg: '24px',
      },
      screens: {
        xs: '400px',
        sm: '600px',
        md: '780px',
        lg: '980px',
        xl: '1280px',
        '2xl': '1340px',
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      lineHeight: {
        'button': '38px',
      },
      letterSpacing: {
        'button': '0.1rem',
      },
      backgroundColor: {
        dark: {
          DEFAULT: '#1a1a1a',
          secondary: '#2e2e2e',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};

