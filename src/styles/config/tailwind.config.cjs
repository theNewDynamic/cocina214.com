
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: require('./_colors.cjs'),
			fontFamily: require('./_fonts.cjs'),
			typography: require('./_typography.cjs'),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
