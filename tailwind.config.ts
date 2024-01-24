import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "sapphireBlue": "#0019FF"
      },
      backgroundImage: {
        "backgroundMobile": "url('/img/backgroundMobile.png')",
        "backgroundDesktop": "url('/img/backgroundDesktop.png')",
      },
      borderColor: {
        "grayishLavender": "#A3A2AA",
      },
      colors: {
        "paleSilver": "#E1E1E1",
        "lightGrayish": "#E5E5E5",
        "grayishLavender": "#A3A2AA",
      },
      dropShadow: {
        "submit": "0px 5px 5px 0px rgba(15, 38, 251, 0.10",
      },
      fontSize: {
        '1nw': ['40px', {
          lineHeight: '120%',
          fontWeight: '800',
        }],
        '2nw': ['14px', {
          lineHeight: '160%',
          fontWeight: '400',
          letterSpacing: '1.25px',
        }],
      }
    },
  },
  plugins: [],
};
export default config;
