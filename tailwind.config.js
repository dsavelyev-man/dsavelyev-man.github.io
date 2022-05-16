module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "border": "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
      },
      fontFamily: {
        display: ["Oswald"]
      },
      colors: {
        "custom-blue": "#1d2e80"
      }
    },
  },
  plugins: [],
}
