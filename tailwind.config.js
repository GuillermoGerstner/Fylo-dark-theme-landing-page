/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        fff: "#fff",
      },
    },
    fontFamily: {
      OpenSans: ["Open Sans", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
