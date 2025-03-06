/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				customBlue: "#1e3a8a", // add a custom color
				customGreen: "#0E6D2E",
				customDarkGreen: "#0C4F24",
				gray4: "#DDDEDE",
				grayHeaders: "#2E3236",
			},

			fontFamily: {
				sora: ["Sora", "sans-serif"],
				jaka: ["Plus Jakarta Sans", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
			},

			fontWeight: {
				"extra-light": 200,
				"extra-bold": 800,
			},
			fontSize: {
				hero: ["28px", "36px"], // Extra small
				"sm-md": "0.9rem", // Between small and medium
				huge: "5rem", // Extra large
			},
			lineHeight: {
				"extra-loose": "3",
			},
			// sets font-weight and line height (leading)
			fontWeight: {
				"extra-large": "110",
			},
			borderWidth: {
				defualt: "1px",
				5: "5px",
			},
		},
	},
	plugins: [],
}
