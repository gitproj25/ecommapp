


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ✅ Custom breakpoints
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        lightGray: '#F0F0F0',
          semiBlack: '#00000099',
      },

      // ✅ Custom fonts
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
        satoshi: ['"Satoshi"', 'sans-serif'], // <-- added Satoshi
         roboto: ["Roboto", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        poppins: ["Poppins", "sans-serif"], 
         integral: ["IntegralCF", "sans-serif"],
      },

      // ✅ Keyframes
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "infinite-scroll-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        // marquee: {
        //   "0%": { transform: "translateX(0)" },
        //   "100%": { transform: "translateX(-50%)" },
        // },
      },

      // ✅ Animations
      animation: {
        "infinite-scroll": "infinite-scroll 50s linear infinite",
        "infinite-scroll-reverse": "infinite-scroll-reverse 50s linear infinite ",
        
        marquee: "marquee 20s linear infinite",
      },
    },
  },
plugins: [
  function ({ addUtilities }) {
    addUtilities({
      '.pause-on-hover:hover': {
        'animation-play-state': 'paused',
      },
    });
  },
],

  corePlugins: {
    preflight: true,
  },
  // ⚠️ In Tailwind v3+, JIT is default — no need to add this
  // mode: 'jit',
};
