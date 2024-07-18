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
      black : "#120A21",
      gray :  "#F2F0ED",
      darkgray : "#97A5BB",
      cream : "#FFF3E6",
      white : "#FFFFFF",
      navyblue : "#00234B",
      lightpink : "#F7F3FF"
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
