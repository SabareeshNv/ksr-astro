/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                serif: ["Alegreya", ...defaultTheme.fontFamily.serif],
                sans: ["Alegreya Sans", ...defaultTheme.fontFamily.sans],
                manjari: [
                    "Manjari",
                    "Alegreya Sans",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                brand: "#ef4444",
                accent: "#f5f5f4",
                dark: "#000000e6",
            },
            typography: {
                DEFAULT: {
                    css: {
                        "blockquote p:first-of-type::before": false,
                        "blockquote p:first-of-type::after": false,
                    },
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
