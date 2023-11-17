/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#4A3AFF",
        mainRed:"#ED3159",
        mainGray:"#8B929D",
        mainYellow:"#ED9731",
        mainGreen:"#55DD4A",
        mainGray2:"#7C8DB5",
        mainGray7:"#E6EDFF",
        mainGra10:"#F1F0FC",
  
      },
      boxShadow: {
        'light': '0 10px 20px rgba(112, 144, 176, 0.1)',

      },
      gridTemplateColumns: {
        'myGrid': 'repeat(auto-fill, minmax(350px, 1fr))',
      },
    },
  },
  plugins: [],
};
