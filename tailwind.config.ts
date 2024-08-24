import { type Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#22AFFF",
        blue: "#222BFF",
        red: "#FF2121",
        orange: "#FF8B20",

        //Neutral Color
        gray: "#808080",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
