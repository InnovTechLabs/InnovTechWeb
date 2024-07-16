import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors : {
      purple : '#8B54FF',
      lightpurple : '#9664FF',
      darkpurple : '#5C28CA',
      yellow : "#FFD80D",
      black : "#010C2A",
      gray :  "#F2F0ED",
      cream : "#FFF3E6",
      white : "#FFFFFF",
      navyblue : "#00234B"
    },
    fontFamily : {
      manrope : ['Manrope', 'sans-serif'],
      nunito : ['Nunito']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
