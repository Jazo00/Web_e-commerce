/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';

export default {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite/**/*.js'], // Include Flowbite's content
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
  ],
}
