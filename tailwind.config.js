/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueLocus: "var(--blueLocus)",
        smokingGray:'var(--smokingGray)',
        granite:'var(--granite)',
        cardBg:'var(--cardBg)',
        progrossBar:'var(--progrossBar)',
        primary:'var(--primary)',
        primaryForeground:'var(--primary-foreground)',
        'muted-foreground':'var( --muted-foreground)',
      },
      fontFamily: {
        Geist: ['Geist','serif'],
      },
    },
  },
  plugins: [],
};
