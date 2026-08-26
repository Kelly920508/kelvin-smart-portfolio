/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0C0F14',
          panel: '#12161D',
          raised: '#181D26',
          border: '#262C38',
        },
        signal: {
          DEFAULT: '#F5A623',
          soft: '#FFD59A',
        },
        freq: {
          DEFAULT: '#3FBFAE',
          soft: '#9FE8DE',
        },
        mist: {
          hi: '#F3F4F1',
          mid: '#B7BCC7',
          low: '#7B8394',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    }
  }
}
