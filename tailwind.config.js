/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        fern_green: "#3b6b2a",
        puce: "#d27a94",
        parchment: "#f1e8d3",
        jet: "#393939",
      },
    },
  },
  plugins: [],
};
