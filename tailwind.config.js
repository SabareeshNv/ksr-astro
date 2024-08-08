/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                "caladea": ["Caladea", "serif"],
                "alegreya": ["Alegreya", "serif"],
                "bitter": ["Bitter", "serif"],
                "baloo": ['"Baloo Chettan 2"', "sans-serif"],
                "manjari": ["Manjari", "sans-serif"]
            },
            colors: {
                // "brand": "#761B10",
                "brand": "#591C2F",
                "accent": "#f5f5f4",
                "dark": "#2d3032",
                "bgg": "#f1f1f1"
            },
            typography: {
                DEFAULT: {
                    css: {
                        'blockquote p:first-of-type::before': false,
                        'blockquote p:first-of-type::after': false,
                    }
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};