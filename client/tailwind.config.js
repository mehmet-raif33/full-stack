/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'myFont': ['Roboto']
    },
    screens: {
      'phone0': '200px',
      'phone1': '300px',
      'phone2': '430px',
      'phone3': '500px',
      'phone4': '650px',
      'phone5': '700px',
      'phone6': '750px'
    },
    extend: {},
  },
  plugins: [],
}
