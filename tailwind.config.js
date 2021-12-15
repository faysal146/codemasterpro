module.exports = {
    content: [
        // Example content paths...
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}'
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Poppins', 'sans-serif']
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require('tailwind-scrollbar')]
};
