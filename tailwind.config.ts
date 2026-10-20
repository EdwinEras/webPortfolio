import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

/**
 * Nocturne design system, exposed to Tailwind.
 *
 * Every colour here resolves to a CSS custom property defined in
 * `src/app/globals.css`. That indirection is what makes the light/dark swap a
 * single `[data-theme]` attribute change rather than a `dark:` variant on every
 * element — components name a *role* (`bg-surface`, `text-tone-400`) and the
 * theme decides the value.
 *
 * Radii and shadows deliberately override Tailwind's defaults: the design
 * system is the app's only visual language, so `rounded-lg` meaning 14px and
 * `shadow-md` meaning the Nocturne elevation is the correct, consistent result.
 *
 * Keyframes live in globals.css next to the component classes that use them;
 * the `animation` entries below just reference them by name.
 */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        canvas: "var(--color-bg)",
        surface: "var(--color-surface)",
        ink: "var(--color-text)",
        divider: "var(--color-divider)",

        accent: {
          DEFAULT: "var(--color-accent)",
          100: "var(--color-accent-100)",
          200: "var(--color-accent-200)",
          300: "var(--color-accent-300)",
          400: "var(--color-accent-400)",
          500: "var(--color-accent-500)",
          600: "var(--color-accent-600)",
          700: "var(--color-accent-700)",
          800: "var(--color-accent-800)",
          900: "var(--color-accent-900)",
        },

        // The neutral ramp. Named `tone` rather than `neutral` so it never
        // shadows Tailwind's own neutral scale.
        tone: {
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
        },

        // Page-scale band fills. Not interface colours.
        section: {
          DEFAULT: "var(--color-section)",
          glow: "var(--color-section-glow)",
          ghost: "var(--color-section-ghost)",
        },
      },

      // The page container width; see <Shell>.
      maxWidth: {
        shell: "1320px",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },

      animation: {
        marquee: "marquee 34s linear infinite",
        "pulse-dot": "pulseDot 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
