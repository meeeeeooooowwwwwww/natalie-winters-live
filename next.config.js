const baseConfig = require('./next.config.base')

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...baseConfig,
  // GitHub Pages specific settings
  output: 'export',
  basePath: '/natalie-winters-live',
  trailingSlash: true,
  images: {
    ...baseConfig.images,
    unoptimized: true, // Required for static export
  },
  // Disable server-side features
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig 