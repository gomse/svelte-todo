import { join } from 'path';

import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(import.meta.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif']
      }
    },
  },
  plugins: [skeleton({
    themes: { preset: [ 'gold-nouveau' ] }
    })
  ]
}
