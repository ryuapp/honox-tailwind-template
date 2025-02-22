import build from '@hono/vite-build/cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import honox from 'honox/vite'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    honox({
      client: {
        input: ['/app/style.css'],
      },
      devServer: { adapter },
    }),
    build(),
    tailwindcss(),
  ],
});
