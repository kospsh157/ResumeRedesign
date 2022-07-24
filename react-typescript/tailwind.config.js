/** @type {import('tailwindcss').Config} */

// 여기 컨텐트에 반드시 태일윈드css를 적용시킬 파일들의 확장자를 추가시켜줘야 한다.
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fromColor: "#eeaeca",
        toColor: "#94bbe9",
      },
    },
  },
  plugins: [],
};
