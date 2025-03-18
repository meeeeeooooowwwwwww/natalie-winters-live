const baseConfig = require('./next.config.base')

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...baseConfig,
  output: 'export',
  basePath: '', // No base path for Cloudflare Pages
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig 