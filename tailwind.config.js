/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        uranian_blue: "#a5d8ff",
        onyx: "#383d3b",
        yellow: "#f0f600",
        cornell_red: "#ba1b1d",
        berkeley_blue: "#1d3557",
      },
    },
  },
  plugins: [],
};
