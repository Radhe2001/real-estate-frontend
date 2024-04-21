/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				glass: '#34364346', // Adjust opacity as needed
			},
			backdropBlur: {
				glass: '20px', // Adjust blur intensity as needed
			},
		},
	},
	plugins: [],
};
