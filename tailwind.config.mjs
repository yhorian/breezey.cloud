/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: { 
			typography: (theme) => ({
			  DEFAULT: {
				css: {
				  maxWidth: "70ch",
				},
			  },
			}),
		},
	},
	variants: {
	  extend: {
		display: ['dark']
	  },
	},
	
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')]
}
