import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

const HOSTNAME = 'https://www.smmhiring.com'

// Public, indexable marketing pages only. Auth / profile / admin / dashboard /
// interview routes are intentionally excluded (see `robots` disallow below).
const publicRoutes = [
  '/about/',
  '/contact/',
  '/remote-marketing-freelance-jobs/',
  '/business-services/hire-social-media-manager/',
  '/business-services/hire-content-writer-copywriter/',
  '/business-services/hire-video-editor-producer/',
  '/business-services/hire-short-form-video-editor/',
  '/business-services/hire-podcast-producer-editor/',
  '/business-services/hire-graphic-designer/',
  '/business-services/hire-web-designer-developer/',
  '/business-services/hire-app-designer-developer/',
  '/business-services/hire-voice-over-artist-audio-producer/',
  '/business-services/hire-paid-social-ads-expert/',
  '/business-services/hire-community-manager/',
  '/business-services/hire-marketing-analytics-expert/',
  '/business-services/hire-digital-marketing-consultant/',
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: HOSTNAME,
      dynamicRoutes: publicRoutes, // '/' is included automatically
      changefreq: 'weekly',
      priority: 0.7,
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: '*',
          allow: '/',
          disallow: [
            '/login',
            '/signup',
            '/verify-email',
            '/forgot-password',
            '/reset-password',
            '/profile',
            '/ai-interview',
            '/dashboard',
            '/admin',
          ],
        },
      ],
    }),
  ],
  server: {
    port: 5173,
    strictPort: true, // fail instead of silently using 5174 (keeps CORS/cookies valid)
  },
})
