/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige-brown': {100: '#F7F4F2', 200: '#E0D4CC', 300: '#D1BEB0', 400: '#AB9F9D', 500: '#917878', 600:'#7B6565', 700: '#4C392F'},
        'rose-red': {200: '#F7DEE5', 500: '#CA2E55', 600: '#A4284D', 700: '#83203E'},
        'blue-gray': {100: '#C3C8D5', 200:'#AEBBD6', 300: '#446288', 400: '#3C4F76', 500: '#383F51', 600: '#223144', 700:'#1C2636', 800:'#212531'},
        // beige-brown shades == "beige-brown"
        'isabelline': '#F7F4F2',
        'timberwolf': '#E0D4CC',
        'pale-silver': '#D1BEB0',
        'quick-silver': '#AB9F9D',
        'cinereous': '#917878',
        'deep-taupe': '#7B6565',
        'dark-liver-horses': '#4C392F',
        // rose-red shades:
        'piggy-pink': '#F7DEE5',
        'rubine-red': '#CA2E55',
        'armanda-purple': '#A4284D',
        'claret': '#83203E',

        // blue shades == 'blue-gray'
        'cultured': '#F3F4F7',
        'lavender-gray': '#C3C8D',
        'light-steel-blue': '#AEBBD6',
        'yin-mn-blue': '#3C4F76',
        'prussian-blue': '#223144',
        'charcoal': '#383F51',
        'rick-black-fogra': '#1C2636',
        'raisin-black': '#212531',
    },
    // fontFamily: {
    //   "open-sans": "open sans"

    // },
    // backgroundImage: {
    //   'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
    // }
  },
},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}


// info: about radial gradient with tailwind https://play.tailwindcss.com/fBVvvF0Phn
