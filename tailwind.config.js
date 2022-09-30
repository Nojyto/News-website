module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
      			current:     "currentColor",
				white:       "#F1F1F1",
				black:       "#000000",
				primary:     "#1A1A1A",
				secondary:   "#292929",
				accent:      "#E50914"
			}
		},
	},
	plugins: [],
}
