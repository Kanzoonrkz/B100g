import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				montserrat: "Montserrat Variable, sans-serif",
				marcellus: "Marcellus, serif",
			},
			colors: {
				light: "#FAF3F0",
				dark: "#364439",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
