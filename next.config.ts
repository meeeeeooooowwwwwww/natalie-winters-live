import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '1a-1791.com',
        pathname: '/video/**',
      },
      {
        protocol: 'https',
        hostname: '*.1a-1791.com', // Allow subdomains if needed
        pathname: '/video/**',
      }
    ],
  },
};

export default nextConfig;
