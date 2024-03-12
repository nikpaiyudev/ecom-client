import { url } from "inspector";
const withMT = require("@material-tailwind/react/utils/withMT");
// import './public/assets/img/'
const config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // "play-station" : "url('./public/assets/img/playstation.png')",
        // "echo-speakers": "url('./public/assets/img/speakers.png')"
      },
    },
  },
  plugins: [],
});
export default config;
