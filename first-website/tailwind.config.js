/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2d5016',
        'meadow-green': '#3d7c47',
        'sage-green': '#9caf88',
        'soft-jade': '#7fa892',
        'ocean-teal': '#20b2aa',
        'warm-cream': '#faf8f3',
        'soft-ivory': '#f5f1e8',
        'light-sand': '#e8dcc4',
        'tea-green': '#D3FAC7',

        animation: {
        'fadeInUp': 'fadeInUp 0.8s ease forwards',
        'fadeIn': 'fadeIn 1s ease forwards',
        'rotate-slow': 'rotate 30s linear infinite',
        'rotate-reverse': 'rotate 40s linear infinite reverse',
        'float': 'float 20s ease-in-out infinite',
        'float-reverse': 'float 25s ease-in-out infinite reverse',
        },

        keyframes: {
            fadeInUp: {
                '0%': { 
                    opacity: '0', 
                    transform: 'translateY(30px)' 
                },
                '100%': { 
                    opacity: '1', 
                    transform: 'translateY(0)' 
                },
            },
            fadeIn: {
                '0%': { 
                    opacity: '0' 
                },
                '100%': { 
                    opacity: '1' 
                },
            },
            rotate: {
                '0%': { 
                    transform: 'translate(-50%, -50%) rotate(0deg)' 
                },
                '100%': { 
                    transform: 'translate(-50%, -50%) rotate(360deg)' 
                },
            },
            float: {
                '0%, 100%': { 
                    transform: 'translate(0, 0)' 
                },
                '33%': { 
                    transform: 'translate(30px, -30px)' 
                },
                '66%': { 
                    transform: 'translate(-20px, 20px)' 
                },
            },
        },


        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}