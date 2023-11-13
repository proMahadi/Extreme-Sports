/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1320px',
      },
      colors: {
        primary: '#FF9600',
        secondary: '#0C3543',
      },
      backgroundImage: {
        banner: "url('assets/banner.png')",
        bannerVector: "url('assets/bannerVector.png')",
        counterBgImg: "url('assets/counterBgImg.png')",
        Xvector: "url('assets/Xvector.png')",
        Xbg: "url('assets/Xbg.png')",
      }
    },
    fontFamily: {
      IBM: ['IBM Plex Sans', 'sans-serif'],
      tail: ['Yellowtail', 'cursive'],
      ariz: ['Arizonia', 'cursive'],
    },
    screens: {
      lg: '1025px',
    },
  },
  plugins: [],
}

