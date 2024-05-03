const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backGroundColor: {
        'acre-yellow-bg': '#DE9811',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

