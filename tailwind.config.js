module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#202020",
          boxColor: "#151515",
          text: "#F0FFFF",
        },
        light: {
          background: "#F0FFFF",
          boxColor: "#C2C2C2",
          text: "#202020",
        },
        green: "#1ED760",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
