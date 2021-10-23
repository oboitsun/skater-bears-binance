module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1600px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        crmsn: "#E0842A",
        grey: "#808080",
        drkGray: "#D4D4D4",
        lghtGray: "#F9F9F9",
      },
      maxWidth: {
        864: "864px",
        1080: "1080px",
        1440: "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
