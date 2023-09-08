/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos']
  },
  staticPageGenerationTimeout: 300,
}

module.exports = nextConfig
