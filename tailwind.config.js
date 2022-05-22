module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fe5a0e",
          secondary: "#282828",
          accent: "#f5f5f5",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
