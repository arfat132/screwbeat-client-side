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
          primary: "#A38D80",
          secondary: "#000000",
          accent: "#f5f5f5",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
