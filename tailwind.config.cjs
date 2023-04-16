/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    /* DaisyUI react*/
    'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    textTransform: {
      none: 'none',
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
    },
    extend: {},
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ['garden' ,'stenaki-retro',
      {
        "stenaki-retro": {
          ...require("daisyui/src/colors/themes")["[data-theme=retro]"],

          "primary": "#496c91",
          "secondary": "#94ceff",
          "accent": "#fac1a0",
          "neutral": "#496c91",
          "base-100": "#b9e1d9",

          "primary-focus": "#154474",
          ".btn-primary": {
            "color": "#b9e1da"
          },
          ".btn-primary:hover": {
            'background-color': '#154474',
            'border-color': '#154474',
          },
          ".btn-ghost:hover": {
            "background": "transparent",
            "border-color": "#94cdff"
          }
        },
      },








      {
        "stenaki-light": {
          primary: '#b9e1da',
          secondary: '#F19A8E',
          accent: '#3788BE',
          neutral: '#4E5377',
          'base-100': '#FDFDFE',
          info: '#7397DE',
          success: '#33ddbe',
          warning: '#f6c33f',
          error: '#F87272',
        },
      },
      {
        morning: {
          primary: '#D26A5D',
          secondary: '#F19A8E',
          accent: '#3788BE',
          neutral: '#4E5377',
          'base-100': '#FDFDFE',
          info: '#7397DE',
          success: '#33ddbe',
          warning: '#f6c33f',
          error: '#F87272',
        },
      },
      {
        "catppuccin-latte": {
          primary: "#1e66f5", // blue d88166
          secondary: "#ea76cb", // pink
          accent: "#179299", // teal
          neutral: "#dce0e8", // crust
          "base-100": "#eff1f5", // base
          info: "#209fb5", // sapphire
          success: "#40a02b", // green
          warning: "#df8e1d", // yellow
          error: "#d20f39", // red
        },
        "catppuccin-frappe": {
          primary: "#8caaee", // blue
          secondary: "#f4b8e4", // pink
          accent: "#81c8be", // teal
          neutral: "#232634", // crust
          "base-100": "#303446", // base
          info: "#85c1dc", // sapphire
          success: "#a6d189", // green
          warning: "#e5c890", // yellow
          error: "#e78284", // red
        },
        "catppuccin-macchiato": {
          primary: "#8aadf4", // blue
          secondary: "#f5bde6", // pink
          accent: "#8bd5ca", // teal
          neutral: "#181926", // crust
          "base-100": "#24273a", // base
          info: "#7dc4e4", // sapphire
          success: "#a6da95", // green
          warning: "#eed49f", // yellow
          error: "#ed8796", // red
        },
        "catppuccin-mocha": {
          primary: "#89b4fa", // blue
          secondary: "#f5c2e7", // pink
          accent: "#94e2d5", // teal
          neutral: "#11111b", // crust
          "base-100": "#1e1e2e", // base
          info: "#74c7ec", // sapphire
          success: "#a6e3a1", // green
          warning: "#f9e2af", // yellow
          error: "#f38ba8", // red
        }
      }
    ],
  }
}