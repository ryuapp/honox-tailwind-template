import pages from '@hono/vite-cloudflare-pages'
import honox from 'honox/vite'
import tailwindcss from '@tailwindcss/vite';
import client from 'honox/vite/client'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [client(), tailwindcss()],
      build: {
        rollupOptions: {
          input: ["/app/style.css"]
        },
      },
    }
  }

  return {
    plugins: [honox(), pages(), tailwindcss()]
  }
})