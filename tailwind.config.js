/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // معرفی فونت های مورد استفاده
    fontFamily: {
      primary: ["Lexend", "sans-serif"],
      secondary: ["PT Serif", "serif"],
    },
    // استایل دهی container
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    // مشخص کردن محدوده اسکرین ها
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1440px",
      xl: "2000px",
    },
    extend: {
      //ایجاد رنگ های مورد نظر
      colors: {
        primary: "#e4e3de",
        accent: "#3d3e6b",
      },
      backgroundImage: {
        banner: "url('./assets/NBT-2.png')",
      },
    },
  },
  plugins: [],
};
