/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			display: ['group-hover'],
			colors: {
				customwhite: {
					500: '#FFFAFA'
				},
				customgray: {
					100: '#F2F2F2',
					900: '#002D33'
				},
				customorange: {
					500: '#DDA74A'
				},
				customgreen: {
					100: '#DAE5E5',
					900: '#004A4C'
				}
			},
			fontFamily: {
				'brandon': ['brandon', 'system-ui']
			}
		}
	},
	plugins: []
};
