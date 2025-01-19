/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      sans: ['"Atkinson Hyperlegible"', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        "brutal-2": "2px 2px 0px 0px",
        "brutal-3": "3px 3px 0px 0px",
        "brutal-4": "4px 4px 0px 0px",
        "brutal-5": "5px 5px 0px 0px",
        "brutal-8": "8px 8px 0px 0px",
        "brutal-12": "12px 12px 0px 0px",
        "brutal-16": "16px 16px 0px 0px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addVariant }) {
      addVariant(
        'prose-inline-code',
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
      );
    },
  ],
};
