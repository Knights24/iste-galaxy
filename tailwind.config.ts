import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [...defaultConfig.content, "./pages/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        primary: "#9333ea",
        secondary: "#ec4899",
        accent: "#8b5cf6",
      },
      backgroundImage: {
        galaxy:
          "radial-gradient(ellipse at center, rgba(147, 51, 234, 0.15) 0%, rgba(139, 92, 246, 0.1) 25%, rgba(236, 72, 153, 0.05) 50%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    ...defaultConfig.plugins,
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
  daisyui: {
    themes: [
      {
        galaxy: {
          primary: "#9333ea",
          secondary: "#ec4899",
          accent: "#8b5cf6",
          neutral: "#1f2937",
          "base-100": "#111827",
          "base-200": "#1f2937",
          "base-300": "#374151",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
  },
}

export default config
