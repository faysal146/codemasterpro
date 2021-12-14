module.exports = {
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    // mode: 'jit',
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
