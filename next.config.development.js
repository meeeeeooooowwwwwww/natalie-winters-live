const baseConfig = require('./next.config.base')

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...baseConfig,
  output: undefined, // No static export for development
  basePath: '', // No base path for development
  images: {
    unoptimized: false, // Enable image optimization in development
  },
}

module.exports = nextConfig 