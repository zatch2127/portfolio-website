/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg", "storage.googleapis.com"],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
