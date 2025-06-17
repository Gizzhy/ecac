/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./modal/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-light": ["Montserrat_300Light"],
        montserrat: ["Montserrat_400Regular"],
        "montserrat-semibold": ["Montserrat_600SemiBold"],
        "montserrat-bold": ["Montserrat_700Bold"],
      },
    },
  },
  plugins: [],
};
