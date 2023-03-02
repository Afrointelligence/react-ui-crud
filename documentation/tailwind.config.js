/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
        "./docs/**/*.{mdx,md}",
        "node_modules/react-ui-crud/**/*.js",
        "./lib/**/*.{s,jsx,tsx,ts}",
    ],
    theme: {
        extend: {},
    },

    plugins: [],
};
