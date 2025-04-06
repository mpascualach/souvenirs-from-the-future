/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                backdrop: '#EFE9DA',
                classicalAccent: '#C2B8A3',
                futuristicAccent: '#00A3FF',
                metallicSilver: '#D4D4D4',
                deepBlack: '#1A1A1A',
                gold: '#FFD700',
                marbleWhite: '#F5F5F5',
                mutedRose: '#D9B8A6',
            }
        },
    },
    plugins: [],
}
