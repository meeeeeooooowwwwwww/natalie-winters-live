const baseConfig = require('./next.config.base')

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...baseConfig,
  // Development-specific settings
  output: 'standalone',
  // Enable development features
  webpack: (config, { dev, isServer }) => {
    // Add development-specific webpack configurations here
    return config
  },
}

module.exports = nextConfig 