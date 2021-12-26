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
    }
    // TODO: add tailwind 3 custom scrollbar
    // plugins: [require('tailwind-scrollbar')]
};
