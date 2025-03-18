const baseConfig = require('./next.config.base')

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...baseConfig,
  // Cloudflare specific settings
  output: 'standalone',
  // Enable Cloudflare-specific optimizations
  experimental: {
    appDir: true,
    serverActions: true,
  },
  // Optimize for Cloudflare's edge network
  images: {
    ...baseConfig.images,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig 