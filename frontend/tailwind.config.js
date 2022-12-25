module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'base', // only generate global styles
        }),
    ],
    theme: {
        colors: {
            login: '#FED49A',
            black: '#000000',
            white: '#ffffff',
            'white-70': 'rgba(255,255,255,0.7)',
            brand: '#CE7DA5',
            red: '#ff0000',
            transparent: 'rgba(0,0,0,0)'
        },
        extend: {
            fontFamily: {
                sans: ['ALS Hauss', 'Helvetica', 'sans-serif'],
                mono: ['ALSHauss-BlackExpanded', 'Helvetica', 'sans-serif']
            }
        },
        minWidth: {
            '600': '600px',
            '800': '600px',
        },
        minHeight: {
            '400': '400px',
            'screen': '100vh',
        }
    },
};