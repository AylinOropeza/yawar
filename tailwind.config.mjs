/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		colors: {
			neutral: colors.neutral,
			yawar: {
				100: "#f7ebeb",
				200: "#eacaba",
				300: "#f19d7a",
				400: "#c82835",
				500: "#7c1922",
			}
		},
		extend: {},
		fontFamily: {
			raleway: ['Raleway', 'sans-serif'],
			caveatbrush: ['Caveat Brush', 'sans-serif'],
		}
	},
	plugins: [],
}
