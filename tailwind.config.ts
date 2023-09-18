import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
       gridTemplateRows: {
        // Extend grid rows to allow up to 8 rows
        6: 'repeat(6, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
      },
      gridRow: {
        // Extend grid row spans to allow up to 4-row spans
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
