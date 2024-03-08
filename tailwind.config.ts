import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '320px',
        sm: '480px',
        md: '768px',
        xl: '1280px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sx: '1.25rem',
          md: '2rem',
          xl: '1.5rem',
        },
        screens: {
          sm: '480px',
          md: '768px',
          lg: '768px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },

      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
      },
    },
  },
  plugins: [],
};
export default config;
