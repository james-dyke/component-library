/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  jit: true,
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/line-clamp"),
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