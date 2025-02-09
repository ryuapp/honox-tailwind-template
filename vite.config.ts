import build from '@hono/vite-build/cloudflare-pages'
import honox from 'honox/vite'
import tailwindcss from '@tailwindcss/vite'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

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
