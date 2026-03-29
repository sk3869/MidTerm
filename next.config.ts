import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/MidTerm',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
