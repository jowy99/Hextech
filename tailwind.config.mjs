/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				verde: {
					"50": "#e5e9e7",
					"100": "#cbd4cf",
					"200": "#b1bfb7",
					"300": "#97aa9f",
					"400": "#7d9587",
					"500": "#3c4d45", // Base
					"600": "#313f39",
					"700": "#26322e",
					"800": "#1b2522",
					"900": "#101917",
				},
				dorado: {
					"50": "#fbf6ed",
					"100": "#f7eedb",
					"200": "#f0e2c1",
					"300": "#ead7a7",
					"400": "#e3cb8d",
					"500": "#e6cc9b", // Base
					"600": "#BFAB81",
					"700": "#998968",
					"800": "#73684e",
					"900": "#4d4634",
				},
				negro: {
					"50": "#d9d9d9",
					"100": "#bfbfbf",
					"200": "#a6a6a6",
					"300": "#8c8c8c",
					"400": "#737373",
					"500": "#282828", // Base
					"600": "#212121",
					"700": "#1a1a1a",
					"800": "#141414",
					"900": "#0d0d0d",
				},
				beige: {
					"50": "#fefdfb",
					"100": "#fcfbf7",
					"200": "#faf7ef",
					"300": "#f8f3e7",
					"400": "#f6efdf",
					"500": "#f9f3e5", // Base
					"600": "#c7c4b8",
					"700": "#95948a",
					"800": "#63635c",
					"900": "#32322e",
				},
			},
			fontFamily: {
				playfair: ['"Playfair"', 'serif'],
			}
		},
	},
	plugins: [
		animations,
		require('@tailwindcss/typography'),
	],
}
