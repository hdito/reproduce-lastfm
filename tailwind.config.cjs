/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      boxShadow: {
        "border-b": "inset 0 -1px #ebebeb",
      },
      colors: {
        lastfm: {
          red: "#b90000",
          obsidian: "#111",
          mineshaft: "#222",
          graphite: "#666",
          blue: "#06f",
          gold: "#f90",
          green: "#096",
          velvet: "#90f",
          platinum: "#f9f9f9",
          lunar: "#ebebeb",
          navy: "#005399",
        },
      },
      fontFamily: { barlow: ["Barlow", "Open-Sans", "sans-serif"] },
    },
  },
  plugins: [],
};
