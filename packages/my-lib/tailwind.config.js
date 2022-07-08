/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  jit: true,
  content: ['src/**/*.{ts,tsx}'],
  safelist: [
    {
      pattern: /text-(blue|red|green|orange|black)-(10|20|30|40|50|60|70)/,
    },
  ],
  theme: {
    colors: {
      'blue': {
        10: '#EEF3FF',
        20: '#D1DEFF',
        30: '#A8C0FF',
        40: '#6993FF',
        50: '#3069FE',
        60: '#1252F7',
        70: '#0846E4',
      },
      'red': {
        10: '#FDF2F2',
        20: '#F8D4D7',
        30: '#F8B0B4',
        40: '#F57F86',
        50: '#EC5962',
        60: '#D45058',
        70: '#C2434B',
      },
      'green': {
        10: '#EBFAE2',
        20: '#D9F0CA',
        30: '#B3E494',
        40: '#85D355',
        50: '#68C132',
        60: '#57AD23',
        70: '#4F9C20',
      },
      'orange': {
        10: '#FFF2E4',
        20: '#FFDDB9',
        30: '#FFC382',
        40: '#FFA849',
        50: '#FF921B',
        60: '#ED810C',
        70: '#D87407',
      },
      'black': {
        00: '#FFFFFF',
        10: '#F6F6F6',
        15: '#EDEDED',
        20: '#DEDEDE',
        30: '#C9C9C9',
        40: '#A5A5A5',
        50: '#808080',
        60: '#666666',
        70: '#4D4D4D',
        80: '#333333',
        90: '#252525',
        100: '#1A1919',
      },
    },
   
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".mask": {
          "-webkit-mask": "linear-gradient(#fff 0 0 ) content-box, linear-gradient(#fff 0 0)",
          "-webkit-mask-composite": "destination-out",
          "mask-composite": "exclude",
        },
        ".bggradient": {
          background:
            "linear-gradient(90deg, #03FFFF -0.78%, #23CBFB 21.56%, #7449F3 73.36%, #9F04EE 99.77%, #E000FF 100.78%)",
        },
      });
    }),
  ],
  
  corePlugins: {
    preflight: true,
  },
}