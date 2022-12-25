module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    plugins: [
        require('@tailwindcss/forms'),
    ],
    theme: {
        colors: {
            login: '#FED49A',
            black: '#000000',
            circle: '#CE7DA5'
        },
        extend: {
            fontFamily: {
                sans: ['ALS Hauss', 'Helvetica', 'sans-serif'],
                mono: ['ALSHauss-BlackExpanded', 'Helvetica', 'sans-serif']
            }
        }
    },
};