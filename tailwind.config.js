/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 7s infinite",
        blob: "blob 7s infinite",
        passing: "passing 15s linear infinite",
        torch: "torch 3s infinite",
        skewed: "skewed 4s linear infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "scale(1) translate(0px, 0px)",
          },
          "33%": {
            transform: "scale(0.9) translate(30px, -50px)",
          },
          "66%": {
            transform: "scale(1.1) translate(-20px, 20px)",
          },
          "100%": {
            transform: "scale(1) translate(0px, 0px)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "25%": {
            transform: "translate(50px, 0px)",
          },
          "50%": {
            transform: "translate(50px, 30px)",
          },
          "75%": {
            transform: "translate(0px, 30px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
        passing: {
          "0%": {
            left: "-100%",
          },
          "50%": {
            left: "%0",
          },

          "100%": {
            left: "100%",
          },
        },
        torch: {
          from: {
            backgroundPosition: "-270% 0",
          },
          to: {
            backgroundPosition: "320% 0",
          },
        },
        skewed: {
          "0%": {
            transform: "skewY(6deg)",
          },
          "25%": {
            transform: "skewY(0deg)",
          },
          "50%": {
            transform: "skewY(-6deg)",
          },
          "75%": {
            transform: "skewY(0deg)",
          },
          "100%": {
            transform: "skewY(6deg)",
          },
        },
        glow: {
          from: {
            top: "20rem",
          },
          to: {
            top: "-20rem",
          },
        },
      },
    },
  },
  plugins: [],
};
