/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
	theme: {
		borderOpacity: ({ theme }) => theme('opacity'),
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
	  '1/6': '16%',
	  '1/5': '20%',
	  '1/3': '33%',
	  '10%': '10%',
	  '5%' : '5%',
      full: '9999px',
    	},
		extend: {},
	},

	plugins: [
		require('flowbite/plugin'),
	],
}

