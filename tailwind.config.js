/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#413288',
        'dark-grey': '#413c58',
        'primary-green': '#bfd7b5',
        'secondary-green': '#a3c4bc',
        light: '#ebebeb',
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
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};

